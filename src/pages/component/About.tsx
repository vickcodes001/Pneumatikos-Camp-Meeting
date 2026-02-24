export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          About the <span className="text-amber-500">Camp</span>
        </h2>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            The Pneumatikos Camp Meeting is an annual gathering of believers
            seeking a deeper relationship with God through worship, fellowship,
            and powerful teaching from His Word. This four-day spiritual retreat
            is designed to refresh your spirit and ignite your faith.
          </p>

          <p>
            Join hundreds of passionate believers as we create an atmosphere of
            praise, prayer, and divine encounter. Experience powerful ministry
            sessions, engaging workshops, and life-transforming moments that
            will equip you for the journey ahead. This is more than a
            conference—it's a divine appointment.
          </p>

          <p>
            Whether you're seeking breakthrough, restoration, or simply a place
            to encounter God's presence, this camp meeting will meet you at your
            point of need. Come with expectation, leave transformed.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-12 italic text-gray-800">
            <p className="text-xl">
              "For where two or three gather in my name, there am I with them."
            </p>
            <p className="text-right mt-2 text-sm font-semibold">
              — Matthew 18:20 (NIV)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
