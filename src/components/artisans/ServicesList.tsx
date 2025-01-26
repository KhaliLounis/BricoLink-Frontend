"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServicesListProps {
  services: string[];
}

export function ServicesList({ services }: ServicesListProps) {
  const [showAll, setShowAll] = useState(false);
  const displayServices = showAll ? services : services.slice(0, 7);
  const remainingCount = services.length - 7;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {displayServices.map((service, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-gradient-to-r from-[#5544B7]/10 to-[#724FFF]/10 text-[#5544B7] hover:from-[#5544B7]/20 hover:to-[#724FFF]/20"
          >
            {service}
          </Badge>
        ))}
        {!showAll && remainingCount > 0 && (
          <Button
            variant="ghost"
            className="h-6 text-sm text-[#5544B7] hover:text-[#724FFF] p-0"
            onClick={() => setShowAll(true)}
          >
            +{remainingCount} services
          </Button>
        )}
      </div>
    </div>
  );
}
