"use client";

import React from "react";
import { Check } from "lucide-react";

const features = [
  {
    id: 1,
    heading: "Hire Experts",
    description: "Find skilled freelancers for your projects.",
  },
  {
    id: 2,
    heading: "Showcase Skills",
    description: "Display your expertise and get hired.",
  },
  {
    id: 3,
    heading: "Secure Payments",
    description: "Safe and reliable payment methods.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Bricolink?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-[#6E56CF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.heading}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
