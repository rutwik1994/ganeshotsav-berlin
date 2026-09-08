import usePageTitle from "../hooks/usePageTitle";
import StubPage from "../components/StubPage";
import { SITE } from "../lib/site";

// Like the Impressum, a Privacy Policy for a Germany/EU-facing site needs to
// accurately describe real data processing (forms, analytics, cookies, WhatsApp
// channel, etc.) to be GDPR-compliant — left as a placeholder rather than
// guessed boilerplate.
export default function Privacy() {
  usePageTitle("Privacy Policy - Ganeshotsav Berlin");
  return (
    <StubPage icon="🔒" title="Privacy Policy" subtitle="Placeholder — needs the real GDPR-compliant policy text.">
      <p>
        This page needs a privacy policy that accurately reflects what data this site actually collects and how it's
        processed (e.g. the contact form, any analytics, the WhatsApp channel link, cookies). That's worth getting
        right rather than guessing, so it's left blank for now.
      </p>
      <p>
        Questions about data handling in the meantime can go to{" "}
        <a href={`mailto:${SITE.email}`} className="text-orange-700 font-medium">
          {SITE.email}
        </a>
        .
      </p>
    </StubPage>
  );
}
