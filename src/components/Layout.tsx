import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Use Lucide React icons as requested in skills
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Comment ça marche', path: '/#how-it-works' },
    { name: 'Nos Valeurs', path: '/#pillars' },
    { name: 'FAQ', path: '/#faq' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans bg-background text-secondary antialiased">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <span className="font-logo text-3xl font-black tracking-tight text-primary group-hover:text-primary-dark transition-colors duration-300" style={{ letterSpacing: '-0.02em' }}>
              Reb<span className="text-secondary-dark">Sam</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }
                }}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
        >
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.path);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-xl font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://callsam.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-lg font-medium transition-all mt-4"
            >
              Poser une question
            </a>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}