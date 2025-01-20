import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-[#7263f3]" />,
    title: "Career Options",
    description: "Discover a wide range of job listings across various sectors and skill levels.",
    benefits: ["100,000+ jobs available", "50+ job categories", "Remote, hybrid, and on-site work", "Filters and Search to find the perfect match"],
    cta: "Discover Jobs",
    ctaLink: "/findwork",
  },
  {
    icon: <Building className="w-8 h-8 text-[#7263f3]" />,
    title: "Top Employers",
    description: "Collaborate with leading companies, from startups to global giants.",
    benefits: ["500+ trusted employers", "Partnerships with major brands", "Easy application process", "Jobs in high-demand industries"],
    cta: "Explore Companies",
    ctaLink: "/findwork",
  },
  {
    icon: <Users className="w-8 h-8 text-[#7263f3]" />,
    title: "Global Talent",
    description: "Find skilled candidates worldwide to fill your open positions.",
    benefits: ["1M+ active job seekers", "Search filters for candidates", "Personalized recommendations", "Detailed candidate profiles"],
    cta: "Post a Job",
    ctaLink: "/post",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#f9f9ff] to-[#f0f5fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Why Choose <span className="text-[#7263f3]">JobFindr</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
              <CardHeader className="flex items-center justify-center py-8 bg-[#f6f8fc]">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">{feature.icon}</div>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <CardTitle className="text-2xl font-semibold text-gray-800 text-center mb-4">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 text-center mb-6">{feature.description}</CardDescription>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start justify-start">
                      <span>
                        <CheckCircle size={20} className="text-green-500" />
                      </span>
                      <span className="text-gray-700 text-sm ml-2">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 py-4">
                <Button asChild className="w-full py-2 px-4 bg-[#7263f3] hover:bg-[#5a4dd1] transition-colors text-white font-semibold rounded-lg">
                  <a href={feature.ctaLink}>{feature.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Badge variant="outline" className="text-sm font-medium border-gray-300">
            Trusted by 10,000+ companies worldwide
          </Badge>
        </div>
      </div>
    </section>
  );
}
