import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function OfferCard({ user, price, date, isSelected }: OfferCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{user.name}</span>
            {isSelected && (
              <Badge variant="default" className="bg-green-500">
                Selected
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {user.rating} ({user.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-[#5544B7]">{price} DA</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </div>
  );
}
