interface Client {
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
}

interface RequestCardProps {
  id: number;
  status: "completed" | "pending" | "in_progress";
  date: string;
  location: string;
  distance: number;
  title: string;
  description?: string;
  points: number;
  images: string[];
  offers: Offer[];
  hasUserOffer?: boolean;
}
