"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Phone, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { OffersList } from "./OffersList";
import { cn, getTimeAgo } from "@/lib/utils";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOffer } from "@/services/offers";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function RequestCard({ request }: { request: RequestCard }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [offerDialogOpen, setOfferDialogOpen] = useState(false);
  const [offerMessage, setOfferMessage] = useState(
    "I am interested in your request. Please contact me for further details."
  );
  const queryClient = useQueryClient();
  const addOfferMutation = useMutation({
    mutationFn: addOffer,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["requests"] });
      toast.success("Offer added successfully.");
      setOfferDialogOpen(false);
      // Optionally, refresh the offers list here.
    },
    onError: (error) => {
      toast.error("Failed to add offer. Please try again.");
      console.error(error);
    },
  });

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

  const handleAddOfferSubmit = () => {
    console.log(offerMessage, request.request_id);
    // Call the mutation with the offer message and request ID
    addOfferMutation.mutate({
      content: offerMessage,
      request_id: request.request_id,
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
                !request.is_finished
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              )}
            >
              {!request.is_finished ? "Open" : "Closed"}
            </Badge>
            <span className="text-sm text-gray-500">
              {getTimeAgo(request.created_at)}
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">
              {request.user.commune}
            </span>
          </div>
          <h3 className="text-lg font-semibold">{request.title}</h3>
          {request.offers && request.offers.length > 0 && (
            <OffersList offers={request.offers} expanded={false} />
          )}
        </div>
        <div className="flex items-center gap-2">
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
                  <AvatarImage
                    src={request.user.profile_picture}
                    alt={request.user.first_name}
                  />
                  <AvatarFallback>
                    {request.user.first_name?.[0] || "A"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Client</div>
                  <div className="text-sm text-gray-500">
                    {request.user.first_name && request.user.family_name
                      ? `${request.user.first_name} ${request.user.family_name}`
                      : "Anonymous"}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{request.user.commune}</span>
                </div>
                <Button
                  variant="secondary"
                  // onClick={handleShowPhone}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {request.user.phone_number || "Show phone number"}
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-2">Details</h4>
                <p className="text-gray-600">{request.details}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Dialog for making an offer */}
              <Dialog open={offerDialogOpen} onOpenChange={setOfferDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-gradient-to-r from-[#5544B7] to-[#724FFF] text-white">
                    Make an offer
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Make an Offer</DialogTitle>
                  <DialogDescription>
                    Edit your offer message below:
                  </DialogDescription>
                  <Input
                    value={offerMessage}
                    onChange={(e) => setOfferMessage(e.target.value)}
                    className="mt-4"
                  />
                  <DialogFooter>
                    <Button onClick={handleAddOfferSubmit}>Submit Offer</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {request.offers && request.offers.length > 0 && (
              <div>
                <h4 className="font-medium mb-4">
                  Offers ({request.offers.length})
                </h4>
                <OffersList offers={request.offers} expanded={true} />
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
