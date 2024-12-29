"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const { user, setUser } = useAuth();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Login successful!");
      setUser({
        id: data.data.id,
        name: data.data.name,
        profilePic: data.data.imageUrl,
      });
      console.log(user);
      router.push("/chats");
    },
    onError: (error: { response?: { status: number } }) => {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });
  console.log(loginForm.formState.errors);

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
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
    <div className="size-full h-screen flex flex-col items-center justify-center gap-y-4 bg-main">
      <div>
        <Image
          src="/whiteTalky.svg"
          width={200}
          height={200}
          alt="Talky Logo"
        />
      </div>
      <div className="text-2xl font-medium text-center text-white ">
        Connect with your favorite people.
      </div>
      <div className="w-1/3">
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="space-y-3"
          >
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium text-lg">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="yourname@example.com"
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
                  <FormLabel className="text-white font-medium text-lg">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="underline text-md font-medium text-gray-900 text-right ">
              <Link href="reset-password">Forget Password?</Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-second "
              disabled={loginMutation.isPending}
            >
              Log In
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <div className="text-white text-lg font-medium text-center">
          Don`t have an account? <br />
          <Link href="/register" className="text-second font-bold ">
            Sign up here
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-2 w-1/3">
        <div className="h-[2px] w-1/2 rounded-lg bg-second"></div>
        <p className="text-second">OR</p>
        <div className="h-[2px] w-1/2 rounded-lg bg-second"></div>
      </div>
      <div className="cursor-pointer rounded-full bg-[linear-gradient(90deg,#142F9F_0%,#1FC274_100%)] p-[2px]">
        <div
          onClick={() => handleGoogleLogin()}
          className="z-10 flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-[18px] font-semibold text-[#333333]"
        >
          <FcGoogle className="mr-2" size={24} />
          Continue with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
