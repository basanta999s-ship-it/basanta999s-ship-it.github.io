import { motion } from 'framer-motion';
import { ArrowUpRight, Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Stock Price & Revenue Analysis',
    desc: 'Extracted historical share price data through the yfinance API and scraped quarterly revenue tables from public web sources with BeautifulSoup, then cleaned and reshaped both into Pandas DataFrames. Built comparative time-series dashboards in Plotly plotting revenue against share price — a repeatable extract, transform, and visualize workflow in Jupyter Notebook.',
    tech: ['Python', 'yfinance', 'BeautifulSoup', 'Pandas', 'Plotly'],
    href: '#',
  },
  {
    title: 'Car Sales Analysis Dashboard',
    desc: 'Interactive Excel dashboard covering 155 vehicle models across 30 manufacturers using structured Tables, calculated fields (IF/IFS), PivotTables, and slicer-linked visualizations. Found the top 3 brands hold 44.5% of unit sales, while price correlates with resale retention at only 0.17 — indicating brand, not price, drives value retention.',
    tech: ['Microsoft Excel', 'PivotTables', 'Slicers', 'IF / IFS'],
    href: '#',
  },
];

export default function Frameworks() {
  return (
    <section id="projects" className="py-24 w-4/5 mx-auto border-t border-border">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Featured Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Analyses I've built end to end.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-lg p-7 hover:border-accent/50 transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-5">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                <Code size={18} className="text-accent" />
              </div>
              <div className="flex gap-2 text-muted">
                <ExternalLink size={18} className="hover:text-accent transition-colors" />
                <ArrowUpRight
                  size={18}
                  className="group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
