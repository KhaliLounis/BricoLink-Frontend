import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface ProfileInfoProps {
  profile: Profile;
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  // This is a mock function to convert service IDs to names
  const getServiceName = (id: number) => {
    const services = [
      "Painting",
      "Plumbing",
      "Electrical",
      "Carpentry",
      "Tiling",
      "Renovation",
      "Decoration",
      "Landscaping",
    ];
    return services[id - 1] || `Service ${id}`;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Profile Information</CardTitle>
        <Button variant="ghost" size="sm">
          <Edit className="mr-2 h-4 w-4" /> Edit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">About Me</h3>
            <p>{profile.description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p>{profile.phone_number}</p>
          </div>
          <div>
            <h3 className="font-semibold">Services</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {getServiceName(service)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
