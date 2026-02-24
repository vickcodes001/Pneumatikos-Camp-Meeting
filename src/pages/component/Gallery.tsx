import { useState } from "react";

export default function Gallery() {
  const images = [
    // "images/gallery-1.jpg",
    "images/gallery-2.jpg",
    "images/gallery-3.jpg",
    "images/gallery-4.jpeg",
    "images/gallery-5.jpg",
    "images/gallery-6.jpeg",
    "images/gallery-7.jpeg",
    "images/gallery-8.jpeg",
    "images/gallery-9.jpeg",
    "images/gallery-10.jpeg",
    "images/gallery-11.jpeg",
    "images/gallery-12.jpeg",
    // "images/gallery-13.jpeg",
    "images/gallery-14.jpeg",
    "images/gallery-15.jpeg",
    "images/gallery-16.jpeg",
    "images/gallery-17.jpeg",
    "images/gallery-18.jpeg",
    // "images/gallery-19.jpeg",
    "images/gallery-20.jpeg",
    "images/gallery-21.jpeg",
    "images/gallery-22.jpeg",
    "images/gallery-23.jpeg",
    "images/gallery-24.jpeg",
    "images/gallery-25.jpeg",
    "images/gallery-26.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Last Year's <span className="text-amber-500">Memories</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          See what God did in our previous camp meeting
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-100 md:h-125 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-3 bg-amber-500"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
