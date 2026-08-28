import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Dashboards from './components/Dashboards';
import Frameworks from './components/Frameworks';
import Credentials from './components/Credentials';
import { Mail, MapPin } from 'lucide-react';

function Linkedin({ size = 20, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Credentials />
        <Expertise />
        <Experience />
        <Dashboards />
        <Frameworks />
      </main>

      <footer id="contact" className="py-28 px-6 w-4/5 mx-auto text-center border-t border-border">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6">
          Let's turn data into decisions.
        </h2>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
          I'm open to Data Analyst, BI, and reporting roles across the GTA.
          My inbox is always open.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors flex items-center gap-5">
            <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted mb-0.5">Location</p>
              <p className="text-base font-semibold text-text">Mississauga, ON</p>
            </div>
          </div>

          <a
            href="mailto:basanta999s@gmail.com"
            className="bg-card border border-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors flex items-center gap-5"
          >
            <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted mb-0.5">Email</p>
              <p className="text-base font-semibold text-text break-all">basanta999s@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/basanta-shahi/"
            target="_blank"
            rel="noreferrer"
            className="bg-card border border-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors flex items-center gap-5"
          >
            <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
              <Linkedin size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted mb-0.5">LinkedIn</p>
              <p className="text-base font-semibold text-text">/in/basanta-shahi</p>
            </div>
          </a>
        </div>
        <a
          href="mailto:basanta999s@gmail.com"
          className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-3.5 rounded-md font-semibold hover:bg-accentSoft transition-colors"
        >
          <Mail size={18} /> Say Hello
        </a>
        <p className="mt-16 text-xs text-muted font-mono tracking-wider">
          © {new Date().getFullYear()} Basanta Shahi · All rights reserved.
        </p>
      </footer>
    </div>
  );
}
