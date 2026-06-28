import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-slate-200 pb-2 inline-block">
        Professional Automation
      </h2>
      
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
        <h3 className="text-2xl font-bold text-slate-900">Mirach Property Solutions</h3>
        <p className="text-blue-600 font-medium mb-4">Technical Automation Developer</p>
        
        <p className="text-slate-700 text-lg leading-relaxed">
          Engineered a custom Google Apps Script solution to automate client relationship workflows. The script dynamically reads client data from Google Sheets—configured specifically to parse the "Name" field from the first column—and dispatches dynamically generated, HTML-formatted birthday greeting emails based on real-time date matching.
        </p>
        
        <div className="mt-6 flex gap-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-md border border-blue-100">
            Google Apps Script
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-md border border-blue-100">
            HTML/CSS
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-md border border-blue-100">
            Spreadsheet Automation
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;