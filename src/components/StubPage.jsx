import WhatsAppSection from "./WhatsAppSection";

// Simple placeholder for pages the source export didn't include content for.
export default function StubPage({ icon = "🚧", title, subtitle, children }) {
  return (
    <div>
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">{title}</h1>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          {children && <div className="max-w-3xl mx-auto mt-10 text-left text-gray-700 leading-relaxed space-y-4">{children}</div>}
        </div>
      </section>
      <WhatsAppSection />
    </div>
  );
}
