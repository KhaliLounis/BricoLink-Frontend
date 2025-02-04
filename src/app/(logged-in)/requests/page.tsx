"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestCard } from "@/components/requests/RequestCard";
import { requestsTabs } from "@/lib/constants";
import {
  getAllRequests,
  getRequestsWithReviews,
  getNearbyRequests,
  getRequestsWithoutOffers,
} from "@/services/requests";

function RequestsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["requests", filter],
    queryFn: () => {
      switch (filter) {
        case "reviews":
          return getRequestsWithReviews();
        case "nearby":
          return getNearbyRequests();
        case "no-offers":
          return getRequestsWithoutOffers();
        default:
          return getAllRequests();
      }
    },
    // Prevent automatic retry on failure
    retry: false,
    // Ensure the query runs even if the endpoint might not exist
    enabled: true,
  });

  const handleTabChange = (value: string) => {
    if (value === "all") {
      router.push("/requests");
    } else {
      router.push(`/requests?filter=${value}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto pt-20 px-4 pb-24">
        <h1 className="text-2xl font-bold text-center mb-2">
          Service Requests
        </h1>
        <Tabs value={filter} onValueChange={handleTabChange} className="w-full">
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
            {isLoading ? (
              <div className="text-center">Loading...</div>
            ) : isError ? (
              <div className="text-center text-red-500">
                Error loading requests.
              </div>
            ) : data && data.length > 0 ? (
              data.map((request: RequestCard) => (
                <RequestCard key={request.request_id} request={request} />
              ))
            ) : (
              <div className="text-center text-gray-500">No requests found</div>
            )}
          </div>
        </Tabs>
      </main>
    </div>
  );
}

export default RequestsPage;
