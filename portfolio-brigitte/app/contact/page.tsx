// app/contact/page.tsx
"use client"; // Deze component gebruikt useState en Formspree, dus Client Component

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Link is niet direct gebruikt, maar kan handig zijn
import { Mail, Linkedin, Phone, CheckCircle, XCircle } from 'lucide-react'; // Icons

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'' | 'success' | 'error'>('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Jouw EIGEN Formspree Endpoint URL
  const FORM_ENDPOINT = "https://formspree.io/f/mwpqvnrl"; // VERVANG DEZE NIET MEER!

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(''); // Reset status

    // Simpele validatie
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Formulier leegmaken
      } else {
        setFormStatus('error');
        // Optioneel: Log de response.json() voor debugging
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800 dark:text-white">
          Let&apos;s Connect!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          I&apos;m always open to new opportunities, collaborations, and interesting conversations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-custom-medium border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Reach Out Directly</h2>
            
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Mail size={28} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Personal Email</p>
                <a href="mailto:brigitteheijkoop@gmail.com" className="text-base hover:underline break-all">brigitteheijkoop@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Mail size={28} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Work Email</p>
                <a href="mailto:brigitte.dev@gmail.com" className="text-base hover:underline break-all">brigitte.dev@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Linkedin size={28} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Connect on LinkedIn</p>
                <Link href="https://www.linkedin.com/in/brigitte-h/" target="_blank" rel="noopener noreferrer" className="text-base hover:underline break-all">linkedin.com/in/brigitte-h/</Link>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Phone size={28} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg">Phone Number</p>
                <p className="text-base">Available upon request</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Formulier */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-grow p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-custom-medium border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>

            {/* Formulier Statusberichten */}
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 rounded-md bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 flex items-center gap-2"
                >
                  <CheckCircle size={20} /> Message sent successfully!
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 rounded-md bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100 flex items-center gap-2"
                >
                  <XCircle size={20} /> Error sending message. Please try again or contact me directly.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}