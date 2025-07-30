import React from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

import heroImage3 from '../assets/HeroImg3.jpg'
import heroImage3Webp from '../assets/HeroImg3WebP.webp';

const Hero = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="hero" className="relative flex items-center justify-center h-screen text-white w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture className="absolute inset-0">
          {/* Modern browsers use WebP */}
          <source srcSet={heroImage3Webp} type="image/webp" />
          {/* Fallback for older browsers */}
          <img
            src={heroImage3}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
            loading="eager" // Hero image should load immediately
            fetchpriority="high" // High priority for faster display
          />
        </picture>

      </div>

      {/* Hero Content aligned with Navbar */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-10">
          Supercharge Your Marketing <br />
          with <span className="text-indigo-400">ADmyBRAND AI</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg font-sans text-gray-300 leading-relaxed">
          Our AI-powered suite provides insights and automation...
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary">Get Started for Free</Button>
          <Button 
          variant="secondary"
          onClick={() => setIsVideoOpen(true)}>
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="Watch ADmyBRAND AI in Action"
      >
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/JgDNFQ2RaLQ?autoplay=1"
            
            title="Demo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </section>


  );
};

export default Hero;