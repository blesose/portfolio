import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';

const Hero = ({ showToast }) => {
  const stats = [
    { label: 'Projects Completed', value: '4+' },
    { label: 'Happy Clients', value: '3' },
    { label: 'Experience', value: '1 Year' },
  ];

  const socialLinks = [
    { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: PERSONAL_INFO.instagram, label: 'Instagram' },
    { icon: Twitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
  ];

  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    showToast(`Opening ${platform} profile (Demo)`);
    // In production, window.open(href, '_blank');
  };

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
                Junior Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg">
              I build production-ready web applications using the MERN stack. 
              Turning complex problems into elegant digital solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
              >
                Let's Collaborate
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleSocialClick(e, label)}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white text-8xl font-display">
                  BO
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