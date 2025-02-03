import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileOffersProps {
  offers: Offer[] | undefined;
}

export function ProfileOffers({ offers }: ProfileOffersProps) {
  const [expandedOffer, setExpandedOffer] = useState<string | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Offers</CardTitle>
      </CardHeader>
      <CardContent>
        {!offers || offers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No offers available</p>
          </div>
        ) : (
          <div className="space-y-4">
            {offers.map((offer) => (
              <motion.div
                key={offer.offer_id}
                className="border-b pb-4 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setExpandedOffer(
                      expandedOffer === offer.offer_id ? null : offer.offer_id
                    )
                  }
                >
                  <p className="font-semibold">
                    {offer.content.substring(0, 100)}...
                  </p>
                  {expandedOffer === offer.offer_id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                <AnimatePresence>
                  {expandedOffer === offer.offer_id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2"
                    >
                      <p>{offer.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>{new Date(offer.created_at).toLocaleDateString()}</span>
                  <span className="capitalize px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {offer.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
