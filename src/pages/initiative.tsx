// src/pages/Initiatives.tsx
import React from 'react';

const Initiatives: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 rounded-2xl shadow-lg my-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        🚀 AI-THON 1.0 — Delhi NCR’s Largest AI Hackathon
      </h2>

      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        In April, our society proudly organized <span className="font-semibold">AI-THON 1.0</span>, the largest Artificial Intelligence hackathon in Delhi NCR. 
        The event was aimed at building impactful <span className="font-semibold">AI agents and real-world solutions</span>.
      </p>

      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Participants joined from various regions across India including <span className="font-semibold">Punjab</span> and <span className="font-semibold">Haryana</span>, making it a truly national event.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        It was a huge success and a proud achievement for our society — sparking innovation, collaboration, and future-ready problem solving.
      </p>

      {/* Optional: Add image if available */}
      {/* 
      <div className="mt-8">
        <img 
          src="/images/aithon-poster.jpg" 
          alt="AI-THON Poster" 
          className="rounded-xl shadow-lg mx-auto max-w-2xl"
        />
      </div>
      */}
    </section>
  );
};

export default Initiatives;