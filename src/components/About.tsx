import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          About Me
        </h2>
        <div className="h-1 grow bg-linear-to-r from-blue-600 to-transparent rounded-full opacity-20"></div>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-6 text-slate-700 text-lg leading-relaxed">
          <p>
            As a fourth-year Computer Science student, I specialize in the modern JavaScript ecosystem. I take pride in crafting intuitive user interfaces and robust backend logic, heavily utilizing <strong className="text-slate-900">React, Vite, Vue, and TypeScript.</strong>
          </p>
          <p>
            My styling workflow relies heavily on Tailwind CSS and Sass to create responsive, highly polished digital experiences. I approach development with a system-level mindset, ensuring that data flow and state management are always optimized.
          </p>
        </div>
        
        <div className="lg:col-span-2 relative">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 transform translate-x-3 translate-y-3 rounded-2xl opacity-10"></div>
          <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Beyond the Code
            </h3>
            <p className="text-slate-600 leading-relaxed">
              When I'm not debugging or optimizing deployments, I am highly engaged in the competitive eSports landscape, specifically Dota 2. I actively analyze gameplay mechanics and professional betting markets—such as accumulator outcomes and race-to-kills logic—which keeps my analytical skills sharp even outside of programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;