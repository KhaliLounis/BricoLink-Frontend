"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";

import { loginSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      toast.success("Login successful!");
      setUser({
        id: data.data.id,
        name: data.data.name,
        profilePic: data.data.imageUrl,
      });
      router.push("/");
    },
    onError: (error: any) => {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  const onSubmit = (values: any) => {
    const toastId = toast.loading("Logging in...");
    loginMutation.mutate(values, {
      onSettled: () => {
        toast.dismiss(toastId);
      },
    });
  };

  const handleGoogleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h1 className="text-2xl font-semibold text-[#6C63FF] mb-2">Login</h1>
      <h2 className="text-xl mb-8">Log in to Your E-Learning Account!</h2>

      <div className="w-full max-w-md space-y-4">
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm text-gray-600">
                    Username or Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your username or email"
                      className="w-full px-4 py-2 rounded-lg border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm text-gray-600">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 rounded-lg border"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Remember me</span>
              </div>
              <Link href="#" className="text-sm text-[#6C63FF]">
                Forgot password?
              </Link>
            </div>

            <Button
              className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white py-3 rounded-lg hover:bg-[#5b52ff]"
              type="submit"
              // disabled={loginMutation.isLoading}
            >
              Login
            </Button>
          </form>
        </Form>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-3"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </button>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?
          <Link href="/register" className="text-[#6C63FF] ml-1">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
