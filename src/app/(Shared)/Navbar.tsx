'use client';
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
    <header className="bg-dark-purple text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
        Bricolink
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
        <Link href="/explore" className="hover:text-primary">
            Explore
        </Link>
        <Link href="/login" className="hover:text-primary">
            Login
        </Link>
        <Link
            href="/join"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
            Join
        </Link>
        {/* Language Selector */}
        <div className="relative group">
            <button className="flex items-center gap-2 hover:text-primary">
            English
            <span className="material-icons">arrow_drop_down</span>
            </button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-md">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                English
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Français
            </li>
            </ul>
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
        <nav className="md:hidden bg-dark-purple text-white">
        <ul className="flex flex-col items-center gap-4 py-4">
            <Link href="/explore" className="hover:text-primary">
            Explore
            </Link>
            <Link href="/login" className="hover:text-primary">
            Login
            </Link>
            <Link
            href="/join"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
            >
            Join
            </Link>
            <li className="cursor-pointer">English</li>
        </ul>
        </nav>
    )}
    </header>
);
};

export default Navbar;
