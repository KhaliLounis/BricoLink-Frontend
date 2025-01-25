"use client";

import * as React from "react";
import { FaLanguage } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = ["English", "French", "Arabic"] as const;

type Language = (typeof languages)[number];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>("English");

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    // Add your language-switching logic here (e.g., i18n, API calls)
    console.log("Language selected:", language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white">
          {selectedLanguage} <FaLanguage className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 bg-gradient-to-b from-[#5544B7] to-[#724FFF]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language}
            onClick={() => handleLanguageChange(language)}
            className="text-white focus:bg-[#6B46C1] focus:text-white"
          >
            {language}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
