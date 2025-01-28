interface Offer {
  offer_id: string;
  artisan_id: string;
  content: string;
  created_at: string;
  offer_response_id: number;
  request_id: string;
  status: string;
  updated_at: string;
}

interface Price {
  price_id: string;
  artisan_id: string;
  created_at: string;
  price: number;
  price_name: string;
  unit: string;
  updated_at: string;
}

interface Realization {
  realisation_id: string;
  artisan_id: string;
  created_at: string;
  image_url: string;
  updated_at: string;
}

interface Profile {
  artisan_id: string;
  commune: string;
  description: string;
  family_name: string;
  first_name: string;
  phone_number: string;
  profile_picture: string;
  services: number[];
  offers?: Offer[];
  prices?: Price[];
  realizations?: Realization[];
}
