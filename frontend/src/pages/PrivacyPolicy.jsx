import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold border-b border-yellow-500 pb-2 mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-yellow-300 text-base leading-relaxed">
          <p>
            At <span className="text-white font-semibold">R&R Cars</span>, we value your trust — and your privacy. This Privacy Policy explains how we collect, use, and protect your information when you book a ride with us or visit our website.
          </p>

          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <ul className="list-disc list-inside ml-4">
            <li><span className="text-white">Personal Info:</span> Name, contact number, email address, driving license details.</li>
            <li><span className="text-white">Booking Data:</span> Pickup location, rental time, vehicle choice, and payment info.</li>
            <li><span className="text-white">Device Info:</span> IP address, browser type, and cookies (to improve user experience).</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">2. How We Use Your Data</h2>
          <p>
            We use your data to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Process and confirm your booking</li>
            <li>Provide customer support and updates</li>
            <li>Send you promotional offers (only if you subscribe)</li>
            <li>Improve our website performance and security</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">3. Data Security</h2>
          <p>
            We use SSL encryption and secure servers to keep your data safe. Only authorized staff can access your personal information, and we never store card details.
          </p>

          <h2 className="text-xl font-semibold text-white">4. Sharing Your Info</h2>
          <p>
            We do <span className="text-white font-semibold">not</span> sell or share your data with third parties — ever. Exceptions only apply to law enforcement requests or legal compliance.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data. Just contact us at <span className="text-yellow-400 underline">privacy@R&RCars.com</span>.
          </p>

          <h2 className="text-xl font-semibold text-white">6. Cookies</h2>
          <p>
            Our site uses cookies for a smoother browsing experience. You can adjust your browser settings to disable cookies if preferred.
          </p>

          <h2 className="text-xl font-semibold text-white">7. Updates to This Policy</h2>
          <p>
            We may update our privacy policy occasionally. All changes will be posted here with the updated date.
          </p>

          <p className="mt-6 text-yellow-500 italic">
            Your trust drives us forward — thank you for choosing R&R Cars!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
