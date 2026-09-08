import usePageTitle from "../hooks/usePageTitle";
import StubPage from "../components/StubPage";
import { SITE } from "../lib/site";

// Impressum is a legal requirement for German websites (§5 TMG) — deliberately
// left as a placeholder rather than inventing registration numbers, a
// responsible-person name, or an address, since incorrect legal content here
// is worse than a visible "coming soon" notice. Replace with the real,
// legally reviewed text before this goes live.
export default function Impressum() {
  usePageTitle("Impressum - Ganeshotsav Berlin");
  return (
    <StubPage icon="⚖️" title="Impressum" subtitle="Legal notice, required under German law (§5 TMG).">
      <p>
        This page intentionally hasn't been filled in with placeholder legal details — an Impressum needs the real,
        current details of the responsible legal entity (name, address, registration info, contact) reviewed by
        whoever handles the organization's legal/compliance matters.
      </p>
      <p>
        Once you have that text, replace the content of this page with it. In the meantime, general inquiries can go
        to{" "}
        <a href={`mailto:${SITE.email}`} className="text-orange-700 font-medium">
          {SITE.email}
        </a>
        .
      </p>
    </StubPage>
  );
}
