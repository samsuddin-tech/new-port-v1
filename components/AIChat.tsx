import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_DATA, EXPERIENCE, SKILLS, TOOLS, EDUCATION } from '../constants';

interface ChatMessageProps {
  role: 'user' | 'model';
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, text }) => (
  <div className={`flex w-full mb-4 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
        role === 'user'
          ? 'bg-brand-500 text-white rounded-br-none'
          : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200 shadow-sm'
      }`}
    >
      {text}
    </div>
  </div>
);

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    { role: 'model', text: "Hi! I'm Samsuddin's AI assistant. Ask me anything about his skills, experience, or marketing strategies!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    // Optimistically add user message
    const newMessages: ChatMessageProps[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not configured");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Construct context from constants
      const context = `
        You are an AI assistant representing Samsuddin Khan. Answer questions based on this resume data:
        Name: ${RESUME_DATA.name}
        Role: ${RESUME_DATA.role}
        About: ${RESUME_DATA.about}
        Skills: ${SKILLS.map(s => s.name).join(', ')}
        Tools: ${TOOLS.join(', ')}
        Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company}: ${e.description.join(' ')}`).join('. ')}
        Education: ${EDUCATION.degree} at ${EDUCATION.school}, ${EDUCATION.year}.
        
        Style: Professional, enthusiastic, concise, and helpful. Use emojis occasionally.
        If asked about something not in the resume, politely say you don't have that info but emphasize his known skills.
      `;

      // Build history for the model, filtering out the initial greeting if needed to maintain turn order
      // We want User -> Model -> User -> Model sequence.
      // The context injection handles the first User->Model turn.
      // So we take the visible messages (excluding the very first greeting if it breaks flow, but Gemini is usually smart).
      // Safest is to just send the context + recent history starting with a User message if possible.
      
      // Remove the initial greeting from the history sent to API to avoid Model -> Model sequence at start
      const apiHistory = newMessages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: context }] }, 
            { role: 'model', parts: [{ text: "Understood. I am ready to answer questions about Samsuddin." }] },
            ...apiHistory
        ],
      });

      const reply = response.text || "I'm having trouble thinking right now. Please try again later.";
      
      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently offline (API Key missing or error). Please check the Contact section to reach Samsuddin directly! 📧" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-brand-100 z-50 overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-semibold">Chat with AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} role={msg.role} text={msg.text} />
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-slate-100 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-brand-500" />
                    <span className="text-xs text-slate-500">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my skills..."
                className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-400 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-brand-500 text-white p-2 rounded-full hover:bg-brand-600 disabled:opacity-50 transition"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-500 text-white p-4 rounded-full shadow-lg shadow-brand-500/30 z-50 flex items-center justify-center group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask AI about me!
          </span>
        )}
      </motion.button>
    </>
  );
};

export default AIChat;