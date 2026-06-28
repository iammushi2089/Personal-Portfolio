import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

const App: React.FC = () => {
  // Initialize state based on user's system preference or default to false
  const [isDark, setIsDark] = useState(false);

  // Toggle the 'dark' class on the HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-500">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-300 flex items-center justify-center text-xl"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-32">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  );
};

export default App;