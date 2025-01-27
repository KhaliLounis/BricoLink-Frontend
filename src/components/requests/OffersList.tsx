import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface OffersListProps {
  offers: Offer[];
  expanded?: boolean;
}

export function OffersList({ offers, expanded = false }: OffersListProps) {
  if (!expanded) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {offers.slice(0, 3).map((offer) => (
            <Avatar key={offer.id} className="border-2 border-white h-8 w-8">
              <AvatarImage
                src={offer.artisan.avatar}
                alt={offer.artisan.name}
              />
              <AvatarFallback>{offer.artisan.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        {offers.length > 3 && (
          <span className="text-sm text-gray-500">
            +{offers.length - 3} more
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {offers.map((offer) => (
        <div key={offer.id} className="space-y-2">
          <div className="flex items-start gap-3">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarImage
                src={offer.artisan.avatar}
                alt={offer.artisan.name}
              />
              <AvatarFallback>{offer.artisan.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium hover:text-[#5544B7] cursor-pointer">
                    {offer.artisan.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {offer.artisan.location} - {offer.distance} km
                  </div>
                </div>
                {offer.artisan.rating && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      {offer.artisan.rating.score}
                    </span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-500">
                      ({offer.artisan.rating.reviews} reviews)
                    </span>
                  </div>
                )}
              </div>
              {offer.status && (
                <div
                  className={cn(
                    "mt-2 p-2 rounded-md text-sm",
                    offer.status.includes("success")
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  )}
                >
                  {offer.status}
                </div>
              )}
              {offer.artisan.available && (
                <div className="mt-2 text-sm text-gray-600">
                  Available. At your service.{" "}
                  <span className="text-gray-400">{offer.createdAt}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
