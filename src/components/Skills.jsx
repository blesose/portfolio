import React from 'react';
import { SKILLS } from '../utils/constants';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { icon: Code2, title: 'Frontend', skills: SKILLS.frontend, color: 'text-blue-500' },
    { icon: Server, title: 'Backend', skills: SKILLS.backend, color: 'text-green-500' },
    { icon: Database, title: 'Database', skills: SKILLS.database, color: 'text-yellow-500' },
    { icon: Wrench, title: 'Tools', skills: SKILLS.tools, color: 'text-purple-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 02</span>
          <h2 className="section-header mt-2">Technical Skills</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-zinc-200 dark:border-zinc-800"
              >
                <div className={`w-12 h-12 ${category.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">{skill}</span>
                      <div className="w-20 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-500 rounded-full"
                          style={{ width: `${Math.random() * 30 + 70}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-6">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Swagger UI', 'AWS', 'Postman', 'Auth0', 'Vercel', 'Netlify', 'Render'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm hover:bg-primary-500 hover:text-white transition-colors cursor-pointer"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;