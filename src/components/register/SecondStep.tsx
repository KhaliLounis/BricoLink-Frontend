"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Camera } from "lucide-react";
import { artisanProfileSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type ProfileForm = z.infer<typeof artisanProfileSchema>;

interface ProfileStepProps {
  defaultValues?: Partial<ProfileForm>;
  onSubmit: (data: ProfileForm) => void;
  onBack: () => void;
}

export function ProfileStep({
  defaultValues,
  onSubmit,
  onBack,
}: ProfileStepProps) {
  const form = useForm<ProfileForm>({
    resolver: zodResolver(artisanProfileSchema),
    defaultValues,
  });

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const handleMultipleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File[]) => void
  ) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onChange(files);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Photo de Profile</h2>
          <p className="text-sm text-gray-600">Photo de votre visage</p>
          <FormField
            control={form.control}
            name="profilePicture"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center justify-center">
                    <label
                      htmlFor="profile-upload"
                      className="relative cursor-pointer group"
                    >
                      <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        {value ? (
                          <img
                            src={
                              URL.createObjectURL(value) || "/placeholder.svg"
                            }
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Camera className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <input
                        id="profile-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, onChange)}
                        {...field}
                      />
                      <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Réalisations</h2>
          <p className="text-sm text-gray-600">
            Montrer aux clients des photos de vos travaux
          </p>
          <FormField
            control={form.control}
            name="realizations"
            render={({ field: { onChange, value, ...field } }) => (
              <FormItem>
                <FormControl>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => {
                      const realization = value?.[index];
                      return (
                        <label
                          key={index}
                          htmlFor={`realization-upload-${index}`}
                          className="relative cursor-pointer group aspect-square"
                        >
                          <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                            {realization ? (
                              <img
                                src={
                                  URL.createObjectURL(realization) ||
                                  "/placeholder.svg"
                                }
                                alt={`Realization ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <Camera className="w-8 h-8 text-gray-400" />
                            )}
                          </div>
                          <input
                            id={`realization-upload-${index}`}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                              const newFiles = [...(value || [])];
                              const file = e.target.files?.[0];
                              if (file) {
                                newFiles[index] = file;
                                onChange(newFiles);
                              }
                            }}
                            {...field}
                          />
                          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all" />
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button type="button" onClick={onBack} variant="outline">
            Back
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
