import { refreshToken } from "@/services/auth";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedRequestsQueue: any = [];

const processQueue = (error: Error | null) => {
  failedRequestsQueue.forEach((prom: any) => {
    prom.resolve();
  });

  failedRequestsQueue = [];
};

// Response interceptor for handling token expiration
api.interceptors.response.use(
  (response) => response, // No need to handle successful responses
  async (error) => {
    const { response } = error;
    console.log(response);
    // If the error is due to token expiration
    if (
      response &&
      (response.data.error === "No access token provided" ||
        response.data.error === "Invalid or expired token")
    ) {
      console.log(response);
      const originalRequest = error.config;

      console.log(originalRequest);
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          // Call the refreshToken function to refresh the token
          const newAccessToken = await refreshToken();
          console.log(newAccessToken); // Assume this updates the cookie with the new token

          // Process queued requests with the new token
          processQueue(null);
          console.log("working");
          // Retry the original request with the new token (the token is updated in cookies automatically)
          return api(originalRequest);
        } catch (refreshError) {
          // If refresh fails, reject the queue
          processQueue(refreshError as Error);
          window.location.href = "/login";
          // Handle the refresh token failure (e.g., redirect to login page)
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      } else {
        // Queue the failed request until the refresh is done
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            resolve: () => {
              // Retry the original request after the token is refreshed
              resolve(api(originalRequest));
            },
            reject,
          });
        });
      }
    }

    // If the error is not related to token expiration, reject it
    return Promise.reject(error);
  },
);

export default api;
