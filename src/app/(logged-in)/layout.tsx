import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BricoLink",
};

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
}
