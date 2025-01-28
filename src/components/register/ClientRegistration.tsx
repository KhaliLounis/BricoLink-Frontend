"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { clientRegistrationSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/services/auth";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

type ClientRegistrationForm = z.infer<typeof clientRegistrationSchema>;

export default function ClientRegistration() {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [detectedLocation, setDetectedLocation] = useState<{
    commune: string | null;
    state: string | null;
    postalCode: string | null;
    latitude: number | null;
    longitude: number | null;
  }>({
    commune: null,
    state: null,
    postalCode: null,
    latitude: null,
    longitude: null,
  });
  const [isFetchingLocation, setIsFetchingLocation] = useState(false); // Loading state

  const form = useForm<ClientRegistrationForm>({
    resolver: zodResolver(clientRegistrationSchema),
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
      location: "",
      firstName: "",
      familyName: "",
      description: "",
      commune: "",
      state: "",
      postalCode: "",
      latitude: null,
      longitude: null,
      profile_picture: "",
    },
  });

  const registrationMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Registration Successful. Please check your email for verification.",
      );
      router.push(`/register?email=${encodeURIComponent(data.data.email)}`);
    },
    onError: (error) => {
      toast.error("An error occurred during registration. Please try again.");
      console.log(error);
    },
  });

  const onSubmit = (data: ClientRegistrationForm) => {
    console.log(data);
    registrationMutation.mutate({
      family_name: data.familyName,
      first_name: data.firstName,
      email: data.email,
      password: data.password,
      phone_number: data.phoneNumber,
      location: data.location,
      description: data.description,
      commune: data.commune,
      state: data.state,
      postalCode: data.postalCode,
      latitude: data.latitude,
      longitude: data.longitude,
      profile_picture: data.profile_picture,
      role: "Client",
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      console.log(file);
      form.setValue("profile_picture", file);
    }
  };

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      setIsFetchingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
            );
            const data = await response.json();

            const commune = data.locality || data.city;
            const state = data.principalSubdivision || data.region;
            const postalCode = data.postcode || "";

            setDetectedLocation({
              commune,
              state,
              postalCode,
              latitude,
              longitude,
            });

            // Update form values
            form.setValue("commune", commune);
            form.setValue("state", state);
            form.setValue("postalCode", postalCode);
            form.setValue("latitude", latitude);
            form.setValue("longitude", longitude);

            // Disable the commune field
            form.setValue("commune", commune); // Set the value
            form.setValue("location", commune); // Optional: Update the location field
          } catch (error) {
            console.error("Error fetching location details:", error);
            toast.error("Unable to fetch location details.");
          } finally {
            setIsFetchingLocation(false);
          }
        },
        (error) => {
          console.error("Error detecting location:", error);
          toast.error("Unable to detect your location.");
          setIsFetchingLocation(false);
        },
      );
    } else {
      toast.error("Your browser does not support geolocation.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#5544B7] to-[#724FFF] p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-[#6C63FF]">
            Client Registration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Image Upload */}
              <div className="flex justify-center">
                <FormField
                  control={form.control}
                  name="profile_picture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Picture</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <label className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#6C63FF]">
                            {previewImage ? (
                              <Image
                                src={previewImage}
                                alt="Profile Preview"
                                width={96}
                                height={96}
                                className="rounded-lg object-cover"
                              />
                            ) : (
                              <span className="text-gray-500">Upload</span>
                            )}
                            <input
                              type="file"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="familyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Family Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your family name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Location Field */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="Commune"
                            {...field}
                            disabled={!!detectedLocation.commune} // Disable if location is detected
                            className={
                              detectedLocation.commune ? "text-green-600" : ""
                            }
                          />
                          <Button
                            type="button"
                            onClick={handleDetectLocation}
                            className="bg-[#6C63FF] hover:bg-[#5544B7]"
                            disabled={isFetchingLocation}
                          >
                            {isFetchingLocation
                              ? "Detecting..."
                              : "Detect Location"}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {detectedLocation.commune && (
                  <span className="text-green-600 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detectedLocation.commune}, {detectedLocation.state}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                onClick={() => onSubmit(form.getValues())}
                type="submit"
                className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
                disabled={registrationMutation.isPending}
              >
                {registrationMutation.isPending ? "Registering..." : "Register"}
              </Button>
            </form>
          </Form>
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
