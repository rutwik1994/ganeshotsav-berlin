import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

const TRANSPORT = [
  {
    icon: "🚇",
    title: "U-Bahn (Subway)",
    lines: [
      ["U7 - Südstern", "5 minutes walk"],
      ["U8 - Hermannplatz", "8 minutes walk"],
      ["U6 - Platz der Luftbrücke", "12 minutes walk"],
    ],
  },
  {
    icon: "🚆",
    title: "S-Bahn (Regional)",
    lines: [
      ["S1, S2, S25 - Tempelhof", "10 minutes walk"],
      ["S41, S42 - Hermannstraße", "12 minutes walk"],
    ],
  },
  {
    icon: "🚌",
    title: "Bus Lines",
    lines: [
      ["M41 - Hasenheide/Gneisenaustraße", "2 minutes walk"],
      ["104 - Südstern", "5 minutes walk"],
      ["166 - Platz der Luftbrücke", "8 minutes walk"],
    ],
  },
];

export default function Directions() {
  usePageTitle(
    "Directions to Ganeshotsav Berlin 2026 | How to Reach",
    "Ganeshotsav Berlin 2026: Celebrate Ganesh Chaturthi in Berlin with cultural performances, traditional ceremonies, workshops, and a vibrant Indian community."
  );

  const mapsQuery = encodeURIComponent(`${SITE.venue.name}, ${SITE.venue.address}`);

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">How to Reach Ganeshotsav Berlin</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">Complete directions to {SITE.venue.name}</p>
          <div className="inline-block bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm">
            <p className="font-semibold text-gray-900">📍 {SITE.venue.name}</p>
            <p className="text-gray-700">{SITE.venue.address}</p>
            <p className="text-gray-600 text-sm">{SITE.venue.district}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">📍 Venue Location</h2>
              <p className="text-gray-600">Interactive map with directions</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg aspect-video">
                <iframe
                  title="Venue location map"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">🏛️ Venue Details</h3>
                  <p className="font-semibold text-gray-900">{SITE.venue.name}</p>
                  <p className="text-gray-600">{SITE.venue.address}</p>
                  <p className="text-gray-600">{SITE.venue.district}</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">♿ Accessibility</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Ground floor facilities</li>
                    <li>• Accessible restrooms available</li>
                  </ul>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">🚊 Public Transport Options</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {TRANSPORT.map((mode) => (
                <div key={mode.title} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{mode.icon}</span>
                    <h3 className="font-bold text-gray-900">{mode.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {mode.lines.map(([line, time]) => (
                      <div key={line}>
                        <p className="text-gray-800 font-medium text-sm">{line}</p>
                        <p className="text-gray-500 text-xs">{time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">🎫 BVG Ticket Information</h3>
              <p className="text-gray-600">
                The venue is located in <strong>Zone AB</strong>. A regular Berlin public transport ticket (Zone AB)
                covers all the above transport options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">🚗 Other Transport Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🚗</span>
                  <h3 className="font-bold text-gray-900">By Car</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>Directions:</strong> Take the A100 (Berliner Ring) and exit at Tempelhof. Follow signs to
                  Neukölln and Hasenheide.
                </p>
                <p className="text-gray-600">
                  <strong>🅿️ Parking:</strong> Street parking available on Hasenheide and surrounding streets. Some
                  parking may be paid zones (check signs).
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🛴</span>
                  <h3 className="font-bold text-gray-900">Alternative Transport</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  <strong>🚲 Bike &amp; E-Scooter:</strong> Bike lanes available on Hasenheide. E-scooter parking
                  zones nearby.
                </p>
                <p className="text-gray-600">
                  <strong>🚕 Taxi &amp; Rideshare:</strong> From Berlin Hauptbahnhof: ~15-20 minutes • From
                  Brandenburg Airport: ~45-60 minutes • From Tegel area: ~25-30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Help Finding Us?</h2>
          <p className="mb-8 text-white/90">Have questions about directions or need assistance? Our team is here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </Link>
            <a href={`mailto:${SITE.email}`} className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Email Directly
            </a>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
