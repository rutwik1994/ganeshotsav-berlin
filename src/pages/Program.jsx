import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

const EXPECT = [
  { icon: "🪔", title: "Traditional Ceremonies", desc: "Daily aarti, puja, and authentic rituals performed by experienced priests" },
  { icon: "🎭", title: "Cultural Performances", desc: "Classical dance, music concerts, and live entertainment throughout the festival" },
  { icon: "🎨", title: "Workshops & Activities", desc: "Hands-on workshops for all ages - idol making, rangoli, cooking, and more" },
  { icon: "🌊", title: "Grand Visarjan", desc: "Experience the spectacular farewell procession on Saturday" },
];

export default function Program() {
  usePageTitle(
    "Program & Schedule | Ganeshotsav Berlin 2026",
    "Explore the complete program for Ganeshotsav Berlin 2026! 12 days of cultural performances, workshops, ceremonies, and celebrations from September 14-26, 2026."
  );

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-6">
              <span>📅</span>
              <span>{SITE.dates}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Festival Program
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              12 Days of Cultural Excellence
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional ceremonies and workshops to world-class performances and the Grand Visarjan Miravnuk
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-l-4 border-orange-600 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Program Coming Soon!</h3>
                  <p className="text-gray-700">
                    We're finalizing our exciting lineup of events, performances, and workshops. The complete program
                    will be announced in the coming months. Stay tuned for updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Festival Timeline</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Mark your calendar for 12 days of celebration
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Festival Opening</h3>
                <div className="text-3xl font-black mb-2">Monday</div>
                <p className="text-white/90 mb-4">Monday, September 14, 2026</p>
                <p className="text-white/80">
                  The festival begins with traditional Pranapratishtha ceremony and grand inauguration
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="text-5xl mb-4">🌊</div>
                <h3 className="text-2xl font-bold mb-2">Grand Visarjan</h3>
                <div className="text-3xl font-black mb-2">Saturday</div>
                <p className="text-white/90 mb-4">Saturday, September 26, 2026</p>
                <p className="text-white/80">
                  Experience the spectacular farewell procession marking the festival's grand finale
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Notified When Program Is Released</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our WhatsApp channel to be the first to know when the detailed program schedule is announced,
                including exact times for ceremonies, performances, and workshops.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {EXPECT.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
