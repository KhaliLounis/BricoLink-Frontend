"use client";

import React, { useState } from "react";
import { services } from "@/lib/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const ServicesSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState(services[0]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#5544B7]">
        Explore Our Services
      </h2>

      {/* Horizontal Category Scroll Area */}
      <div className="mb-6">
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {services.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory.category === category.category
                    ? "bg-[#5544B7] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.category}
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Services Grid for Selected Category */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedCategory.items.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="p-4 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 hover:text-[#5544B7] transition-colors">
                {service.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider;
