"use client";

import * as React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import LanguageSelector from "@/components/ui//LanguageSelector";
import JoinButton from "@/components/ui//JoinButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  // Ensures the menu state is only set on the client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Prevent rendering the menu state or dynamic icons on SSR
    return null;
  }

  return (
    <header className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] top-0 left-0 right-0 z-50 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-white leading-[normal] font-poppins text-[40px] font-bold capitalize"
        >
          Bricolink
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/explore"
            className="text-white leading-none font-poppins text-[14px] font-normal hover:text-primary"
          >
            Explore
          </Link>
          <Link
            href="/login"
            className="text-white leading-none font-poppins text-[14px] font-normal hover:text-[#5544B7]"
          >
            Login
          </Link>
          <JoinButton />
          <LanguageSelector />
        </nav>

        {/* Hamburger Menu for Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-xl p-2">
              <FaBars />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white"
          >
            <nav className="flex flex-col items-center gap-4 py-4">
              <Link href="/explore" className="hover:text-primary">
                Explore
              </Link>
              <Link href="/login" className="hover:text-primary">
                Login
              </Link>
              <JoinButton />
              <LanguageSelector />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
