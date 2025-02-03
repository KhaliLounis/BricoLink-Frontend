"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestCard } from "@/components/requests/RequestCard";
import { requestsTabs } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { getAllRequests } from "@/services/requests";

function RequestsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [activeTab, setActiveTab] = useState(filter || "all");

  const {
    data: requests,
    isLoading,
    error,
  } = useQuery<RequestCard[]>({
    queryKey: ["requests"],
    queryFn: getAllRequests,
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "all") {
      router.push("/requests");
    } else {
      router.push(`/requests?filter=${value}`);
    }
  };

  const getFilteredRequests = () => {
    if (!requests) return [];
    switch (activeTab) {
      case "reviews":
        return requests.filter((r) => r.offers.length > 0);
      case "no-offers":
        return requests.filter((r) => r.offers.length === 0);
      case "nearby":
        // You might want to implement a distance calculation here
        return requests;
      default:
        return requests;
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

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
            {requestsTabs.map((tab) => (
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
              <RequestCard key={request.request_id} request={request} />
            ))}
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default function RequestsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestsContent />
    </Suspense>
  );
}
