"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Categories Section
interface Category {
  id: string;
  title: string;
  image: string;
}

const categories: Category[] = [
  { id: "1", title: "Graphic Design", image: "/assets/categories/g1.png" },
  { id: "2", title: "Cartoon Animation", image: "/assets/categories/g2.png" },
  { id: "3", title: "Illustration", image: "/assets/categories/g3.png" },
  { id: "4", title: "Flyers & Vouchers", image: "/assets/categories/g4.png" },
  { id: "5", title: "Logo Design", image: "/assets/categories/g5.png" },
  { id: "6", title: "Social graphics", image: "/assets/categories/g6.png" },
  { id: "7", title: "Article writing", image: "/assets/categories/g7.png" },
  { id: "8", title: "Video Editing", image: "/assets/categories/g8.png" },
];

// FAQ/Doubts Section
interface FaqCard {
  id: string;
  title: string;
  image: string;
}

const faqCards: FaqCard[] = [
  {
    id: "1",
    title: "How to Get a Perfect Expert to finish your tasks?",
    image: "/assets/getStarted/Image1.png",
  },
  {
    id: "2",
    title: "How to Write an Overdue Payment Reminder Letter",
    image: "/assets/getStarted/Image2.png",
  },
  {
    id: "3",
    title: "Choosing the Right Payment Methods for Your Small Business",
    image: "/assets/getStarted/Image3.png",
  },
];

const PageSections = () => {
  return (
    <div className="space-y-20 mt-8">
      {/* Categories Section */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Explore Our Service Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={300}
                height={200}
                quality={100}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {category.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 opacity-90">
            Join Bricolink today and connect with skilled artisans or showcase
            your expertise.
          </p>
          <Link
            href="/signup"
            className="bg-white text-[#5544B7] px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* FAQ/Doubts Section */}
      <section className="px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqCards.map((card) => (
            <Link
              href={`/faq/${card.id}`}
              key={card.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                quality={100}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium leading-snug">{card.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PageSections;
