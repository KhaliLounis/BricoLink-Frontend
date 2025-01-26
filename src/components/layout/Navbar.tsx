"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 text-sm font-medium transition-colors relative group",
                pathname === item.href
                  ? "text-[#5544B7]"
                  : "text-gray-600 hover:text-[#5544B7]"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.title}</span>
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5544B7] to-[#724FFF]" />
              )}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5544B7] to-[#724FFF] scale-x-0 transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
