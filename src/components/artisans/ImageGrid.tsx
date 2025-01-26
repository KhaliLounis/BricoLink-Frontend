"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ImageGridProps {
  images: string[];
  className?: string;
}

export function ImageGrid({ images, className }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayImages = images.slice(0, 8);
  const remainingCount = Math.max(0, images.length - 8);

  return (
    <>
      <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-2", className)}>
        {displayImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative aspect-square cursor-pointer group",
              index === 7 && remainingCount > 0 && "relative"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Realization ${index + 1}`}
              fill
              className="object-cover rounded-lg transition-transform group-hover:scale-105"
            />
            {index === 7 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  +{remainingCount}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected realization"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
