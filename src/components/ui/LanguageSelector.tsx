"use client";

import { useState } from "react";
import { FaLanguage } from "react-icons/fa";

const languages = ["English", "French", "Arabic"] as const;

type Language = (typeof languages)[number];

export default function LanguageSelector() {
const [selectedLanguage, setSelectedLanguage] = useState<Language>("English");
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => setIsOpen((prev) => !prev);

const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selection
    // Add your language-switching logic here (e.g., i18n, API calls)
    console.log("Language selected:", language);
};

return (
    <div className="relative inline-block text-left">
    <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
    >
        {selectedLanguage}
        <FaLanguage className="ml-2"/>
    </button>

    {isOpen && (
        <div
        className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-gradient-to-b from-[#5544B7] to-[#724FFF] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
        <div className="py-1">
            {languages.map((language) => (
            <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#6B46C1]"
            >
                {language}
            </button>
            ))}
        </div>
        </div>
    )}
    </div>
);
}
