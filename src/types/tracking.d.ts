interface OfferCardProps {
  user: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  price: number;
  date: string;
  isSelected?: boolean;
}

interface Client {
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
}

interface TrackingRequestCardProps {
  id: number;
  status: "completed" | "pending" | "in_progress";
  date: string;
  location: string;
  distance: number;
  title: string;
  description?: string;
  points: number;
  images: string[];
  offers: {
    user: {
      name: string;
      avatar: string;
      rating: number;
      reviews: number;
    };
    price: number;
    date: string;
    isSelected?: boolean;
  }[];
  hasUserOffer?: boolean;
}
