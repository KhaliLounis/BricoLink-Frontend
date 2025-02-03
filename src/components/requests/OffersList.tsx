import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, getTimeAgo } from "@/lib/utils";

interface OffersListProps {
  offers: RequestsOffer[];
  expanded?: boolean;
}

export function OffersList({ offers, expanded = false }: OffersListProps) {
  if (!expanded) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {offers.slice(0, 3).map((offer) => (
            <Avatar
              key={offer.offer_id}
              className="border-2 border-white h-8 w-8"
            >
              <AvatarFallback>{offer.artisan_id[0]}</AvatarFallback>
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
        <div key={offer.offer_id} className="space-y-2">
          <div className="flex items-start gap-3">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarFallback>{offer.artisan_id[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium hover:text-[#5544B7] cursor-pointer">
                    Artisan ID: {offer.artisan_id}
                  </div>
                  <div className="text-sm text-gray-500">
                    {getTimeAgo(offer.created_at)}
                  </div>
                </div>
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
              {offer.content && (
                <div className="mt-2 text-sm text-gray-600">
                  {offer.content}
                </div>
              )}
              {offer.status === null && offer.content === null && (
                <div className="mt-2 text-sm text-gray-500 italic">
                  No response provided yet
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
