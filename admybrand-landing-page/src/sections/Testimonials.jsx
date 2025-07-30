import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import TestimonialCard from '../components/TestimonialCard';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

// Avatar Images
import avatar1 from '../assets/person1.jpeg';
import avatar2 from '../assets/person2.jpeg';
import avatar3 from '../assets/person3.jpeg';
import avatar4 from '../assets/person4.jpeg';


const Testimonials = () => {
  const testimonialData = [
    {
      quote: "ADmyBRAND's AI completely transformed our workflow. We're delivering results 3x faster and our clients have never been happier.",
      author: 'Sarah Johnson',
      title: 'CEO, Growth Marketers Inc.',
      image: avatar1,
    },
    {
      quote: "The predictive analytics feature is a game-changer. We can now anticipate market shifts and adjust our strategy proactively. Incredible ROI.",
      author: 'Michael Chen',
      title: 'Director of Ops, ScaleUp Agency',
      image: avatar2,
    },
    {
      quote: "I was skeptical about AI content generation, but the quality is outstanding. It has freed up my creative team to focus on high-level strategy.",
      author: 'Jessica Rodriguez',
      title: 'Head of Content, Creative Solutions',
      image: avatar3,
    },
    {
      quote: "The AI insights helped us increase our ad conversion rates by 40% in just two weeks. Amazing tool for marketers.",
      author: 'David Kim',
      title: 'CMO, AdVision Media',
      image: avatar4,
    },
  ];

  return (
    <ScrollAnimationWrapper>
      <section id="testimonials" className="text-white py-12">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold text-white">
              Trusted by Top Marketing Agencies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 mt-2">
              Here's what our partners have to say about the ADmyBRAND AI Suite.
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full lg:w-3/4 mx-auto">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              showArrows={true}
              className="testimonial-carousel"
            >
              {testimonialData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  image={testimonial.image}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default Testimonials;
