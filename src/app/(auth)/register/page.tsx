"use client";

import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  
  const handleGoogleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-2xl font-semibold text-[#6C63FF] mb-8">Sign Up and Start Learning</h1>
      
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Username</label>
          <Input 
            type="text" 
            placeholder="Enter your username"
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Email</label>
          <Input 
            type="email" 
            placeholder="abc@xyz.com"
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-600">Password</label>
          <Input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg border"
          />
        </div>

        <Button 
          type="button"
          className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white py-3 rounded-lg hover:bg-[#5b52ff]"
        >
          Sign up
        </Button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <button 
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-3"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </button>

        <div className="text-center text-sm text-gray-600">
          Already have an account? 
          <Link href="/login">
            <div className="text-[#6C63FF] ml-1">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
