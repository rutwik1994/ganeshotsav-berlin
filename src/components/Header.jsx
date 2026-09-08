import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../lib/site";
import { ChevronDownIcon, CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

// Note: the live site's nav dropdowns are rendered client-side (Headless UI),
// so their exact contents couldn't be captured from a static export. Grouping
// below is a reasonable best guess from the footer's link categories —
// tweak freely.
const NAV_GROUPS = [
  {
    label: "Ganeshotsav",
    items: [
      { to: "/program", label: "Program & Schedule" },
      { to: "/past-events", label: "Past Events" },
      { to: "/gallery", label: "Gallery" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    label: "Learn",
    items: [
      { to: "/press", label: "Press & Media" },
      { to: "/code-of-conduct", label: "Code of Conduct" },
      { to: "/support", label: "Support Us" },
    ],
  },
];

const ABOUT_GROUP = {
  label: "About",
  items: [
    { to: "/about", label: "Our Story" },
    { to: "/team", label: "Our Team" },
    { to: "/directions", label: "Directions" },
  ],
};

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDownIcon className="size-5 flex-none text-gray-400 group-hover:text-orange-600 transition-colors" />
      </button>
      {open && (
        // Wrapper sits flush against the button (top-full, no margin gap) so its
        // top padding is still part of the hoverable area — otherwise the empty
        // gap between button and panel triggers onMouseLeave and closes the menu
        // before the cursor ever reaches it.
        <div className="absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-2">
          <div className="rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white relative z-50 shadow-sm border-b border-gray-100" role="banner">
      <nav aria-label="Global navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
        <div className="flex lg:flex-1 min-w-0">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center min-w-0" aria-label={`${SITE.name} - Go to homepage`}>
            <div className="ml-2 flex flex-col min-w-0 flex-1">
              <span className="text-sm sm:text-lg font-bold text-gray-900 tracking-tight leading-tight">{SITE.name}</span>
              <span className="text-xs text-gray-600 font-medium tracking-wide leading-tight">{SITE.tagline}</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden items-center justify-center space-x-3">
          <button
            type="button"
            className="relative p-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-gray-700 hover:from-gray-100 hover:to-gray-200"
            aria-expanded={mobileOpen}
            aria-label="Toggle main menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12" role="menubar">
          {NAV_GROUPS.map((group) => (
            <Dropdown key={group.label} label={group.label} items={group.items} />
          ))}
          <NavLink
            to="/contact"
            className="text-sm/6 font-semibold text-gray-900 hover:text-orange-700 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-orange-50/40"
          >
            Contact
          </NavLink>
          <Dropdown label={ABOUT_GROUP.label} items={ABOUT_GROUP.items} />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 xl:gap-x-4">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-green-600 to-emerald-600 px-3 py-2 xl:px-4 xl:py-2 text-sm xl:text-base font-semibold text-white shadow-sm hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105"
          >
            <WhatsAppIcon className="h-4 w-4 mr-1.5 xl:mr-2" />
            Join WhatsApp
          </a>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 px-4 py-4 space-y-4">
          {[...NAV_GROUPS, ABOUT_GROUP].map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{group.label}</p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            to="/contact"
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-orange-50"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm"
          >
            <WhatsAppIcon className="h-4 w-4 mr-2" />
            Join WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
