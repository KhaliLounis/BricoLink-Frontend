"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Phone, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { OffersList } from "./OffersList";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

export function RequestCard({
  title,
  status,
  createdAt,
  location,
  distance,
  points,
  offerCount,
  clientName,
  details,
  phoneNumber,
  offers,
}: RequestCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowPhone = () => {
    toast.error("You need to make an offer first to see the phone number", {
      duration: 3000,
      position: "bottom-center",
      style: {
        background: "#F43F5E",
        color: "white",
      },
    });
  };

  return (
    <Card className="w-full overflow-hidden transition-all duration-200">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge
              variant="secondary"
              className={cn(
                "rounded-full",
                status === "open"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              )}
            >
              {status === "open" ? "Open" : "Closed"}
            </Badge>
            <span className="text-sm text-gray-500">{createdAt}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{location}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{distance} km</span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {offers.length > 0 && <OffersList offers={offers} expanded={false} />}
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="rounded-full bg-gradient-to-r from-[#5544B7] to-[#724FFF] text-white"
          >
            {points}p
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{clientName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Client</div>
                  <div className="text-sm text-gray-500">{clientName}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                  <span>• {distance} km</span>
                </div>
                <Button variant="secondary" onClick={handleShowPhone}>
                  <Phone className="h-4 w-4 mr-2" />
                  Show number
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Details</h4>
                <p className="text-gray-600">{details}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button className="flex-1 bg-gradient-to-r from-[#5544B7] to-[#724FFF] text-white">
                Make an offer ({points}p)
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {offers.length > 0 && (
              <div>
                <h4 className="font-medium mb-4">Offers ({offerCount})</h4>
                <OffersList offers={offers} expanded={true} />
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
