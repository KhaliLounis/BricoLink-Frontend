import api from "@/lib/api";

export const getAllRequests = async () => {
  const response = await api.get("/request");
  console.log(response.data);
  return response.data.data;
};

export const getRequestsWithReviews = async () => {
  const response = await api.get("/request/reviews");
  console.log(response.data);
  return response.data.data;
};
export const getNearbyRequests = async () => {
  const response = await api.get("/request/nearby");
  console.log(response.data);
  return response.data.data;
};
export const getRequestsWithoutOffers = async () => {
  const response = await api.get("/request/no-offers");
  console.log(response.data);
  return response.data.data;
};

export const addRequest = async (formData: FormData) => {
  const response = await api.post("/request", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
