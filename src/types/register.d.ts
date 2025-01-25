import {
  artisanBasicInfoSchema,
  artisanProfileSchema,
  artisanServicesSchema,
} from "@/lib/validation";

type ArtisanBasicInfoForm = z.infer<typeof artisanBasicInfoSchema>;
type ArtisanProfileForm = z.infer<typeof artisanProfileSchema>;
type ArtisanServicesForm = z.infer<typeof artisanServicesSchema>;
