import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

const TIMELINE = [
  { year: "2019", title: "First Sacred Celebration", desc: "Historic one-day celebration at Shri Ganesha Hindu Temple with the first dhol-tasha performance" },
  { year: "2021", title: "Street Celebrations Begin", desc: "Festivities moved to the streets, embracing the wider international community" },
  { year: "2022", title: "European Milestone", desc: "First 10-day Sarvajanik Ganeshotsav in Europe" },
];

const HISTORY_STATS = [
  { value: "1893", icon: "⚱️", label: "Sacred Beginning", desc: "Sarvajanik Ganeshotsav established" },
  { value: "132", icon: "🙏", label: "Years of Devotion", desc: "Unbroken tradition of faith" },
  { value: "2022", icon: "🌍", label: "Global Journey", desc: "First overseas replica blessing" },
];

const MISSION_PILLARS = [
  { icon: "🏛️", title: "Preserve Heritage", desc: "Maintaining authentic traditions and spiritual practices passed down through generations", tag: "📿 Sacred Traditions" },
  { icon: "🤝", title: "Foster Unity", desc: "Bringing together diverse communities through shared celebration and mutual understanding", tag: "🌈 Cultural Harmony" },
  { icon: "🌟", title: "Inspire Growth", desc: "Creating opportunities for personal and spiritual development through cultural engagement", tag: "✨ Spiritual Growth" },
];

const IMPACT_STATS = [
  { value: "4000+", label: "👥 Festival Visitors" },
  { value: "50+", label: "🎨 Cultural Programs" },
  { value: "100+", label: "🙏 Active Volunteers" },
  { value: "10", label: "📅 Days of Celebration" },
];

const OBJECTIVES = [
  {
    title: "Support and Advocacy for Shri Ganesha Hindu Temple, Berlin",
    desc: "To raise international awareness and generate sustained support — financial, logistical, and otherwise — for the ongoing development, construction, future growth and promotion of the Shri Ganesha Hindu Temple, Berlin.",
  },
  {
    title: "Preservation and Promotion of Cultural Heritage",
    desc: "To celebrate the festival of Ganeshotsav in accordance with traditional practices and to emulate the scale, spirit, and ceremonial grandeur of the public celebrations as historically observed in the Republic of India, particularly within the State of Maharashtra, and notably the City of Pune.",
  },
  {
    title: "Promotion of Traditional Maharashtrian Folk Arts and Instruments",
    desc: "To facilitate the introduction, demonstration, and wider recognition of traditional Maharashtrian musical instruments, including but not limited to Dhol-Tasha and Lezim, within the European context.",
  },
  {
    title: "Facilitation of Cross-Cultural Understanding",
    desc: "To actively engage and include individuals and groups from non-Indian cultural backgrounds in the celebration and associated activities, promoting intercultural dialogue, understanding, and mutual respect.",
  },
];

const FAQS = [
  {
    q: "What is Ganesh Chaturthi?",
    a: "Ganesh Chaturthi is one of the most popular Hindu festivals celebrated in honor of Lord Ganesha, the elephant-headed deity who is widely revered as the remover of obstacles and the god of new beginnings and wisdom.",
  },
  {
    q: "When is Ganesh Chaturthi celebrated?",
    a: "The celebration happens on Chaturthi (fourth day) of the bright fortnight of Bhadrapada month, which typically falls between August and September in the Western calendar. It lasts for 11 days, with the biggest celebrations on the first and last days.",
  },
  {
    q: "Do I need to be Hindu to attend Ganeshotsav?",
    a: "Not at all! Our Ganeshotsav celebration is open to everyone regardless of religious background. We welcome people from all cultures who are interested in learning about and experiencing this beautiful tradition.",
  },
  {
    q: "How can I participate?",
    a: "There are many ways to participate! You can attend our public events, volunteer to help with organization, contribute financially, or even perform cultural arts during the Ganeshotsav celebration. Check our Program page for upcoming opportunities.",
  },
];

