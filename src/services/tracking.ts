import api from "@/lib/api";

export const getCurrentUserRequests = async () => {
  const response = await api.get("/request/me");
  return response.data;
};
