"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { artisanBasicInfoSchema } from "@/lib/validation";
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
import { useState } from "react";
import toast from "react-hot-toast";

type BasicInfoForm = z.infer<typeof artisanBasicInfoSchema>;

interface BasicInfoStepProps {
  defaultValues?: Partial<BasicInfoForm>;
  onSubmit: (data: BasicInfoForm) => void;
}

export function BasicInfoStep({ defaultValues, onSubmit }: BasicInfoStepProps) {
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

  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  const form = useForm<BasicInfoForm>({
    resolver: zodResolver(artisanBasicInfoSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      password: "",
      location: "",
      commune: "",
      state: "",
      postalCode: "",
      latitude: null,
      longitude: null,
      ...defaultValues,
    },
  });

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      setIsFetchingLocation(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
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
            form.setValue("location", commune); // Set location field
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
        }
      );
    } else {
      toast.error("Your browser does not support geolocation.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Basic Information</h2>
          <p className="text-sm text-gray-600">
            Fill in your personal information to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                    <Input placeholder="Enter your phone number" {...field} />
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
          </div>

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
                      disabled={!!detectedLocation.commune}
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
                      {isFetchingLocation ? "Detecting..." : "Detect Location"}
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

        <Button
          type="submit"
          className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
        >
          Next
        </Button>
      </form>
    </Form>
  );
}
