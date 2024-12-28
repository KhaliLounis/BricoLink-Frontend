interface User {
    id: string;
    name: string;
    profilePic: string;
  }
  
  interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
  }
  