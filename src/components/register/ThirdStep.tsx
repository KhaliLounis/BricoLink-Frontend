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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

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
          // Ensure bio and services are included in the submitted data
          onSubmit({
            services: data.services || [],
            bio: data.bio || "",
          });
        })}
        className="space-y-6"
      >
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <p className="text-sm text-gray-600">
            Sélectionnez les services que vous proposez.
          </p>

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormControl>
                  <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
                    {services.map((category) => (
                      <div key={category.category} className="space-y-4">
                        <div className="flex items-center gap-2 sticky top-0 bg-background py-2">
                          <span className="text-2xl">{category.icon}</span>
                          <h3 className="text-lg font-semibold">
                            {category.category}
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {category.items.map((service) => (
                            <div
                              key={service.id}
                              className={cn(
                                "relative cursor-pointer rounded-lg p-2 transition-all border-2",
                                field.value.includes(service.id)
                                  ? "border-primary bg-primary/10"
                                  : "border-muted-foreground/30 bg-muted opacity-75 hover:opacity-100"
                              )}
                              onClick={() => {
                                const newValue = field.value.includes(
                                  service.id
                                )
                                  ? field.value.filter(
                                      (id: string) => id !== service.id
                                    )
                                  : [...field.value, service.id];
                                field.onChange(newValue);
                              }}
                            >
                              <div className="aspect-square overflow-hidden rounded-full w-12 h-12 mx-auto">
                                <img
                                  src={service.image || "/placeholder.svg"}
                                  alt={service.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <p className="mt-2 text-center text-xs font-medium">
                                {service.name}
                              </p>
                              {field.value.includes(service.id) && (
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

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Bio</h2>
          <p className="text-sm text-gray-600">
            Décrivez votre expérience et vos compétences.
          </p>

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Parlez-nous de votre expérience et de vos compétences..."
                    className="min-h-[100px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button type="button" onClick={onBack} variant="outline">
            Retour
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
          >
            S'inscrire
          </Button>
        </div>
      </form>
    </Form>
  );
}
