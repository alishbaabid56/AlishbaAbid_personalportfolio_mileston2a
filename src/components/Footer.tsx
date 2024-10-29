import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="text-center">
        <h3 className="text-4xl mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Connect with Me
        </h3>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/alishba-abid-67606b2b8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BY2M7MB8bQhqigGUPl4Lo%2BA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl p-3 rounded-full bg-gray-800 hover:text-purple-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alishbaabid56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl p-3 rounded-full bg-gray-800 hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl p-3 rounded-full bg-gray-800 hover:text-purple-400 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Alishba Abid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;