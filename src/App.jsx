import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AISolutions from './components/AISolutions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Toast from './components/Toast';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    // Apply theme class to html element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Navbar showToast={showToast} />
      <main>
        <Hero showToast={showToast} />
        <About />
        <Skills />
        <Projects showToast={showToast} />
        <AISolutions />
        <Testimonials />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <ChatBot />
      <Toast show={toast.show} message={toast.message} onClose={() => setToast({ show: false, message: '' })} />
    </div>
  );
}

export default App;