import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/constants';
import { submitContact } from '../services/api';

const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Call the API
      const response = await submitContact(formData);
      showToast(response.message || 'Message sent successfully!');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: PERSONAL_INFO.instagram, label: 'Instagram' },
    { icon: Twitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 06</span>
          <h2 className="section-header mt-2">Let's Connect</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Social Links */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
              <h3 className="font-medium mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                    placeholder="Jade Down"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-primary-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
                  placeholder="jade@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-primary-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
// import { PERSONAL_INFO } from '../utils/constants';
// import { submitContact } from '../services/api';

// const Contact = ({ showToast }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Trim all fields to remove whitespace
//     const trimmedData = {
//       name: formData.name.trim(),
//       email: formData.email.trim().toLowerCase(),
//       company: formData.company.trim() || '', // Send empty string if not provided
//       message: formData.message.trim()
//     };

//     // Enhanced validation
//     if (!trimmedData.name) {
//       showToast('Please enter your name');
//       return;
//     }
    
//     if (!trimmedData.email) {
//       showToast('Please enter your email');
//       return;
//     }
    
//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(trimmedData.email)) {
//       showToast('Please enter a valid email address');
//       return;
//     }
    
//     if (!trimmedData.message) {
//       showToast('Please enter your message');
//       return;
//     }
    
//     if (trimmedData.message.length < 10) {
//       showToast('Message must be at least 10 characters');
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Log exactly what we're sending
//       console.log('📤 Submitting contact form with data:', trimmedData);
      
//       // Call the API with cleaned data
//       const response = await submitContact(trimmedData);
      
//       console.log('✅ Contact response:', response);
//       showToast(response.message || 'Message sent successfully!');
      
//       // Clear form
//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('❌ Contact error:', error);
      
//       // Show specific error message from backend if available
//       const errorMessage = error.message || 
//                           error.response?.data?.message || 
//                           error.response?.data?.error ||
//                           'Failed to send message. Please try again.';
      
//       // If there are validation errors, show the first one
//       if (error.errors && error.errors.length > 0) {
//         showToast(error.errors[0].msg || error.errors[0].message);
//       } else {
//         showToast(errorMessage);
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
//     { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
//     { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
//   ];

//   const socialLinks = [
//     { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
//     { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
//     { icon: Instagram, href: PERSONAL_INFO.instagram, label: 'Instagram' },
//     { icon: Twitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-zinc-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 06</span>
//           <h2 className="section-header mt-2">Let's Connect</h2>
//           <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
//             Have a project in mind? Let's discuss how I can help bring your ideas to life.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contact Info */}
//           <div className="lg:col-span-1 space-y-6">
//             {contactInfo.map((item) => {
//               const Icon = item.icon;
//               const content = (
//                 <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:shadow-md transition-shadow">
//                   <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
//                     <Icon className="w-5 h-5 text-primary-500" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</div>
//                     <div className="font-medium">{item.value}</div>
//                   </div>
//                 </div>
//               );

//               return item.href ? (
//                 <a key={item.label} href={item.href} className="block">
//                   {content}
//                 </a>
//               ) : (
//                 <div key={item.label}>{content}</div>
//               );
//             })}

//             {/* Social Links */}
//             <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
//               <h3 className="font-medium mb-4">Follow Me</h3>
//               <div className="flex gap-3">
//                 {socialLinks.map(({ icon: Icon, href, label }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <form onSubmit={handleSubmit} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Name <span className="text-primary-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
//                     placeholder="Jade Down"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium mb-2">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
//                     placeholder="Acme Inc."
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   Email <span className="text-primary-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
//                   placeholder="jade@example.com"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">
//                   Message <span className="text-primary-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="5"
//                   className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none"
//                   placeholder="Tell me about your project... (minimum 10 characters)"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>Sending...</>
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-4 h-4" />
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



// // Contact.jsx
// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter, AlertCircle, RefreshCw } from 'lucide-react';
// import { PERSONAL_INFO } from '../utils/constants';
// import { submitContact, checkHealth } from '../services/api';

// const Contact = ({ showToast }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [retryCount, setRetryCount] = useState(0);
//   const [showRetryMessage, setShowRetryMessage] = useState(false);
//   const [serverStatus, setServerStatus] = useState('checking');
//   const [lastSubmitAttempt, setLastSubmitAttempt] = useState(null);

//   // Check server status on mount
//   useEffect(() => {
//     const checkServer = async () => {
//       try {
//         const result = await checkHealth();
//         if (result.status === 'ok') {
//           setServerStatus('online');
//           console.log('✅ Server is online');
//         } else {
//           setServerStatus('waking');
//           console.log('⚠️ Server is waking up');
//         }
//       } catch (error) {
//         setServerStatus('offline');
//         console.log('❌ Server appears offline');
//       }
//     };
    
//     checkServer();
    
//     // Check server status every 30 seconds
//     const interval = setInterval(checkServer, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     // Clear retry message when user types
//     if (showRetryMessage) setShowRetryMessage(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Trim all fields
//     const trimmedData = {
//       name: formData.name.trim(),
//       email: formData.email.trim().toLowerCase(),
//       company: formData.company.trim() || '',
//       message: formData.message.trim()
//     };

//     // Validation
//     if (!trimmedData.name) {
//       showToast('Please enter your name');
//       return;
//     }
    
//     if (!trimmedData.email) {
//       showToast('Please enter your email');
//       return;
//     }
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(trimmedData.email)) {
//       showToast('Please enter a valid email address');
//       return;
//     }
    
//     if (!trimmedData.message) {
//       showToast('Please enter your message');
//       return;
//     }
    
//     if (trimmedData.message.length < 10) {
//       showToast('Message must be at least 10 characters');
//       return;
//     }

//     setIsSubmitting(true);
//     setShowRetryMessage(false);
//     setLastSubmitAttempt(new Date());
    
//     try {
//       console.log('📤 Submitting contact form with data:', trimmedData);
      
//       // Call API with automatic retry logic
//       const response = await submitContact(trimmedData);
      
//       console.log('✅ Contact response:', response);
//       showToast('✨ Message sent successfully! I\'ll get back to you soon.');
      
//       // Clear form
//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         message: '',
//       });
//       setRetryCount(0);
//       setServerStatus('online');
      
//     } catch (error) {
//       console.error('❌ Contact error:', error);
      
//       // Handle timeout errors specially
//       if (error.isTimeout) {
//         setShowRetryMessage(true);
//         setServerStatus('waking');
        
//         showToast('⏰ Server is waking up. Your message is being queued...');
        
//         // Auto retry after 15 seconds
//         setTimeout(() => {
//           if (isSubmitting) {
//             console.log('🔄 Auto-retrying after wake-up period...');
//             handleSubmit(e);
//           }
//         }, 15000);
        
//       } else {
//         const errorMessage = error.message || 'Failed to send message. Please try again.';
//         showToast(errorMessage);
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const manualRetry = () => {
//     if (lastSubmitAttempt) {
//       handleSubmit({ preventDefault: () => {} });
//     }
//   };

//   const contactInfo = [
//     { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
//     { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
//     { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
//   ];

//   const socialLinks = [
//     { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
//     { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
//     { icon: Instagram, href: PERSONAL_INFO.instagram, label: 'Instagram' },
//     { icon: Twitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
//   ];

//   // Server status indicator
//   const ServerStatusBadge = () => {
//     const statusConfig = {
//       online: { color: 'green', text: 'Server Online', icon: '✅' },
//       waking: { color: 'yellow', text: 'Server Waking Up', icon: '⏰' },
//       offline: { color: 'red', text: 'Server Offline', icon: '⚠️' },
//       checking: { color: 'gray', text: 'Checking Server...', icon: '🔄' }
//     };
    
//     const config = statusConfig[serverStatus];
    
//     return (
//       <div className={`text-xs flex items-center gap-1 text-${config.color}-600 dark:text-${config.color}-400`}>
//         <span>{config.icon}</span>
//         <span>{config.text}</span>
//       </div>
//     );
//   };

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-zinc-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 06</span>
//           <h2 className="section-header mt-2">Let's Connect</h2>
//           <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
//             Have a project in mind? Let's discuss how I can help bring your ideas to life.
//           </p>
//         </div>

//         {/* Server Status Banner */}
//         {(serverStatus === 'waking' || serverStatus === 'offline') && (
//           <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl flex items-start gap-3">
//             <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 flex-shrink-0" />
//             <div className="text-sm text-yellow-800 dark:text-yellow-300">
//               <p className="font-medium">
//                 {serverStatus === 'waking' ? 'Server is waking up from sleep mode' : 'Server appears to be offline'}
//               </p>
//               <p className="mt-1">
//                 {serverStatus === 'waking' 
//                   ? 'Render\'s free tier services spin down after inactivity. Your message will be sent automatically when the server responds. This may take 30-60 seconds.'
//                   : 'Please check your internet connection or try again later.'}
//               </p>
//               {serverStatus === 'waking' && (
//                 <button
//                   onClick={manualRetry}
//                   disabled={isSubmitting}
//                   className="mt-2 text-xs flex items-center gap-1 text-yellow-700 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300"
//                 >
//                   <RefreshCw className="w-3 h-3" />
//                   Retry Now
//                 </button>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Retry Message */}
//         {showRetryMessage && (
//           <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-start gap-3">
//             <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 animate-spin" />
//             <div className="text-sm text-blue-800 dark:text-blue-300">
//               <p className="font-medium">Auto-retry in progress...</p>
//               <p className="mt-1">Your message is being resent. Please wait a moment.</p>
//             </div>
//           </div>
//         )}

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contact Info */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Server Status Card */}
//             <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-medium">Server Status</h3>
//                 <ServerStatusBadge />
//               </div>
//               <p className="text-xs text-zinc-500 dark:text-zinc-400">
//                 Render free tier may take 30-60 seconds to respond to first request
//               </p>
//             </div>
            
//             {contactInfo.map((item) => {
//               const Icon = item.icon;
//               const content = (
//                 <div className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl hover:shadow-md transition-shadow">
//                   <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
//                     <Icon className="w-5 h-5 text-primary-500" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</div>
//                     <div className="font-medium">{item.value}</div>
//                   </div>
//                 </div>
//               );

//               return item.href ? (
//                 <a key={item.label} href={item.href} className="block">
//                   {content}
//                 </a>
//               ) : (
//                 <div key={item.label}>{content}</div>
//               );
//             })}

//             {/* Social Links */}
//             <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
//               <h3 className="font-medium mb-4">Follow Me</h3>
//               <div className="flex gap-3">
//                 {socialLinks.map(({ icon: Icon, href, label }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <form onSubmit={handleSubmit} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8">
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     Name <span className="text-primary-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     disabled={isSubmitting}
//                     className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="Jade Down"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium mb-2">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     disabled={isSubmitting}
//                     className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
//                     placeholder="Acme Inc."
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   Email <span className="text-primary-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                   className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
//                   placeholder="jade@example.com"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">
//                   Message <span className="text-primary-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="5"
//                   disabled={isSubmitting}
//                   className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none disabled:opacity-50 disabled:cursor-not-allowed"
//                   placeholder="Tell me about your project... (minimum 10 characters)"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-4 h-4" />
//                   </>
//                 )}
//               </button>
              
//               <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-4">
//                 ⚡ Render free tier: First request may take 30-60 seconds to wake the server
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;