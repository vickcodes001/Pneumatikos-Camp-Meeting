import { useState } from "react";

interface AccommodationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PackageType = "single" | "group5" | "group10" | null;

export default function AccommodationModal({
  isOpen,
  onClose,
}: AccommodationModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(null);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const packages = [
    {
      id: "single" as const,
      name: "Single",
      price: 5000,
      description: "Individual accommodation",
    },
    {
      id: "group5" as const,
      name: "Group of 5",
      price: 23000,
      description: "Save ₦2,000",
      highlight: false,
    },
    {
      id: "group10" as const,
      name: "Group of 10",
      price: 45000,
      description: "Save ₦5,000 - Best Value!",
      highlight: true,
    },
  ];

  const handleSelectPackage = (packageId: PackageType) => {
    setSelectedPackage(packageId);
    setShowBankDetails(true);
  };

  const handleProceedToRegistration = () => {
    // Replace with your actual Google Form URL
    window.open("https://forms.google.com/your-form-id", "_blank");
    onClose();
  };

  const resetModal = () => {
    setSelectedPackage(null);
    setShowBankDetails(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-2xl font-bold text-gray-900">
            {showBankDetails ? "Payment Details" : "Choose Accommodation"}
          </h3>
          <button
            onClick={resetModal}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!showBankDetails ? (
            // Package Selection
            <div className="space-y-4">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                    pkg.highlight
                      ? "border-amber-500 bg-amber-50 shadow-lg"
                      : "border-gray-200 hover:border-amber-300"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {pkg.name}
                      </h4>
                      <p className="text-sm text-gray-600">{pkg.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">
                        ₦{pkg.price.toLocaleString()}
                      </div>
                      {pkg.highlight && (
                        <span className="inline-block mt-1 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                          BEST VALUE
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            // Bank Details
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Selected Package
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {packages.find((p) => p.id === selectedPackage)?.name}
                  </span>
                  <span className="text-2xl font-bold text-amber-600">
                    ₦
                    {packages
                      .find((p) => p.id === selectedPackage)
                      ?.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-gray-900 text-lg mb-4">
                  Bank Transfer Details
                </h4>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Bank Name:</span>
                    <span className="font-semibold text-gray-900">GTBank</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-semibold text-gray-900">
                      0123456789
                    </span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-semibold text-gray-900">
                      Pneumatikos Church
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Please use your full name as the
                    transfer reference and keep your payment receipt for upload
                    during registration.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowBankDetails(false)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleProceedToRegistration}
                  className="flex-1 px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-colors shadow-lg"
                >
                  Proceed to Registration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
