interface RegistrationProps {
  onBookClick: () => void;
}

export default function Registration({ onBookClick }: RegistrationProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Ready to <span className="text-amber-500">Join Us?</span>
        </h2>

        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Secure your spot today! Choose your accommodation package and complete
          your registration in just a few simple steps.
        </p>

        <div className="space-y-6">
          <button
            onClick={onBookClick}
            className="px-16 py-6 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xl rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            BOOK ACCOMMODATION
          </button>

          <p className="text-gray-600 text-sm">
            After booking, you'll proceed to complete your registration form
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Registration Process
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h4 className="font-bold text-gray-900">Choose Package</h4>
              <p className="text-gray-600 text-sm">
                Select your preferred accommodation option
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h4 className="font-bold text-gray-900">Make Payment</h4>
              <p className="text-gray-600 text-sm">
                Transfer to the provided bank details
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h4 className="font-bold text-gray-900">Complete Registration</h4>
              <p className="text-gray-600 text-sm">
                Fill the form and upload payment proof
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
