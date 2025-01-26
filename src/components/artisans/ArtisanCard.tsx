"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ServicesList } from "./ServicesList";
import { PriceList } from "./PriceList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ArtisanCard({
  name,
  avatar,
  location,
  isOnline,
  description,
  services,
  prices,
  rating,
}: ArtisanCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortDescription =
    description.slice(0, 150) + (description.length > 150 ? "..." : "");

  return (
    <Card className="w-full overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="relative">
          <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                {name}
                {rating && (
                  <span className="text-sm text-gray-500">
                    ⭐ {rating.score} ({rating.count})
                  </span>
                )}
              </h3>
              <div className="text-sm text-gray-500">{location}</div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#5544B7] to-[#724FFF] text-white hover:opacity-90"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">About:</h4>
          <p className="text-gray-600 text-sm">
            {isExpanded ? description : shortDescription}
            {description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#5544B7] hover:underline ml-1"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Services</h4>
          <ServicesList services={services} />
        </div>

        <div>
          <h4 className="font-medium mb-2">Pricing</h4>
          <PriceList prices={prices} />
        </div>
      </CardContent>
    </Card>
  );
}
