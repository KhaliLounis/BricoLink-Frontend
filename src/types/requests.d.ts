interface RequestsUser {
  commune: string;
  created_at: string;
  description: string;
  email: string;
  family_name: string;
  first_name: string;
  hashed_password: string;
  is_verified: boolean;
  phone_number: string;
  profile_picture: string;
  role: string;
  updated_at: string;
  user_id: string;
}

interface RequestsOffer {
  artisan_id: string;
  content: string;
  created_at: string;
  offer_id: string;
  offer_response_id: number;
  request_id: string;
  status: string;
  updated_at: string;
}

interface RequestCard {
  created_at: string;
  details: string;
  is_finished: boolean;
  offers: RequestsOffer[];
  request_id: string;
  service_id: number;
  title: string;
  updated_at: string;
  user: RequestsUser;
}

interface RequestsResponse {
  data: RequestCard[];
  status_code: number;
}
