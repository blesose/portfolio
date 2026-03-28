// import React, { useState, useEffect } from 'react';
// import { Menu, X, Moon, Sun, Download } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { PERSONAL_INFO } from '../utils/constants';
// import axios from 'axios';

// const Navbar = ({ showToast }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'AI Solutions', href: '#ai' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleDownloadResume = async () => {
//     try {
//       setIsDownloading(true);
//       showToast('Preparing your resume...');
      
//       // Call backend API with source tracking
//       const response = await axios({
//         url: `${API_URL}/resume/download?source=navbar`,
//         method: 'GET',
//         responseType: 'blob',
//         timeout: 30000, // 30 seconds timeout
//       });

//       // Create download link
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'Blessing_Oga_Resume.pdf');
//       document.body.appendChild(link);
//       link.click();
      
//       // Cleanup
//       link.remove();
//       window.URL.revokeObjectURL(url);
      
//       showToast('Resume downloaded successfully!');
//     } catch (error) {
//       console.error('Download error:', error);
      
//       // Handle different error types
//       if (error.code === 'ECONNABORTED') {
//         showToast('Download timed out. Please try again.');
//       } else if (error.response?.status === 404) {
//         showToast('Resume file not found. Please contact support.');
//       } else {
//         showToast('Error downloading resume. Please try again.');
//       }
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   // Optional: Check if resume is available on component mount
//   useEffect(() => {
//     const checkResumeAvailability = async () => {
//       try {
//         await axios.get(`${API_URL}/resume/info`);
//       } catch (error) {
//         console.log('Resume availability check failed:', error.message);
//       }
//     };
//     checkResumeAvailability();
//   }, [API_URL]);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <a href="#" className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
//               BO
//             </div>
//             <span className="font-display font-semibold text-xl dark:text-white">
//               Blessing Oga
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(e, link.href)}
//                 className="nav-link text-sm font-medium"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Right side buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
//               aria-label="Toggle theme"
//             >
//               {theme === 'dark' ? (
//                 <Sun className="w-5 h-5 text-yellow-500" />
//               ) : (
//                 <Moon className="w-5 h-5 text-primary-500" />
//               )}
//             </button>

//             <button
//               onClick={handleDownloadResume}
//               disabled={isDownloading}
//               className={`btn-primary flex items-center gap-2 text-sm ${
//                 isDownloading ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             >
//               <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
//               <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
//             >
//               {theme === 'dark' ? (
//                 <Sun className="w-5 h-5 text-yellow-500" />
//               ) : (
//                 <Moon className="w-5 h-5 text-primary-500" />
//               )}
//             </button>

//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
//             >
//               {isOpen ? (
//                 <X className="w-5 h-5" />
//               ) : (
//                 <Menu className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
//           <div className="px-4 py-4 space-y-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(e, link.href)}
//                 className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary-500 dark:hover:text-primary-400"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <button
//               onClick={handleDownloadResume}
//               disabled={isDownloading}
//               className={`w-full btn-primary flex items-center justify-center gap-2 mt-4 ${
//                 isDownloading ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             >
//               <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
//               <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../utils/constants';
import { downloadResume, getResumeInfo } from '../services/api'; // Import from api service

const Navbar = ({ showToast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Remove this line - no need for API_URL anymore
  // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Solutions', href: '#ai' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      showToast('Preparing your resume...');
      
      // Use the API service instead of direct axios
      const blobData = await downloadResume('navbar');

      // Create download link
      const url = window.URL.createObjectURL(blobData);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Blessing_Oga_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      link.remove();
      window.URL.revokeObjectURL(url);
      
      showToast('Resume downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      
      // Handle different error types
      if (error.code === 'ECONNABORTED') {
        showToast('Download timed out. Please try again.');
      } else if (error.response?.status === 404) {
        showToast('Resume file not found. Please contact support.');
      } else {
        showToast('Error downloading resume. Please try again.');
      }
    } finally {
      setIsDownloading(false);
    }
  };

  // Optional: Check if resume is available on component mount
  useEffect(() => {
    const checkResumeAvailability = async () => {
      try {
        await getResumeInfo();
        console.log('Resume available');
      } catch (error) {
        console.log('Resume availability check failed:', error.message);
      }
    };
    checkResumeAvailability();
  }, []); // Remove API_URL dependency

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              BO
            </div>
            <span className="font-display font-semibold text-xl dark:text-white">
              Blessing Oga
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-primary-500" />
              )}
            </button>

            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`btn-primary flex items-center gap-2 text-sm ${
                isDownloading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
              <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-primary-500" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary-500 dark:hover:text-primary-400"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`w-full btn-primary flex items-center justify-center gap-2 mt-4 ${
                isDownloading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
              <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;