import usePageTitle from "../hooks/usePageTitle";
import StubPage from "../components/StubPage";

export default function Gallery() {
  usePageTitle("Gallery - Ganeshotsav Berlin");
  return (
    <StubPage
      icon="📸"
      title="Photo Gallery"
      subtitle="Photos from Ganeshotsav Berlin weren't part of the pages exported for this rebuild — add real festival photos here to bring this page to life."
    />
  );
}
