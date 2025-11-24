import React, { useState } from 'react';
import { motion } from 'framer-motion';

const countryCodes = [
  { code: '+1', label: 'USA' },
  { code: '+44', label: 'UK' },
  { code: '+91', label: 'India' },
  { code: '+61', label: 'Australia' },
  { code: '+81', label: 'Japan' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
  { code: '+39', label: 'Italy' },
  { code: '+34', label: 'Spain' },
  { code: '+55', label: 'Brazil' },];

const requirementsOptions = [
  'HR Consulting',
  'Digital Marketing',
  'Web Development',
  'UI/UX and Mobile Apps',
  'Custom App',
  'Others',
];

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    mobile: '',
    requirement: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission (e.g., send to backend or email)
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl font-extrabold text-gray-900 mb-4"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        Contact Us
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-8"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        transition={{ delay: 0.2 }}
      >
        Have a question or want to work with us? Fill out the form below and we’ll get back to you soon.
      </motion.p>

      {submitted ? (
        <motion.div
          className="bg-green-100 text-green-700 p-4 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thank you for contacting us! We’ll be in touch soon.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={formVariants}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Name */}
          <motion.div variants={formVariants}>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={formVariants}>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </motion.div>

          {/* Mobile with country code */}
          <motion.div variants={formVariants}>
            <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
            <div className="flex space-x-2">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                aria-label="Select country code"
              >
                {countryCodes.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label} ({code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="123-456-7890"
                className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </motion.div>

          {/* Requirements dropdown */}
          <motion.div variants={formVariants}>
            <label htmlFor="requirement" className="block text-gray-700 font-medium mb-1">
              Requirement
            </label>
            <select
              name="requirement"
              id="requirement"
              value={form.requirement}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="" disabled>
                Select your requirement
              </option>
              {requirementsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Message */}
          <motion.div variants={formVariants}>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition transform hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};

export default Contact;
