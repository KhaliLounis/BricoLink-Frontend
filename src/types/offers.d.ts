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