export default function About() {
  usePageTitle(
    "About Ganeshotsav Berlin 2026 | Our Story, Mission & Team",
    "Ganeshotsav Berlin 2026: Celebrate Ganesh Chaturthi in Berlin with cultural performances, traditional ceremonies, workshops, and a vibrant Indian community."
  );

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Ganeshotsav
              </span>{" "}
              Berlin
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
              A heartfelt expression of community spirit and cultural unity
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                First 10-day Sarvajanik Ganeshotsav in Europe
              </div>
              <div className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                132 Years of Sacred Tradition
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <a href="#introduction" className="text-orange-700 hover:text-orange-900">Our Story</a>
              <a href="#history" className="text-orange-700 hover:text-orange-900">History</a>
              <a href="#vision" className="text-orange-700 hover:text-orange-900">Our Vision</a>
            </div>
          </div>
        </div>
      </section>

      <section id="introduction" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-600 font-semibold mb-2">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                From Sacred Traditions to{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Global Celebration
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A community initiative that transcends organizational boundaries, bringing the soul of Maharashtra to
                the heart of Berlin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-xl font-bold text-gray-900">Ganpati Bappa Morya</h3>
                <p>
                  Ganeshotsav Berlin is not just a celebration — it is a heartfelt expression of community spirit and
                  cultural unity. This initiative transcends organizational boundaries, bringing together people from
                  all walks of life.
                </p>
                <p>
                  <strong>Our Journey Begins:</strong> In 2019, Marathi Mitra Berlin organized a one-day cultural
                  celebration at the Shri Ganesha Hindu Temple to mark Ganesh Chaturthi. This historic event featured
                  Berlin's first-ever dhol-tasha performance by Ramanbaug Yuva Manch Germany, echoing the vibrant
                  sounds of Maharashtra in the heart of Berlin.
                </p>
                <p>
                  <strong>Growing Together:</strong> By 2021, the festivities moved to the streets outside the temple,
                  bringing the spirit of Ganeshotsav directly to the wider international community. The response was
                  overwhelmingly positive, transforming a modest event into a grand, inclusive public celebration.
                </p>
                <p>
                  <strong>Collaboration &amp; Expansion:</strong> Recognizing the growing enthusiasm, MMB and RYMG
                  nurtured the idea of expanding the celebration. RYMG proposed establishing collaborative ties with
                  Pune's historic Shri Kasba Ganpati mandal, aiming to elevate Ganesh Utsav in Berlin. This led to a
                  full-fledged ten-day Sarvajanik (public) Ganeshotsav — the first of its kind in Europe — with Pooja
                  and Aarti twice daily.
                </p>
                <p>
                  <strong>Spiritual Core:</strong> At the heart of this initiative is Shri Kasba Ganpati, the first
                  among Pune's "Manache" (honored) Ganpatis. The enduring relationship between Shri Kasba Ganpati
                  Mandal and Ramanbaug Yuva Manch, cultivated over decades, helped bridge Pune and Berlin. This
                  partnership enabled meaningful collaboration between Shri Kasba Ganpati Mandal, Shri Ganesha Hindu
                  Temple Berlin, and Marathi Mitra Berlin — with Ramanbaug Yuva Manch Germany as the coordinating link.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Dhol-Tasha", "Maharashtrian Culture", "Sacred Traditions"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-6">The Sacred Journey</h4>
                <div className="space-y-6">
                  {TIMELINE.map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="text-2xl font-black text-orange-600 shrink-0">{item.year}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-600 font-semibold mb-2">Sacred Legacy</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Historical Significance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                132 years of devotional fervor crossing oceans to reach the heart of Europe
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">🕉️ A Sacred Milestone 🕉️</h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Established in 1893, the Sarvajanik Ganeshotsav has long stood as a powerful emblem of cultural
                solidarity and devotional fervor. In 2022, a momentous chapter was added to this legacy: for the
                first time in 132 years, a replica of the revered Shri Kasba Ganpati idol was ceremoniously brought
                overseas to Berlin, Germany.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {HISTORY_STATS.map((stat) => (
                  <div key={stat.value} className="text-center bg-orange-50 rounded-xl p-6">
                    <div className="text-3xl font-black text-orange-600 mb-1">{stat.value}</div>
                    <div className="font-semibold text-gray-900">
                      {stat.icon} {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">📈 Growth &amp; Evolution</h4>
                <p className="text-gray-700 leading-relaxed">
                  This landmark occasion marked the inception of Ganeshotsav Berlin, which became the first ten-day
                  Sarvajanik Ganeshotsav ever held in Europe. Since its inception, the festival has witnessed
                  remarkable growth, propelled by the unwavering enthusiasm of dedicated volunteers, active community
                  participation, and the involvement of visiting artists.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🙏 Spiritual Depth</h4>
                <p className="text-gray-700 leading-relaxed">
                  It has evolved into a vibrant and dignified expression of India's rich spiritual and cultural
                  heritage on the global stage. The observance of Ganeshotsav within the sacred premises of the Shri
                  Ganesha Hindu Temple, coupled with the Temple's devoted support and involvement, has endowed the
                  celebration with a profound sense of sanctity and spiritual depth.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
              <h4 className="text-xl font-bold mb-3">🌉 Bridging Pune &amp; Berlin 🌉</h4>
              <p className="text-white/90 max-w-2xl mx-auto">
                Through sacred bonds and cultural ties, Shri Kasba Ganpati's blessings now grace European soil,
                creating an eternal bridge between the spiritual heart of Maharashtra and the multicultural spirit of
                Berlin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-orange-600 font-semibold mb-2">Our Purpose</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Spreading joy, unity, and spiritual heritage across borders through divine celebration
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🙏 Our Sacred Purpose 🙏</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
                To faithfully preserve, promote, and share the rich cultural and spiritual heritage of India through
                the celebration of Ganeshotsav, while fostering unity, understanding, and cross-cultural harmony
                within the diverse communities of Berlin and beyond.
              </p>
              <p className="font-semibold text-orange-700">🌍 Bridging Cultures, Uniting Hearts ❤️</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {MISSION_PILLARS.map((p) => (
                <div key={p.title} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
                  <p className="text-xs font-semibold text-orange-600">{p.tag}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">🌍 Our Growing Impact 📈</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                {IMPACT_STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-black text-orange-600">{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-700">
                Through devotion, community spirit, and cultural exchange, we continue to grow as a beacon of harmony
                in the heart of Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vision &amp; Objectives</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our foundational purpose for organizing the annual ten-day Sarvajanik Ganeshotsav in Berlin
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {OBJECTIVES.map((o, i) => (
                <div key={o.title} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-2 text-orange-600 font-black text-2xl mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{o.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Passionate volunteers and organizers who bring Ganeshotsav Berlin to life
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Dedicated Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From executive committee members to volunteers, our team works year-round to preserve traditions,
            organize events, and build community connections that make Ganeshotsav Berlin special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team" className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              Meet Our Team
            </Link>
            <a
              href={SITE.volunteerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-all duration-300"
            >
              Join as Volunteer
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
