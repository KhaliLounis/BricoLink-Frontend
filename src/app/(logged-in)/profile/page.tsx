"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileInfo } from "@/components/profile/ProfileInfo";
import { ProfileOffers } from "@/components/profile/ProfileOffers";
import { ProfilePrices } from "@/components/profile/ProfilePrices";
import { ProfileRealisations } from "@/components/profile/ProfileRealizations";
import { motion } from "framer-motion";
import { getProfileAsArtisan } from "@/services/profiles";
import Loading from "@/components/ui/Loading";

export default function ProfilePage() {
  const [selectedRealization, setSelectedRealization] = useState<
    string | null | undefined
  >(null);

  const { data: profileData, isLoading: isLoadingProfile } = useQuery<{
    data: Profile;
    status_code: number;
  }>({
    queryKey: ["profile"],
    queryFn: () => getProfileAsArtisan(),
    select: (response) => response, // Return the full response object
  });

  const profile = profileData?.data; // Extract the `data` property from the response

  console.log(profile);

  if (isLoadingProfile) {
    return <Loading />;
  }

  if (!profile) {
    return <div>Error loading profile data</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-8"
    >
      <div className="min-h-screen bg-gray-100">
        <ProfileHeader profile={profile} />
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div className="lg:col-span-2 space-y-8">
              <ProfileInfo profile={profile} />
              <ProfileOffers offers={profile?.offers} />
              <ProfileRealisations realisations={profile?.realisations} />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <ProfilePrices prices={profile.prices} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
