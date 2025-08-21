'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      
      <section id="startseite" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <Image
                src="/images/hammer-icon.svg"
                alt="Rustmontage Meisterbetrieb"
                width={120}
                height={120}
                className="mx-auto mb-8 opacity-80"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
              RUSTMONTAGE
            </h1>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-merriweather mb-6 text-white/90 drop-shadow">
                MEISTERTISCHLER
              </h2>
              <h3 className="text-xl md:text-2xl font-light mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Exklusive Küchen- & Möbelmontage<br />
                <span className="text-accent font-medium">Wien & Niederösterreich</span>
              </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
              <a href="#leistungen" className="btn-primary">
                UNSERE LEISTUNGEN
              </a>
              <a href="#kontakt" className="btn-secondary">
                BERATUNG VEREINBAREN
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Unsere Leistungen</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Als Meistertischler mit über 20 Jahren Erfahrung bieten wir Ihnen höchste Qualität 
              und Präzision in allen Bereichen der Möbel- und Küchenmontage.
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Kontakt</h2>
            <p className="text-xl text-text-secondary">
              Kontaktieren Sie uns für Ihr individuelles Projekt!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}