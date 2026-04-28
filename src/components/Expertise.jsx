import { motion } from 'framer-motion';
import { MonitorPlay, Server, Layers, Bug, GitBranch, Code } from 'lucide-react';

const arsenal = [
  {
    icon: MonitorPlay,
    title: 'Testing & Automation',
    tech: [
      'Manual Testing',
      'Functional',
      'Regression',
      'Smoke',
      'Sanity',
      'UAT',
      'Playwright (JavaScript)',
      'Test Case Design & Execution',
    ],
  },
  {
    icon: Server,
    title: 'API & Web Services',
    tech: ['Postman', 'REST API', 'JSON', 'Newman CLI'],
  },
  {
    icon: Layers,
    title: 'Frameworks & Tools',
    tech: ['Pytest', 'Page Object Model (POM)', 'BDD', 'TDD'],
  },
  {
    icon: Bug,
    title: 'Defect Management Tools',
    tech: ['Confluence', 'JIRA'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD & Version Control',
    tech: ['Jenkins', 'Git', 'GitHub Actions'],
  },
  {
    icon: Code,
    title: 'Languages & Databases',
    tech: ['Python', 'JavaScript', 'SQL (MySQL, Oracle)'],
  },
];

export default function Expertise() {
  return (
    <section id="skills" className="py-24 w-4/5 mx-auto border-t border-border">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Technical Arsenal
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Tools I reach for every day.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {arsenal.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-4">{item.title}</h3>
              <ul className="space-y-2 text-sm text-muted">
                {item.tech.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
