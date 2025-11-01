import React from 'react';

const specifications = [
  { label: 'Bluetooth Version', value: '5.4' },
  { label: 'Chipset', value: 'JL7006F4' },
  { label: 'Battery Capacity', value: '400mAh' },
  { label: 'Charging Time', value: 'Approx. 2 hours' },
  { label: 'Usage Time', value: 'Up to 45 hours' },
  { label: 'Material', value: 'ABS plastic' },
  { label: 'Dimensions', value: '195 x 186 x 84 mm' },
  { label: 'Weight', value: '210g' },
];

const benefits = [
  'Extended battery life for uninterrupted listening',
  'Lightweight and ergonomic design for all-day comfort',
  'Flexible connectivity options across multiple devices',
  'Easy-to-use controls with helpful voice prompts',
  'Replaceable earplugs for hygiene and longevity',
];

const packageContents = [
  '1 x Hoco W65 Happy Bluetooth Headphones',
  '1 x Charging Cable',
  '1 x User Manual',
];

const CheckmarkIcon = () => (
    <svg className="w-5 h-5 mr-3 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);


const SpecsSection: React.FC = () => {
  return (
    <section id="specs" className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase opacity-0 animate-fadeInUp">
          Tech Specs
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mt-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          All the details you need to know about the Hoco W65, inside and out.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Specifications List */}
        <div className="bg-brand-bg-light p-8 rounded-xl border border-white/10 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-brand-cyan tracking-wide">Specifications</h3>
            <div className="space-y-4">
                {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-baseline border-b border-white/10 pb-2">
                        <span className="text-gray-400">{spec.label}</span>
                        <span className="font-semibold text-white">{spec.value}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Benefits and Packaging */}
        <div className="space-y-8">
            <div className="bg-brand-bg-light p-8 rounded-xl border border-white/10 opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                <h3 className="text-2xl font-bold mb-6 text-brand-cyan tracking-wide">Benefits & Usability</h3>
                <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                       <li key={index} className="flex items-start">
                           <CheckmarkIcon />
                           <span className="text-gray-300">{benefit}</span>
                       </li>
                    ))}
                </ul>
            </div>
            <div className="bg-brand-bg-light p-8 rounded-xl border border-white/10 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                <h3 className="text-2xl font-bold mb-6 text-brand-cyan tracking-wide">What's in the Box?</h3>
                <ul className="space-y-3">
                     {packageContents.map((item, index) => (
                       <li key={index} className="flex items-start">
                           <CheckmarkIcon />
                           <span className="text-gray-300">{item}</span>
                       </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
