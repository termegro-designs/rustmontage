'use client'

import { useEffect, useRef } from 'react'

type Props = {
  rootSelector?: string
}

export default function LuxuryCursor({ rootSelector }: Props) {
  const ringRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const tapeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootSelector ? document.querySelector(rootSelector) as HTMLElement | null : document.body
    if (!root) return

    const overlay = overlayRef.current!
    const ring = ringRef.current!
    const dot = dotRef.current!
    const tape = tapeRef.current!

    let pointerX = 0
    let pointerY = 0
    let ringX = 0
    let ringY = 0
    let ringScale = 1
    let dotScale = 1
    let lastSparkle = 0
    let prevX = 0
    let prevY = 0
    let tapeLenTarget = 60
    let tapeLenRendered = 60
    let tapeAngleDeg = 0
    const PX_TO_MM = 25.4 / 96
    let totalDistancePx = 0
    let markerAccumPx = 0
    const markerEveryPx = 120
    const tapeLabel = document.createElement('span')
    tapeLabel.className = 'lux-tape-label'
    tape.appendChild(tapeLabel)
    const tapeStart = document.createElement('span')
    tapeStart.className = 'lux-tape-start'
    tapeStart.textContent = '0 mm'
    tape.appendChild(tapeStart)
    let rafId = 0

    const hoverables = 'a, button, .btn-primary, .btn-secondary, .btn-small, .card, [data-cursor="hover"]'

    const onMove = (e: MouseEvent) => {
      pointerX = e.clientX
      pointerY = e.clientY
      dot.style.transform = `translate(${pointerX}px, ${pointerY}px) scale(${dotScale})`

      const dx = pointerX - prevX
      const dy = pointerY - prevY
      const stepDist = Math.hypot(dx, dy)
      totalDistancePx += stepDist
      markerAccumPx += stepDist
      const speed = stepDist
      tapeAngleDeg = Math.atan2(dy, dx) * (180 / Math.PI)
      tapeLenTarget = Math.min(180, Math.max(50, 50 + speed * 1.4))
      prevX = pointerX
      prevY = pointerY

      if (markerAccumPx >= markerEveryPx) {
        markerAccumPx = 0
        spawnMeasure(pointerX, pointerY, totalDistancePx * PX_TO_MM)
      }

      const now = performance.now()
      if (now - lastSparkle > 55) {
        lastSparkle = now
        spawnSparkle(pointerX, pointerY)
      }
    }

    const onDown = () => {
      ringScale = 1.25
      dotScale = 0.8
    }
    const onUp = () => {
      ringScale = 1
      dotScale = 1
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const hoverEl = t.closest(hoverables) as HTMLElement | null
      if (hoverEl) {
        ring.classList.add('active')
        ringScale = 1.6
      }
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const hoverEl = t.closest(hoverables) as HTMLElement | null
      if (hoverEl) {
        ring.classList.remove('active')
        ringScale = 1
      }
    }

    let nextMilestoneMm = 1500
    let bannerEl: HTMLDivElement | null = null
    const bannerMessages = [
      'Schon 1,5 m gemessen – Zeit für Maßarbeit? Jetzt Rustmontage anrufen!',
      'Präzision macht den Unterschied. Ein kurzer Anruf – wir kümmern uns.',
      'Lust auf perfekte Montage? Jetzt beraten lassen – Rustmontage.',
      'Aus Ideen werden Räume. Klingt gut? Wir sind nur einen Anruf entfernt.',
      'Maßgeschneidert statt Kompromisse. Rustmontage – jetzt anrufen.'
    ]
    let lastBannerIdx = -1

    const spawnBanner = (text: string) => {
      const el = document.createElement('div') as HTMLDivElement
      el.className = 'lux-banner'
      el.textContent = text
      overlay.appendChild(el)
      return el
    }

    const animate = () => {
      ringX += (pointerX - ringX) * 0.15
      ringY += (pointerY - ringY) * 0.15
      ring.style.transform = `translate(${ringX}px, ${ringY}px) scale(${ringScale})`
      tapeLenRendered += (tapeLenTarget - tapeLenRendered) * 0.2
      tape.style.width = `${tapeLenRendered}px`
      tape.style.transform = `translate(${ringX}px, ${ringY}px) rotate(${tapeAngleDeg}deg)`
      const totalMm = totalDistancePx * PX_TO_MM
      tapeLabel.textContent = `${Math.round(totalMm)} mm`

      if (totalMm >= nextMilestoneMm && !bannerEl) {
        let pick = Math.floor(Math.random() * bannerMessages.length)
        if (pick === lastBannerIdx) pick = (pick + 1) % bannerMessages.length
        lastBannerIdx = pick
        bannerEl = spawnBanner(bannerMessages[pick])
        nextMilestoneMm += 1500
      }

      if (bannerEl) {
        bannerEl.style.transform = `translate(${pointerX + 24}px, ${pointerY + 18}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    const spawnSparkle = (x: number, y: number) => {
      const s = document.createElement('span')
      s.className = 'lux-sparkle'
      s.style.left = `${x}px`
      s.style.top = `${y}px`
      overlay.appendChild(s)
      s.addEventListener('animationend', () => s.remove())
    }

    const enableMagnetic = () => {
      const nodes = overlay.parentElement?.querySelectorAll('.magnetic') || []
      nodes.forEach((el) => {
        let rect: DOMRect | null = null
        const strength = 18
        const mm = (ev: Event) => {
          const mouseEvent = ev as MouseEvent
          rect = rect || (el as HTMLElement).getBoundingClientRect()
          const mx = mouseEvent.clientX - (rect.left + rect.width / 2)
          const my = mouseEvent.clientY - (rect.top + rect.height / 2)
          const tx = (mx / rect.width) * strength
          const ty = (my / rect.height) * strength
          ;(el as HTMLElement).style.transform = `translate(${tx}px, ${ty}px)`
        }
        const ml = () => {
          rect = null
          ;(el as HTMLElement).style.transform = 'translate(0,0)'
        }
        el.addEventListener('mousemove', mm)
        el.addEventListener('mouseleave', ml)
      })
    }

    const spawnMeasure = (x: number, y: number, mmValue: number) => {
      const wrap = document.createElement('div')
      wrap.className = 'lux-measure'
      wrap.style.left = `${x}px`
      wrap.style.top = `${y}px`
      const dot = document.createElement('span')
      dot.className = 'dot'
      const label = document.createElement('span')
      label.className = 'label'
      label.textContent = `${Math.round(mmValue)} mm`
      wrap.appendChild(dot)
      wrap.appendChild(label)
      overlay.appendChild(wrap)
      wrap.addEventListener('animationend', () => wrap.remove())
    }

    root.addEventListener('mousemove', onMove)
    root.addEventListener('mousedown', onDown)
    root.addEventListener('mouseup', onUp)
    root.addEventListener('mouseover', onOver)
    root.addEventListener('mouseout', onOut)

    enableMagnetic()
    animate()

    const onDismissBanner = () => {
      if (bannerEl) {
        bannerEl.remove()
        bannerEl = null
      }
    }

    document.addEventListener('click', onDismissBanner)

    return () => {
      cancelAnimationFrame(rafId)
      root.removeEventListener('mousemove', onMove)
      root.removeEventListener('mousedown', onDown)
      root.removeEventListener('mouseup', onUp)
      root.removeEventListener('mouseover', onOver)
      root.removeEventListener('mouseout', onOut)
      document.removeEventListener('click', onDismissBanner)
    }
  }, [rootSelector])

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[60] pointer-events-none select-none">
      <div ref={tapeRef} className="lux-tape" />
      <div ref={ringRef} className="lux-cursor-ring" />
      <div ref={dotRef} className="lux-cursor-dot" />
      <style jsx global>{`
        .lux-cursor-dot {
          position: fixed;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #ffffff;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
          transition: transform 120ms ease;
          will-change: transform;
          z-index: 60;
        }
        .lux-tape {
          position: fixed;
          left: 0;
          top: 0;
          height: 18px;
          width: 60px;
          border-radius: 9999px;
          transform: translate(-50%, -50%);
          transform-origin: 0% 50%;
          background-color: #f2d34a;
          background-image:
            repeating-linear-gradient(90deg, rgba(0,0,0,0.55) 0 2px, transparent 2px 10px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.85) 0 3px, transparent 3px 50px);
          box-shadow: 0 4px 18px rgba(0,0,0,0.25), inset 0 -1px 0 rgba(0,0,0,0.2);
          border: 1px solid rgba(0,0,0,0.18);
          z-index: 58;
          opacity: 0.95;
        }
        .lux-tape-label {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          font-weight: 700;
          color: rgba(0,0,0,0.8);
          text-shadow: 0 1px 0 rgba(255,255,255,0.45);
          letter-spacing: 0.02em;
        }
        .lux-tape-start {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          font-weight: 700;
          color: rgba(0,0,0,0.6);
          text-shadow: 0 1px 0 rgba(255,255,255,0.45);
          letter-spacing: 0.02em;
        }
        .lux-cursor-ring {
          position: fixed;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.15) inset, 0 10px 30px rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
          z-index: 60;
        }
        .lux-cursor-ring.active {
          border-color: rgba(255,215,160,0.9);
          box-shadow: 0 0 0 2px rgba(255,215,160,0.25) inset, 0 12px 40px rgba(0,0,0,0.25);
        }
        .lux-sparkle {
          position: fixed;
          left: 0;
          top: 0;
          width: 8px;
          height: 8px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 70%);
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.25));
          border-radius: 9999px;
          animation: lux-sparkle-anim 680ms ease-out forwards;
          z-index: 59;
        }
        @keyframes lux-sparkle-anim {
          0% { opacity: 0.9; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(2.2); }
        }
        .lux-measure {
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 57;
          animation: lux-measure-life 1s ease forwards;
        }
        .lux-measure .dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #f2d34a;
          border: 1px solid rgba(0,0,0,0.2);
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          display: inline-block;
        }
        .lux-measure .label {
          margin-left: 8px;
          padding: 2px 6px;
          font-size: 12px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          color: #1a1a1a;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        @keyframes lux-measure-life {
          0% { opacity: 0; transform: translate(-50%, -50%) translateY(-6px); }
          5% { opacity: 1; transform: translate(-50%, -50%) translateY(0px); }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
        .lux-banner {
          position: fixed;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
          max-width: 320px;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 14px;
          line-height: 1.35;
          background: linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(245,245,245,0.96) 100%);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 10px 35px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.65);
          border-radius: 12px;
          padding: 12px 14px;
          z-index: 61;
          animation: lux-banner-in 260ms ease;
        }
        @keyframes lux-banner-in {
          0% { opacity: 0; transform: translate(-50%, -50%) translateY(6px); }
          100% { opacity: 1; transform: translate(-50%, -50%) translateY(0px); }
        }
      `}</style>
    </div>
  )
}


