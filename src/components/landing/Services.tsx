import React from 'react';
import Link from 'next/link';
import { ChevronRight, Code, PenTool, Search, Video } from 'lucide-react';

interface Service {
id: string;
title: string;
icon: React.ReactNode;
bgColor: string;
href: string;
}

const services: Service[] = [
{
    id: 'web-dev',
    title: 'WEB DEVELOPMENT',
    icon: <Code className="w-8 h-8 text-white" />,
    bgColor: 'bg-purple-600',
    href: '/services/web-development',
},
{
    id: 'logo-design',
    title: 'LOGO DESIGN',
    icon: <PenTool className="w-8 h-8 text-white" />,
    bgColor: 'bg-blue-400',
    href: '/services/logo-design',
},
{
    id: 'seo',
    title: 'SEO',
    icon: <Search className="w-8 h-8 text-white" />,
    bgColor: 'bg-green-500',
    href: '/services/seo',
},
{
    id: 'video-editing',
    title: 'VIDEO EDITING',
    icon: <Video className="w-8 h-8 text-white" />,
    bgColor: 'bg-purple-700',
    href: '/services/video-editing',
},
];

const PopularServices = () => {
return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Most Popular Services</h2>
        <div className="text-purple-500">
            <ChevronRight className="w-5 h-5 rotate-45" />
        </div>
        </div>
        <Link
        href="/services"
        className="text-purple-400 hover:text-purple-600 transition-colors flex items-center gap-1"
        >
        View All
        <ChevronRight className="w-4 h-4" />
        </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
        <Link
            key={service.id}
            href={service.href}
            className="group relative overflow-hidden rounded-lg aspect-square transition-transform hover:scale-105"
        >
            <div className={`${service.bgColor} w-full h-full p-6 relative`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
            <div className="relative z-10">
                {service.icon}
                <h3 className="text-white font-semibold mt-4 text-lg">
                {service.title}
                </h3>
            </div>
            </div>
        </Link>
        ))}
    </div>

    <div className="flex justify-center mt-8 gap-2">
        {[0, 1, 2].map((dot) => (
        <div
            key={dot}
            className={`h-2 rounded-full transition-all ${
            dot === 0 ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300'
            }`}
        />
        ))}
    </div>
    </section>
);
};

export default PopularServices;