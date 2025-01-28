interface RequestsOffer {
  id: string;
  artisan: {
    id: string;
    name: string;
    avatar: string;
    location: string;
    rating?: {
      score: number;
      reviews: number;
    };
    available?: boolean;
  };
  status?: string;
  createdAt: string;
  distance: number;
}

interface RequestCardProps {
  id: string;
  title: string;
  status: "open" | "closed";
  createdAt: string;
  location: string;
  distance: number;
  points: number;
  offerCount: number;
  clientName: string;
  details: string;
  phoneNumber: string;
  offers: RequestsOffer[];
}
