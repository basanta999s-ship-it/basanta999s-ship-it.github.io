import { motion } from 'framer-motion';

const jobs = [
  {
    role: 'Software QA Analyst',
    company: 'Daraz Kaymu Pvt. Ltd.',
    location: 'Kathmandu, Nepal',
    date: 'Jun 2019 – Dec 2022',
    bullets: [
      "Led manual and automated testing for Daraz's e-commerce platform and ERP systems (Product Dashboard, Vendor Management, Seller Portal).",
      'Participated in Agile ceremonies including stand-ups, sprint planning, and retrospectives.',
      'Developed and maintained automation frameworks using Playwright (JavaScript), reducing manual testing time by 30%.',
      'Executed API and database validation to ensure data consistency across pricing, inventory, and product details.',
      'Conducted cross-browser, smoke, regression, and UAT testing across multiple environments.',
      'Integrated automated suites into Jenkins CI/CD pipelines, ensuring faster, stable deployments.',
      'Improved defect tracking and communication efficiency by 25% via structured JIRA workflows.',
    ],
  },
  {
    role: 'IT Intern',
    company: 'National Human Rights Commission',
    location: 'Kathmandu, Nepal',
    date: 'Sep 2018 – May 2019',
    bullets: [
      'Designed and developed a user-friendly website using Bootstrap and the Laravel framework, including customer databases.',
      'Planned website architecture and documented development processes, solutions, and best practices.',
      'Provided technical support for hardware, software, and network issues, serving over 50 users.',
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
          Where I've shipped quality.
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
