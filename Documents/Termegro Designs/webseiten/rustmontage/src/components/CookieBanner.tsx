'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('rustmontage-cookies')
    if (!cookieChoice) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('rustmontage-cookies', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('rustmontage-cookies', 'essential-only')
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem('rustmontage-cookies', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-6xl">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          
          {/* Icon & Title */}
          <div className="flex items-center flex-shrink-0">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-lg sm:text-xl mr-3 sm:mr-4">
              🔧
            </div>
            <div>
              <h3 className="font-bold text-primary text-base sm:text-lg">Cookie-Einstellungen</h3>
              <p className="text-xs sm:text-sm text-text-secondary">Rustmontage</p>
            </div>
          </div>

          {/* Main Message */}
          <div className="flex-1">
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              Wir verwenden Cookies, um Ihnen ein optimales Website-Erlebnis zu bieten. 
              Dazu gehören Cookies für den Betrieb und die Optimierung der Seite sowie für unsere Services.
            </p>
            
            {showDetails && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-primary mb-2">🔒 Notwendige</h4>
                    <p className="text-text-secondary">Essentiell für Grundfunktionen der Website.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">📊 Analyse</h4>
                    <p className="text-text-secondary">Helfen uns, die Website zu verbessern.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">🎯 Marketing</h4>
                    <p className="text-text-secondary">Für personalisierte Inhalte und Werbung.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0 w-full lg:w-auto">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-primary hover:text-secondary underline text-xs sm:text-sm font-medium transition-colors self-start"
            >
              {showDetails ? 'Weniger zeigen' : 'Details anzeigen'}
            </button>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleRejectAll}
                className="px-3 sm:px-4 py-2 border border-gray-300 text-text-secondary rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm flex-1 sm:flex-none"
              >
                Alle ablehnen
              </button>
              
              <button
                onClick={handleDecline}
                className="px-3 sm:px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200 text-xs sm:text-sm flex-1 sm:flex-none"
              >
                Nur notwendige
              </button>
              
              <button
                onClick={handleAccept}
                className="px-4 sm:px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm flex-1 sm:flex-none"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-text-secondary">
            Weitere Informationen finden Sie in unserer{' '}
            <a href="/datenschutz" className="text-primary hover:text-secondary underline transition-colors">
              Datenschutzerklärung
            </a>
            {' '}und in den{' '}
            <a href="/agb" className="text-primary hover:text-secondary underline transition-colors">
              AGB
            </a>
            {'. '}
            <a href="/impressum" className="text-primary hover:text-secondary underline transition-colors">
              Impressum
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
