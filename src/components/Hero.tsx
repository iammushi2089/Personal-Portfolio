import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="space-y-8 animate-fade-in-up">
      <div className="inline-block mb-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-bold tracking-wider py-1 px-3 rounded-full uppercase">
          Welcome to my portfolio
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
          John Rey F. Samson
        </span>
      </h1>
      <p className="text-2xl md:text-3xl text-slate-700 font-semibold">
        Computer Science Student & Full-Stack Developer
      </p>
      <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
        I build dynamic, scalable web applications and automated systems. Passionate about clean architecture, modern frontend frameworks, and solving complex logical challenges.
      </p>
      <div className="flex gap-4 pt-4">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          View My Work
        </a>
        <a href="#about" className="bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3 px-6 rounded-lg shadow-md border border-slate-200 transition-all duration-300">
          More About Me
        </a>
      </div>
    </header>
  );
};

export default Hero;