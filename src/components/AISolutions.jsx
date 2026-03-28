import React from 'react';
import { MessageSquare, Shield, Sparkles, Zap, ArrowRight } from 'lucide-react';

const AISolutions = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Context-aware chatbots that understand your business domain and provide intelligent responses.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Anomaly detection models that protect your transactions and identify suspicious patterns.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Sparkles,
      title: 'Personalization Engine',
      description: 'Tailored experiences using user behavior analysis and machine learning recommendations.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks with intelligent workflows and decision-making systems.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="ai" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 04</span>
          <h2 className="section-header mt-2">AI Solutions</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Integrating intelligence into every application I build - (does not necessary mean an AI)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-1">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs font-mono text-zinc-500">AI DEMO</span>
              </div>

              {/* Chat Preview */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-primary-500 text-sm">👤</span>
                  </div>
                  <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-sm">I want to build an e-commerce website for my business</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">AI</span>
                  </div>
                  <div className="flex-1 bg-primary-50 dark:bg-primary-900/20 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-sm text-zinc-800 dark:text-zinc-200">
                      Great! I specialize in building e-commerce solutions with the MERN stack. 
                      I can create features like product catalogs, shopping carts, payment integration, 
                      and order management. What type of products will you be selling?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                    <span className="text-zinc-500 text-sm">👤</span>
                  </div>
                  <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-sm text-zinc-500">Clothing and accessories...</p>
                  </div>
                </div>
              </div>

              {/* Recommendation Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['👕 85%', '👖 92%', '👟 78%'].map((item, i) => (
                  <div key={i} className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{item.split(' ')[0]}</div>
                    <div className="text-xs font-medium text-primary-500">{item.split(' ')[1]}</div>
                    <div className="text-[10px] text-zinc-500">match</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const chatButton = document.querySelector('.fixed.bottom-8.right-8');
                  if (chatButton) {
                    chatButton.click();
                  }
                }}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary-500/30"
              >
                Try AI Assistant
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;