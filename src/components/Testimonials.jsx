import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'GA Redivos',
      // role: 'client',
      // company: 'TechCorp',
      content: 'Blessing is an exceptional junior developer with a strong grasp of the MERN stack. Her attention to detail and problem-solving skills are impressive.',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5
    },
    {
      id: 2,
      name: 'Miracle Uwaifo',
      // role: 'Project Manager',
      // company: 'DevStudio',
      content: 'Working with Blessing was a pleasure. She delivered high-quality code and was always eager to learn and improve.',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5
    },
    {
      id: 3,
      name: 'Marius',
      // role: 'Senior Developer',
      // company: 'InnovateHub',
      content: 'Blessing shows great promise as a full stack developer. Her projects demonstrate solid understanding of both frontend and backend concepts.',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 05</span>
          <h2 className="section-header mt-2">What People Say</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Feedback from people I've worked with during my training and projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative group"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-6xl font-serif text-primary-200 dark:text-primary-900/30 opacity-50">
                &quot;
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;