interface RegisterUser {
  name: string;
  email: string;
  password: string;
  image?: string;
}

interface LoginUser {
  email: string;
  password: string;
}
