interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070"
          alt="Camp Meeting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight">
            PNEUMATIKOS
            <span className="block text-amber-400 mt-2">CAMP MEETING</span>
          </h1>

          <div className="space-y-3 text-white/90 text-lg md:text-xl">
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">📅</span>
              <span>March 15-17, 2026</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Faith Arena, Lagos</span>
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="mt-8 px-12 py-5 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
