import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  { name: 'Certified Tester Foundation Level', issuer: 'ASTQB – ISTQB (U.S.)', year: '2026' },
  { name: 'Web Development', issuer: 'Aptech Computer Education', year: '2017' },
  { name: 'A+ Certification', issuer: 'Aptech Computer Education', year: '2016' },
];

const education = [
  {
    degree: 'Post-Graduate Certificate – Full-Stack Software Development',
    school: 'Lambton College, Mississauga, ON',
    year: '',
  },
  {
    degree: 'Bachelor of Science in Computer Science & Information Technology',
    school: 'Tribhuvan University, Nepal',
    year: 'Oct 2014 – Dec 2018',
    note: 'Accredited by WES · Sep 2022 – Apr 2024',
  },
];

export default function Credentials() {
  return (
    <section className="py-24 w-4/5 mx-auto border-t border-border">
      <div className="mb-12">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Credentials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Certifications & education.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
              <Award size={18} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-text">Certifications</h3>
          </div>
          <ul className="space-y-5">
            {certifications.map((c) => (
              <li key={c.name} className="border-l-2 border-accent/40 pl-4">
                <p className="text-text font-medium">{c.name}</p>
                <p className="text-sm text-muted mt-1">
                  {c.issuer} · <span className="font-mono">{c.year}</span>
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
              <GraduationCap size={18} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-text">Education</h3>
          </div>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-accent/40 pl-4">
                <p className="text-text font-medium">{e.degree}</p>
                <p className="text-sm text-muted mt-1">
                  {e.school}
                  {e.year && (
                    <>
                      {' · '}
                      <span className="font-mono">{e.year}</span>
                    </>
                  )}
                </p>
                {e.note && (
                  <p className="text-xs text-muted mt-1 font-mono">{e.note}</p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
