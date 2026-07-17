import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../utils/constants';
import { MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 01</span>
          <h2 className="section-header mt-2">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I'm a Computer Engineering student and <span className="text-primary-500 font-semibold">Junior Software Engineer</span> I enjoy building scalable 
              software that solves real-world problems across different industries.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-primary-500 mb-2" />
                <div className="text-sm font-medium">Based In</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">{PERSONAL_INFO.location}</div>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl">
                <Briefcase className="w-5 h-5 text-primary-500 mb-2" />
                <div className="text-sm font-medium">Available For</div>
                {/* <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{PERSONAL_INFO.email}</div> */}
                <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">Remote • Hybrid • Relocation</div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">Currently Open To</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Full Stack Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Software Engineering Internships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Backend Engineering Projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Collaborating with Startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">Building Web Applications for Businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <span className="text-zinc-600 dark:text-zinc-400">MVP Development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">Education & Experience</h3>
            
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-xl">
                <div className="flex flex-wrap gap-2 justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-500 text-sm rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                      <span className="text-primary-500 mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Education */}
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">Education</h4>
              <p className="font-medium">Bachelor of Engineering (B.Eng.)</p>
              <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                <p className="font-medium">Computer Engineering</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;