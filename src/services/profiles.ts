import { api } from "@/lib/api";

export const getArtisanProfile = async () => {
  const response = await api.get(`/artisan/profile`);
  return response.data;
};
