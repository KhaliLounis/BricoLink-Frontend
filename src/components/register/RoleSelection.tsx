import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RoleSelectionProps {
  onSelectRole: (role: "client" | "artisan") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#5544B7] to-[#724FFF] p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-[#6C63FF]">
            Join BricoLink
          </CardTitle>
          <CardDescription className="text-center">
            Choose your role to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
            onClick={() => onSelectRole("client")}
          >
            Join as a Client
          </Button>
          <Button
            className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
            onClick={() => onSelectRole("artisan")}
          >
            Join as an Artisan
          </Button>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#6C63FF] hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
