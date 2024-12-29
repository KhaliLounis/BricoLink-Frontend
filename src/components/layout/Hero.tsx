"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowUpRight, Search } from 'lucide-react';

interface TrendingServiceProps {
title: string;
}

const TrendingService: React.FC<TrendingServiceProps> = ({ title }) => (
<Link 
    href={`/services/${title.toLowerCase()}`}
    className="flex items-center gap-2 px-4 py-2 bg-[rgba(217,217,217,0.08)] rounded-full text-white text-sm hover:bg-[rgba(217,217,217,0.15)] transition-colors"
>
    {title}
    <ArrowUpRight size={16} />
</Link>
);

interface ImageCardProps {
src: string;
alt: string;
label?: string;
showStar?: boolean;
isWide?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, label, showStar, isWide }) => (
<div className={`relative rounded-3xl overflow-hidden ${isWide ? 'col-span-2' : ''}`}>
    <Image
    src={src}
    alt={alt}
    width={isWide ? 800 : 400}
    height={isWide ? 400 : 300}
    className="w-full h-full object-cover"
    />
    {showStar && (
    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
        <div className="w-8 h-8 flex items-center justify-center">
        <span className="text-blue-600">⭐</span>
        </div>
    </div>
    )}
    {label && (
    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
        <span className="text-sm font-medium">{label}</span>
    </div>
    )}
</div>
);

const HeroSection: React.FC = () => {
const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add search functionality here
};

return (
    <section className="relative text-white overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
        <Image
        src="/assets/icons/hand.png"
        alt="Background hand"
        fill
        className="object-cover"
        priority
        quality={100}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-purple/60" />
    </div>

    {/* Main Content Container - positioned above background */}
    <div className="relative z-10 min-h-[calc(100vh-80px)] mt-[80px]">
        <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
            <h1 className="text-6xl font-bold font-poppins">
                Bricolink
            </h1>
            <h2 className="text-4xl font-semibold">
                FREELANCING MADE EASY !
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
                Hire An Expert Or Be An Expert.
            </p>
            <p className="text-sm text-gray-400 max-w-xl">
                In The Ever-Evolving Landscape Of Skills And Knowledge, The Choice Between
                Hiring An Expert Or Becoming One Yourself Is A Pivotal Decision.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-xl">
                <input
                type="text"
                placeholder="Search To Find Freelancers, Jobs, Or Services"
                className="w-full px-6 py-4 bg-white bg-opacity-5 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
                >
                <Search size={24} />
                </button>
            </form>

            {/* Trending Services */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">TRENDING SERVICES</h3>
                <div className="flex flex-wrap gap-4">
                <TrendingService title="DESIGNER" />
                <TrendingService title="DEVELOPER" />
                <TrendingService title="WORDPRESS" />
                </div>
            </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
            <div className="grid grid-cols-2 gap-6">
                <ImageCard
                src="/assets/images/business-meeting.jpg"
                alt="Business professionals collaborating"
                showStar={true}
                />
                <ImageCard
                src="/assets/images/fullstack-dev.jpg"
                alt="Fullstack Developer"
                label="FULLSTACK DEVELOPER"
                />
                <ImageCard
                src="/assets/images/3d-artist.jpg"
                alt="3D Artist"
                label="3D ARTIST"
                isWide={true}
                />
            </div>
            </div>
        </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-8 w-12 h-12 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-1/4 left-8 w-8 h-8 border-2 border-white/20 transform rotate-45" />
    </div>
    </section>
);
};

export default HeroSection;