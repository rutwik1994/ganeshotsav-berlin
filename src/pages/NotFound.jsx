import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page Not Found - Ganeshotsav Berlin");
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <p className="text-7xl mb-6">🕉️</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold">
        Back to Home
      </Link>
    </div>
  );
}
