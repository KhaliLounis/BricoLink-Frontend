"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { artisanServicesSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

type ServicesForm = z.infer<typeof artisanServicesSchema>;

interface ServicesStepProps {
  defaultValues?: Partial<ServicesForm>;
  onSubmit: (data: ServicesForm) => void;
  onBack: () => void;
}

export function ServicesStep({
  defaultValues,
  onSubmit,
  onBack,
}: ServicesStepProps) {
  const form = useForm<ServicesForm>({
    resolver: zodResolver(artisanServicesSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          onSubmit({
            services: data.services || [],
            bio: data.bio || "",
          });
        })}
        className="space-y-8"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="text-sm text-gray-600">
            Select the services you offer.
          </p>

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="space-y-6">
                <FormControl>
                  <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4">
                    {services.map((category) => (
                      <div key={category.category} className="space-y-4">
                        <div className="flex items-center gap-3 sticky top-0 bg-background py-3">
                          <span className="text-2xl">{category.icon}</span>
                          <h3 className="text-lg font-semibold">
                            {category.category}
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {category.items.map((service) => (
                            <div
                              key={service.code}
                              className={cn(
                                "relative cursor-pointer rounded-lg p-3 transition-all border-2",
                                field.value.includes(service.code)
                                  ? "border-primary bg-primary/10"
                                  : "border-muted-foreground/30 bg-muted opacity-75 hover:opacity-100",
                              )}
                              onClick={() => {
                                const newValue = field.value.includes(
                                  service.code,
                                )
                                  ? field.value.filter(
                                      (code: number) => code !== service.code,
                                    )
                                  : [...field.value, service.code];
                                field.onChange(newValue);
                              }}
                            >
                              <div className="aspect-square overflow-hidden rounded-full w-12 h-12 mx-auto">
                                <Image
                                  src={service.image || "/placeholder.svg"}
                                  alt={service.name}
                                  className="h-full w-full object-cover"
                                  width={150}
                                  height={150}
                                />
                              </div>
                              <p className="mt-2 text-center text-xs font-medium">
                                {service.name}
                              </p>
                              {field.value.includes(service.code) && (
                                <CheckCircle className="w-5 h-5 text-primary absolute top-1 right-1 bg-background rounded-full" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Bio</h2>
          <p className="text-sm text-gray-600">
            Describe your experience and skills.
          </p>

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your experience and skills..."
                    className="min-h-[150px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between gap-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="w-1/2"
          >
            Back
          </Button>
          <Button
            type="submit"
            className="w-1/2 bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
          >
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
