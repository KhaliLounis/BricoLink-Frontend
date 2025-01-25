import { api } from "@/lib/api";

export const register = async ({
  name,
  email,
  password,
  image,
}: RegisterUser) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);

  if (image) {
    formData.append("image", image);
  }

  const response = await api.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const login = async ({ email, password }: LoginUser) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const refreshToken = async () => {
  const response = await api.get("/auth/refresh");
  return response.data;
};

export const requestPasswordReset = async (email: string) => {
  const response = await api.post(`/auth/reset-password`, { email });
  return response.data;
};

export const verifyResetCode = async (userId: string, code: string) => {
  const response = await api.post(`/auth/verify-reset-code/${userId}`, {
    code,
  });
  return response.data;
};

export const setNewPassword = async (password: string) => {
  const response = await api.post(`/auth/set-new-password`, { password });
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
