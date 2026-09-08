// Shared hero used by most inner pages: orange gradient wash + big gradient-text heading.
export default function PageHero({ eyebrow, title, highlight, subtitle, children }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-6">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            {title}
            {highlight && (
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>
          {subtitle && <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
