interface Price {
  service: string;
  amount: number;
  unit?: string;
  note?: string;
}

interface ArtisanCardProps {
  id: string;
  name: string;
  avatar: string;
  location: string;
  isOnline: boolean;
  description: string;
  realizations: string[];
  services: string[];
  prices: Price[];
  rating?: {
    score: number;
    count: number;
  };
}
