import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "./Button";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navLinks = [
    { title: "Features", to: "features" },
    { title: "Pricing", to: "pricing" },
    { title: "Testimonials", to: "testimonials" },
    { title: "FAQ", to: "faq" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between backdrop-blur-xl border border-white/10 shadow-lg rounded-lg px-6 py-2">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white cursor-pointer"
          >
            ADmyBRAND
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-gray-300 hover:text-white"
            >
              Contact Us
            </button>
          </div>

          {/* Right Side Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </a>
            <Button variant="primary">Sign up</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-3">
          <div className="bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-6">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white cursor-pointer text-lg"
                >
                  {link.title}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:text-white text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Get in Touch"
      >
        <ContactForm />
      </Modal>
    </nav>
  );
};

export default Navbar;
