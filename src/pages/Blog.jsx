import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";

export default function Blog() {
  usePageTitle(
    "Ganeshotsav Berlin Blog 2026 | Cultural Stories, Festival Insights & Traditions",
    "Explore Ganeshotsav Berlin blog - cultural stories, festival insights, traditions, and community experiences from Germany's largest Ganesh Chaturthi celebration."
  );
  const [query, setQuery] = useState("");

  return (
    <div>
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">Cultural Stories &amp; Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ganeshotsav Berlin
            <span className="block text-orange-100">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-50 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover stories, traditions, and insights from our vibrant community celebrating Ganesh Chaturthi in
            Berlin
          </p>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 inline-block border border-white/20 shadow-lg">
            <p className="text-lg font-semibold text-white">0 articles available</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, traditions, events..."
              className="block w-full px-5 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No articles published yet</h2>
          <p className="text-gray-600">
            We're working on our first cultural stories and festival insights. Check back soon, or join our WhatsApp
            channel to be notified the moment new posts go live.
          </p>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
