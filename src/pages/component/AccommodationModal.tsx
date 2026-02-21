import { useState } from "react";

interface AccommodationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PackageType = "early" | "regular" | "group6" | null;

export default function AccommodationModal({
  isOpen,
  onClose,
}: AccommodationModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(null);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const packages = [
    // {
    //   id: "early" as const,
    //   name: "Early Bird (Members Only)",
    //   price: 13000,
    //   description: "Grace Ambassadors & Gawom members who pay before March 15",
    //   badge: "LIMITED TIME",
    //   highlight: true,
    // },
    {
      id: "regular" as const,
      name: "Single (Standard)",
      price: 17500,
      description: "Individual accommodation for 4 nights",
    },
    {
      id: "group6" as const,
      name: "Group Room (Max 6 People)",
      price: 100000,
      description: "₦100,000 per room • Best value option",
      badge: "BEST VALUE",
      highlight: true,
    },
  ];

  const handleSelectPackage = (packageId: PackageType) => {
    setSelectedPackage(packageId);
    setShowBankDetails(true);
  };

  const handleProceedToRegistration = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScNc_QcDVXeUHREg6zmeeqbAiuXpayJixIHG49h93zZgPE5rA/viewform?usp=header",
      "_blank",
    );
    onClose();
  };

  const resetModal = () => {
    setSelectedPackage(null);
    setShowBankDetails(false);
    onClose();
  };

  if (!isOpen) return null;

  const selected = packages.find((p) => p.id === selectedPackage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="text-2xl font-bold">
            {showBankDetails ? "Payment Details" : "Choose Accommodation"}
          </h3>
          <button onClick={resetModal}>✕</button>
        </div>

        <div className="p-6">
          {!showBankDetails ? (
            <div className="space-y-4">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition ${
                    pkg.highlight
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200 hover:border-amber-300"
                  }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="md:text-xl font-bold">{pkg.name}</h4>
                      <p className="text-sm text-gray-600">{pkg.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="md:text-2xl font-bold text-amber-600">
                        ₦{pkg.price.toLocaleString()}
                      </div>
                      {/* {pkg.badge && (
                        <span className="inline-block mt-2 px-1 md:px-3 py-1 bg-amber-500 text-white text-xs rounded-full">
                          {pkg.badge}
                        </span>
                      )} */}
                    </div>
                  </div>
                </button>
              ))}

              <div className="text-sm text-gray-600 pt-4">
                • Maximum 6 people per room • Payment can be made in
                installments • Accommodation payment is mandatory
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Selected Package */}
              <div className="bg-amber-50 rounded-xl p-6">
                <h4 className="font-bold mb-3">Selected Package</h4>
                <div className="flex justify-between">
                  <span>{selected?.name}</span>
                  <span className="text-xl font-bold text-amber-600">
                    ₦{selected?.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Bank Details */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <h4 className="font-bold text-lg">Bank Transfer Details</h4>

                <div className="flex justify-between">
                  <span>Bank Name:</span>
                  <span className="font-semibold">Access Bank</span>
                </div>

                <div className="flex justify-between">
                  <span>Account Number:</span>
                  <span className="font-semibold">1810717854</span>
                </div>

                <div className="flex justify-between">
                  <span>Account Name:</span>
                  <span className="font-semibold">Rosemary Obike</span>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900 mt-4">
                  Send your payment receipt for proper recording. You may pay in
                  installments.
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowBankDetails(false)}
                  className="flex-1 px-6 py-4 border rounded-xl"
                >
                  Back
                </button>
                <button
                  onClick={handleProceedToRegistration}
                  className="flex-1 px-6 py-4 bg-amber-500 text-white font-bold rounded-xl"
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
