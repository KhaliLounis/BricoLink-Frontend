"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronDown, ChevronUp, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OfferCard } from "./OfferCard";
import { cn } from "@/lib/utils";

export function RequestCard({
  status,
  date,
  location,
  distance,
  title,
  description,
  points,
  offers,
  images,
}: TrackingRequestCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full overflow-hidden transition-all duration-200">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant={status === "completed" ? "secondary" : "default"}
              className={cn(
                "rounded-full",
                status === "completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700",
              )}
            >
              {status === "completed" ? "Completed" : "In Progress"}
            </Badge>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
            <span className="text-sm">• {distance} km</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="shrink-0"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && <p className="text-gray-600 mt-1">{description}</p>}
          </div>
          {images.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <div key={index} className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Request image ${index + 1}`}
                    width={96}
                    height={96}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded-full">
                {offers.length} offers
              </Badge>
              {images.length > 0 && (
                <Badge variant="outline" className="rounded-full">
                  <ImageIcon className="h-3 w-3 mr-1" />
                  {images.length}
                </Badge>
              )}
            </div>
            <Badge
              variant="secondary"
              className="rounded-full bg-gradient-to-r from-[#5544B7] to-[#724FFF] text-white"
            >
              {points}p
            </Badge>
          </div>
          {isExpanded && offers.length > 0 && (
            <div className="pt-4 space-y-3 border-t">
              <h4 className="font-medium text-gray-900">Offers</h4>
              <div className="space-y-2">
                {offers.map((offer, index) => (
                  <OfferCard key={index} {...offer} />
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
