"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

interface FooterSection {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { text: "About Us", href: "/about" },
      { text: "How It Works", href: "/how-it-works" },
      { text: "Blog", href: "/blog" },
      { text: "Careers", href: "/careers" },
      { text: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "/support" },
      { text: "Contact Us", href: "/contact" },
      { text: "FAQs", href: "/faqs" },
      { text: "Community", href: "/community" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of Service", href: "/terms" },
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Cookie Policy", href: "/cookies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Service Catalog", href: "/services" },
      { text: "Artisan Guide", href: "/artisan-guide" },
      { text: "Client Guide", href: "/client-guide" },
      { text: "Pricing", href: "/pricing" },
    ],
  },
];

const socialLinks = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-[#5544B7] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-xl font-bold">
              Bricolink
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-300 mt-4">
            &copy; {new Date().getFullYear()} Bricolink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
