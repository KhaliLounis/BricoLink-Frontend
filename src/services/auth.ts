import { api } from "@/lib/api";

export const register = async ({
  family_name,
  first_name,
  email,
  password,
  phone_number,
  location,
  description,
  commune,
  profile_picture,
  role,
}: RegisterUser) => {
  const formData = new FormData();
  formData.append("first_name", first_name);
  formData.append("family_name", family_name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phone_number", phone_number);
  formData.append("location", location);
  formData.append("description", description);
  formData.append("commune", commune);
  formData.append("role", role);

  if (profile_picture) {
    console.log("profile_picture", profile_picture);
    formData.append("profile_picture", profile_picture);
  }

  const response = await api.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const registerArtisan = async ({
  first_name,
  family_name,
  email,
  password,
  phone_number,
  description,
  commune,
  profile_picture,
  realisations,
}: {
  first_name: string;
  family_name: string;
  email: string;
  password: string;
  phone_number: string;
  description: string;
  commune: string;
  profile_picture: File;
  realisations: File[];
}) => {
  const formData = new FormData();
  formData.append("first_name", first_name);
  formData.append("family_name", family_name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phone_number", phone_number);
  formData.append("description", description);
  formData.append("commune", commune);
  formData.append("profile_picture", profile_picture);

  realisations.forEach((file, index) => {
    formData.append("realisations", file);
  });

  const response = await api.post("/auth/register/artisan", formData, {
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
  const response = await api.post("/auth/refresh");
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const requestPasswordReset = async (email: string) => {
  const response = await api.post("/auth/reset-password", { email });
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
