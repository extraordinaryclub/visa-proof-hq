import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🚀</div>
              <span className="text-xl font-bold">Extraordinary Club</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Build an extraordinary O-1 visa portfolio with real judging opportunities, published press coverage, and expert letters of recommendation.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-900"
                      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Judging Opportunities
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Press Coverage
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Expert Letters
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Portfolio Building
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Extraordinary Club. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>

        {/* Additional SEO Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-sm text-gray-400">
            <p className="mb-2">
              <strong className="text-gray-300">Popular searches:</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="hover:text-white transition-colors">O-1 visa requirements</Link>
              <Link href="/blog" className="hover:text-white transition-colors">EB-1 extraordinary ability</Link>
              <Link href="/blog" className="hover:text-white transition-colors">USCIS criteria examples</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Judging experience visa</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Letters of recommendation</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Press coverage visa</Link>
              <Link href="/blog" className="hover:text-white transition-colors">O-1 portfolio builder</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};