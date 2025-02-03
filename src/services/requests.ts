import api from "@/lib/api";

export const getAllRequests = async () => {
  const response = await api.get("/request");
  console.log(response.data);
  return response.data.data;
};
