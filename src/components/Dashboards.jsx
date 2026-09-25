import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ExternalLink, Maximize2, X } from 'lucide-react';

// Drop screenshots into public/dashboards/ and point `src` at them.
// See public/dashboards/README.md for sizing notes.
const dashboards = [
  {
    title: 'Superstore Profitability & Risk Modelling',
    tool: 'Python · XGBoost · scikit-learn',
    src: '/dashboards/superstore-model-evaluation.png',
    blurb:
      '51,290 global orders modelled to flag loss-making sales before they close. XGBoost reached 0.969 ROC-AUC; orders discounted above 30% lose money 92.7% of the time.',
    href: 'https://github.com/basanta999s-ship-it/superstore-profitability-analysis',
    hrefLabel: 'View on GitHub',
  },
  {
    title: 'Clinic Appointments — Cleaning & EDA',
    tool: 'Python · Pandas · SciPy',
    src: '/dashboards/clinic-appointments.png',
    blurb:
      '1,000 messy appointment records standardized — eight spellings of gender, four currency formats, two date schemas. A chi-square test (p = 0.26) showed age does not predict department choice.',
    href: 'https://github.com/basanta999s-ship-it/clinic-appointments-analysis',
    hrefLabel: 'View on GitHub',
  },
  {
    title: 'Superstore Discount Tiers',
    tool: 'Python · Matplotlib',
    src: '/dashboards/superstore-discount-profitability.png',
    blurb:
      'Profitability broken out by discount tier, isolating the threshold where margin turns negative across categories.',
    href: 'https://github.com/basanta999s-ship-it/superstore-profitability-analysis',
    hrefLabel: 'View on GitHub',
  },
  {
    title: 'Car Sales Analysis Dashboard',
    tool: 'Microsoft Excel',
    src: '/dashboards/car-sales-dashboard.png',
    blurb:
      '155 vehicle models across 30 manufacturers. Slicer-linked PivotCharts surface that the top 3 brands hold 44.5% of unit sales.',
  },
  {
    title: 'Stock Price & Revenue Analysis',
    tool: 'Python · Plotly',
    src: '/dashboards/stock-revenue-dashboard.png',
    blurb:
      'Comparative time-series of quarterly revenue against share price, built from yfinance API pulls and scraped revenue tables.',
  },
  {
    title: 'Monthly Stakeholder Report',
    tool: 'Power BI',
    src: '/dashboards/stakeholder-report.png',
    blurb:
      'Automated the monthly aggregation behind KPI reporting at Daraz, replacing 5+ hours of manual spreadsheet work each week.',
  },
];

export default function Dashboards() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    // Stop the page behind the overlay from scrolling.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section id="dashboards" className="py-24 w-4/5 mx-auto border-t border-border">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Dashboards
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Reports and dashboards I've built.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dashboards.map((d, i) => (
          <motion.figure
            key={d.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors flex flex-col"
          >
            <Thumb dashboard={d} onOpen={() => setLightbox(d)} />

            <figcaption className="p-6">
              <p className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                {d.tool}
              </p>
              <h3 className="text-lg font-semibold text-text mb-2">{d.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{d.blurb}</p>
              {d.href && (
                <a
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accentSoft transition-colors"
                >
                  {d.hrefLabel || 'View project'}
                  <ExternalLink size={14} />
                </a>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 h-10 w-10 rounded-md border border-white/20 text-white/80 flex items-center justify-center hover:border-white hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

function Thumb({ dashboard, onOpen }) {
  const [failed, setFailed] = useState(false);

  // Missing screenshots fall back to a neutral tile — this is public-facing,
  // so it shows the tool rather than instructions to add a file.
  if (failed) {
    return (
      <div className="aspect-[16/10] bg-bgSoft border-b border-border flex flex-col items-center justify-center gap-3 text-center px-4">
        <BarChart3 size={26} className="text-accent opacity-40" />
        <p className="text-xs font-mono uppercase tracking-wider text-muted opacity-60">
          {dashboard.tool}
        </p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Enlarge ${dashboard.title}`}
      className="relative aspect-[16/10] bg-bgSoft border-b border-border overflow-hidden block w-full"
    >
      <img
        src={dashboard.src}
        alt={dashboard.title}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <Maximize2
          size={20}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </span>
    </button>
  );
}
