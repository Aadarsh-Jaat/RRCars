import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-400 flex justify-center items-start px-4 py-10">
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 border-b border-yellow-500 pb-2">Terms & Conditions</h1>

        <div className="space-y-5 text-yellow-300 text-base leading-relaxed">
          <p>
            Welcome to R&R Cars. By renting a vehicle from us, you agree to the following terms and conditions. Please read them carefully before proceeding with your booking.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">1. Rental Eligibility</h2>
          <p>
            Customers must be at least 21 years old and possess a valid driver’s license with at least 1 year of driving experience. Additional ID proof may be required at pickup.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">2. Booking & Payment</h2>
          <p>
            All bookings must be confirmed with valid payment details. We accept major debit and credit cards. Full payment is required before vehicle handover.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">3. Cancellation & Refund</h2>
          <p>
            Free cancellation is available up to 24 hours before your booking time. Cancellations made later may incur a 50% charge.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">4. Vehicle Use</h2>
          <p>
            The rented vehicle must only be driven by the person(s) listed in the rental agreement. Any illegal or negligent use will result in penalties and possible legal action.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">5. Damage & Liability</h2>
          <p>
            Customers are responsible for any damage not covered under insurance. A pre-rental inspection will be conducted, and a report shared with the renter.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">6. Fuel Policy</h2>
          <p>
            Vehicles must be returned with the same fuel level as at pickup. A refueling charge will apply otherwise.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">7. Late Return</h2>
          <p>
            Late returns without prior notice will attract additional hourly charges. Contact our support team in case of unavoidable delays.
          </p>

          <h2 className="text-xl text-white font-semibold mt-6">8. Privacy</h2>
          <p>
            All customer data is handled with strict confidentiality and will never be shared with third parties without consent, except as required by law.
          </p>

          <p className="mt-8 text-sm text-yellow-500 italic">
            By proceeding with your booking, you agree to the above terms and conditions. For any queries, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
