"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { registerSchema } from "@/lib/validation";
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
import { register } from "@/actions/auth";
import { useAuth } from "@/context/AuthContext";

const Register = () => {
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: null,
    },
  });
  const { setUser } = useAuth();

  const router = useRouter();
  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Registration successful!");
      setUser({
        id: data._id,
        name: data.name,
        profilePic: data.imageUrl,
      });
      router.push("/chats");
    },
    onError: (error: any) => {
      if (error.response?.status === 400) {
        toast.error(error.response?.data.message || "Something went wrong.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    const toastId = toast.loading("Registering...");

    registerMutation.mutate(values, {
      onSettled: () => {
        toast.dismiss(toastId);
      },
    });
  };

  const handleGoogleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`);
  };
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      registerForm.setValue("image", file);
    }
  };

  return (
    <div className="size-full flex flex-col items-center py-4 justify-center gap-y-2 bg-main">
      <div>
        <Image
          src="/whiteTalky.svg"
          width={200}
          height={200}
          alt="Talky Logo"
        />
      </div>
      <div className="text-2xl font-medium text-center text-white">
        Join and start connecting with your favorite people.
      </div>
      <div className="w-1/3">
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit(onSubmit)}
            className="space-y-3"
          >
            <FormField
              control={registerForm.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col items-center">
                    <div className="size-36 relative rounded-full overflow-hidden mb-4">
                      <Image
                        src={imagePreview || "/imagePlaceholder.png"}
                        alt="Profile Preview"
                        width={150}
                        height={150}
                        className="object-cover aspect-square"
                      />
                    </div>

                    <FormLabel
                      htmlFor="file-input"
                      className="px-4 py-2 rounded-lg cursor-pointer font-medium text-base text-white bg-second hover:bg-blue-600"
                    >
                      Upload your Profile Picture
                    </FormLabel>
                    <FormControl>
                      <div>
                        <input
                          id="file-input"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={registerForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium text-lg">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={registerForm.control}
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
              control={registerForm.control}
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

            <Button
              type="submit"
              className="w-full bg-second"
              disabled={registerMutation.isPending}
            >
              Sign Up
            </Button>
          </form>
        </Form>
      </div>

      <div>
        <div className="text-white text-lg font-medium text-center">
          Already have an account? <br />
          <Link href="/login" className="text-second font-bold">
            Log in here
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

export default Register;
