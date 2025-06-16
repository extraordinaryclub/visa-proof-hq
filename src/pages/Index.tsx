
import { Check, ArrowRight, Plus, Minus, Zap, Newspaper, PenLine, Folder, Globe, Clock, Target, Calendar, Unlock } from "lucide-react";
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
      answer: "Yes. We don't offer legal advice — just credibility. Everything we build follows legitimate pathways that immigration lawyers recognize and use."
    },
    {
      question: "Do I still need a lawyer?",
      answer: "Eventually, yes. We make your portfolio lawyer-ready. They handle the filing. Think of us as your proof team, not your legal team."
    },
    {
      question: "What kind of people use this?",
      answer: "Founders with traction, researchers with impact, creators with reach. People who've built real things but lack the formal proof structure USCIS wants."
    },
    {
      question: "What if I don't get the visa?",
      answer: "You still own world-class proof of your extraordinary ability. Use it for other visas, job applications, or fundraising. The credibility is yours forever."
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "🏆 Real Judging Invites",
      description: "Judge actual Maximally hackathons with 500+ participants. Public certificate, verified credentials, documented impact.",
      criteria: "✅ USCIS Criterion #3: Judging"
    },
    {
      icon: Newspaper,
      title: "📰 Published Features", 
      description: "Professional articles highlighting your work, story, and expertise. Published on established platforms with real readership.",
      criteria: "✅ USCIS Criterion #2: Press Coverage"
    },
    {
      icon: PenLine,
      title: "✍️ Expert Recommendation Letters",
      description: "2-3 detailed letters from industry leaders who know your work. Written by people with credentials USCIS respects.",
      criteria: "✅ USCIS Criterion #6: Letters of Recommendation"
    },
    {
      icon: Folder,
      title: "📁 USCIS-Ready Portfolio",
      description: "Professional Notion workspace organizing all your proof. Exports to lawyer-friendly PDFs with proper documentation.",
      criteria: "✅ Supporting Evidence Package"
    },
    {
      icon: Globe,
      title: "🤝 Builder Network Access",
      description: "Private Discord with visa-ready founders. Peer validation, judging swaps, and real connections that matter.",
      criteria: "✅ Network Effects & Validation"
    }
  ];

  const steps = [
    {
      title: "🔓 Join & Onboard",
      description: "Quick intake form. We map your existing work to USCIS criteria."
    },
    {
      title: "🚀 We Build Your Proof", 
      description: "Judging spots, press features, expert LORs. Real credentials, not paperwork."
    },
    {
      title: "📦 Portfolio Delivered",
      description: "Complete visa-ready package. Notion workspace + PDF exports."
    },
    {
      title: "🎯 Apply With Confidence",
      description: "Use solo or hand to your lawyer. Either way, you're bulletproof."
    }
  ];

  const liveFeatures = [
    "Judging invites for verified Maximally events (real hackathons, real impact)",
    "Professional feature articles highlighting your expertise and story", 
    "2-3 recommendation letters from credentialed industry professionals",
    "USCIS-formatted portfolio with all evidence properly documented",
    "Private founder network for ongoing peer validation and opportunities"
  ];

  const comingSoonFeatures = [
    "Award nominations and formal recognition programs",
    "Ghostwritten thought leadership content",
    "Direct lawyer partnership network for filing", 
    "Public credibility scoring and verification",
    "Advanced portfolio optimization and A/B testing"
  ];

  const targetAudience = [
    "Startup founders with product traction but no formal recognition",
    "Engineers and researchers with technical expertise but limited visibility",
    "Creators and builders with real impact but poor documentation",
    "International talent planning O-1 or EB-1 applications within 12 months",
    "Anyone tired of $10K+ immigration lawyers who can't build proof"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            🚀 <span className="text-blue-600">Extraordinary ability.</span><br />Actually provable.
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 max-w-4xl mx-auto">
            We build O-1 and EB-1 visa portfolios that immigration lawyers actually want to file.
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
          <strong>Judging certificates. Expert recommendation letters. Published features.</strong>
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Stop guessing what USCIS wants. Start building what they approve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-50">
            Join Waitlist
          </Button>
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
            Build My Proof – $500
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-6">✅ No lawyers required upfront. Just bulletproof evidence.</p>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-200 via-yellow-200 to-green-200"></div>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            How We Build Your Proof
          </h2>
          <p className="text-center text-gray-600 mb-16">🎯 USCIS has 8 criteria. We help you nail the important ones.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-green-200 via-blue-200 to-yellow-200"></div>

      {/* What's Live Right Now */}
      <section className="px-6 py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            🟢 What's Live Right Now
          </h2>
          <p className="text-center text-gray-600 mb-16">⏳ Real deliverables. Real timelines. Real results.</p>
          
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-2xl font-bold text-gray-900">Shipping Now</h3>
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

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Coming Soon</h3>
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
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200"></div>

      {/* Who This Is For */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Who This Is For</h2>
          </div>
          <p className="text-center text-gray-600 mb-16">🧠 Built something extraordinary? Now prove it to USCIS.</p>
          
          <div className="space-y-4 mb-12">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                <Check className="h-6 w-6 text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                <p className="text-lg text-gray-700">{audience}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-blue-600 text-white rounded-xl p-8 shadow-lg">
            <p className="text-xl font-medium">
              <strong>If you've built real impact, we'll help you document it properly.</strong><br />
              <span className="text-blue-100">No fluff. No fake credentials. Just proof that works.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-200 via-yellow-200 to-green-200"></div>

      {/* What You Get */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            What You Actually Get
          </h2>
          <p className="text-center text-gray-600 mb-16">🎯 Each deliverable maps directly to USCIS extraordinary ability criteria.</p>
          
          <div className="space-y-6 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="border-2 border-gray-200 bg-white rounded-xl p-6 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md">
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
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {feature.criteria}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Value highlight */}
          <div className="text-center bg-yellow-100 border-2 border-yellow-300 rounded-xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">Complete Package: $500</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Delivered in 2-3 weeks. Yours forever.
            </p>
            <p className="text-base text-gray-600">
              <strong>Compare:</strong> Immigration lawyers charge $10K+ and still need you to bring the proof.
            </p>
          </div>

          {/* Why It Works */}
          <div className="text-center mb-8">
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              "We don't file visas. We build the proof that wins them."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700"><strong>Real events:</strong> We run the hackathons you judge</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700"><strong>Real credentials:</strong> No fake certificates or bought reviews</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700"><strong>Real publications:</strong> Articles on platforms lawyers recognize</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700"><strong>Real structure:</strong> USCIS-formatted evidence packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-green-200 via-blue-200 to-yellow-200"></div>

      {/* Pricing */}
      <section className="px-6 py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Simple, Honest Pricing
          </h2>
          <p className="text-center text-gray-600 mb-16">Limited spots each month. First come, first served.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-blue-200 bg-white shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Unlock className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-900">$500 Complete Package</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" /><strong>Everything you need:</strong> Judging + Press + LORs + Portfolio</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Delivered in 2-3 weeks</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />USCIS-ready documentation</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Lifetime access to builder network</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Future platform updates included</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  🔵 Start Building Proof
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 border-yellow-300 bg-yellow-100 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">$799 Concierge</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-gray-700"><Zap className="h-4 w-4 text-yellow-600 mr-2" /><strong>Everything above, plus:</strong></p>
                  <p className="flex items-center text-gray-700"><Clock className="h-4 w-4 text-yellow-600 mr-2" />1-week delivery guarantee</p>
                  <p className="flex items-center text-gray-700"><PenLine className="h-4 w-4 text-yellow-600 mr-2" />Ghostwritten content upgrades</p>
                  <p className="flex items-center text-gray-700"><Target className="h-4 w-4 text-yellow-600 mr-2" />Personal portfolio review call</p>
                  <p className="flex items-center text-gray-700"><Globe className="h-4 w-4 text-yellow-600 mr-2" />Priority placement in events</p>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-lg py-3">
                  🟡 Go Concierge
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            <strong>Both options:</strong> Pay once, own forever. No subscriptions, no surprise fees.
          </p>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200"></div>

      {/* FAQs */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            ❓ Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={openFaq === index} onOpenChange={() => toggleFaq(index)}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg border border-gray-200 text-left hover:bg-gray-100 transition-colors">
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

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-200 via-yellow-200 to-green-200"></div>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Ready to prove extraordinary ability?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 100+ founders who chose proof over hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 border-0">
              Join the Waitlist
            </Button>
            <Button size="lg" className="text-lg px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg">
              Build My Proof – $500
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            <strong>No lawyers upfront.</strong> Just bulletproof evidence that works.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-center">
        <p className="text-gray-400">© 2024 ExtraordinaryProof. Building visa-worthy credibility.</p>
      </footer>
    </div>
  );
};

export default Index;
