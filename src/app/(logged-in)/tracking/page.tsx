"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestCard } from "@/components/tracking/RequestCard";
import { AddRequestButton } from "@/components/tracking/AddRequestButton";
import { AddRequestDialog } from "@/components/tracking/AddRequestDialog";
import { trackingTabs } from "@/lib/constants";
// Sample data - replace with actual data from your API
const sampleRequests: RequestCardProps[] = [
  {
    id: 1,
    status: "completed",
    date: "2 months ago",
    location: "Bab Ezzouar",
    distance: 0,
    title: "URGENT: Need an Electrician",
    description:
      "Having issues with the electrical wiring in my apartment. Need professional help ASAP.",
    points: 20,
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    offers: [
      {
        user: {
          name: "Sofiane EL",
          avatar: "/placeholder.svg",
          rating: 4.8,
          reviews: 19,
        },
        price: 2000,
        date: "2 months ago",
        isSelected: true,
      },
      {
        user: {
          name: "Ahmed K.",
          avatar: "/placeholder.svg",
          rating: 4.5,
          reviews: 12,
        },
        price: 2500,
        date: "2 months ago",
      },
    ],
  },
  {
    id: 2,
    status: "in_progress",
    date: "2 months ago",
    location: "Oued Berkeche",
    distance: 410,
    title: "Looking for a Plumber",
    description: "Need a plumber to fix a leak in the bathroom.",
    points: 15,
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    hasUserOffer: true,
    offers: [
      {
        user: {
          name: "Current User",
          avatar: "/placeholder.svg",
          rating: 4.9,
          reviews: 27,
        },
        price: 1800,
        date: "2 months ago",
      },
      {
        user: {
          name: "Karim M.",
          avatar: "/placeholder.svg",
          rating: 4.7,
          reviews: 15,
        },
        price: 2000,
        date: "2 months ago",
      },
    ],
  },
  {
    id: 3,
    status: "pending",
    date: "2 months ago",
    location: "Tizi Ouzou",
    distance: 76,
    title: "App Debugging Required",
    description: "Need help debugging a mobile application.",
    points: 25,
    images: ["/placeholder.svg?height=200&width=200"],
    hasUserOffer: true,
    offers: [
      {
        user: {
          name: "Current User",
          avatar: "/placeholder.svg",
          rating: 4.9,
          reviews: 27,
        },
        price: 3000,
        date: "2 months ago",
      },
      {
        user: {
          name: "Yacine B.",
          avatar: "/placeholder.svg",
          rating: 4.6,
          reviews: 8,
        },
        price: 3500,
        date: "2 months ago",
      },
    ],
  },
];

function TrackingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [isAddRequestOpen, setIsAddRequestOpen] = useState(false);

  const handleTabChange = (value: string) => {
    if (value === "all") {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("filter");
      const newPath = params.toString()
        ? `/tracking?${params.toString()}`
        : "/tracking";
      router.push(newPath);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("filter", value);
      router.push(`/tracking?${params.toString()}`);
    }
  };

  const getFilteredRequests = () => {
    switch (filter) {
      case "requests":
        return sampleRequests.filter((r) => !r.hasUserOffer);
      case "offers":
        return sampleRequests.filter((r) => r.hasUserOffer);
      default:
        return sampleRequests;
    }
  };

  const currentValue = filter || "all";
  const filteredRequests = getFilteredRequests();

  return (
    <main className="container mx-auto pt-20 px-4 pb-24">
      <h1 className="text-center text-gray-600 mb-6">
        Track the progress of your requests and offers
      </h1>
      <Tabs
        value={currentValue}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 mb-6">
          {trackingTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5544B7] data-[state=active]:to-[#724FFF] data-[state=active]:text-white"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <RequestCard key={request.id} {...request} />
          ))}
        </div>
      </Tabs>
      <AddRequestButton onClick={() => setIsAddRequestOpen(true)} />
      <AddRequestDialog
        isOpen={isAddRequestOpen}
        onClose={() => setIsAddRequestOpen(false)}
      />
    </main>
  );
}
export default function TrackingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackingContent />
    </Suspense>
  );
}
