import { Link, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { PRESS_RELEASES } from "../data/press";

export default function PressArticle() {
  const { slug } = useParams();
  const article = PRESS_RELEASES.find((r) => r.slug === slug);

  usePageTitle(article ? `${article.title} | Ganeshotsav Berlin Press` : "Press Release | Ganeshotsav Berlin");

  if (!article) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Press release not found</h1>
        <Link to="/press" className="text-orange-600 font-semibold">
          ← Back to Press &amp; Media
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/press" className="text-orange-600 font-semibold text-sm">
              ← Back to Press &amp; Media
            </Link>
            <div className="flex items-center gap-3 mt-6 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                {article.category}
              </span>
              <time className="text-sm text-slate-500 font-medium">{article.date}</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
            <img src={article.image} alt={article.title} className="w-full rounded-2xl mb-8" loading="lazy" />
            <p className="text-lg text-gray-700 leading-relaxed">{article.excerpt}</p>
            <p className="text-sm text-gray-400 mt-8 italic">
              Full release text wasn't available in the source export — replace this with the complete press
              release copy.
            </p>
          </div>
        </div>
      </section>
      <WhatsAppSection />
    </div>
  );
}
