import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex items-center justify-center px-4 py-10">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 border-b border-yellow-500 pb-2">Contact Us</h2>
        
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <FaMapMarkerAlt className="text-yellow-400 text-lg" />
            </div>
            <div className="text-white">
              <p>123 Rental Street, Panipat, India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <FaPhoneAlt className="text-yellow-400 text-lg" />
            </div>
            <div className="text-white">
              <p>+91 9817973907</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-gray-800 p-3 rounded-full">
              <FaEnvelope className="text-yellow-400 text-lg" />
            </div>
            <div className="text-white">
              <p>info@R&RCars.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
