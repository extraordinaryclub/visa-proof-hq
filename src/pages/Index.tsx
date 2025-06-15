import { Check, ArrowRight, Plus, Minus, Zap, Newspaper, PenLine, Folder, Globe, Clock, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this legal?",
      answer: "Yes. We don't offer legal advice — just credibility."
    },
    {
      question: "Do I still need a lawyer?",
      answer: "Yes. We make your portfolio. They file it."
    },
    {
      question: "What kind of people use this?",
      answer: "Founders, researchers, creators, and builders."
    },
    {
      question: "What if I don't get the visa?",
      answer: "You still get a world-class proof stack. Use it anywhere."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Judging Invite",
      description: "Earn a real judging certificate from Maximally-run hackathons. Public listing included.",
      criteria: "✅ USCIS Criteria #3"
    },
    {
      icon: Newspaper,
      title: "Press Feature", 
      description: "Get published in a podcast-style builder article on your story.",
      criteria: "✅ USCIS Criteria #2"
    },
    {
      icon: PenLine,
      title: "Letters of Recommendation",
      description: "Receive 2–3 expert letters based on your actual projects and mentorships.",
      criteria: "✅ USCIS Criteria #6"
    },
    {
      icon: Folder,
      title: "Notion Visa Portfolio",
      description: "We bundle your story, assets, and proof into a USCIS-friendly format.",
      criteria: "✅ Critical supporting doc"
    },
    {
      icon: Globe,
      title: "Private Discord Club",
      description: "Swap judging, get peer validation, and build with visa-ready founders.",
      criteria: "✅ Peer proof + support"
    }
  ];

  const steps = [
    {
      title: "Join the Club",
      description: "Pay once, get lifetime access"
    },
    {
      title: "We Build Your Proof", 
      description: "Judging spots, awards, press, LORs"
    },
    {
      title: "Portfolio Delivered",
      description: "Notion + PDF export"
    },
    {
      title: "You Apply With Confidence",
      description: "Use it with your lawyer or solo"
    }
  ];

  const liveFeatures = [
    "Judging invites from real Maximally events",
    "Blog feature or podcast-style interview", 
    "2–3 Letters of Recommendation via mentors / event leads",
    "Notion-based visa portfolio template (editable + exportable)",
    "Access to private Discord (founder visa prep community)"
  ];

  const comingSoonFeatures = [
    "Public press drops via Maximally Studios",
    "Ghostwritten story upgrades",
    "Custom award generator", 
    "Public credibility leaderboard",
    "Lawyer matchmaking partner network"
  ];

  const targetAudience = [
    "Startup founders building in tech, AI, sustainability, etc.",
    "Researchers with publications or niche domain work",
    "Creators or artists with a portfolio but no proof",
    "Builders aiming for O-1 or EB-1 within the next 12 months",
    "Anyone tired of overpriced agencies and unclear steps"
  ];

  const timeline = [
    { day: "Day 1", action: "You join and fill your intake form" },
    { day: "Day 3", action: "You're assigned to judge a real Maximally event" },
    { day: "Day 5", action: "You get your first draft LOR + event certificate" },
    { day: "Day 10", action: "We publish your feature article on Substack" },
    { day: "Day 14–18", action: "You receive a full Notion + PDF visa portfolio" },
    { day: "Bonus", action: "You get tagged for a future podcast episode" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Visa Proof. <span className="text-blue-600">As a Service.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          ExtraordinaryProof helps ambitious founders, creators, and researchers build O-1 / EB-1 visa portfolios — judging invites, LORs, press features, awards, and proof, all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            Join Waitlist
          </Button>
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
            Get Started – $500
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Actually Live Right Now */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What's Actually Live Right Now
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">What's Included Right Now (Live & Working)</h3>
            </div>
            <div className="space-y-3">
              {liveFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Coming Soon (you'll be first in line):</h3>
            </div>
            <div className="space-y-3">
              {comingSoonFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 border-2 border-blue-400 rounded mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-600 text-center font-medium">
            We'll always be clear on what's live vs coming up.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Target className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Who Is This For?</h2>
          </div>
          
          <div className="space-y-4 mb-12">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-lg text-gray-700">{audience}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-xl text-gray-800 font-medium">
              If you've built something real, we help you prove it — in USCIS language.
            </p>
          </div>
        </div>
      </section>

      {/* What a Typical Member Gets */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <Calendar className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">What a Typical Member Gets</h2>
          </div>
          
          <div className="space-y-6 mb-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-lg p-6">
                <div className="w-20 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-6">
                  <span className="text-sm font-bold text-blue-600">{item.day}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-800">{item.action}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-blue-600 text-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-2">By Week 3 — you're visa-proofed.</h3>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Still have questions?<br />
              → Fill this 1-minute form and we'll get back personally
            </p>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What You Get
          </h2>
          <div className="space-y-6 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-200 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 mb-3">
                        {feature.description}
                      </p>
                      <span className="text-sm font-medium text-green-600">
                        {feature.criteria}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Pricing highlight */}
          <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">All this: ₹39,999 / $500</h3>
            </div>
            <p className="text-lg text-gray-700">
              Delivered in 2–3 weeks. Yours forever.
            </p>
          </div>
          
          <p className="text-lg text-gray-600 text-center italic border-l-4 border-blue-600 pl-6 mt-8">
            We don't file your visa. We make you credible enough that lawyers want to.
          </p>
        </div>
      </section>

      {/* Why It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            "Most lawyers file the papers. We give you the proof to win."
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">We run the events — judging is real</p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">We issue awards — not Fiverr PDFs</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">We get you published — real articles, no fluff</p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">You get a complete, structured proof portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-blue-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">$500 Membership</h3>
                <p className="text-gray-600 mb-6">
                  Includes: Judging invites, press features, awards, LORs, Notion portfolio, Discord access
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 border-green-200 bg-green-50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">$999 Concierge</h3>
                <p className="text-gray-600 mb-6">
                  For fast-track delivery, ghostwriting, and personal portfolio review
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Pay $500
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={openFaq === index} onOpenChange={() => toggleFaq(index)}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-white rounded-lg border border-gray-200 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 bg-white border-l border-r border-b border-gray-200 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to prove you're extraordinary?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join 100+ global builders building their visa proof — the smart way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Join the Waitlist
            </Button>
            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
              Get Started – $500
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-center">
        <p className="text-gray-400">© 2024 ExtraordinaryProof. Building extraordinary futures.</p>
      </footer>
    </div>
  );
};

export default Index;
