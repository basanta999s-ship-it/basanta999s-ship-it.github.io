import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const roles = ['ISTQB Certified', 'Software QA Analyst'];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '30%', label: 'Manual QA Reduced (Playwright)' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[70vh] flex items-center pt-20 pb-12 w-3/5 mx-auto"
    >
      <div className="w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-bgSoft border border-border rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs text-muted tracking-wide">Available for new opportunities</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-muted text-lg mb-3"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-text tracking-tight mb-6"
        >
          Basanta Shahi
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl md:text-2xl text-muted mb-6 flex flex-wrap gap-x-3 gap-y-2 items-center justify-center"
        >
          {roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              <span className={i === 0 ? 'text-accent' : ''}>{r}</span>
              {i < roles.length - 1 && <span className="text-borderSoft">|</span>}
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted max-w-2xl leading-relaxed mb-10 mx-auto"
        >
          Building scalable end-to-end and API testing frameworks across 
          e-commerce, and SaaS — turning manual bottlenecks into fast, trustworthy
          CI/CD pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-bg px-6 py-3 rounded-md font-semibold hover:bg-accentSoft transition-colors"
          >
            View Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-borderSoft text-text px-6 py-3 rounded-md font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-border pt-8 w-full"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-accent">{s.value}</p>
              <p className="text-xs uppercase tracking-wider text-muted mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
