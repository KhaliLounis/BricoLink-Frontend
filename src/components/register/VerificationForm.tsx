"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { verificationSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";

type VerificationForm = z.infer<typeof verificationSchema>;

interface VerificationFormProps {
  email: string;
}

export default function VerificationForm({ email }: VerificationFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<VerificationForm>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: VerificationForm) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual verification logic
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
      toast.success("Email verified successfully");
      router.push("/tracking");
    } catch (error) {
      toast.error("Failed to verify email");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTP = async () => {
    // TODO: Implement resend OTP logic
    toast.success("OTP sent successfully");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#5544B7] to-[#724FFF] p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-[#6C63FF]">
            Verify Your Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-gray-600 mb-4">
            We&apos;ve sent a verification code to {email}. Please enter it
            below.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col gap-y-2 items-center"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({}) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel className="text-center">
                      Verification Code
                    </FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        value={form.getValues("otp")}
                        onChange={(value) => form.setValue("otp", value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col items-center space-y-2">
          <p className="text-sm text-gray-600">Didn&apos;t receive the code?</p>
          <Button variant="link" onClick={resendOTP}>
            Resend OTP
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
