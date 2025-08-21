'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-black/5">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-merriweather font-bold text-primary tracking-wide">
            RUSTMONTAGE
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/leistungen" className="nav-link">Leistungen</Link>
            <Link href="/projekte" className="nav-link">Projekte</Link>
            <Link href="/ueber-uns" className="nav-link">Über uns</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
            <Link href="/kontakt" className="btn-small">Kontakt</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link href="/leistungen" className="mobile-link">Leistungen</Link>
              <Link href="/projekte" className="mobile-link">Projekte</Link>
              <Link href="/ueber-uns" className="mobile-link">Über uns</Link>
              <Link href="/faq" className="mobile-link">FAQ</Link>
              <Link href="/kontakt" className="btn-primary text-center">Kontakt</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}