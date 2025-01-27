"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestCard } from "@/components/requests/RequestCard";

const tabs = [
  {
    value: "all",
    label: "All",
    icon: "🌟",
  },
  {
    value: "reviews",
    label: "Reviews",
    icon: "⭐",
  },
  {
    value: "no-offers",
    label: "No offers",
    icon: "📝",
  },
  {
    value: "nearby",
    label: "Nearby",
    icon: "📍",
  },
];

// Sample data - replace with actual data from your API
const sampleRequests: RequestCardProps[] = [
  {
    id: "1",
    title: "Looking for a plumber",
    status: "open",
    createdAt: "12 hours ago",
    location: "Bouinan, Blida",
    distance: 27,
    points: 5,
    offerCount: 2,
    clientName: "Anonymous",
    details:
      "Need a plumber to fix a water pressure regulator that keeps restarting on its own",
    phoneNumber: "+213 555 123 456",
    offers: [
      {
        id: "1",
        artisan: {
          id: "1",
          name: "Brahim Amrani",
          avatar: "/placeholder.svg",
          location: "Mohammadia, Alger",
          rating: {
            score: 3,
            reviews: 1,
          },
          available: true,
        },
        status:
          "تم الغاء المعاملة بعد المفاهمة. متفاهمين على 17h نورمالمون بالصح الكليون يستنى بلومبي اللي يعرفوا هوا يجيه.",
        createdAt: "2 days ago",
        distance: 2,
      },
      {
        id: "2",
        artisan: {
          id: "2",
          name: "Zerrouk Mohamed",
          avatar: "/placeholder.svg",
          location: "Kolea, Tipaza",
          available: true,
        },
        status: "ما تفاهمناش، الزبون ما يردش",
        createdAt: "1 day ago",
        distance: 38,
      },
    ],
  },
  {
    id: "2",
    title: "Need a plumber. URGENT",
    status: "open",
    createdAt: "12 hours ago",
    location: "Reghaia",
    distance: 14,
    points: 10,
    offerCount: 1,
    clientName: "Anonymous",
    details: "Urgent plumbing issue needs immediate attention",
    phoneNumber: "+213 555 789 012",
    offers: [
      {
        id: "2",
        artisan: {
          id: "2",
          name: "Ahmed K.",
          avatar: "/placeholder.svg",
          location: "Reghaia",
        },
        createdAt: "",
        distance: 0,
      },
    ],
  },
];

export default function RequestsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [activeTab, setActiveTab] = useState(filter || "all");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "all") {
      router.push("/requests");
    } else {
      router.push(`/requests?filter=${value}`);
    }
  };

  const getFilteredRequests = () => {
    switch (activeTab) {
      case "reviews":
        return sampleRequests.filter((r) => r.offerCount > 0);
      case "no-offers":
        return sampleRequests.filter((r) => r.offerCount === 0);
      case "nearby":
        return sampleRequests.filter((r) => r.distance <= 20);
      default:
        return sampleRequests;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto pt-20 px-4 pb-24">
        <h1 className="text-2xl font-bold text-center mb-2">
          Service Requests
        </h1>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5544B7] data-[state=active]:to-[#724FFF] data-[state=active]:text-white"
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="space-y-4">
            {getFilteredRequests().map((request) => (
              <RequestCard key={request.id} {...request} />
            ))}
          </div>
        </Tabs>
      </main>
    </div>
  );
}
