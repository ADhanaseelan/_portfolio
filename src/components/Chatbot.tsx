import React, { useState } from 'react'
import { MessageSquare, Send } from 'lucide-react'
import { chatbotDatabase } from '../data/portfolioData'

export default function Chatbot() {
  const [chatbotMessages, setChatbotMessages] = useState<Array<{ sender: 'user' | 'dhana', text: string }>>([
    { sender: 'dhana', text: "Hi, I'm DhanaGPT! Ask me anything about Dhanaseelan's skills, experience, or projects." }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleChatQuestion = (question: string) => {
    setChatbotMessages((prev) => [...prev, { sender: 'user', text: question }])
    setIsTyping(true)

    const key = question.toLowerCase().trim()
    const responseText = chatbotDatabase[key] || "I'm not sure about that one, but I'm learning! You can reach out directly via the Contact section below."

    setTimeout(() => {
      setChatbotMessages((prev) => [...prev, { sender: 'dhana', text: responseText }])
      setIsTyping(false)
    }, 800)
  }

  const handleCustomChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const question = chatInput
    setChatInput('')
    handleChatQuestion(question)
  }

  return (
    <section id="chatbot" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        
        <div className="scroll-reveal space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400 font-bold">08 / Interactive Discovery</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">DhanaGPT Assistant</h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Click one of the suggested prompts or type a query in the chat box to discover my development methods, active projects, stack choices, and hiring details instantly.
          </p>

          <div className="space-y-3 pt-4">
            <span className="text-[10px] uppercase font-bold text-neutral-500 block tracking-wider font-mono">Suggested Questions:</span>
            <div className="flex flex-col gap-2.5">
              {Object.keys(chatbotDatabase).map((q) => (
                <button
                  key={q}
                  onClick={() => handleChatQuestion(q)}
                  className="text-left px-4 py-3 rounded-xl border border-white/5 bg-white/5 text-xs text-neutral-300 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all text-ellipsis overflow-hidden uppercase font-semibold font-mono"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chatbot Window */}
        <div className="glass-card border-orange-500/10 flex flex-col justify-between h-[520px] scroll-reveal">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/2">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-bold text-xs uppercase tracking-wider font-mono">DhanaGPT Status: Online</span>
            </div>
            <MessageSquare className="w-4 h-4 text-orange-400" />
          </div>

          {/* Message Board */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {chatbotMessages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-orange-500 text-white rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-neutral-300 rounded-tl-none whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-neutral-500 text-xs">
                  DhanaGPT is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleCustomChatSubmit} className="p-4 border-t border-white/5 flex gap-2">
            <input
              type="text"
              placeholder="Ask a question about Dhanaseelan..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50"
            />
            <button 
              type="submit"
              className="bg-orange-500 text-white p-2.5 rounded-xl hover:bg-orange-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
