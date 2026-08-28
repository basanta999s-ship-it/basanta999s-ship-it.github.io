import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 w-4/5 mx-auto border-t border-border">
      <SectionHeader eyebrow="About Me" title="A data-driven, quality-first analyst." />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-muted"
      >
        <p>
          Detail-oriented analyst with 3+ years of experience in QA and data
          governance across high-traffic e-commerce and ERP platforms. I cleaned
          and standardized thousands of monthly product records with Excel Power
          Query and formula-based checks, and designed rule-based QC controls
          that blocked 200+ non-compliant listings a month — a 25% drop in policy
          violations.
        </p>
        <p>
          I work in SQL, Excel, Power BI, and Python (Pandas, Plotly) to build
          KPI reporting that people actually use — automating monthly stakeholder
          reports saved my team 5+ hours of manual aggregation every week.
          ISTQB-CTFL certified and currently completing NPower Canada's Junior
          Data Analyst Program.
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
