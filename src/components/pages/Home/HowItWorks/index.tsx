import React from "react";
import { UserPlus, Edit3, Search, Bookmark, Send, BarChart, Briefcase, CheckCircle, Calendar } from "lucide-react";

const stepsForJobSeekers = [
  { icon: UserPlus, text: "Create an Account" },
  { icon: Edit3, text: "Complete Your Profile" },
  { icon: Search, text: "Search for Relevant Jobs" },
  { icon: Bookmark, text: "Save Jobs to Apply Later" },
  { icon: Send, text: "Submit Your Applications" },
  { icon: BarChart, text: "Track Your Application Status" },
];

const stepsForRecruiters = [
  { icon: UserPlus, text: "Sign Up as a Recruiter" },
  { icon: Edit3, text: "Create a Company Profile" },
  { icon: Briefcase, text: "Post Job Openings" },
  { icon: Search, text: "Review Incoming Applications" },
  { icon: CheckCircle, text: "Shortlist Candidates" },
  { icon: Send, text: "Hire Top Talent" },
];

const StepBox = ({ Icon, text }) => (
  <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-md">
    <Icon className="w-8 h-8 text-blue-500" />
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        {/* Job Seeker Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">For Job Seekers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stepsForJobSeekers.map((step, index) => (
              <StepBox key={index} Icon={step.icon} text={step.text} />
            ))}
          </div>
        </div>

        {/* Recruiter Steps */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">For Recruiters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stepsForRecruiters.map((step, index) => (
              <StepBox key={index} Icon={step.icon} text={step.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
