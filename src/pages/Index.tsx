
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
      title: "🧠 Judging Invite",
      description: "Earn a real judging certificate from Maximally-run hackathons. Public listing included.",
      criteria: "✅ USCIS Criteria #3"
    },
    {
      icon: Newspaper,
      title: "📰 Press Feature", 
      description: "Get published in a podcast-style builder article on your story.",
      criteria: "✅ USCIS Criteria #2"
    },
    {
      icon: PenLine,
      title: "✍️ Letters of Recommendation",
      description: "Receive 2–3 expert letters based on your actual projects and mentorships.",
      criteria: "✅ USCIS Criteria #6"
    },
    {
      icon: Folder,
      title: "📁 Notion Visa Portfolio",
      description: "We bundle your story, assets, and proof into a USCIS-friendly format.",
      criteria: "✅ Critical supporting doc"
    },
    {
      icon: Globe,
      title: "🌐 Private Discord Club",
      description: "Swap judging, get peer validation, and build with visa-ready founders.",
      criteria: "✅ Peer proof + support"
    }
  ];

  const steps = [
    {
      title: "🔓 Join the Club",
      description: "Pay once, get lifetime access"
    },
    {
      title: "🚀 We Build Your Proof", 
      description: "Judging spots, awards, press, LORs"
    },
    {
      title: "📦 Portfolio Delivered",
      description: "Notion + PDF export"
    },
    {
      title: "🎯 You Apply With Confidence",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            🚀 Prove you're <span className="text-blue-600">extraordinary.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            And make your visa application impossible to ignore.
          </h2>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
          Judging invites. LORs. Press. All built for you.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
          Use it to apply for O-1 / EB-1 like a goddamn founder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-50">
            Join Waitlist
          </Button>
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
            Get Started – $500
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-6">✅ You don't need a lawyer yet. You need proof.</p>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-blue-100 via-yellow-100 to-green-100"></div>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            🛠️ How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16">🎯 USCIS wants evidence. You'll walk away with it.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-green-100 via-blue-100 to-yellow-100"></div>

      {/* What's Actually Live Right Now */}
      <section className="px-6 py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            🟢 What's Actually Live Right Now
          </h2>
          <p className="text-center text-gray-600 mb-16">⏳ Most members complete their portfolio in 18 days or less.</p>
          
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
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

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-8 shadow-sm">
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

          <p className="text-lg text-gray-600 text-center font-medium bg-white rounded-lg p-4 border border-gray-200">
            👀 Our judging invites are real. Our awards are earned.
          </p>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100"></div>

      {/* Who This Is For */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">🎯 Who Is This For?</h2>
          </div>
          <p className="text-center text-gray-600 mb-16">🧠 Stop guessing. Start proving.</p>
          
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
              If you've built something real, we help you prove it — in USCIS language.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-blue-100 via-yellow-100 to-green-100"></div>

      {/* What You Get */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            🎁 What You Get
          </h2>

          {/* USCIS Criteria Breakdown */}
          <div className="mb-16 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              🔍 What USCIS Actually Wants — and What We Deliver
            </h3>
            <p className="text-gray-600 mb-8">We reverse-engineered their checklist. Here's how we stack up:</p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">🧩 Category</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">🔥 Priority</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">✅ What You Get</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Judging</td>
                    <td className="py-4 px-4">🔥🔥🔥</td>
                    <td className="py-4 px-4 text-gray-700">✅ Fully covered — official Maximally invite + certificate</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Press / Published Material</td>
                    <td className="py-4 px-4">🔥🔥</td>
                    <td className="py-4 px-4 text-gray-700">✅ Blog/podcast-style interview about your work</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Letters of Recommendation</td>
                    <td className="py-4 px-4">🔥🔥</td>
                    <td className="py-4 px-4 text-gray-700">✅ 2–3 LORs from real mentors or event leads</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Exclusive Community</td>
                    <td className="py-4 px-4">Medium</td>
                    <td className="py-4 px-4 text-gray-700">✅ Access to our private Discord (peer validation, swaps)</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Original Contribution</td>
                    <td className="py-4 px-4">Tricky but powerful</td>
                    <td className="py-4 px-4 text-gray-700">✅ We help frame your story + proof inside the press + LORs</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Portfolio Structure</td>
                    <td className="py-4 px-4">💥 Critical</td>
                    <td className="py-4 px-4 text-gray-700">✅ Notion + PDF export built for lawyers & case officers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">Authorship of Articles</td>
                    <td className="py-4 px-4">Nice-to-have</td>
                    <td className="py-4 px-4 text-gray-700">✅ You're featured — and credited — in your own story</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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
          
          <p className="text-lg text-gray-600 text-center italic border-l-4 border-blue-600 pl-6 mb-8 bg-gray-50 p-4 rounded-r-lg">
            We don't file your visa. We make you credible enough that lawyers want to.
          </p>

          {/* Why It Works Quote */}
          <div className="text-center mb-8">
            <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              "Most lawyers file the papers. We give you the proof to win."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
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
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100"></div>

      {/* Pricing */}
      <section className="px-6 py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            💰 Pricing
          </h2>
          <p className="text-center text-gray-600 mb-16">Limited slots each month. Early access = faster delivery.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2 border-green-200 bg-white shadow-lg relative">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <h3 className="text-2xl font-bold text-gray-900">🟢 Starter – $299</h3>
                </div>
                <p className="text-gray-600 mb-6">For early-stage builders who want to dip in.</p>
                <div className="space-y-3 mb-8">
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />1 Judging invite + certificate</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />1 LOR from an event lead</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Notion visa portfolio template (DIY guidance)</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Discord access</p>
                  <p className="flex items-center text-gray-400"><Minus className="h-4 w-4 text-gray-400 mr-2" />No ghostwriting, no press feature</p>
                </div>
                <p className="text-sm text-gray-600 mb-6">Perfect for someone who's just getting started and wants a foot in the door.</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  🟢 Get Started – $299
                </Button>
              </CardContent>
            </Card>
            
            {/* Pro Plan */}
            <Card className="p-8 border-2 border-blue-300 bg-white shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <h3 className="text-2xl font-bold text-gray-900">🔴 Pro – $500</h3>
                </div>
                <p className="text-gray-600 mb-6">Your current offer, just renamed for positioning.</p>
                <div className="space-y-3 mb-8">
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />1–2 judging invites + certs</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />2–3 LORs</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Blog/podcast feature</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Full visa portfolio (Notion + PDF)</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Discord access</p>
                  <p className="flex items-center text-gray-700"><Check className="h-4 w-4 text-green-600 mr-2" />Future drops (awards, ghostwriting recs, leaderboard)</p>
                </div>
                <p className="text-sm text-gray-600 mb-6">Your main product — becomes the default "smart buy" option.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  🔴 Get Pro – $500
                </Button>
              </CardContent>
            </Card>

            {/* Concierge Plan */}
            <Card className="p-8 border-2 border-yellow-300 bg-yellow-50 shadow-lg relative">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  <h3 className="text-2xl font-bold text-gray-900">🟡 Concierge – $999</h3>
                </div>
                <p className="text-gray-600 mb-6">For fast-trackers and founders in crunch mode.</p>
                <div className="space-y-3 mb-8">
                  <p className="flex items-center text-gray-700 font-medium"><Check className="h-4 w-4 text-green-600 mr-2" />🟢 Everything in Pro</p>
                  <p className="flex items-center text-gray-700"><PenLine className="h-4 w-4 text-yellow-600 mr-2" />✍️ Ghostwriting for LORs and articles</p>
                  <p className="flex items-center text-gray-700"><Target className="h-4 w-4 text-yellow-600 mr-2" />🔍 Personal portfolio review & feedback</p>
                  <p className="flex items-center text-gray-700"><Zap className="h-4 w-4 text-yellow-600 mr-2" />💨 7-day delivery</p>
                  <p className="flex items-center text-gray-700"><Calendar className="h-4 w-4 text-yellow-600 mr-2" />🎯 Custom awards built for USCIS framing</p>
                </div>
                <p className="text-sm text-gray-600 mb-6">Ideal for funded founders, desperate applicants, or people with tight timelines.</p>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-lg py-3">
                  🟡 Go Concierge – $999
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bonus Add-on */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-3">💼 Bonus Add-on:</h4>
              <h5 className="text-lg font-semibold text-gray-800 mb-2">"Lawyer-Ready Review" – $149</h5>
              <p className="text-gray-600">Portfolio check + polish by an immigration consultant before you apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-blue-100 via-yellow-100 to-green-100"></div>

      {/* FAQs */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            ❓ Frequently Asked Questions
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
      <div className="h-2 bg-gradient-to-r from-green-100 via-blue-100 to-yellow-100"></div>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Ready to prove you're extraordinary?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join 100+ global builders building their visa proof — the smart way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 border-0">
              Join the Waitlist
            </Button>
            <Button size="lg" className="text-lg px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg">
              Yes, I want to prove I'm extraordinary
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
