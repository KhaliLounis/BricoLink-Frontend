'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function Verification() {
const [otp, setOtp] = useState(['', '', '', '', '', '']);

const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
        const nextInput = document.querySelector(`input[name=digit-${index + 1}]`) as HTMLInputElement;
        if (nextInput) nextInput.focus();
    }
    }
};

return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
    <div className="w-full max-w-md">
        <button className="mb-8 flex items-center gap-2 text-gray-600">
        <ArrowLeft size={20} />
        </button>

        <h1 className="text-2xl font-semibold text-center mb-2">Verification</h1>
        <p className="text-center text-gray-600 mb-8">
        Check your email for OTP
        <br />
        Please enter the 6-digit code sent to your email
        </p>

        <div className="flex justify-center gap-2 mb-8">
        {otp.map((digit, index) => (
            <Input
            key={index}
            name={`digit-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-12 h-12 text-center text-lg"
            />
        ))}
        </div>

        <div className="text-center mb-4">
        <span className="text-gray-500">0:29</span>
        </div>

        <div className="text-center mb-8">
        <span className="text-gray-600">Didn&apos;t receive a code? </span>
        <a href="#" className="text-indigo-600">Resend</a>
        </div>

        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
        Verify Code
        </Button>
    </div>
    </div>
);
}