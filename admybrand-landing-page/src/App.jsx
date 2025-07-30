import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ScrollAnimationWrapper from './components/ScrollAnimationWrapper';

const Hero = lazy(() => import('./sections/Hero'));
const Features = lazy(() => import('./sections/Features'));
const Pricing = lazy(() => import('./sections/Pricing'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black overflow-hidden text-white">
      
      {/* 🔮 Glowing Floating Color-Changing Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatAurora"></div>

      <div className="absolute top-40 -right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatReverseAurora"></div>

      <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-floatAurora"></div>

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>

        {/* Navbar + Hero */}
        <div className="max-w-7xl lg:mt-4 mt-2 mx-2 lg:mx-auto lg:px-6 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ">
        <Navbar />
        <ScrollAnimationWrapper variant="fade-up">
          
          <Hero />
        </ScrollAnimationWrapper>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-2 lg:mx-auto mt-10 px-3 lg:px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ">
          <ScrollAnimationWrapper variant="fade-left">
            <Features />
          </ScrollAnimationWrapper>
        </div>

        {/* Pricing */}
        <div className="max-w-7xl mx-2 lg:mx-auto mt-10 px-3 lg:px-6mt-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <ScrollAnimationWrapper  variant="fade-up">
            <Pricing />
          </ScrollAnimationWrapper>
        </div>

        {/* Testimonials Section */}
        <div className="relative max-w-7xl mx-2 lg:mx-auto mt-10 px-3 lg:px-6 rounded-2xl 
            bg-gradient-to-br from-purple-500/10 via-white/5 to-pink-500/10 
            backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
          <ScrollAnimationWrapper  variant="fade-right">
            <Testimonials />
          </ScrollAnimationWrapper>
        </div>


        {/* FAQ */}
        <div className="relative max-w-7xl mx-2 lg:mx-auto mt-10 px-3 lg:px-6  rounded-2xl 
            bg-gradient-to-br from-purple-500/10 via-white/5 to-pink-500/10 
            backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
          <ScrollAnimationWrapper variant="fade-up">
            <FAQ />
          </ScrollAnimationWrapper>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-2 lg:mx-auto mt-10 px-3 lg:px-6 mb-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <ScrollAnimationWrapper variant="fade-up">
            <Footer />
          </ScrollAnimationWrapper>
        </div>
      </Suspense>
    </div>
  );
}

export default App;



// If you want,
// I can now extend your ScrollAnimationWrapper so each glassmorphic section fades in and moves up only when it enters the viewport,
// which will make your SaaS site feel even more premium.

// Do you want me to do that next?
