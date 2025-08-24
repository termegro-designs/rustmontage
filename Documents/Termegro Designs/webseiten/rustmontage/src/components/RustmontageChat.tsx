'use client'
import { useState, useEffect, useRef } from 'react'

type ChatMessage = {
  id: string
  text: string
  timestamp: Date
  sender: 'rustmontage'
}

type Props = { 
  onNewMessage: (message: string) => void
}

export default function RustmontageChat({ onNewMessage }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [newMessageAnimation, setNewMessageAnimation] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const salesMessages = [
    "👋 Hallo! Ich bin von Rustmontage. Planen Sie gerade ein Küchenprojekt?",
    "🔧 Unsere Experten-Montage macht den Unterschied! Lassen Sie uns Ihnen helfen.",
    "⭐ Über 500 zufriedene Kunden vertrauen bereits auf Rustmontage!",
    "🏠 Kostenlose Beratung bei Ihnen vor Ort - wann passt es Ihnen?",
    "💡 Wussten Sie? Wir bieten 2 Jahre Gewährleistung auf alle Arbeiten!",
    "📞 Ein kurzer Anruf genügt: +43 66 565 788 972",
    "🎯 Präzision ist unser Handwerk - lassen Sie uns das beweisen!",
    "⚡ Schnelle Termine verfügbar! Meistens innerhalb von 7-10 Tagen.",
    "🌟 Was können wir heute für Sie tun? Küche? Möbel? Reparaturen?",
    "🔨 25+ Jahre Erfahrung sprechen für sich. Vertrauen Sie den Profis!",
    "💰 Faire Preise, transparente Kostenvoranschläge - ohne Überraschungen!",
    "🚀 Ihre Traumküche wartet! Lassen Sie uns gemeinsam planen.",
  ]

  // Add new message function
  const addMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      sender: 'rustmontage'
    }
    
    setMessages(prev => [...prev, newMessage])
    
    if (!isOpen) {
      setUnreadCount(prev => prev + 1)
      setNewMessageAnimation(true)
      setTimeout(() => setNewMessageAnimation(false), 1000)
    }
    
    // Scroll to bottom
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  // Expose addMessage to parent via callback
  useEffect(() => {
    onNewMessage(addMessage)
  }, [onNewMessage])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setUnreadCount(0)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  // Send random message function (for external use)
  useEffect(() => {
    if (messages.length === 0) {
      // Send welcome message after 3 seconds
      setTimeout(() => {
        addMessage(salesMessages[0])
      }, 3000)
    }
  }, [])

  return (
    <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-[90]">
      
      {/* Chat Window */}
      <div className={`mb-4 transform transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-full opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white/98 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 w-72 sm:w-80 h-80 sm:h-96 max-h-[80vh] flex flex-col overflow-hidden">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-lg sm:text-xl">
                🔨
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm">Rustmontage</div>
                <div className="text-xs text-white/80 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1 sm:mr-2"></div>
                  Online
                </div>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 sm:p-4 overflow-y-auto bg-gray-50/80 backdrop-blur-sm space-y-2 sm:space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="flex justify-start">
                <div className="max-w-[85%] sm:max-w-[80%]">
                  <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 pl-2 sm:pl-3">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Area */}
          <div className="p-2 sm:p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-100 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-500">
                Rufen Sie uns an für direkte Beratung...
              </div>
              <a 
                href="tel:+4366565788972"
                className="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 flex-shrink-0"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`relative bg-gradient-to-r from-primary to-secondary text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ${
          newMessageAnimation ? 'animate-bounce' : ''
        }`}
      >
        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </div>
        )}

        {/* New Message Indicator */}
        {newMessageAnimation && (
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping"></div>
        )}
      </button>

      <style jsx global>{`
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}
