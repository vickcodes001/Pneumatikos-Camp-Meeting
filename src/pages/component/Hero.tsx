export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90 z-10"></div>
        <img
          src="images/hero-image.jpg"
          alt="Camp Meeting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto">
        <div className="space-y-6">
          {/* Tag */}
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white">
            #PCM2026
          </h3>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
            PNEUMATIKOS
            <span className="block text-amber-500">CAMP MEETING</span>
          </h1>

          {/* Date + Location */}
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row sm:items-center divide-y sm:divide-y-0 sm:divide-x divide-white/30 rounded-2xl sm:rounded-full bg-amber-500 text-white shadow-lg overflow-hidden w-full max-w-3xl">
              {/* Date */}
              <div className="flex items-center justify-center gap-3 px-6 py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                <svg
                  className="w-5 h-5 flex"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10m-13 9h16a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                  />
                </svg>
                <span>April 02 – 06, 2026</span>
              </div>

              {/* Location */}
              <div className="flex items-start md:items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base md:text-lg font-semibold text-center">
                <svg
                  className="w-5 h-5 flex"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Redemption Camping Ground, Ibadan Express Way</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-9 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
