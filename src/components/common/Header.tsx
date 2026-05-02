import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICE', path: '/service' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'PROCESS', path: '/process' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-tighter font-sans">봄플로우</span>
          <span className="text-xs font-medium tracking-widest text-gray-400 hidden sm:block">BOMFLOW</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                location.pathname === item.path ? 'text-brand-accent' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
          >
            문의하기
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium ${
                location.pathname === item.path ? 'text-brand-accent' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
