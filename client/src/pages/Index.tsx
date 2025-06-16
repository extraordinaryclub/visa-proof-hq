
import { Check, ArrowRight, Plus, Minus, Zap, Newspaper, PenLine, Folder, Globe, Clock, Target, Calendar, Unlock, Menu } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
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
      question: "How to get O-1 visa as a founder?",
      answer: "You need to prove extraordinary ability through 3+ USCIS criteria: judging experience, press coverage, original contributions, expert testimony, or membership in distinguished organizations. We help you build authentic proof for these requirements."
    },
    {
      question: "What proof do I need for extraordinary ability visa?",
      answer: "USCIS requires documented evidence like judging certificates, published articles about your work, letters of recommendation from industry experts, and proof of original contributions to your field. We organize all of this into a lawyer-ready portfolio."
    },
    {
      question: "Do I need judging experience for EB-1?",
      answer: "Judging experience is one of the strongest criteria for both O-1 and EB-1 visas. It demonstrates peer recognition and expertise in your field. We connect you with real judging opportunities at established hackathons and startup events."
    },
    {
      question: "Is this legal?",
      answer: "Yes. All opportunities are real and earned through legitimate participation. We don't offer legal advice — just help you build authentic credibility that meets USCIS standards."
    },
    {
      question: "Do I still need a lawyer?",
      answer: "Yes. We build your portfolio with all the required evidence. Your immigration attorney handles the legal filing and strategy. Many lawyers recommend services like ours to strengthen applications."
    },
    {
      question: "What if I don't get the visa?",
      answer: "You still get world-class proof of your expertise: real judging experience, published press coverage, and professional recommendations. This credibility helps with job applications, investor pitches, and future opportunities."
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
      title: "🧠 You Fill The Form",
      description: "We audit your profile, understand your work, and match you with the right plan.",
      criteria: "Profile assessment and plan matching."
    },
    {
      title: "📞 You Book A Call", 
      description: "We get on a call to customize your roadmap and assign your first judging slot.",
      criteria: "Personalized roadmap and judging assignment."
    },
    {
      title: "🛠️ We Guide Your Portfolio",
      description: "LORs, press, judging — all structured inside a lawyer-ready Notion portfolio. You participate, we organize.",
      criteria: "Complete proof portfolio creation."
    },
    {
      title: "🚀 You Apply With Confidence",
      description: "Use our proof with your attorney or go solo — either way, you're credible.",
      criteria: "Ready-to-submit documentation package."
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Extraordinary Club",
    "description": "Professional O-1 and EB-1 visa application services including judging opportunities, press coverage, and expert letters of recommendation",
    "url": "https://extraordinaryclub.xyz",
    "logo": "https://extraordinaryclub.xyz/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/extraordinaryclub",
      "https://linkedin.com/company/extraordinaryclub"
    ],
    "service": {
      "@type": "Service",
      "name": "O-1 Visa Application Support",
      "description": "Complete O-1 visa portfolio building service including judging invites, press coverage, and documentation",
      "provider": {
        "@type": "Organization",
        "name": "Extraordinary Club"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg z-40 md:hidden">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <span className="font-semibold">Ready to get started?</span>
          <Button size="sm" className="bg-primary-foreground text-primary hover:bg-muted"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started – $299
          </Button>
        </div>
      </div>

      <SEO
        title="Extraordinary Club - Get Judging Invites, Press Coverage & Expert Letters for Your O-1 Application"
        description="Build an extraordinary O-1 visa portfolio with real judging opportunities, published press coverage, and expert letters of recommendation. Proven system used by 100+ approved applicants."
        keywords="O-1 visa, EB-1 visa, extraordinary ability visa, judging opportunities, press coverage, letters of recommendation, USCIS criteria, visa application, immigration portfolio"
        ogTitle="Extraordinary Club - Build Your Extraordinary Ability Portfolio"
        ogDescription="Get real judging invites, press coverage, and expert letters to make your O-1 visa application extraordinary. Join 100+ successful applicants."
        canonical="https://extraordinaryclub.xyz"
        structuredData={structuredData}
      />

      {/* Navigation Header */}
      <nav className="px-6 py-4 bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">🚀</div>
            <span className="text-xl font-bold text-foreground">Extraordinary Club</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary font-medium">
              Blog
            </Link>
            <a href="#pricing" className="text-muted-foreground hover:text-primary font-medium cursor-pointer">
              Pricing
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started – $299
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden text-foreground">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center bg-gradient-to-b from-background to-muted">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            🚀 Prove you're <span className="text-primary">extraordinary.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Join the visa accelerator for founders, makers, and researchers.<br />
            Judging invites, press features, LORs — you participate, we organize.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started – from $299
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-muted"
                  onClick={() => window.open('https://calendly.com/extraordinaryclub', '_blank')}>
            Schedule a Call
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">✅ You don't need a lawyer yet. You need proof.</p>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-primary via-foreground to-accent"></div>

      {/* How It Works */}
      <section className="px-6 py-20 bg-muted how-it-works">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            🛠️ How It Works
          </h2>
          <p className="text-center text-muted-foreground mb-16">🎯 USCIS wants evidence. You'll walk away with it.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <div className="bg-secondary border border-border rounded-lg p-3">
                  <p className="text-sm font-medium text-secondary-foreground">
                    ✅ {step.criteria}
                  </p>
                </div>
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
          <p className="text-center text-gray-600 mb-4">Built for ambitious builders across tech, research, content, and ops — if you've shipped, we'll prove it.</p>
          <p className="text-center text-gray-500 mb-16">🧠 You've built real things. Now prove it — in USCIS language.</p>
          
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
                    <th className="text-left py-3 px-4 font-bold text-gray-900">USCIS Requirement</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Priority</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-900">What You Get</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Judging Experience</td>
                    <td className="py-4 px-4">🔥🔥🔥</td>
                    <td className="py-4 px-4 text-gray-700">Real hackathon judging invites with certificates</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Published Press Feature</td>
                    <td className="py-4 px-4">🔥🔥</td>
                    <td className="py-4 px-4 text-gray-700">Blog or podcast interview, Google-indexed</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Expert LORs</td>
                    <td className="py-4 px-4">🔥🔥</td>
                    <td className="py-4 px-4 text-gray-700">2–3 personalized recommendation letters</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Community Validation</td>
                    <td className="py-4 px-4">Medium</td>
                    <td className="py-4 px-4 text-gray-700">Private Discord with other O-1/EB-1 applicants</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Original Contribution Proof</td>
                    <td className="py-4 px-4">Tricky</td>
                    <td className="py-4 px-4 text-gray-700">Strategic phrasing inside press + LORs</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Organized Portfolio</td>
                    <td className="py-4 px-4">💥</td>
                    <td className="py-4 px-4 text-gray-700">Notion + PDF export, structured for immigration</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">✅ Authorship Credit</td>
                    <td className="py-4 px-4">Bonus</td>
                    <td className="py-4 px-4 text-gray-700">Feature byline credited to you</td>
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
      <section id="pricing" className="px-6 py-20 bg-yellow-50">
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
                  <td className="py-4 px-6 font-medium text-gray-900">Real Hackathon Judging</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> 1 invite</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> 3 invites</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> 6 invites</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Press Feature</td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> Feature</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> Co-authored</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Letters of Recommendation</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> 1 LOR</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> 2–3 LORs</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> 5 + draft help</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Notion Portfolio</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> Template</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> Full version</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> Reviewed</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Delivery Time</td>
                  <td className="py-4 px-6 text-center">3–4 weeks</td>
                  <td className="py-4 px-6 text-center">1–2 weeks</td>
                  <td className="py-4 px-6 text-center">7 days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Discord Access</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Portfolio Review</td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium text-gray-900">Live Support</td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                  <td className="py-4 px-6 text-center text-gray-400">❌</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /> Call Support</td>
                </tr>
                <tr>
                  <td className="py-6 px-6"></td>
                  <td className="py-6 px-6 text-center">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Get Started – $299
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      Get Started – $500
                    </Button>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3">
                      Schedule a Call
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

      {/* Legality & Transparency Callout */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  We only build real, earned proof.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All judging, press, and LORs are based on real participation in vetted startup programs. No fake credentials. Ever.
                </p>
                <p className="text-lg text-gray-700 mt-3 font-medium">
                  This earns you legal safety and emotional trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-green-100 via-blue-100 to-yellow-100"></div>

      {/* FAQs */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            ❓ O-1 Visa Questions Answered
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

      {/* Success Stories */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            💬 What Our Members Say
          </h2>
          <p className="text-center text-gray-600 mb-16">Real stories from builders who got their visas approved</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-blue-600">S</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">AI Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The judging opportunities were completely legitimate. I judged at 3 major hackathons and got official certificates. My lawyer said it was exactly what USCIS looks for."
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm font-medium text-green-800">✅ O-1 Approved - 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-green-600">M</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Marcus Rodriguez</h4>
                  <p className="text-sm text-gray-600">Backend Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The press feature was published on a real tech blog with my byline. Google indexed it within days. My portfolio went from weak to bulletproof."
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm font-medium text-green-800">✅ EB-1 Approved - 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-yellow-600">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Kim</h4>
                  <p className="text-sm text-gray-600">Product Manager</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The Discord community alone was worth it. Connected with other visa applicants, shared strategies, and got referrals. Still active there post-approval."
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm font-medium text-green-800">✅ O-1 Approved - 2023</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium mb-2">
                "My lawyer reviewed the portfolio and said it was the most organized O-1 application she'd seen."
              </p>
              <p className="text-blue-100">— Recent member (name withheld for privacy)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-2 bg-gradient-to-r from-blue-100 via-yellow-100 to-green-100"></div>

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
            <p className="text-lg text-gray-700 mb-4">
              "The Discord alone was worth it. Found 3 judging swaps and got my portfolio reviewed by someone who's already approved."
            </p>
            <p className="text-sm text-gray-600 mb-6">— Jamie L., Biotech founder</p>
            <p className="text-lg text-gray-700 mb-4">
              "I've worked with 3 agencies before — this was the first time I saw actual judging invites that were accepted by my attorney. The Notion portfolio was god-tier."
            </p>
            <p className="text-sm text-gray-600 mb-6">— Raj M., Full-stack dev + O-1 applicant</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
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
                  <strong>This is NOT legal advice.</strong> Extraordinary Club is not a law firm and does not provide legal advice or visa filing services.
                </p>
                <p className="font-medium">
                  <strong>We do not file your visa. We only help you build the proof that supports your application.</strong>
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
                  By using Extraordinary Club, you acknowledge that immigration law is complex and that professional 
                  legal advice is essential for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💰 Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              One payment. Lifetime access. No subscriptions.
            </p>
            <p className="text-lg text-gray-500">
              Most members see results within 3-6 months.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Solo Builder Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Solo Builder</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$299</div>
                <p className="text-gray-600">One-time payment</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 judging invite</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 press feature</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 LOR</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">DIY Notion template</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-600 hover:bg-gray-700">
                Get Started
              </Button>
            </div>

            {/* Full Portfolio Plan */}
            <div className="bg-blue-600 text-white rounded-xl p-8 relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Full Portfolio</h3>
                <div className="text-4xl font-bold mb-2">$599</div>
                <p className="text-blue-100">One-time payment</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>2–3 judging invites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>2 features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>2–3 LORs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Complete Notion portfolio</span>
                </li>
              </ul>
              
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                Start Full Portfolio
              </Button>
            </div>

            {/* White Glove Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">White Glove</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$999</div>
                <p className="text-gray-600">One-time payment</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">5+ judging</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ghostwritten features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">4–5 LORs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lawyer-ready export</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1:1 calls</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💡 Not sure which plan to choose?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Most successful O-1 applicants start with Full Portfolio. It covers all major USCIS criteria and gives you everything you need for a strong application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Schedule a Call
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start with Full Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After You Pay Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            🔁 Your Journey With Us
          </h2>
          <p className="text-center text-gray-600 mb-16">Here's exactly what happens after you join:</p>
          
          <div className="space-y-8">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                0
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Day 0: Fill intake form</h3>
                <p className="text-gray-600">Complete our detailed intake form so we understand your background, projects, and goals.</p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                1-2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1–2: Discovery call + judging slot assigned</h3>
                <p className="text-gray-600">We hop on a call to understand your story and immediately assign your first judging opportunity.</p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                3-7
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3–7: First LOR draft + blog draft</h3>
                <p className="text-gray-600">We start drafting your letters of recommendation and begin working on your press feature.</p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                10-14
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Day 10–14: Final portfolio export + lawyer-ready review</h3>
                <p className="text-gray-600">Your complete Notion portfolio is finalized with PDF export and lawyer-ready formatting.</p>
              </div>
            </div>

            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                3+
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Week 3+: Access Discord, swap judging, share updates</h3>
                <p className="text-gray-600">Join our private community to network with other applicants and find additional opportunities.</p>
              </div>
            </div>
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
            <Button size="lg" className="text-lg px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-lg"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Yes, I want to prove I'm extraordinary
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
