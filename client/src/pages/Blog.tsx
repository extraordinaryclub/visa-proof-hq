import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'wouter';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'visa-tips', name: 'Visa Tips' },
    { id: 'success-stories', name: 'Success Stories' },
    { id: 'uscis-updates', name: 'USCIS Updates' },
    { id: 'portfolio-building', name: 'Portfolio Building' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "O-1 Visa Requirements: Complete Guide for 2025",
      excerpt: "Everything you need to know about O-1 visa criteria, including the 8 key requirements USCIS looks for and how to build evidence for each.",
      content: "The O-1 visa is designed for individuals with extraordinary ability in their field. Here's a comprehensive breakdown of what USCIS actually looks for...",
      category: 'visa-tips',
      author: 'Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['O-1 Visa', 'USCIS', 'Requirements'],
      featured: true
    },
    {
      id: 2,
      title: "How I Built My O-1 Portfolio in 90 Days",
      excerpt: "A founder's journey from zero immigration credentials to O-1 approval, including judging invites, press coverage, and expert letters.",
      content: "When I started my O-1 application process, I had built successful products but lacked the formal recognition USCIS requires...",
      category: 'success-stories',
      author: 'Alex Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      tags: ['Success Story', 'Portfolio', 'Founder'],
      featured: true
    },
    {
      id: 3,
      title: "USCIS Criteria #3: Judging - What Actually Counts",
      excerpt: "Deep dive into the judging criterion for O-1 visas. Learn what types of judging USCIS accepts and how to document your experience properly.",
      content: "The judging criterion is one of the most accessible paths to O-1 qualification, but many applicants misunderstand what USCIS considers valid...",
      category: 'visa-tips',
      author: 'Maria Santos',
      date: '2025-01-10',
      readTime: '6 min read',
      tags: ['Judging', 'USCIS Criteria', 'Documentation']
    },
    {
      id: 4,
      title: "Letters of Recommendation: Templates That Work",
      excerpt: "Proven LOR templates and strategies that have helped 100+ builders get O-1 approval. Includes what to ask recommenders and common mistakes.",
      content: "Letters of recommendation can make or break your O-1 application. Here's how to get powerful LORs that USCIS officers actually want to read...",
      category: 'portfolio-building',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '10 min read',
      tags: ['LOR', 'Templates', 'Application Strategy']
    },
    {
      id: 5,
      title: "USCIS Processing Times Update: What to Expect",
      excerpt: "Latest updates on O-1 and EB-1 processing times across different service centers, plus strategies for premium processing.",
      content: "USCIS processing times have been fluctuating significantly. Here's what current data shows and how to plan your application timeline...",
      category: 'uscis-updates',
      author: 'Jennifer Liu',
      date: '2025-01-05',
      readTime: '5 min read',
      tags: ['Processing Times', 'USCIS Updates', 'Timeline']
    },
    {
      id: 6,
      title: "From Rejection to Approval: RFE Response Strategy",
      excerpt: "How to handle Request for Evidence (RFE) responses effectively. Real examples of successful RFE responses and what USCIS looks for.",
      content: "Receiving an RFE doesn't mean your case is doomed. With the right response strategy, many applicants turn RFEs into approvals...",
      category: 'visa-tips',
      author: 'Michael Park',
      date: '2025-01-03',
      readTime: '14 min read',
      tags: ['RFE', 'Response Strategy', 'Approval']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "O-1 Visa Builder Blog",
    "description": "Expert advice, success stories, and guides for O-1 and EB-1 visa applications",
    "url": "https://o1visabuilder.com/blog",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "url": `https://o1visabuilder.com/blog/${post.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="O-1 Visa Blog - Expert Tips, Success Stories & USCIS Updates | O-1 Visa Builder"
        description="Get expert advice on O-1 and EB-1 visa applications. Read success stories, portfolio building tips, and latest USCIS updates from immigration experts."
        keywords="O-1 visa blog, EB-1 visa tips, USCIS updates, visa success stories, immigration advice, portfolio building, letters of recommendation"
        ogTitle="O-1 Visa Blog - Expert Immigration Advice & Success Stories"
        ogDescription="Expert tips, real success stories, and latest USCIS updates for O-1 and EB-1 visa applications. Learn from founders who've successfully navigated the process."
        canonical="https://o1visabuilder.com/blog"
        structuredData={structuredData}
      />

      {/* Header */}
      <section className="px-6 py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            O-1 Visa Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, success stories, and the latest USCIS updates to help you build an extraordinary visa application
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{categories.find(c => c.id === post.category)?.name}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{categories.find(c => c.id === post.category)?.name}</Badge>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your O-1 Portfolio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop reading about it and start building. Get judging invites, press coverage, and expert letters.
          </p>
          <Link href="/">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;