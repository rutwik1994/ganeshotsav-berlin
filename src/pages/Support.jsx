import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

export default function Support() {
  usePageTitle("Support Us - Ganeshotsav Berlin");

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Support Ganeshotsav Berlin</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Sponsorships and volunteers are what make this festival possible each year — here's how to get involved.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Become a Sponsor</h2>
            <p className="text-gray-600 mb-6">
              Connect with thousands of attendees and support Berlin's premier cultural festival. Contact us for
              partnership packages and our prospectus.
            </p>
            <a href={`mailto:${SITE.email}?subject=Sponsorship Inquiry`} className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold">
              Get Partnership Info
            </a>
          </div>
          <div id="volunteer" className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Volunteer With Us</h2>
            <p className="text-gray-600 mb-6">
              We welcome volunteers from all backgrounds to help organize, run, and celebrate the festival alongside
              our team.
            </p>
            <a
              href={SITE.volunteerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 rounded-full font-semibold"
            >
              Join as Volunteer
            </a>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
