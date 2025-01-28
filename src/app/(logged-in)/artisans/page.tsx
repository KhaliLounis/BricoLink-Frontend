"use client";

import { Suspense, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArtisanCard } from "@/components/artisans/ArtisanCard";
import { useRouter, useSearchParams } from "next/navigation";

const tabs = [
  {
    value: "all",
    label: "All",
    icon: "🌟",
  },
  {
    value: "new",
    label: "New",
    icon: "🆕",
  },
  {
    value: "well-rated",
    label: "Well Rated",
    icon: "👍",
  },
  {
    value: "poorly-rated",
    label: "Poorly Rated",
    icon: "👎",
  },
];

// Sample data - replace with actual data from your API
const sampleArtisans: ArtisanCardProps[] = [
  {
    id: "1",
    name: "Electro Pro",
    avatar: "/placeholder.svg",
    location: "Souidania, Algiers",
    isOnline: true,
    description:
      "Electronics engineer specializing in innovative projects for students and professionals. With expertise in website creation and portfolios, I also create reports and presentations in French and English, covering various fields. My goal is to provide tailored, quality solutions to meet each client's specific needs.",
    services: [
      "Photography",
      "Architecture",
      "Legal Consulting",
      "Goods Transport",
      "Web Development",
      "Plumbing",
      "Electronics",
      "3D Modeling",
      "Mobile App Development",
      "UI/UX Design",
    ],
    prices: [
      { service: "Report Writing", amount: 50, unit: "page" },
      { service: "Presentation", amount: 80, unit: "slide" },
      {
        service: "Project with materials",
        amount: 2000,
        note: "+ material costs",
      },
      { service: "Basic Website", amount: 5000 },
      { service: "Portfolio Website", amount: 10000 },
    ],
    rating: {
      score: 4.8,
      count: 127,
    },
    realizations: [],
  },
  {
    id: "2",
    name: "Tech Solutions",
    avatar: "/placeholder.svg",
    location: "Hydra, Algiers",
    isOnline: false,
    description:
      "Professional IT services provider with over 10 years of experience. Specializing in network solutions, software development, and IT consulting. We offer comprehensive technical support and innovative solutions for businesses of all sizes.",
    services: [
      "Network Setup",
      "Software Development",
      "IT Consulting",
      "Cloud Solutions",
      "Cybersecurity",
      "Data Recovery",
      "System Administration",
      "Hardware Repair",
    ],
    prices: [
      { service: "IT Consultation", amount: 100, unit: "hour" },
      { service: "Network Setup", amount: 5000, note: "basic package" },
      { service: "Software Development", amount: 1000, unit: "day" },
      { service: "Data Recovery", amount: 3000 },
    ],
    rating: {
      score: 4.6,
      count: 89,
    },
    realizations: [],
  },
];

function ArtisansContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("filter") || "all",
  );
  const router = useRouter();

  const getFilteredArtisans = () => {
    switch (activeTab) {
      case "new":
        return sampleArtisans; // In real app, filter by creation date
      case "well-rated":
        return sampleArtisans.filter((a) => (a.rating?.score || 0) >= 4.5);
      case "poorly-rated":
        return sampleArtisans.filter((a) => (a.rating?.score || 0) < 4.5);
      default:
        return sampleArtisans;
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "all") {
      router.push("/artisans");
    } else {
      router.push(`/artisans?filter=${value}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto pt-20 px-4 pb-24">
        <h1 className="text-2xl font-bold text-center mb-2">
          Professionals in Algeria
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
            {getFilteredArtisans().map((artisan) => (
              <ArtisanCard key={artisan.id} {...artisan} />
            ))}
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default function ArtisansPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArtisansContent />
    </Suspense>
  );
}
