import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Edit, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [gradientAngle, setGradientAngle] = useState(0);
  const { setUser } = useAuth();
  const router = useRouter();
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logout successful!");
      router.push("/login");
      setUser(null); // Clear the user from context
    },
    onError: (error: any) => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");

    logoutMutation.mutate(undefined, {
      onSettled: () => {
        toast.dismiss(toastId);
      },
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const keyframes = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all duration-500`}
        style={{
          backgroundImage: `linear-gradient(${gradientAngle}deg, #7c3aed, #4f46e5, #7c3aed)`,
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src={profile.profile_picture || "/placeholder.svg"}
                alt={`${profile.first_name} ${profile.family_name}`}
                width={120}
                height={120}
                className="rounded-full border-4 border-white"
              />
              <div className="ml-6">
                <h1 className="text-3xl font-bold">
                  {profile.first_name} {profile.family_name}
                </h1>
                <p className="text-xl">{profile.commune}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
              <Button
                variant="destructive"
                className="bg-white text-red-600 hover:bg-red-600 hover:text-white"
                onClick={() => handleLogout()}
              >
                <LogOut className="mr-2 h-4 w-4" /> Log Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
