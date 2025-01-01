"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSelector from "../ui/LanguageSelector";
import JoinButton from "../ui/JoinButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensures the menu state is only set on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Prevent rendering the menu state or dynamic icons on SSR
    return null;
  }

  return (
    <header className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] absolute top-0 left-0 right-0 z-50 text-white shadow-md">
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
            className="text-white leading-none font-poppins text-[14px] font-normal"
          >
            Explore
          </Link>
          <Link
            href="/login"
            className="text-white leading-none font-poppins text-[14px] font-normal"
          >
            Login
          </Link>
          <JoinButton />
          {/* Language Selector */}
          <div className="relative">
            <LanguageSelector />
          </div>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-[#5544B7] to-[#724FFF] text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link href="/explore" className="hover:text-primary">
              Explore
            </Link>
            <Link href="/login" className="hover:text-primary">
              Login
            </Link>
            <JoinButton />
            <LanguageSelector />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
