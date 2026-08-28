import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function readTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark';
}

export default function ThemeToggle({ className = '' }) {
  // The inline script in index.html has already set data-theme by now,
  // so this picks up the resolved value rather than re-deciding it.
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Private mode / storage disabled — the toggle still works for this visit.
    }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';
  const Icon = theme === 'dark' ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-borderSoft text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Icon size={16} />
    </button>
  );
}
