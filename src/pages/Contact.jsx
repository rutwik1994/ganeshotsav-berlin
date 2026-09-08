import { useState } from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

const INQUIRY_TYPES = [
  { value: "general", label: "General Inquiry" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "volunteer", label: "Volunteering" },
  { value: "press", label: "Press & Media" },
  { value: "vendor", label: "Vendor/Supplier" },
  { value: "partnership", label: "Partnership" },
];

const FAQS = [
  {
    q: "How can I sponsor or partner with Ganeshotsav Berlin?",
    a: "We offer various partnership packages for businesses and organizations. Visit our support page to learn about sponsorship opportunities.",
  },
  {
    q: "How do I volunteer for the Ganeshotsav celebration?",
    a: "We welcome volunteers from all backgrounds! Visit our volunteer section to learn about opportunities and register your interest.",
  },
  {
    q: "Can I set up a stall or become a vendor?",
    a: 'Yes! We have opportunities for food vendors, cultural item sellers, and service providers. Contact us with "Vendor Inquiry" as the subject to learn about requirements and availability.',
  },
  {
    q: "Are you looking for press coverage or media partnerships?",
    a: 'Absolutely! We welcome media coverage and press partnerships. Please contact us with "Press & Media" as your inquiry type for press kits and media information.',
  },
  {
    q: "What is the best way to reach the venue?",
    a: "The temple is easily accessible by public transport. Check our detailed directions page for complete transport information and maps.",
  },
];

export default function Contact() {
  usePageTitle(
    "Contact Ganeshotsav Berlin 2026 | Get in Touch",
    "Ganeshotsav Berlin 2026: Celebrate Ganesh Chaturthi in Berlin with cultural performances, traditional ceremonies, workshops, and a vibrant Indian community."
  );

  const [form, setForm] = useState({ name: "", email: "", inquiry_type: "general", subject: "", message: "" });
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildEmailBody = () =>
    `Name: ${form.name}\nEmail: ${form.email}\nInquiry Type: ${INQUIRY_TYPES.find((t) => t.value === form.inquiry_type)?.label ?? ""}\n\n${form.message}`;

  const handleOpenEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Website inquiry");
    const body = encodeURIComponent(buildEmailBody());
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = async () => {
    const text = `To: ${SITE.email}\nSubject: ${form.subject}\n\n${buildEmailBody()}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — silently ignore
    }
  };

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">Get in touch with the Ganeshotsav Berlin team</p>
          <a href={`mailto:${SITE.email}`} className="text-orange-700 font-semibold hover:text-orange-900">
            📧 {SITE.email}
          </a>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { icon: "📍", title: "Need Directions?", desc: "Find detailed directions to Sri Ganesha Hindu Tempel", to: "/directions", cta: "Get Directions" },
              { icon: "💼", title: "Partnership", desc: "Interested in sponsoring or partnering with us?", to: "/support", cta: "Partnership Info" },
              { icon: "🤝", title: "Volunteer", desc: "Join our volunteer team and help make it happen", to: "/support#volunteer", cta: "Join as Volunteer" },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                <Link to={card.to} className="text-orange-600 font-semibold text-sm hover:text-orange-800">
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600">We'll get back to you as soon as possible</p>
            </div>
            <form onSubmit={handleOpenEmail} className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                  <select
                    id="inquiry_type"
                    value={form.inquiry_type}
                    onChange={update("inquiry_type")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    id="subject"
                    required
                    type="text"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="Brief subject of your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300 resize-vertical"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                >
                  Open Email App to Send Message
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  {copied ? "Copied!" : "Copy Email Details to Clipboard"}
                </button>
              </div>
              <p className="text-sm text-gray-500">
                If the email app doesn't open automatically, use the copy button above or{" "}
                <a href={`mailto:${SITE.email}`} className="text-orange-600 font-medium">
                  click here to email us directly
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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
