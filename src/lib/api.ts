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

type QueuePromise = {
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
};

let isRefreshing = false;
let failedRequestsQueue: QueuePromise[] = [];

const processQueue = (error: Error | null) => {
  failedRequestsQueue.forEach((prom: QueuePromise) => {
    error ? prom.reject(error) : prom.resolve();
  });
  failedRequestsQueue = [];
};

// Response interceptor for handling token expiration
api.interceptors.response.use(
  (response) => response, // No need to handle successful responses
  async (error) => {
    const { response } = error;
    console.log(error, response);
    const originalRequest = error.config;

    if (
      (response?.data?.error === "No access token provided" ||
        response.data.error === "Invalid or expired token") &&
      !isRefreshing
    ) {
      isRefreshing = true;

      try {
        await refreshToken();
        const originalResponse = await api(originalRequest); // Retry original first
        processQueue(null); // Process queue AFTER original succeeds
        return originalResponse;
      } catch (refreshError) {
        processQueue(refreshError as Error); // Reject queue on failure
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    } else if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          resolve: () => resolve(api(originalRequest)),
          reject,
        });
      });
    }

    return Promise.reject(error);
  },
);
export default api;
