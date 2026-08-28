import { motion } from 'framer-motion';

const jobs = [
  {
    role: 'Customer Service & Operations Associate',
    company: "Frank's Hakka",
    location: 'Mississauga, ON',
    date: 'May 2024 – May 2026',
    bullets: [
      'Manage daily customer orders and POS transactions, support payroll and scheduling, and help keep front-of-house operations running smoothly.',
      'Known for staying organized under pressure, asking thoughtful questions, and translating complex issues into clear, actionable updates for both technical and non-technical stakeholders.',
      'Resolve day-to-day operational issues by coordinating order changes, customer concerns, and process gaps, helping maintain service quality during peak business hours.',
    ],
  },
  {
    role: 'Quality Assurance & Governance Analyst',
    company: 'Daraz Kyamu Pvt. Ltd.',
    location: 'Nepal',
    date: 'Jun 2019 – Dec 2022',
    bullets: [
      "Owned manual and automated testing across Daraz's e-commerce platform and connected ERP systems — Product Dashboard, Vendor Management, and Seller Portal — ensuring quality across critical, revenue-driving workflows.",
      'Cleaned and standardized bulk product data from CSV exports using Excel Power Query and formula-based checks (XLOOKUP, SUMIFS, COUNTIFS, Text-to-Columns), resolving duplicates, inconsistent attribute formats, and missing fields across thousands of monthly records.',
      'Designed real-time, rule-based QC controls that blocked 200+ non-compliant listings monthly, cutting policy violations by 25%.',
      'Executed cross-browser, smoke, regression, and UAT cycles across staging and pre-prod environments, collaborating closely with developers to triage and resolve issues quickly.',
      'Streamlined JIRA workflows and bug templates, producing cleaner defect handoffs and improving tracking efficiency by about 25%.',
      'Generated monthly stakeholder reports using Power BI and Excel, automating manual data aggregation and saving the team 5+ hours of manual work per week.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 w-4/5 mx-auto border-t border-border">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Professional Journey
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Where I've cleaned data and shipped quality.
        </h2>
      </div>

      <div className="space-y-12">
        {jobs.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
              <div className="mb-4 md:mb-0 md:col-span-1 md:text-right md:pr-8 border-l-2 md:border-l-0 md:border-r-2 border-accent/30 pl-4 md:pl-0 relative">
                <div className="absolute -left-[9px] md:left-auto md:-right-[9px] top-1 h-4 w-4 rounded-full bg-accent border-4 border-bg" />
                <h3 className="text-xl font-bold text-text">{job.company}</h3>
                <p className="text-accent font-medium">{job.role}</p>
                <p className="text-sm text-muted mt-1">{job.date}</p>
                {job.location && (
                  <p className="text-sm text-muted">{job.location}</p>
                )}
              </div>
              <div className="md:col-span-3 bg-card border border-border rounded-2xl p-6 shadow-sm">
                <ul className="space-y-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start text-muted">
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
