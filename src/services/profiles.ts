import { api } from "@/lib/api";

export const getProfileAsArtisan = async () => {
  const response = await api.get(`/artisan/profile`);
  return response.data;
};

export const getArtisanProfile = async (artisan_id: string) => {
  const response = await api.get(`/artisan/${artisan_id}/profile`);
  return response.data;
};

export const getProfileAsClient = async () => {
  const response = await api.get(`/auth/profile`);
  return response.data;
};

export const updateUserProfile = async (
  formData: FormData,
  user_id: string
) => {
  const response = await api.put(`/auth/profile/${user_id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
