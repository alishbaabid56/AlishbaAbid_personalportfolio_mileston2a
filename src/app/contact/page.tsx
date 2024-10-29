"use client";

import React from 'react';


const ContactPage = () => {
  return (
    <section className="py-10 px-6 " id='contact'>
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-6xl mb-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Get In Touch
        </h2>

        {/* Contact Form */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg space-y-8">
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-white mb-2 text-left">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-full bg-[#121212] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-white mb-2 text-left">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-full bg-[#121212] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-white mb-2 text-left">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-2xl bg-[#121212] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-blue-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

       
       
      </div>
    </section>
  );
};

export default ContactPage;