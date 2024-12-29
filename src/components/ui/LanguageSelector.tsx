"use client";

import { useState } from "react";

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
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        aria-haspopup="true"
        aria-expanded={isOpen}
    >
        {selectedLanguage}
        <svg
        className="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
        </svg>
    </button>

    {isOpen && (
        <div
        className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
        <div className="py-1">
            {languages.map((language) => (
            <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
