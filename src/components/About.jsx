import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 w-4/5 mx-auto border-t border-border">
      <SectionHeader eyebrow="About Me" title="A quality-first engineer." />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-muted"
      >
        <p>
          Detail-oriented Software QA Analyst with 3+ years of experience in
          manual and automation testing for web and ERP platforms. I am skilled
          in Playwright (JavaScript) for UI automation and for modern browser
          testing.
        </p>
        <p>
          Strong background in API testing (Postman), CI/CD integration
          (Jenkins), and Agile delivery. Proven ability to reduce regression
          cycles, improve software reliability, and collaborate effectively
          across development teams.
        </p>
      </motion.div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
        {title}
      </h2>
    </div>
  );
}
