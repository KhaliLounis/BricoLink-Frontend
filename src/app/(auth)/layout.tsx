import type { Metadata } from "next";
import Navbar from "@/components/layout/LandingNavbar";

export const metadata: Metadata = {
  title: "BricoLink",
  description: "BricoLink is a platform for connecting clients with artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar /> {children}
    </div>
  );
}
