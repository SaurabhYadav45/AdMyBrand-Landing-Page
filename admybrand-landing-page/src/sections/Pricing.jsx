import React, {useState} from 'react';
import PricingCard from '../components/PricingCard';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Pricing = () => {
  const [teamSize, setTeamSize] = useState(5); 

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for small agencies and individuals getting started with AI.',
      features: [
        'Basic Analytics',
        '10 AI Content Generations/mo',
        'Email Support',
        '1 Integration',
      ],
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '$99',
      description: 'For growing agencies that need more power and automation.',
      features: [
        'Predictive Analytics',
        '100 AI Content Generations/mo',
        'Priority Email Support',
        '5 Integrations',
        'Audience Segmentation',
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale agencies with custom needs and dedicated support.',
      features: [
        'Everything in Pro',
        'Unlimited AI Generations',
        'Dedicated Account Manager',
        'Custom Integrations',
        'API Access',
      ],
      isPopular: false,
    },
  ];
  return (
    <ScrollAnimationWrapper>
      <section id="pricing" className="text-white py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold text-white">
              Flexible Plans for Ambitious Teams
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 mt-2 font-sans">
              Choose the plan that's right for your agency's growth. No hidden fees.
            </p>
          </div>

          {/* Team size slider */}
          <div className="bg-white/5  rounded-xl mb-6 px-20  text-center">
            <h2 className="text-lg font-semibold mb-3">Estimate Your Cost</h2>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <p className="mt-2 text-gray-300">Team Size: <span className="font-bold">{teamSize}</span></p>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-wrap -m-4">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
                <PricingCard 
                teamSize={teamSize}
                tier = {tier} 
                 />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default Pricing;
