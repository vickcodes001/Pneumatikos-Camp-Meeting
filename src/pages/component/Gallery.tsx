import { useState } from "react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073",
    "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&w=2070",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
    "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?q=80&w=2128",
    "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2074",
    "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?q=80&w=2070",
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
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
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
