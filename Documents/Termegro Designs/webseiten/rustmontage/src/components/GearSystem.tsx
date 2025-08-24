'use client'
import { useEffect, useRef, useState } from 'react'

type Props = { 
  enabled?: boolean
  onSendChatMessage?: (message: string) => void
}

export default function GearSystem({ enabled = true, onSendChatMessage }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [totalDistance, setTotalDistance] = useState(0)
  const [primaryGearRotation, setPrimaryGearRotation] = useState(0)
  const [secondaryGearRotation, setSecondaryGearRotation] = useState(0)
  const lastPosRef = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef<number>()
  const owlBannerRef = useRef<HTMLDivElement | null>(null)
  const nextMilestoneMmRef = useRef(600)
  const lastOwlIdxRef = useRef(-1)
  const lastHighlightCheckRef = useRef(0)
  const highlightedElementsRef = useRef(new Set())

  const chatMessages = [
    "🔧 Benötigen Sie Hilfe bei der Küchenplanung? Wir beraten Sie gerne kostenlos!",
    "⭐ Über 500 zufriedene Kunden vertrauen bereits auf Rustmontage!",
    "🏠 Kostenlose Beratung bei Ihnen vor Ort - wann passt es Ihnen?",
    "💡 Wussten Sie? Wir bieten 2 Jahre Gewährleistung auf alle Arbeiten!",
    "📞 Ein kurzer Anruf genügt: +43 66 565 788 972",
    "🎯 Präzision ist unser Handwerk - lassen Sie uns das beweisen!",
    "⚡ Schnelle Termine verfügbar! Meistens innerhalb von 7-10 Tagen.",
    "🌟 Was können wir heute für Sie tun? Küche? Möbel? Reparaturen?",
    "🔨 10+ Jahre Erfahrung sprechen für sich. Vertrauen Sie den Profis!",
    "💰 Faire Preise, transparente Kostenvoranschläge - ohne Überraschungen!",
    "🚀 Ihre Traumküche wartet! Lassen Sie uns gemeinsam planen.",
    "⚙️ Wie Zahnräder ineinandergreifen, so perfekt passt unsere Arbeit!"
  ]

  useEffect(() => {
    if (!enabled) return

    const PX_TO_MM = 25.4 / 96 // Convert pixels to millimeters (assuming 96 DPI)
    let smoothX = position.x
    let smoothY = position.y

    function sendChatMessage() {
      if (onSendChatMessage) {
        let pick = Math.floor(Math.random() * chatMessages.length)
        if (pick === lastOwlIdxRef.current) pick = (pick + 1) % chatMessages.length
        lastOwlIdxRef.current = pick
        onSendChatMessage(chatMessages[pick])
      }
    }

    function highlightTextUnderGears() {
      const gearRect = {
        left: position.x - 20,
        right: position.x + 20,
        top: position.y - 20,
        bottom: position.y + 20
      }

      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span')
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const isIntersecting = rect.left < gearRect.right && rect.right > gearRect.left &&
                              rect.top < gearRect.bottom && rect.bottom > gearRect.top
        
        if (isIntersecting && !highlightedElementsRef.current.has(el)) {
          // Only highlight text elements, not containers
          if (el.textContent && el.textContent.trim().length > 0 && el.children.length === 0) {
            el.classList.add('gear-text-highlight')
            highlightedElementsRef.current.add(el)
            
            setTimeout(() => {
              el.classList.remove('gear-text-highlight')
              highlightedElementsRef.current.delete(el)
            }, 2000)
          }
        }
      })
    }

    function handleMouseMove(e: MouseEvent) {
      const newX = e.clientX
      const newY = e.clientY
      
      // Calculate distance moved
      const deltaX = newX - lastPosRef.current.x
      const deltaY = newY - lastPosRef.current.y
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      if (distance > 0) {
        setTotalDistance(prev => prev + distance)
        
        // Calculate gear rotations (different speeds for visual interest)
        const rotationSpeed = distance * 2 // Adjust rotation speed
        setPrimaryGearRotation(prev => prev + rotationSpeed)
        setSecondaryGearRotation(prev => prev - rotationSpeed * 1.5) // Counter-rotating, faster
        
        lastPosRef.current = { x: newX, y: newY }
      }

      // Smooth position updates
      const smoothingFactor = 0.1
      smoothX += (newX - smoothX) * smoothingFactor
      smoothY += (newY - smoothY) * smoothingFactor

      setPosition({ x: smoothX, y: smoothY })
      
      // Only check for highlights every 100ms to reduce flickering
      const now = Date.now()
      if (now - lastHighlightCheckRef.current > 100) {
        highlightTextUnderGears()
        lastHighlightCheckRef.current = now
      }

      // Check for milestone - send chat message every 600mm
      const totalMm = totalDistance * PX_TO_MM
      if (totalMm >= nextMilestoneMmRef.current) {
        sendChatMessage()
        nextMilestoneMmRef.current += 600
      }
    }

    function handleMouseLeave() {
      setPosition({ x: -100, y: -100 }) // Hide gears off-screen
    }

    function handleDocumentClick() {
      if (owlBannerRef.current) {
        owlBannerRef.current.style.animation = 'owlSlideOut 0.3s ease-in forwards'
        setTimeout(() => {
          if (owlBannerRef.current) {
            owlBannerRef.current.remove()
            owlBannerRef.current = null
          }
        }, 300)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('click', handleDocumentClick)
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
      if (owlBannerRef.current) {
        owlBannerRef.current.remove()
      }
    }
  }, [enabled, position.x, position.y, totalDistance])

  if (!enabled) return null
  
  const totalMm = Math.round(totalDistance * (25.4 / 96))

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Primary Gear (larger, main gear) */}
      <div
        className="gear-primary"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) rotate(${primaryGearRotation}deg)`,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="drop-shadow-lg">
          <defs>
            <linearGradient id="gearGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="50%" stopColor="#D2691E" />
              <stop offset="100%" stopColor="#CD853F" />
            </linearGradient>
          </defs>
          <path d="M25,5 L30,10 L35,8 L40,15 L45,20 L40,25 L45,30 L40,35 L35,42 L30,40 L25,45 L20,40 L15,42 L10,35 L5,30 L10,25 L5,20 L10,15 L15,8 L20,10 Z" 
                fill="url(#gearGradient1)" 
                stroke="#654321" 
                strokeWidth="1"/>
          <circle cx="25" cy="25" r="8" fill="#654321"/>
          <circle cx="25" cy="25" r="4" fill="#8B4513"/>
        </svg>
      </div>

      {/* Secondary Gear (smaller, positioned to the right) */}
      <div
        className="gear-secondary"
        style={{
          left: position.x + 35,
          top: position.y - 10,
          transform: `translate(-50%, -50%) rotate(${secondaryGearRotation}deg)`,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" className="drop-shadow-md">
          <defs>
            <linearGradient id="gearGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D2691E" />
              <stop offset="50%" stopColor="#CD853F" />
              <stop offset="100%" stopColor="#DEB887" />
            </linearGradient>
          </defs>
          <path d="M15,3 L18,6 L21,5 L24,9 L27,12 L24,15 L27,18 L24,21 L21,25 L18,24 L15,27 L12,24 L9,25 L6,21 L3,18 L6,15 L3,12 L6,9 L9,5 L12,6 Z" 
                fill="url(#gearGradient2)" 
                stroke="#654321" 
                strokeWidth="0.8"/>
          <circle cx="15" cy="15" r="5" fill="#654321"/>
          <circle cx="15" cy="15" r="2.5" fill="#8B4513"/>
        </svg>
      </div>

      {/* Distance Counter */}
      <div
        className="gear-counter"
        style={{
          left: position.x - 70,
          top: position.y + 30,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-mono backdrop-blur-sm">
          {totalMm}mm
        </div>
      </div>

      <style jsx global>{`
        .gear-primary, .gear-secondary {
          position: fixed;
          pointer-events: none;
          z-index: 1;
          transition: transform 0.1s ease-out;
        }

        .gear-counter {
          position: fixed;
          pointer-events: none;
          z-index: 2;
        }

        .gear-text-highlight {
          background-color: rgba(210, 105, 30, 0.15) !important;
          box-shadow: 0 0 6px rgba(210, 105, 30, 0.3) !important;
          border-radius: 3px !important;
          transition: background-color 0.5s ease, box-shadow 0.5s ease !important;
          animation: gearHighlight 0.5s ease-in-out !important;
        }

        @keyframes gearHighlight {
          0% {
            background-color: transparent;
            box-shadow: none;
          }
          50% {
            background-color: rgba(210, 105, 30, 0.25);
            box-shadow: 0 0 8px rgba(210, 105, 30, 0.4);
          }
          100% {
            background-color: rgba(210, 105, 30, 0.15);
            box-shadow: 0 0 6px rgba(210, 105, 30, 0.3);
          }
        }



        /* Smooth gear rotation */
        .gear-primary svg, .gear-secondary svg {
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
        }
      `}</style>
    </div>
  )
}
