import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Feature {
id: number;
heading: string;
description: string;
}

const features: Feature[] = [
{
    id: 1,
    heading: "Heading 1",
    description: "Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh. Lorem Ipsum Dolor Sit Amet, Interdum."
},
{
    id: 2,
    heading: "Heading 2",
    description: "Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh. Lorem Ipsum Dolor Sit Amet, Interdum."
},
{
    id: 3,
    heading: "Heading 3",
    description: "Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh. Lorem Ipsum Dolor Sit Amet, Interdum."
}
];

const FeaturesSection = () => {
return (
    <section className="bg-slate-50 py-20 px-4 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Features List */}
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-600 hover:underline cursor-pointer inline-block">
            Discover Our Outstanding Features
            </h2>
            
            <div className="space-y-6">
            {features.map((feature) => (
                <div 
                key={feature.id}
                className={`${
                    feature.id === 3 ? 'bg-white rounded-lg p-6 shadow-sm' : ''
                }`}
                >
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    </div>
                    <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.heading}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    {feature.id === 3 && (
                        <Link 
                        href="#" 
                        className="inline-flex items-center text-blue-500 hover:text-blue-600 mt-4 group"
                        >
                        See More
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[500px] hidden lg:block">
            {/* Dotted background pattern */}
            <div className="absolute right-0 top-0 w-32 h-32 grid grid-cols-8 gap-1">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-blue-200/40" />
                ))}
            </div>

            {/* Curved arrow */}
            <div className="absolute left-[23%] top-[12%] w-24 h-24 border-t-4 border-r-4 border-teal-600 rounded-tr-full transform -rotate-90" />

            {/* Centered Image */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                    width={400} 
                    height={400} 
                    src="/assets/icons/f.png" 
                    alt="" 
                    className="w-full h-auto"
                    quality={100}
                />
            </div>
        </div>
    </div>
    </div>
    </section>
);
};

export default FeaturesSection;