"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArtisanBasicInfoForm,
  artisanBasicInfoSchema,
  ArtisanProfileForm,
  artisanProfileSchema,
  ArtisanServicesForm,
  artisanServicesSchema,
} from "@/lib/validation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProfileStep } from "./SecondStep";
import { BasicInfoStep } from "./FirstStep";
import { ServicesStep } from "./ThirdStep";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { registerArtisan } from "@/services/auth";

interface ArtisanRegistrationProps {
  currentStep: number;
}

export default function ArtisanRegistration({
  currentStep,
}: ArtisanRegistrationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: searchParams.get("email") || "",
    fullName: searchParams.get("fullName") || "",
    phoneNumber: searchParams.get("phoneNumber") || "",
    password: searchParams.get("password") || "",
    location: searchParams.get("location") || "",
    services: searchParams.get("services")?.split(",") || [],
    bio: searchParams.get("bio") || "",
    profilePicture: null as File | null,
    realizations: [] as File[],
  });

  const basicInfoForm = useForm<ArtisanBasicInfoForm>({
    resolver: zodResolver(artisanBasicInfoSchema),
    defaultValues: formData,
  });

  const profileForm = useForm<ArtisanProfileForm>({
    resolver: zodResolver(artisanProfileSchema),
    defaultValues: {
      profilePicture: formData.profilePicture,
      realizations: formData.realizations,
    },
  });

  const servicesForm = useForm<ArtisanServicesForm>({
    resolver: zodResolver(artisanServicesSchema),
    defaultValues: {
      services: formData.services,
      bio: formData.bio,
    },
  });

  // Reset forms when formData changes
  useEffect(() => {
    basicInfoForm.reset(formData);
    profileForm.reset({
      profilePicture: formData.profilePicture,
      realizations: formData.realizations,
    });
    servicesForm.reset({
      services: formData.services,
      bio: formData.bio,
    });
  }, [formData, basicInfoForm, profileForm, servicesForm]);

  const updateURL = (data: Record<string, any>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else if (value) {
        params.set(key, value.toString());
      }
    });
    router.push(`/register?${params.toString()}`);
  };

  // React Query Mutation for Artisan Registration
  const registrationMutation = useMutation({
    mutationFn: registerArtisan,
    onSuccess: (data) => {
      toast.success("Artisan registration successful!");
      router.push(`/register?email=${encodeURIComponent(data.email)}`);
    },
    onError: (error) => {
      toast.error("An error occurred during registration. Please try again.");
      console.error(error);
    },
  });

  const onSubmit = async (
    data: ArtisanBasicInfoForm | ArtisanProfileForm | ArtisanServicesForm,
  ) => {
    // Update formData with the new data
    setFormData((prev) => ({ ...prev, ...data }));
    updateURL(data);

    if (currentStep < 3) {
      // Move to the next step
      const params = new URLSearchParams(searchParams.toString());
      params.set("step", (currentStep + 1).toString());
      router.push(`/register?${params.toString()}`);
    } else {
      // Final submission
      try {
        const payload = {
          first_name: formData.fullName.split(" ")[0], // Assuming fullName contains first and last name
          family_name: formData.fullName.split(" ")[1] || "", // Adjust based on your form structure
          email: formData.email,
          password: formData.password,
          phone_number: formData.phoneNumber,
          description: formData.bio,
          commune: formData.location, // Assuming location maps to commune
          profile_picture: formData.profilePicture as File, // Ensure this is a File object
          realisations: formData.realizations as File[],
          // Ensure these are File objects
        };
        console.log(payload);
        // Call the mutation
        registrationMutation.mutate(payload);
      } catch (error) {
        toast.error("An error occurred during registration. Please try again.");
        console.error(error);
      }
    }
  };

  // Back function
  const handleBack = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", (currentStep - 1).toString());
    router.push(`/register?${params.toString()}`);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep
            defaultValues={formData}
            onSubmit={(data) => onSubmit(data)}
          />
        );
      case 2:
        return (
          <ProfileStep
            defaultValues={{
              profilePicture: formData.profilePicture,
              realizations: formData.realizations,
            }}
            onSubmit={(data) => onSubmit(data)}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <ServicesStep
            defaultValues={{
              services: formData.services,
              bio: formData.bio,
            }}
            onSubmit={(data) => onSubmit(data)}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#5544B7] to-[#724FFF] p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-[#6C63FF]">
            Artisan Registration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex justify-center items-center gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={cn(
                    "w-3 h-3 rounded-full",
                    step === currentStep ? "bg-primary" : "bg-gray-300",
                  )}
                />
              ))}
            </div>
          </div>
          {renderStep()}
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#6C63FF] hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
