import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 border-b border-yellow-500 pb-2">About Us</h1>
        <p className="text-lg mb-4 leading-relaxed">
          Welcome to <span className="font-semibold text-white">SpeedDrive Rentals</span> — your reliable partner for
          premium car rental services. We specialize in delivering a wide range of vehicles, from budget-friendly
          hatchbacks to luxury sedans and SUVs, to meet all your travel needs.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Our mission is to provide fast, secure, and comfortable rides with transparent pricing, 24/7 support, and
          easy online booking. Whether you're on a business trip, family vacation, or spontaneous road adventure —
          SpeedDrive has the perfect car for you.
        </p>
        <p className="text-lg leading-relaxed">
          We are committed to excellence, safety, and customer satisfaction. With us, you don't just rent a car — you
          rent peace of mind.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-yellow-300">
            <li>Wide range of vehicles to choose from</li>
            <li>Affordable and transparent pricing</li>
            <li>24/7 customer support</li>
            <li>Quick and easy booking process</li>
            <li>Well-maintained and sanitized cars</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
