import { useRoute } from 'wouter';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { Link } from 'wouter';

const BlogPost = () => {
  const [, params] = useRoute('/blog/:id');
  const postId = params?.id;

  // In a real app, this would fetch from an API
  const blogPosts = [
    {
      id: '1',
      title: "O-1 Visa Requirements: Complete Guide for 2025",
      excerpt: "Everything you need to know about O-1 visa criteria, including the 8 key requirements USCIS looks for and how to build evidence for each.",
      content: `# O-1 Visa Requirements: Complete Guide for 2025

The O-1 visa is designed for individuals with extraordinary ability in their field. Understanding what USCIS actually looks for can make the difference between approval and rejection.

## The 8 USCIS Criteria for O-1 Visas

To qualify for an O-1 visa, you must demonstrate extraordinary ability by meeting at least 3 of these 8 criteria:

### 1. Awards and Recognition
Documentation of nationally or internationally recognized awards for excellence in your field.

**What USCIS Looks For:**
- Major industry awards
- Government recognition
- Academic honors at national level
- Competition wins with significant participation

**Common Mistakes:**
- Submitting local or company-internal awards
- Not providing context about the award's significance
- Missing documentation about selection criteria

### 2. Membership in Prestigious Organizations
Membership in associations that require outstanding achievements as judged by experts.

**What Qualifies:**
- Professional societies with strict admission requirements
- Industry bodies that require peer nomination
- Academic societies with achievement thresholds

**Documentation Needed:**
- Membership certificates
- Organization requirements for admission
- Evidence of your selection process

### 3. Published Material About You
Published material in professional trade publications or major media about you and your work.

**Acceptable Publications:**
- Industry magazines and journals
- Major newspapers and websites
- Professional newsletters
- Academic publications

**Key Requirements:**
- Must be ABOUT you, not BY you
- Should focus on your achievements
- Need to show circulation/readership

### 4. Judging Others' Work
Participation as a judge of the work of others in your field.

**Examples That Work:**
- Conference paper reviewer
- Startup pitch competition judge
- Industry award panel member
- Grant application reviewer

**Documentation:**
- Official invitation letters
- Certificates of participation
- Event programs showing your role
- Testimonials from organizers

### 5. Original Contributions
Evidence of original scientific, scholarly, artistic, athletic, or business-related contributions of major significance.

**How to Demonstrate:**
- Patents and innovations
- Published research with citations
- Products or services you created
- Industry methodologies you developed

### 6. Scholarly Articles
Authorship of scholarly articles in professional journals or major trade publications.

**What Counts:**
- Peer-reviewed journal articles
- Industry white papers
- Technical blog posts on major platforms
- Book chapters in professional publications

### 7. Critical Employment
Employment in a critical or essential capacity for organizations with distinguished reputations.

**Evidence Needed:**
- Leadership roles at known companies
- Critical technical positions
- Roles where your departure would significantly impact operations
- Testimonials from colleagues and supervisors

### 8. High Salary or Remuneration
Evidence of high salary or other remuneration compared to others in your field.

**Documentation:**
- Salary statements and tax returns
- Consulting fee agreements
- Industry salary surveys for comparison
- Stock options and equity compensation

## Building Your Evidence Package

### Start Early
Begin collecting evidence at least 6 months before your intended application date. Some criteria, like judging or publications, take time to develop.

### Quality Over Quantity
USCIS prefers strong evidence for 3-4 criteria rather than weak evidence for all 8. Focus on your strongest areas.

### Document Everything
Keep detailed records of all achievements, including dates, contexts, and significance. Contemporary documentation is much stronger than retroactive explanations.

### Get Expert Letters
Letters of recommendation from recognized experts in your field can strengthen any criterion. These should be detailed, specific, and from people who know your work directly.

## Common Pitfalls to Avoid

### 1. Insufficient Context
Don't assume USCIS officers understand your field. Explain why your achievements matter and how they compare to others.

### 2. Poor Documentation
Missing dates, unclear roles, or inadequate proof can weaken strong achievements.

### 3. Circular References
Using the same evidence for multiple criteria without clear differentiation.

### 4. Timing Issues
Some evidence becomes stale. Recent achievements carry more weight than old ones.

## Working with an Attorney

While you can file an O-1 petition yourself, immigration attorneys bring valuable expertise:

- Understanding of current USCIS trends
- Experience with what evidence works
- Ability to present your case persuasively
- Knowledge of how to respond to RFEs

## Timeline and Process

**Typical Timeline:**
- Evidence gathering: 3-6 months
- Application preparation: 1-2 months
- USCIS processing: 2-4 months (or 15 days with premium processing)

**Steps:**
1. Gather evidence for at least 3 criteria
2. Obtain expert letters of recommendation
3. Prepare Form I-129 and supporting documentation
4. Submit petition with fees
5. Respond to any RFEs if issued
6. Receive approval notice

## Conclusion

The O-1 visa is attainable for many professionals who take a strategic approach to building their evidence. Start early, focus on quality documentation, and don't be afraid to highlight your achievements.

Remember: You don't need to be a Nobel Prize winner. You need to systematically demonstrate that you're in the top tier of your field through concrete, well-documented evidence.`,
      category: 'visa-tips',
      author: 'Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['O-1 Visa', 'USCIS', 'Requirements']
    },
    {
      id: '2',
      title: "How I Built My O-1 Portfolio in 90 Days",
      excerpt: "A founder's journey from zero immigration credentials to O-1 approval, including judging invites, press coverage, and expert letters.",
      content: `# How I Built My O-1 Portfolio in 90 Days

When I started my O-1 application process, I had built successful products but lacked the formal recognition USCIS requires. Here's exactly how I went from zero immigration credentials to O-1 approval in just 90 days.

## My Starting Point

**What I Had:**
- 5 years as a software engineer at tech companies
- Built and launched 3 consumer apps with 100K+ users
- Led technical teams of 8-12 people
- Strong GitHub profile with popular open-source projects

**What I Lacked:**
- No judging experience
- No press coverage
- No published articles about my work
- No industry awards or recognition
- No expert letters of recommendation

Sound familiar? This is where most builders start – lots of real achievement but no formal documentation that USCIS recognizes.

## The 90-Day Strategy

I focused on 4 USCIS criteria where I could make quick progress:

1. **Judging others' work** (Criterion #4)
2. **Published material about me** (Criterion #3)
3. **Expert letters of recommendation** (Criterion #6)
4. **Critical employment role** (Criterion #7)

## Week 1-2: Research and Networking

### Finding Judging Opportunities
I reached out to:
- Startup accelerators I had connections with
- Hackathon organizers from events I'd attended
- Open-source maintainers whose projects I'd contributed to
- University career centers where I'd given talks

**Key insight:** I didn't wait for perfect opportunities. I said yes to smaller events to build my judging portfolio.

### Press Outreach Strategy
I identified journalists and bloggers who covered:
- Developer tools (my specialty)
- Startup stories
- Open-source projects
- Technical leadership

Instead of pitching my whole career, I focused on one specific story: how I built a developer tool that solved a common problem.

## Week 3-4: First Wins

### Judging Breakthrough
I got my first judging invite from a regional startup pitch competition. Not huge, but legitimate with 50+ applicants and real prizes.

**What I learned:** Event organizers need qualified judges more than you think. My technical background and previous startup experience made me attractive as a judge.

### Press Coverage Pitch
I pitched one story to 12 different publications:
- "How I Built a Developer Tool That 10,000+ Engineers Use Daily"
- Focused on the technical challenges and user adoption metrics
- Included screenshots, usage stats, and user testimonials

Got responses from 3 outlets, with 1 wanting to move forward.

## Week 5-6: Building Momentum

### Second Judging Opportunity
My first judging experience led to a referral for a larger hackathon. The organizer from event #1 recommended me to a colleague.

**Lesson:** Judging opportunities compound. Do well at small events, and bigger opportunities follow.

### Article Published
My first article went live on a tech blog with 500K monthly readers. The journalist positioned it as a case study in developer-focused product building.

**Title:** "From Side Project to 10,000 Users: How One Developer Built the Tool His Team Actually Uses"

## Week 7-8: Expert Letters Strategy

### Identifying Recommenders
I made a list of people who:
- Knew my work directly
- Had impressive credentials themselves
- Could speak to different aspects of my expertise

**My List:**
1. Former CTO who hired me and saw my technical leadership
2. Startup founder whose team I had consulted for
3. Open-source project maintainer I'd collaborated with
4. Conference organizer where I'd spoken

### The Ask
I didn't just ask for a "letter of recommendation." I provided:
- Specific talking points about my contributions
- Examples of my work they could reference
- Draft outline of what would be most helpful
- Context about O-1 requirements

**Response rate:** 4 out of 4 people agreed to write letters.

## Week 9-10: Critical Employment Documentation

### Building the Case
I worked with my current employer to document my critical role:
- Projects that would be delayed without my involvement
- Systems I architected that were core to the product
- Team members I mentored and their career progression
- Revenue impact of products I built

**Key document:** A detailed memo from my manager outlining how my departure would impact the engineering team and product roadmap.

## Week 11-12: Final Push

### Third Judging Opportunity
By now I had enough credibility to apply for a major industry competition as a technical judge. My previous judging experience + published article made me an attractive candidate.

### Second Press Hit
The first article's success helped me pitch a follow-up story to a larger publication. This one focused on my technical leadership philosophy and management approach.

**Title:** "The Engineering Manager's Guide to Building Products Developers Actually Want"

## Final Portfolio

After 90 days, I had:

**Judging (Criterion #4):**
- 3 judging roles at legitimate competitions
- Official certificates and letters from organizers
- Clear documentation of my expertise area (developer tools)

**Published Material (Criterion #3):**
- 2 articles in recognized tech publications
- Combined readership of 800K monthly visitors
- Both articles positioned me as an expert in my field

**Expert Letters (Criterion #6):**
- 4 detailed letters from industry professionals
- Each letter addressed different aspects of my expertise
- All recommenders had impressive credentials

**Critical Employment (Criterion #7):**
- Detailed documentation of my essential role
- Manager testimonial about my impact
- Specific examples of critical projects and systems

## The Application Process

### Attorney Selection
I interviewed 3 immigration attorneys who specialized in O-1 cases. I chose one who:
- Had recent O-1 approvals in tech
- Understood my specific achievements
- Provided clear timeline and expectations

### Documentation Package
My attorney helped organize everything into a compelling narrative that connected my technical expertise to real-world impact.

**Key insight:** The story matters as much as the evidence. We positioned me not just as a skilled engineer, but as someone whose work had broad impact on the developer community.

## Results

**Timeline:**
- Application submitted: Day 95
- USCIS receipt: Day 98
- Approval notice: Day 142 (without premium processing)

**No RFE issued** – the evidence package was strong enough for direct approval.

## What I'd Do Differently

### Start Earlier on Long-Term Strategies
While I built a strong portfolio in 90 days, starting 6-12 months earlier would have allowed for:
- More selective judging opportunities
- Deeper relationships with press contacts
- More substantial published work

### Focus on Measurable Impact
USCIS loves numbers. I wish I had:
- Better documented user metrics for my projects
- Tracked citation counts for technical articles
- Quantified the business impact of my work

### Build Ongoing Relationships
The best opportunities came through referrals and relationships. I should have been networking consistently before I needed it.

## Key Takeaways

### 1. You Have More Than You Think
Most successful builders have achievements that map to USCIS criteria – they just haven't documented them properly.

### 2. Momentum Compounds
Each small win makes the next opportunity easier to get. Don't wait for the perfect chance – start with what's available.

### 3. Storytelling Matters
Your evidence needs to tell a coherent story about your expertise and impact. Random achievements won't work as well as a focused narrative.

### 4. Network Actively
The best opportunities come through relationships. Be genuinely helpful to others, and they'll help you when you need it.

### 5. Document Everything
Start keeping detailed records of your achievements now. Contemporary documentation is much stronger than trying to reconstruct things later.

## Final Thoughts

Building an O-1 portfolio in 90 days was intense but absolutely doable. The key was focusing on criteria where I could make quick progress while leveraging my existing expertise and network.

If you're starting this process, remember: you don't need to be famous or have a Nobel Prize. You need to systematically document your expertise in a way that USCIS recognizes and values.

The hardest part isn't having the qualifications – it's learning to present your achievements in immigration language. Once you understand what USCIS is looking for, the path becomes much clearer.`,
      category: 'success-stories',
      author: 'Alex Rodriguez',
      date: '2025-01-12',
      readTime: '12 min read',
      tags: ['Success Story', 'Portfolio', 'Founder']
    }
  ];

  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "O-1 Visa Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://o1visabuilder.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://o1visabuilder.com/blog/${post.id}`
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | O-1 Visa Builder Blog`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, O-1 visa, EB-1 visa, immigration`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        canonical={`https://o1visabuilder.com/blog/${post.id}`}
        structuredData={structuredData}
      />

      {/* Header */}
      <header className="px-6 py-8 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {post.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{paragraph.slice(4)}</h3>;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="font-bold text-gray-900 mb-3">{paragraph.slice(2, -2)}</p>;
              } else if (paragraph.trim() === '') {
                return <div key={index} className="h-4"></div>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="text-gray-700 mb-2">{paragraph.slice(2)}</li>;
              } else {
                return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
              }
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your O-1 Portfolio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get judging invites, press coverage, and expert letters to make your visa application extraordinary.
          </p>
          <Link href="/">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;