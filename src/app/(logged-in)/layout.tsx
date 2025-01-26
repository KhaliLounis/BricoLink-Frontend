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
    <div className="flex h-screen w-full bg-[#eff4fa]">
      <div className="w-full overflow-auto">{children}</div>
    </div>
  );
}
