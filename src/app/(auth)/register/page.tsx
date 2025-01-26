"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ClientRegistration from "@/components/register/ClientRegistration";
import ArtisanRegistration from "@/components/register/ArtisanRegistration";
import RoleSelection from "@/components/register/RoleSelection";
import VerificationForm from "@/components/register/VerificationForm";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const step = searchParams.get("step");
  const email = searchParams.get("email");

  const handleRoleSelect = (selectedRole: "client" | "artisan") => {
    const params = new URLSearchParams();
    params.set("role", selectedRole);
    if (selectedRole === "artisan") {
      params.set("step", "1");
    }
    router.push(`/register?${params.toString()}`);
  };

  if (email) {
    return <VerificationForm email={email} />;
  }

  if (!role) {
    return <RoleSelection onSelectRole={handleRoleSelect} />;
  }

  if (role === "client") {
    return <ClientRegistration />;
  }

  return <ArtisanRegistration currentStep={Number(step) || 1} />;
}
