import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const clientRegistrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  familyName: z.string().min(1, "Family name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  location: z.string(),
  description: z.string().min(1, "Description is required"),
  commune: z.string().min(1, "Commune is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  profile_picture: z.any().optional(),
});

export const artisanBasicInfoSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  location: z.string().min(1, "Location is required"),
  commune: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  latitude: z.number().nullable().optional(),
  longitude: z.number().nullable().optional(),
});

export const artisanProfileSchema = z.object({
  profilePicture: z.union([z.instanceof(File), z.null()]).optional(),
  realizations: z
    .array(z.instanceof(File))
    .min(1, "At least one realization image is required"),
});

export const artisanServicesSchema = z.object({
  services: z.array(z.number()).min(1, "At least one service must be selected"),
  bio: z.string().min(10, "Bio must be at least 10 characters long"),
});

export type ArtisanBasicInfoForm = z.infer<typeof artisanBasicInfoSchema>;
export type ArtisanProfileForm = z.infer<typeof artisanProfileSchema>;
export type ArtisanServicesForm = z.infer<typeof artisanServicesSchema>;

export const verificationSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});
