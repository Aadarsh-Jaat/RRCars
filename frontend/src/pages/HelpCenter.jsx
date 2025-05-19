import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 border-b border-yellow-500 pb-2">Help Center</h1>

        <div className="space-y-6 text-yellow-300 text-base leading-relaxed">
          <p>Need assistance? We’re here to help! Whether you have a question about your booking, car availability, pickup process, or anything else — feel free to reach out.</p>

          <h2 className="text-xl text-white font-semibold mt-6">💬 Common Help Topics</h2>
          <ul className="list-disc list-inside ml-4">
            <li>How do I modify or cancel my booking?</li>
            <li>What to do in case of vehicle breakdown?</li>
            <li>What documents do I need at pickup?</li>
            <li>Can I extend my rental period?</li>
            <li>What if I return the car late?</li>
          </ul>

          <h2 className="text-xl text-white font-semibold mt-6">📞 Contact Support</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 9817973907</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400" />
              <span>+91 9817973907 (WhatsApp Chat)</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>support@R&RCars.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>123 Rental Street, Panipat, India</span>
            </div>
          </div>

          <h2 className="text-xl text-white font-semibold mt-6">⏰ Support Hours</h2>
          <p>Our support team is available 7 days a week:</p>
          <p className="ml-4">Mon – Sun: 9:00 AM – 9:00 PM</p>

          <h2 className="text-xl text-white font-semibold mt-6">🧾 Need Immediate Help?</h2>
          <p>If you're facing an urgent issue like a car breakdown or emergency situation, please call or WhatsApp us directly for faster assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
