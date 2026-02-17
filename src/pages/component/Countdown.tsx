import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-03-15T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className="space-y-2">
            <div className="text-5xl md:text-7xl font-bold text-gray-900">
              {timeLeft.days}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Days
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-7xl font-bold text-gray-900">
              {timeLeft.hours}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Hours
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-7xl font-bold text-gray-900">
              {timeLeft.minutes}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Minutes
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-5xl md:text-7xl font-bold text-gray-900">
              {timeLeft.seconds}
            </div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>

        <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>

        <p className="text-xl md:text-2xl text-gray-700 italic">
          Get ready for a life-changing encounter.
        </p>
      </div>
    </section>
  );
}
