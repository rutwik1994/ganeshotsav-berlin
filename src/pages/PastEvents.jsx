import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";

const JOURNEY = [
  {
    year: "2025",
    color: "text-orange-600",
    title: "15 Days of Celebration",
    dates: "August 23 - September 6, 2025",
    desc: "Our most ambitious festival yet! 15 days of cultural immersion featuring traditional ceremonies, world-class performances, workshops, and the grand Visarjan procession. Thousands of attendees celebrated together in the heart of Berlin.",
    tags: ["🎭 Cultural Performances", "🪔 Traditional Ceremonies", "🎨 Art Workshops", "🍛 Food Festival"],
  },
  {
    year: "2024",
    color: "text-orange-500",
    title: "Community & Culture",
    dates: "September 2024",
    desc: "A memorable celebration that brought together our community with enhanced cultural programs and expanded participation. The festival continued to grow in scope and attendance.",
    tags: ["👨‍👩‍👧‍👦 Family Programs", "🎵 Live Music", "📸 Photo Exhibition"],
  },
  {
    year: "2023",
    color: "text-orange-400",
    title: "New Beginnings",
    dates: "September 2023",
    desc: "The foundation year that established Ganeshotsav Berlin as a premier cultural event in Germany. A successful debut that set the stage for years to come.",
    tags: ["🚀 Inaugural Edition", "🤝 Community Building"],
  },
];

const SPONSORS_2025 = [
  { name: "Zora", href: "https://zorastore.eu", logo: "https://zorastore.eu/cdn/shop/files/logo_zora_ea0b8c_1992x450.png?v=1753289554" },
  { name: "Eiiet", href: "https://eiiet.com", logo: "https://eiiet.com/wp-content/uploads/2025/07/EIIET-LogoRetina-e1751455614526.png#3132" },
  { name: "Lemfi", href: "https://lemfi.com", logo: "https://support.lemfi.com/hc/theming_assets/01HZQ09QCVZYNAJZ7B3E4TKPXR" },
  { name: "Aspora", href: "https://www.aspora.com", logo: "https://ap-south-1.graphassets.com/cmb1b2adp035i07pm5v5i6ajm/cmf2nmqhk17mc08po0qlh731w" },
  { name: "Remitly", href: "https://remitly.com", logo: "https://ap-south-1.graphassets.com/cmb1b2adp035i07pm5v5i6ajm/cmf2nrr4a183708poaf0fo5zo" },
];

export default function PastEvents() {
  usePageTitle(
    "Past Events | Ganeshotsav Berlin - Festival Archive",
    "Explore the history of Ganeshotsav Berlin! View highlights, photos, and past sponsors from previous editions of Germany's largest Ganesh Chaturthi festival."
  );

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Past Events
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Celebrating years of tradition, community, and cultural excellence in Berlin
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            <div className="space-y-12">
              {JOURNEY.map((item) => (
                <div key={item.year} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`text-5xl sm:text-6xl font-black ${item.color}`}>{item.year}</span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.dates}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{item.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Past Partners</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're grateful to all the organizations that supported Ganeshotsav Berlin in previous years
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">2025 Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {SPONSORS_2025.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">Be Part of 2026</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Join us as a sponsor for Ganeshotsav Berlin 2026! Connect with thousands of attendees and support
                Berlin's premier cultural festival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/support"
                  className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Partnership Opportunities
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
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
