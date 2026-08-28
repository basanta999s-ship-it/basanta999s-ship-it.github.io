import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#dashboards', label: 'Dashboards' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="w-4/5 mx-auto h-16 flex items-center justify-between">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-bold text-text tracking-tight"
        >
          <span className="text-accent">B</span>Shahi
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 md:gap-8 text-sm text-muted"
        >
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Outside the hidden group so it stays reachable on mobile. */}
          <ThemeToggle />

          <a
            href="/Basanta-Shahi-Resume.pdf"
            download="Basanta-Shahi-Resume.pdf"
            className="hidden md:inline-flex items-center gap-2 border border-borderSoft text-text px-4 py-2 rounded-md text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="#contact"
            className="bg-accent text-bg px-4 py-2 rounded-md text-sm font-semibold hover:bg-accentSoft transition-colors"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
