// import React, { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
// import { sendChatMessage } from '../services/api';

// const ChatBot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       role: 'bot',
//       content: "Hi! I'm Blessing's AI assistant. How can I help you today?",
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState(null);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     // Generate or retrieve session ID
//     const savedSessionId = localStorage.getItem('chatSessionId');
//     if (savedSessionId) {
//       setSessionId(savedSessionId);
//     } else {
//       const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
//       localStorage.setItem('chatSessionId', newSessionId);
//       setSessionId(newSessionId);
//     }
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim() || isLoading) return;

//     const userMessage = inputMessage.trim();
//     setInputMessage('');
    
//     // Add user message to chat
//     setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
//     setIsLoading(true);

//     try {
//       // Send to backend
//       const response = await sendChatMessage(userMessage, sessionId);
      
//       // Add bot response
//       setMessages(prev => [...prev, { role: 'bot', content: response.response }]);
      
//       // Save session ID if new
//       if (response.sessionId && response.sessionId !== sessionId) {
//         setSessionId(response.sessionId);
//         localStorage.setItem('chatSessionId', response.sessionId);
//       }
//     } catch (error) {
//       setMessages(prev => [
//         ...prev,
//         { role: 'bot', content: 'Sorry, I encountered an error. Please try again later.' },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   if (!isOpen) {
//     return (
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 w-14 h-14 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
//       >
//         <MessageCircle className="w-6 h-6 text-white" />
//       </button>
//     );
//   }

//   return (
//     <div
//       className={`fixed bottom-6 right-6 w-96 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl z-50 transition-all ${
//         isMinimized ? 'h-14' : 'h-[600px]'
//       }`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
//             <span className="text-white text-sm font-bold">AI</span>
//           </div>
//           <div>
//             <h3 className="font-semibold">AI Assistant</h3>
//             <p className="text-xs text-green-500 flex items-center gap-1">
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//               Online
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setIsMinimized(!isMinimized)}
//             className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
//           >
//             {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
//           </button>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {!isMinimized && (
//         <>
//           {/* Messages */}
//           <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-2xl px-4 py-2 ${
//                     message.role === 'user'
//                       ? 'bg-primary-500 text-white rounded-tr-none'
//                       : 'bg-zinc-100 dark:bg-zinc-800 rounded-tl-none'
//                   }`}
//                 >
//                   <p className="text-sm">{message.content}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-2">
//                   <div className="flex gap-1">
//                     <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-100"></div>
//                     <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-200"></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-b-2xl">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 disabled={isLoading}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={isLoading || !inputMessage.trim()}
//                 className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//             <p className="text-[10px] text-center text-zinc-500 mt-2">
//               AI assistant • Responses are simulated
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ChatBot;
// ChatBot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { sendChatMessage } from '../services/api';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "Hi! I'm Blessing's AI assistant. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-minimize on small screens when not in use
  useEffect(() => {
    if (windowWidth < 640 && isOpen && !isMinimized) {
      // On small screens, auto-minimize after 5 seconds of inactivity
      const timer = setTimeout(() => {
        if (!inputMessage && messages.length > 1) {
          setIsMinimized(true);
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized, windowWidth, inputMessage, messages.length]);

  useEffect(() => {
    // Generate or retrieve session ID
    const savedSessionId = localStorage.getItem('chatSessionId');
    if (savedSessionId) {
      setSessionId(savedSessionId);
    } else {
      const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('chatSessionId', newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Send to backend
      const response = await sendChatMessage(userMessage, sessionId);
      
      // Add bot response
      setMessages(prev => [...prev, { role: 'bot', content: response.response }]);
      
      // Save session ID if new
      if (response.sessionId && response.sessionId !== sessionId) {
        setSessionId(response.sessionId);
        localStorage.setItem('chatSessionId', response.sessionId);
      }
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: 'Sorry, I encountered an error. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Responsive dimensions
  const getChatDimensions = () => {
    if (windowWidth < 640) {
      // Mobile: Full width minus padding
      return {
        width: 'calc(100vw - 2rem)',
        maxWidth: 'calc(100vw - 2rem)',
        height: isMinimized ? '3.5rem' : '80vh',
        right: '1rem',
        left: '1rem',
        bottom: '1rem',
      };
    } else if (windowWidth < 768) {
      // Tablet
      return {
        width: '24rem',
        maxWidth: '90vw',
        height: isMinimized ? '3.5rem' : '600px',
        right: '1rem',
        bottom: '1rem',
      };
    } else {
      // Desktop
      return {
        width: '24rem',
        maxWidth: '24rem',
        height: isMinimized ? '3.5rem' : '600px',
        right: '1.5rem',
        bottom: '1.5rem',
      };
    }
  };

  const chatDimensions = getChatDimensions();

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    );
  }

  return (
    <div
      className="fixed bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl z-50 transition-all"
      style={{
        width: chatDimensions.width,
        maxWidth: chatDimensions.maxWidth,
        height: chatDimensions.height,
        right: chatDimensions.right,
        left: windowWidth < 640 ? chatDimensions.left : 'auto',
        bottom: chatDimensions.bottom,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs sm:text-sm font-bold">AI</span>
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">AI Assistant</h3>
            <p className="text-[10px] sm:text-xs text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 sm:p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 sm:p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[calc(100%-7rem)] overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-2 ${
                    message.role === 'user'
                      ? 'bg-primary-500 text-white rounded-tr-none'
                      : 'bg-zinc-100 dark:bg-zinc-800 rounded-tl-none'
                  }`}
                >
                  <p className="text-xs sm:text-sm break-words">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 sm:px-4 sm:py-2 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="p-2 sm:p-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <p className="text-[9px] sm:text-[10px] text-center text-zinc-500 mt-2">
              AI assistant • Responses are simulated
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;