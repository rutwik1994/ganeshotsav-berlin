import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

// NOTE: the live homepage renders entirely client-side, so its actual copy
// couldn't be captured from a static export (it only ever showed "Loading...").
// This page is reconstructed from the site's meta tags, structured data
// (JSON-LD event/sub-event info) and language reused from the About/Program
// pages, so treat it as a first draft to review and replace with the real copy.

const EXPECT = [
  { icon: "🪔", title: "Traditional Ceremonies", desc: "Daily aarti, puja, and authentic rituals performed by experienced priests" },
  { icon: "🎭", title: "Cultural Performances", desc: "Classical dance, music concerts, and live entertainment throughout the festival" },
  { icon: "🎨", title: "Workshops & Activities", desc: "Hands-on workshops for all ages — idol making, rangoli, cooking, and more" },
  { icon: "🌊", title: "Grand Visarjan", desc: "Experience the spectacular farewell procession on Saturday, September 26" },
];

const STATS = [
  { value: "4000+", label: "Festival Visitors" },
  { value: "50+", label: "Cultural Programs" },
  { value: "100+", label: "Active Volunteers" },
  { value: "12", label: "Days of Celebration" },
];

export default function Home() {
  usePageTitle(
    "Ganeshotsav Berlin 2026 | September 14-26, 2026 | Germany's Premier Ganesh Chaturthi Festival",
    "Join Ganeshotsav Berlin 2026 from September 14-26, 2026! 12 days of cultural performances, traditional ceremonies, workshops, and the Grand Visarjan Miravnuk on Saturday, September 26, 2026."
  );

  return (
    <div>
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-6">
              <span>📅</span>
              <span>{SITE.dates}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Ganeshotsav Berlin
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              {SITE.tagline}
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              12 days of traditional ceremonies, cultural performances, workshops, and community celebrations —
              culminating in the Grand Visarjan Miravnuk procession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Join WhatsApp Channel
              </a>
              <Link
                to="/program"
                className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300"
              >
                View Program
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                First 10-day Sarvajanik Ganeshotsav in Europe
              </div>
              <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                132 Years of Sacred Tradition
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2">Festival Opening</h3>
              <div className="text-3xl font-black mb-2">Monday</div>
              <p className="text-white/90 mb-4">Monday, September 14, 2026</p>
              <p className="text-white/80">The festival begins with the traditional Pranapratishtha ceremony and grand inauguration</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-2">Grand Visarjan</h3>
              <div className="text-3xl font-black mb-2">Saturday</div>
              <p className="text-white/90 mb-4">Saturday, September 26, 2026</p>
              <p className="text-white/80">Experience the spectacular farewell procession marking the festival's grand finale</p>
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

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl shadow-lg p-6">
                <p className="text-4xl font-black text-orange-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">Be Part of the Celebration</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Learn about our story, meet the team behind the festival, or become a sponsor for 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Our Story
                </Link>
                <Link
                  to="/support"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Partnership Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
