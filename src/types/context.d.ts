enum Role {
  ARTISAN = "Artisan",
  CLIENT = "Client",
}

interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
  profilePicture: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}
