"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Search } from "lucide-react";

interface TrendingServiceProps {
  title: string;
}

const TrendingService: React.FC<TrendingServiceProps> = ({ title }) => (
  <Link
    href={`#`}
    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#5544B7] text-white hover:bg-white/20 transition-colors"
  >
    {title}
    <ArrowUpRight size={16} />
  </Link>
);

interface ImageCardProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  label?: string;
  showStar?: boolean;
  isWide?: boolean;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  width,
  height,
  src,
  alt,
  label,
  isWide,
  className,
}) => (
  <div
    className={`relative rounded-3xl overflow-hidden ${
      isWide ? "col-span-2" : ""
    }`}
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={100}
      className={`object-cover ${className}`}
    />
    {label && (
      <div className="absolute bottom-1 left-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-4">
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
    <section className="relative text-white overflow-hidden bg-[#5544B7]">
      {/* Main Content Container */}
      <div className="relative z-10 min-h-[calc(100vh-80px)] mt-[80px]">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h1 className="text-6xl font-bold font-poppins">Bricolink</h1>
              <h2 className="text-4xl font-semibold">BRICOLA MADE EASY!</h2>
              <p className="text-lg max-w-xl">
                Hire skilled artisans or showcase your expertise. Get started
                today!
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative max-w-xl">
                <input
                  type="text"
                  placeholder="Search for artisans, jobs, or services"
                  className="w-full px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full"
                >
                  <Search size={24} className="text-[#5544B7]" />
                </button>
              </form>

              {/* Trending Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">TRENDING SERVICES</h3>
                <div className="flex flex-wrap gap-4">
                  <TrendingService title="Dcoration" />
                  <TrendingService title="Plomberie" />
                  <TrendingService title="Électricité" />
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
              <Image
                src="/assets/hero/lines.png"
                alt="Freelancers working"
                width={320}
                height={320}
                quality={100}
                className="absolute top-[6%] right-[17%] hidden 2xl:block"
              />
              <Image
                src="/assets/hero/star.png"
                alt="Freelancers working"
                width={80}
                height={80}
                quality={100}
                className="absolute top-[9%] right-[20%] hidden 2xl:block"
              />
              <div className="grid grid-cols-2 gap-6">
                <ImageCard
                  width={220}
                  height={220}
                  src="/assets/hero/a.png"
                  alt="Business professionals collaborating"
                  showStar={true}
                  isWide={true}
                  className="ml-[25%]"
                />
                <ImageCard
                  width={400}
                  height={400}
                  src="/assets/hero/b.png"
                  alt="Fullstack Developer"
                  className="col-span-2 mt-6"
                />
                <ImageCard
                  width={240}
                  height={240}
                  src="/assets/hero/c.png"
                  alt="3D Artist"
                  isWide={false}
                  className="col-span-2"
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
