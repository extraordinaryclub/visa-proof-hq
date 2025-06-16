
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
      title: "Real Hackathon Judging",
      description: "Judge at premier startup events and hackathons. Get official certificates and public recognition from established organizations.",
      criteria: "USCIS Criteria #3 - Judging"
    },
    {
      icon: Newspaper,
      title: "Published Press Coverage", 
      description: "Featured interview about your work published on established tech blogs. Real byline, real publication, indexed by Google.",
      criteria: "USCIS Criteria #2 - Published Material"
    },
    {
      icon: PenLine,
      title: "Expert Letters of Recommendation",
      description: "2–3 personalized LORs from event organizers, startup mentors, and industry leaders who've worked with you directly.",
      criteria: "USCIS Criteria #6 - Expert Testimony"
    },
    {
      icon: Globe,
      title: "Private Founder Community",
      description: "Join 100+ visa-ready builders in our Discord. Swap judging opportunities, get portfolio feedback, share wins.",
      criteria: "Peer Validation Network"
    },
    {
      icon: Folder,
      title: "Lawyer-Ready Portfolio",
      description: "Everything organized in Notion with PDF export. Structured exactly how immigration attorneys and USCIS expect to see it.",
      criteria: "Professional Documentation"
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

  

  const targetAudience = [
    "Startup founders in tech, AI, climate, consumer, biotech, etc.",
    "Engineers, developers, or hackers with shipped projects, open-source work, or internal tools",
    "Researchers with papers, niche domain expertise, or contributions to critical systems",
    "Creators, designers, or artists with portfolios but no formal recognition",
    "Product managers, growth leads, operators — anyone who's driven outcomes, even behind the scenes",
    "Indie makers and freelancers with work across startups, brands, or public platforms",
    "Hackathon winners, community leaders, or event organizers with real-world credibility",
    "Builders applying for O-1 or EB-1 within the next 12 months"
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
          Use it to apply for O-1 / EB-1 like a founder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-50">
            Join Waitlist
          </Button>
          <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
            Just Get Started
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

      {/* Who This Is For */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">🎯 Who Is This For?</h2>
          </div>
          <p className="text-center text-gray-600 mb-16">🧠 You've built real things. Now prove it — in USCIS language.</p>
          
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
              Whether you built the backend, scaled the product, ran the experiments, or designed the campaign — if it shipped, we help you prove it.
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
                    <td className="py-4 px-4 text-gray-700">✅ Fully covered — official event invite + certificate</td>
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

          {/* Social Proof */}
          <div className="text-center mb-8 bg-blue-50 rounded-xl p-8">
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              "Join 100+ builders like Sarah and Alex — already O-1 approved"
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-3">"The judging invite was exactly what my lawyer needed. Real event, real certificate, perfect for my O-1 application."</p>
                <p className="font-semibold text-gray-900">— Sarah K., YC founder</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-3">"Discord community helped me swap judging spots with other founders. Portfolio template saved me weeks."</p>
                <p className="font-semibold text-gray-900">— Alex M., AI researcher</p>
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
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-6 px-6 font-bold text-gray-900"></th>
                  <th className="text-center py-6 px-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                      <p className="text-3xl font-bold text-green-600 mt-2">$299</p>
                      <p className="text-sm text-gray-600">Get your foot in the door</p>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                      <h3 className="text-xl font-bold text-gray-900">Pro</h3>
                      <p className="text-3xl font-bold text-blue-600 mt-2">$500</p>
                      <p className="text-sm text-gray-600">Complete package</p>
                    </div>
                  </th>
                  <th className="text-center py-6 px-6">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-gray-900">Concierge</h3>
                      <p className="text-3xl font-bold text-yellow-600 mt-2">$999</p>
                      <p className="text-sm text-gray-600">White-glove service</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Hackathon Judging Invites</td>
                  <td className="py-4 px-6 text-center">1 invite + certificate</td>
                  <td className="py-4 px-6 text-center">2 invites + certificates</td>
                  <td className="py-4 px-6 text-center">3 invites + certificates</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Press Coverage</td>
                  <td className="py-4 px-6 text-center text-gray-400">Not included</td>
                  <td className="py-4 px-6 text-center">Featured interview</td>
                  <td className="py-4 px-6 text-center">Featured interview + ghostwriting</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Letters of Recommendation</td>
                  <td className="py-4 px-6 text-center">1 LOR</td>
                  <td className="py-4 px-6 text-center">2-3 LORs</td>
                  <td className="py-4 px-6 text-center">3 LORs + draft writing</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Discord Community</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Notion Portfolio</td>
                  <td className="py-4 px-6 text-center">DIY template</td>
                  <td className="py-4 px-6 text-center">Complete portfolio</td>
                  <td className="py-4 px-6 text-center">Portfolio + review</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Delivery Time</td>
                  <td className="py-4 px-6 text-center">3-4 weeks</td>
                  <td className="py-4 px-6 text-center">2-3 weeks</td>
                  <td className="py-4 px-6 text-center">7 days</td>
                </tr>
                <tr>
                  <td className="py-6 px-6"></td>
                  <td className="py-6 px-6 text-center">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Try Starter – $299
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      Go Pro – $500
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3">
                      Fast-Track Me – $999
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
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

      {/* Who We Are */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            👥 Who We Are
          </h2>
          <p className="text-center text-gray-600 mb-16">Built by founders who've been there, done that.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Event Organizers</h3>
                  <p className="text-gray-600">Industry Connections</p>
                </div>
              </div>
              <p className="text-gray-700">
                We've organized 50+ hackathons and startup events across SF, NYC, and globally. 
                Our judging invites are real because we have established relationships with event organizers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">O-1 Recipients</h3>
                  <p className="text-gray-600">Been There, Won That</p>
                </div>
              </div>
              <p className="text-gray-700">
                Multiple team members have successfully obtained O-1 visas. 
                We know what works because we've lived through the process ourselves.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Track Record</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700">Events Organized</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-700">Members Helped</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-700">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            📸 What You Actually Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Notion Portfolio Preview */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Folder className="h-6 w-6 mr-3 text-blue-600" />
                Notion Portfolio Template
              </h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-4">
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  <div className="flex space-x-2 mt-4">
                    <div className="h-8 bg-blue-100 rounded w-20"></div>
                    <div className="h-8 bg-green-100 rounded w-24"></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Structured, professional portfolio with all your proof organized exactly how USCIS expects to see it.
              </p>
            </div>

            {/* Discord Community Preview */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-purple-600" />
                Private Discord Community (100+ Members)
              </h3>
              <div className="bg-gray-800 rounded-lg p-6 text-white mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">sarah_builds</span>
                    <span className="text-gray-500">Today at 2:14 PM</span>
                  </div>
                  <p className="text-gray-100">Just got my O-1 approved! The portfolio template was perfect</p>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">alex_founder</span>
                    <span className="text-gray-500">Today at 1:45 PM</span>
                  </div>
                  <p className="text-gray-100">Looking for someone to swap judging with for next hackathon?</p>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">maya_ai_researcher</span>
                    <span className="text-gray-500">Yesterday at 4:32 PM</span>
                  </div>
                  <p className="text-gray-100">Anyone have LOR feedback? Happy to review yours in exchange</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Active peer network:</strong> Swap judging opportunities with other founders</p>
                <p><strong>Portfolio reviews:</strong> Get feedback from people who've been approved</p>
                <p><strong>Real-time support:</strong> Ask questions during your application process</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial CTA */}
          <div className="mt-12 text-center bg-green-50 rounded-xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to join the community?</h3>
            <p className="text-lg text-gray-700 mb-6">
              "The Discord alone was worth it. Found 3 judging swaps and got my portfolio reviewed by someone who's already approved."
            </p>
            <p className="text-sm text-gray-600 mb-6">— Jamie L., Biotech founder</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
              Get Started – from $299
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="px-6 py-16 bg-red-50 border-t-4 border-red-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start mb-6">
            <Unlock className="h-8 w-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ⚖️ Legal Disclaimer
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-medium">
                  <strong>This is NOT legal advice.</strong> ExtraordinaryProof is not a law firm and does not provide legal advice or visa filing services.
                </p>
                <p>
                  We help you gather credible evidence and organize it professionally. We do not guarantee visa approval, 
                  as immigration decisions depend on many factors beyond our control.
                </p>
                <p>
                  All judging invitations, press features, and letters of recommendation are earned through legitimate 
                  participation in real events and programs. We do not sell fake credentials or forge documents.
                </p>
                <p>
                  <strong>Always consult with a qualified immigration attorney</strong> before filing any visa application. 
                  We recommend using our portfolio as supporting material in conjunction with professional legal guidance.
                </p>
                <p className="text-sm text-gray-600 bg-white p-4 rounded-lg border border-gray-200">
                  By using ExtraordinaryProof, you acknowledge that immigration law is complex and that professional 
                  legal advice is essential for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-red-100 via-blue-100 to-yellow-100"></div>

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
