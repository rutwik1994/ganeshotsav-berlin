import { Link } from "react-router-dom";
import { SITE } from "../lib/site";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "./icons";

const FESTIVAL_LINKS = [
  { to: "/about", label: "About" },
  { to: "/program", label: "Program" },
  { to: "/past-events", label: "Past Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
];

const COMMUNITY_LINKS = [
  { to: "/contact", label: "Contact" },
  { to: "/press", label: "Press" },
  { to: "/code-of-conduct", label: "Code of Conduct" },
];

const LEGAL_LINKS = [
  { to: "/impressum", label: "Impressum" },
  { to: "/privacy", label: "Privacy Policy" },
];

const SOCIALS = [
  { href: SITE.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SITE.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.social.x, label: "X", Icon: XIcon },
  { href: SITE.social.youtube, label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900" role="contentinfo" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {[...FESTIVAL_LINKS, ...COMMUNITY_LINKS, ...LEGAL_LINKS].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="mt-12 flex justify-center gap-x-10">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              aria-label={`Follow us on ${label}`}
            >
              <span className="sr-only">{label}</span>
              <Icon className="size-6" />
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm/6 text-gray-400">© 2026 Ganeshotsav Berlin Executive Committee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
