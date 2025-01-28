import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";

interface ProfilePricesProps {
  prices: Price[] | undefined;
}

export function ProfilePrices({ prices }: ProfilePricesProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Prices</CardTitle>
        {prices && prices.length > 0 && (
          <div className="space-x-2">
            <Button variant="ghost" size="sm">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" /> Add Price
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {!prices || prices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No prices available</p>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" /> Add Price
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {prices.map((price) => (
              <div
                key={price.price_id}
                className="flex justify-between items-center"
              >
                <span>{price.price_name}</span>
                <span className="font-semibold">
                  {price.price.toLocaleString()} DZD / {price.unit}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
