import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { PRESS_RELEASES } from "../data/press";
import { SITE } from "../lib/site";

const STATS = [
  { value: "50+", label: "Media Features" },
  { value: "1M+", label: "Total Reach" },
  { value: "10+", label: "Media Partners" },
  { value: "2", label: "Countries" },
];

const MEDIA_KIT = [
  { title: "Brand Assets", desc: "High-resolution logos, images, and visual assets in various formats", meta: "PNG, SVG, EPS • 300 DPI" },
  { title: "Fact Sheets", desc: "Key statistics, background information, and festival highlights", meta: "PDF • Updated 2026" },
  { title: "Photo Gallery", desc: "Professional event photography and behind-the-scenes content", meta: "300+ Images • 4K Quality" },
];

export default function Press() {
  usePageTitle(
    "Press & Media - Ganeshotsav Berlin",
    "Media resources, press releases, and coverage of Ganeshotsav Berlin - Europe's largest Ganesh Chaturthi celebration."
  );

  const [featured, ...rest] = PRESS_RELEASES;

  return (
    <div>
      <section className="relative bg-white border-b border-slate-200 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-8">
              Press &amp; Media Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Media Resources &amp;
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Press Coverage
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Comprehensive media resources for Europe's largest Ganesh Chaturthi celebration. Access high-resolution
              assets, press releases, and expert commentary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#media-kit" className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-lg transition-all duration-300">
                Download Media Kit
              </a>
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl border-2 border-slate-200 transition-all duration-300">
                Media Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-slate-900 mb-2">{s.value}</p>
              <p className="text-slate-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Latest Press Releases</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay updated with our latest announcements and newsworthy developments
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-500 transform hover:-translate-y-2 lg:col-span-2 lg:row-span-2">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img src={featured.image} alt={featured.title} className="w-full object-cover h-64 lg:h-80" loading="lazy" />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {featured.category}
                  </span>
                  <time className="text-sm text-slate-500 font-medium">{featured.date}</time>
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-2xl lg:text-3xl leading-tight">
                  <Link to={`/press/${featured.slug}`}>{featured.title}</Link>
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg lg:text-xl mb-6">{featured.excerpt}</p>
                <Link to={`/press/${featured.slug}`} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                  Read full release →
                </Link>
              </div>
            </article>

            {rest.map((r) => (
              <article key={r.slug} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img src={r.image} alt={r.title} className="w-full object-cover h-48" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {r.category}
                    </span>
                    <time className="text-sm text-slate-500 font-medium">{r.date}</time>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-xl">
                    <Link to={`/press/${r.slug}`}>{r.title}</Link>
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base mb-4">{r.excerpt}</p>
                  <Link to={`/press/${r.slug}`} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                    Read full release →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media-kit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Media Kit &amp; Resources</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to cover Ganeshotsav Berlin professionally. High-resolution assets, brand
              guidelines, and background information.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_KIT.map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <div className="text-sm text-slate-500">{item.meta}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={`mailto:${SITE.pressEmail}`}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300"
            >
              Request the Media Kit
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-8">
              Media Relations Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Cover
              <br />
              <span className="text-orange-400">Our Story?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our dedicated media relations team is available to assist with interviews, provide expert commentary,
              and deliver high-quality assets for your coverage.
            </p>
            <ul className="space-y-4 text-slate-300">
              <li>✓ 24-hour response guarantee</li>
              <li>✓ Expert interviews available</li>
              <li>✓ Custom content creation</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-slate-50 rounded-2xl">
                <div className="ml-2">
                  <p className="text-sm font-medium text-slate-500 mb-1">Press Inquiries</p>
                  <a href={`mailto:${SITE.pressEmail}`} className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors">
                    {SITE.pressEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-center p-6 bg-slate-50 rounded-2xl">
                <div className="ml-2">
                  <p className="text-sm font-medium text-slate-500 mb-1">Direct Line</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center p-6 bg-slate-50 rounded-2xl">
                <div className="ml-2">
                  <p className="text-sm font-medium text-slate-500 mb-1">Response Time</p>
                  <p className="text-lg font-bold text-slate-900">Within 4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
