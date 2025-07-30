// ./src/components/ContactForm.jsx
import React, { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setStatus("Name and Email are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    console.log("📩 Contact Form Submitted:", formData);

    setStatus("✅ Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
      ></textarea>
      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
