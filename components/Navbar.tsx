
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Training', path: '/training' },
    { name: 'Certification', path: '/certification' },
    { name: 'Highlights', path: '/highlights' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const navbarClasses = isHomePage
    ? isScrolled
      ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3'
      : 'bg-transparent border-transparent py-5'
    : 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3';

  const linkClasses = (path: string) => {
    const active = isActive(path);
    if (isHomePage && !isScrolled) {
      return active ? 'text-blue-400' : 'text-slate-200 hover:text-white';
    }
    return active ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600';
  };

  const logoClasses = isHomePage && !isScrolled ? 'text-white' : 'text-slate-900';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <Logo className={`w-9 h-9 transition-colors duration-300 ${logoClasses}`} />
              <span className={`text-xl font-semibold font-montserrat tracking-[0.3em] inline-block scale-y-110 origin-left transition-colors duration-300 ${logoClasses}`}>
                THINKLAB
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${linkClasses(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`${
                isHomePage && !isScrolled
                  ? 'bg-white text-slate-900 hover:bg-slate-100'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              } px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center shadow-md`}
            >
              Consult Now <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isHomePage && !isScrolled ? 'text-white' : 'text-slate-600'} hover:text-blue-500 focus:outline-none transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md ${
                  isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-slate-900 text-white px-3 py-4 rounded-md font-bold mt-4 shadow-lg shadow-slate-900/10"
            >
              Consult Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;