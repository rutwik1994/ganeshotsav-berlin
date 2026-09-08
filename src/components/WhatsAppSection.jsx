import { SITE } from "../lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppSection() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-12" aria-labelledby="whatsapp-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <WhatsAppIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 id="whatsapp-heading" className="text-3xl font-bold text-white mb-4">
            Stay Connected with Ganeshotsav Berlin
          </h2>
          <p className="text-green-100 text-lg mb-8 leading-relaxed">
            Join our WhatsApp Channel for instant updates on events, festivals, and community news. Be the first to know
            about our celebrations!
          </p>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300 shadow-xl"
          >
            <WhatsAppIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            Join Our Channel
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <div className="mt-6 flex items-center justify-center text-green-100 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Join 2,500+ community members • No spam, only valuable updates
          </div>
        </div>
      </div>
    </section>
  );
}
