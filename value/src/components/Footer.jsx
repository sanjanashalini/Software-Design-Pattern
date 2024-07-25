import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-400 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO Logo" className="w-16 h-16" />
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
            <ul>
              <li className="mb-2">About the LEGO Group</li>
              <li className="mb-2">LEGO® news</li>
              <li className="mb-2">Sustainability</li>
              <li className="mb-2">LEGO product certification</li>
              <li className="mb-2">LEGO Jobs</li>
              <li className="mb-2">LEGO Compliance Line</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
            <ul>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">Find building instructions</li>
              <li className="mb-2">Replacement parts</li>
              <li className="mb-2">Product recalls</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaYoutube className="text-2xl" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-600">
          <ul className="flex flex-wrap justify-center space-x-4 text-sm">
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>Legal notice</li>
            <li>Terms of Use</li>
            <li>Digital wellbeing</li>
            <li>Accessibility</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;