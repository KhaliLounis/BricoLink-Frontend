interface RegisterUser {
  family_name: string;
  first_name: string;
  email: string;
  password: string;
  phone_number: string;
  location: string;
  description: string;
  commune: string;
  state?: string;
  postalCode?: string;
  latitude: number | null;
  longitude: number | null;
  profile_picture?: File;
  role: string;
}

interface LoginUser {
  email: string;
  password: string;
}
