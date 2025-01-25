import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  image: z.any().nullable().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const clientRegistrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  phoneNumber: z.string().regex(/^0[567]\d{8}$/, "Invalid phone number."),
  location: z.string().min(1, "Location is required"),
});

export const artisanBasicInfoSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().regex(/^0[567]\d{8}$/, "Invalid phone number"),
  password: z.string().min(8),
  location: z.string().min(1, "Location is required"),
});

export const artisanProfileSchema = z.object({
  profilePicture: z.union([z.instanceof(File), z.null()]).optional(),
  realizations: z
    .array(z.instanceof(File))
    .min(1, "At least one realization image is required"),
});

export const artisanServicesSchema = z.object({
  services: z.array(z.string()).min(1, "At least one service must be selected"),
  bio: z.string().min(10, "Bio must be at least 10 characters long"),
});

export type ArtisanBasicInfoForm = z.infer<typeof artisanBasicInfoSchema>;
export type ArtisanProfileForm = z.infer<typeof artisanProfileSchema>;
export type ArtisanServicesForm = z.infer<typeof artisanServicesSchema>;

export const verificationSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export { registerSchema };
