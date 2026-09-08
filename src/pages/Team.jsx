import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import WhatsAppSection from "../components/WhatsAppSection";
import PersonCard from "../components/PersonCard";
import { SITE } from "../lib/site";

const EXEC_COMMITTEE = ["Anand Deshpande", "Rohit Prabhu", "Rutwik Godse", "Sanika Barve"].map((name) => ({
  name,
  role: "Executive Committee Member",
}));

const ADVISORS = [
  { name: "Vilwanathan Krishnamurthy", role: "Shri Ganesha Hindu Temple" },
  { name: "Raju Jayarama Naidu", role: "Shri Ganesha Hindu Temple" },
  { name: "Shrikant Shete", role: "Shri Kasba Ganpati Sarvajanik Ganeshotsav Mandal" },
];

const TEAM_LEADS = [
  "Amit Somani",
  "Deepak Patil",
  "Digambar Barve",
  "Diksha Barve",
  "Ganesh Gadhave",
  "Pritam Kole",
  "Purv Purohit",
  "Sahil Mhapsekar",
  "Vaibhav Jagdale",
  "Akshay Phadtare",
].map((name) => ({ name, role: "Team Lead" }));

const TEAM_MEMBERS = [
  "Aishwarya Talekar",
  "Suraj Benke",
  "Amol Sainis",
  "Mayur Ozardekar",
  "Rahul Kokje",
  "Devendra Vyavhare",
  "Manokamana Bankar",
  "Rohan Shinde",
  "Prathmesh Shirude",
  "Abhishek More",
  "Sairaj Dabhade",
  "Aditya Jathar",
  "Shreya Suvarna",
  "Ninad Shekar",
  "Tejaswi Ninawe",
].map((name) => ({ name, role: "Team Member" }));

function TeamSection({ id, title, desc, people }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{desc}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {people.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  usePageTitle(
    "Our Team - Ganeshotsav Berlin",
    "Meet the people behind the magic: passionate individuals dedicated to preserving culture, building community, and creating unforgettable celebrations."
  );

  return (
    <div>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-6">
              Meet the People Behind the Magic
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Passionate individuals dedicated to preserving culture, building community, and creating unforgettable
              celebrations that bring Berlin's Indian heritage to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <a href="#executive-committee" className="text-orange-700 hover:text-orange-900">Executive Committee</a>
              <a href="#advisors" className="text-orange-700 hover:text-orange-900">Advisors</a>
              <a href="#team-leads" className="text-orange-700 hover:text-orange-900">Team Leads</a>
              <a href="#team-members" className="text-orange-700 hover:text-orange-900">Team Members</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {[
              ["4", "Executive Committee"],
              ["3", "Advisors"],
              ["10", "Team Leads"],
              ["14", "Team Members"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-black text-orange-600">{num}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection
        id="executive-committee"
        title="GB Executive Committee"
        desc="The core leadership team that guides Ganeshotsav Berlin's vision and strategic direction."
        people={EXEC_COMMITTEE}
      />
      <TeamSection
        id="advisors"
        title="Advisors"
        desc="Experienced mentors who provide guidance on cultural practices, community engagement, and event planning."
        people={ADVISORS}
      />
      <TeamSection
        id="team-leads"
        title="Team Leads"
        desc="Dedicated team leads who coordinate various aspects of the festival and ensure smooth execution."
        people={TEAM_LEADS}
      />
      <TeamSection
        id="team-members"
        title="Team Members"
        desc="Passionate volunteers who bring energy and dedication to make Ganeshotsav Berlin a memorable celebration."
        people={TEAM_MEMBERS}
      />

      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Interested in being part of Ganeshotsav Berlin? We're always looking for passionate volunteers to join
            our community and help preserve our cultural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.volunteerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Get Involved
            </a>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppSection />
    </div>
  );
}
