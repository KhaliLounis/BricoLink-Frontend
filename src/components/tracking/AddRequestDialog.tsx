"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";
import { Camera } from "lucide-react";
import Image from "next/image";

const requestSchema = z.object({
  title: z.string().min(1, "Title is required"),
  details: z.string().min(10, "Details must be at least 10 characters long"),
  images: z.array(z.instanceof(File)).max(3, "Maximum 3 images allowed"),
});

type RequestForm = z.infer<typeof requestSchema>;

interface AddRequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddRequestDialog({ isOpen, onClose }: AddRequestDialogProps) {
  const [images, setImages] = useState<File[]>([]);

  const form = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      title: "",
      details: "",
      images: [],
    },
  });

  const onSubmit = (data: RequestForm) => {
    console.log(data);
    // Here you would typically send the data to your backend
    onClose();
    form.reset();
    setImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages((prevImages) => [...prevImages, ...files].slice(0, 3));
    form.setValue("images", [...images, ...files].slice(0, 3));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Request</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter request title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Details</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter request details" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images (Max 3)</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(3)].map((_, index) => (
                        <div key={index} className="relative aspect-square">
                          <label
                            htmlFor={`image-upload-${index}`}
                            className="cursor-pointer flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                          >
                            {images[index] ? (
                              <Image
                                src={
                                  URL.createObjectURL(images[index]) ||
                                  "/placeholder.svg"
                                }
                                alt={`Uploaded ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                                width={200}
                                height={200}
                              />
                            ) : (
                              <Camera className="w-8 h-8 text-gray-400" />
                            )}
                          </label>
                          <input
                            id={`image-upload-${index}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                            disabled={images.length >= 3 && !images[index]}
                          />
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
