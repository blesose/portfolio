import React from 'react';
import { ArrowRight } from 'lucide-react';
import  profileImage from '../assets/profile-image.jpeg'

// eslint-disable-next-line no-empty-pattern
const Hero = ({ }) => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-500 px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>

            <div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-zinc-900 dark:text-white">Hi, I'm </span>
                <span className="gradient-text">Blessing Oga</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-medium text-zinc-700 dark:text-zinc-300 mt-2">
                Junior Software Engineer
              </h2>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
              Building scalable software that solves real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white text-8xl font-display">
                   <img 
                  src={profileImage}
                  alt="Blessing Oga - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    // Show initials as fallback
                    const parent = e.target.parentElement;
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center text-white text-8xl font-display';
                    fallback.textContent = 'BO';
                    parent.appendChild(fallback);
                  }}
                />
                </div>
              </div>

              {/* Floating Badge - MongoDB Certified */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 shadow-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xl">🍃</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Fullstack Certified</div>
                    <div className="text-xs text-zinc-500">Developer Associate</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Location */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 shadow-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 text-xl">🇳🇬</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Eligible to</div>
                    <div className="text-xs text-zinc-500">work internationally</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;