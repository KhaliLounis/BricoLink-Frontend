import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Categories Section
interface Category {
id: string;
title: string;
image: string;
}

const categories: Category[] = [
{ id: '1', title: 'Graphic Design', image: '/api/placeholder/240/120' },
{ id: '2', title: 'Cartoon Animation', image: '/api/placeholder/240/120' },
{ id: '3', title: 'Illustration', image: '/api/placeholder/240/120' },
{ id: '4', title: 'Flyers & Vouchers', image: '/api/placeholder/240/120' },
{ id: '5', title: 'Logo Design', image: '/api/placeholder/240/120' },
{ id: '6', title: 'Social graphics', image: '/api/placeholder/240/120' },
{ id: '7', title: 'Article writing', image: '/api/placeholder/240/120' },
{ id: '8', title: 'Video Editing', image: '/api/placeholder/240/120' },
];

// Trending Sellers Section
interface Seller {
id: string;
name: string;
role: string;
image: string;
}

const sellers: Seller[] = [
{ id: '1', name: 'Abinesh Jino', role: 'UI/UX Designer', image: '/api/placeholder/300/300' },
{ id: '2', name: 'Hrithik Tiwari', role: 'Blockchain Dev', image: '/api/placeholder/300/300' },
{ id: '3', name: 'Helen', role: 'Data Scientist', image: '/api/placeholder/300/300' },
];

// FAQ/Doubts Section
interface FaqCard {
id: string;
title: string;
image: string;
}

const faqCards: FaqCard[] = [
{
    id: '1',
    title: 'How to Get a Perfect Expert to finish your tasks?',
    image: '/api/placeholder/400/300',
},
{
    id: '2',
    title: 'How to Write an Overdue Payment Reminder Letter',
    image: '/api/placeholder/400/300',
},
{
    id: '3',
    title: 'Choosing the Right Payment Methods for Your Small Business',
    image: '/api/placeholder/400/300',
},
];

const PageSections = () => {
return (
    <div className="space-y-20">
    {/* Categories Section */}
    <section className="px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Here are Something You`d Need</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
            <Link
            href={`/category/${category.id}`}
            key={category.id}
            className="group relative overflow-hidden rounded-xl"
            >
            <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40">
                <span className="absolute bottom-3 left-3 text-white font-medium">
                {category.title}
                </span>
            </div>
            </Link>
        ))}
        </div>
        <div className="text-center mt-4">
        <Link href="/categories" className="text-blue-500 hover:text-blue-600">
            More Categories
        </Link>
        </div>
    </section>

    {/* CTA Section */}
    <section className="bg-indigo-600 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 opacity-90">
            Sign up or login to Explore Various Features that our Sellers & Freelancers Experience on a daily base
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors">
            Get Started & It`s Free
        </button>
        </div>
    </section>

    {/* Trending Sellers Section */}
    <section className="px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
        Trending <span className="text-blue-500">Sellers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sellers.map((seller) => (
            <Link
            href={`/seller/${seller.id}`}
            key={seller.id}
            className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
            <img
                src={seller.image}
                alt={seller.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center">
                <div>
                <h3 className="font-medium">{seller.name}</h3>
                <p className="text-gray-500 text-sm">{seller.role}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
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

    {/* FAQ/Doubts Section */}
    <section className="bg-indigo-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
            Have Some Doubts To Get Started?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqCards.map((card) => (
            <Link
                href={`/faq/${card.id}`}
                key={card.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
                <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
                />
                <div className="p-4">
                <h3 className="font-medium leading-snug">{card.title}</h3>
                </div>
            </Link>
            ))}
        </div>
        <div className="text-center mt-8">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors">
            See More Now
            </button>
        </div>
        </div>
    </section>
    </div>
);
};

export default PageSections;