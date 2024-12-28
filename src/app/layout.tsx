import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BricoLink",
  description: "BricoLink is a platform for connecting skilled workers with clients.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}