import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

interface FooterSection {
title: string;
links: {
    text: string;
    href: string;
}[];
}

const footerSections: FooterSection[] = [
{
    title: "Info",
    links: [
    { text: "About Us", href: "/about" },
    { text: "Support", href: "/support" },
    { text: "Blog", href: "/blog" },
    { text: "Download Apps", href: "/apps" },
    { text: "The Short App", href: "/short-app" },
    { text: "Partnership", href: "/partnership" },
    { text: "Affiliate Program", href: "/affiliate" }
    ]
},
{
    title: "Features",
    links: [
    { text: "Invoicing", href: "/features/invoicing" },
    { text: "Task Management", href: "/features/task-management" },
    { text: "Contracts", href: "/features/contracts" },
    { text: "Payments", href: "/features/payments" },
    { text: "Recurring payments", href: "/features/recurring-payments" },
    { text: "Expense Tracking", href: "/features/expense-tracking" },
    { text: "Reports", href: "/features/reports" },
    { text: "Proposals", href: "/features/proposals" },
    { text: "Time Tracking", href: "/features/time-tracking" }
    ]
},
{
    title: "Tools",
    links: [
    { text: "Free Invoice Template", href: "/tools/invoice-template" },
    { text: "Free Invoice Generator", href: "/tools/invoice-generator" },
    { text: "Free Marketing Guide", href: "/tools/marketing-guide" },
    { text: "Self Employment Tax Calculator", href: "/tools/tax-calculator" },
    { text: "Quarterly Tax Calculator", href: "/tools/quarterly-tax" },
    { text: "Business Name Generator", href: "/tools/business-name-generator" },
    { text: "Design DB", href: "/tools/design-db" }
    ]
},
{
    title: "Helpful Links",
    links: [
    { text: "Welcomed Resources", href: "/resources" },
    { text: "Anywhere Workers", href: "/anywhere-workers" },
    { text: "Freelancers Alternative", href: "/freelancers" },
    { text: "QuickBooks Alternative", href: "/quickbooks-alternative" },
    { text: "Harvest Alternative", href: "/harvest-alternative" },
    { text: "Wave Apps Alternative", href: "/wave-apps-alternative" }
    ]
},
{
    title: "Policies",
    links: [
    { text: "Terms of Service", href: "/terms" },
    { text: "Privacy Policy", href: "/privacy" }
    ]
}
];

const socialLinks = [
{ Icon: Twitter, href: "#", label: "Twitter" },
{ Icon: Facebook, href: "#", label: "Facebook" },
{ Icon: Linkedin, href: "#", label: "LinkedIn" },
{ Icon: Youtube, href: "#", label: "YouTube" },
{ Icon: Instagram, href: "#", label: "Instagram" }
];

const Footer = () => {
return (
    <footer className="border-t py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {footerSections.map((section) => (
            <div key={section.title}>
            <h3 className="font-medium text-gray-900 mb-4">{section.title}</h3>
            <ul className="space-y-2">
                {section.links.map((link) => (
                <li key={link.text}>
                    <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                    {link.text}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>

        <div className="mt-12 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-xl font-semibold text-gray-900">
            Bricolink
            </Link>
            
            <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
                <Link
                key={label}
                href={href}
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label={label}
                >
                <Icon className="w-5 h-5" />
                </Link>
            ))}
            </div>
        </div>
        </div>
    </div>
    </footer>
);
};

export default Footer;