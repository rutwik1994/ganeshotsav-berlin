import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import { SITE } from "../lib/site";

const STEPS = [
  { title: "Find a Safety Team Member", desc: 'Look for staff/volunteers wearing "Safety Team" badges or visit the information desk.' },
  { title: "Report the Incident", desc: "Provide details about what happened, when, and who was involved. All reports are kept confidential." },
  { title: "Response Process", desc: "Our team will investigate the incident, provide support, and take appropriate action. We prioritize the safety of the person reporting." },
  { title: "Follow-up", desc: "We'll communicate with you about the resolution and any actions taken, always respecting your privacy and safety." },
];

export default function CodeOfConduct() {
  usePageTitle(
    "Code of Conduct - Ganeshotsav Berlin",
    "Ganeshotsav Berlin 2026: Celebrate Ganesh Chaturthi in Berlin with cultural performances, traditional ceremonies, workshops, and a vibrant Indian community."
  );

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Code of Conduct</h1>
          <p className="text-lg text-gray-700">Based on the Berlin Code of Conduct</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-6 text-gray-700 leading-relaxed">
            <blockquote className="text-lg italic text-orange-700 border-l-4 border-orange-400 pl-4">
              "Creating a safe and positive experience for everyone"
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Purpose</h2>
            <p>
              A primary goal of Ganeshotsav Berlin is to be inclusive to the largest number of participants, with the
              most varied and diverse backgrounds possible. As such, we are committed to providing a friendly, safe
              and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity,
              socioeconomic status, and religion (or lack thereof).
            </p>
            <p>
              This Code of Conduct outlines our expectations for all those who participate in our community, as well
              as the consequences for unacceptable behavior.
            </p>
            <p>
              We invite all those who participate in Ganeshotsav Berlin events and online communications to help us
              create safe and positive experiences for everyone.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Open Culture Citizenship</h2>
            <p>
              A supplemental goal of this Code of Conduct is to increase open community citizenship by encouraging
              participants to recognize and strengthen the relationships between our actions and their effects on our
              community.
            </p>
            <p>
              Communities mirror the societies in which they exist and positive action is essential to counteract the
              many forms of inequality and abuses of power that exist in society.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Expected Behavior</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.</li>
              <li>Exercise consideration and respect in your speech and actions.</li>
              <li>Attempt collaboration before conflict.</li>
              <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
              <li>
                Be mindful of your surroundings and of your fellow participants. Alert community leaders if you
                notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if
                they seem inconsequential.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Unacceptable Behavior</h2>
            <p>
              Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory, derogatory or
              demeaning speech or actions by any participant in our community online, at all related events and in
              one-on-one communications carried out in the context of community business. Community event venues may
              be shared with members of the public; please be respectful to all patrons of these locations.
            </p>
            <p>
              Harassment includes: harmful or prejudicial verbal or written comments related to gender, sexual
              orientation, race, religion, disability; inappropriate use of nudity and/or sexual images (including
              presentation slides); inappropriate depictions of violence (including presentation slides); deliberate
              intimidation, stalking or following; harassing photography or recording; sustained disruption of talks
              or other events; inappropriate physical contact, and unwelcome sexual attention.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Consequences of Unacceptable Behavior</h2>
            <p>
              Unacceptable behavior from any community member, including sponsors and those with decision-making
              authority, will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply
              immediately.
            </p>
            <p>
              If a community member engages in unacceptable behavior, the community organizers may take any action
              they deem appropriate, up to and including a temporary ban or permanent expulsion from the community
              without warning (and without refund in the case of a paid event).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">If You Witness or Are Subject to Unacceptable Behavior</h2>
            <p>
              If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a
              community organizer as soon as possible. Additionally, community organizers are available to help
              community members engage with local law enforcement or to otherwise help those experiencing
              unacceptable behavior feel safe.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 not-italic">
              <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
              <p>
                <strong>Event Safety Team:</strong>
                <br />
                Email:{" "}
                <a href={`mailto:${SITE.safetyEmail}`} className="text-orange-700 font-medium">
                  {SITE.safetyEmail}
                </a>
                <br />
                Phone: {SITE.phone}
              </p>
              <p className="mt-3">
                <strong>During Events:</strong>
                <br />
                Look for staff/volunteers wearing "Safety Team" badges or visit the information desk.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Addressing Grievances</h2>
            <p>
              If you feel you have been falsely or unfairly accused of violating this Code of Conduct, you should
              notify the event organizers with a concise description of your grievance. Your grievance will be
              handled in accordance with our existing governing policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">Scope</h2>
            <p>
              We expect all community participants (contributors, paid or otherwise; sponsors; and other guests) to
              abide by this Code of Conduct in all community venues — online and in-person — as well as in all
              one-on-one communications pertaining to community business.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-2">License and Attribution</h2>
            <p>
              This Code of Conduct is based on the{" "}
              <a href="https://berlincodeofconduct.org/" target="_blank" rel="noopener noreferrer" className="text-orange-700 font-medium">
                Berlin Code of Conduct
              </a>
              , which is distributed under a Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
              license. It has been adapted for use by Ganeshotsav Berlin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Reporting Process</h2>
            <p className="text-center text-gray-600 mb-8">
              We value your safety and well-being at our events. If you experience or witness a violation of our Code
              of Conduct, please follow these steps to report it:
            </p>
            <ol className="space-y-6 mb-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4 bg-white rounded-xl shadow-lg p-6">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Alternative Reporting Options</h3>
              <p className="text-gray-600 mb-3">If you're unable to find a team member or prefer to report remotely:</p>
              <ul className="text-gray-600 space-y-1">
                <li>Email: {SITE.safetyEmail}</li>
                <li>Phone: {SITE.phone}</li>
                <li>
                  Anonymous Reporting Form:{" "}
                  <a href="/contact?report=anonymous" className="text-orange-700 font-medium">
                    ganeshotsavberlin.com/contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
