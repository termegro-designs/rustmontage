import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEOHeader from '@/components/SEOHeader'


export const metadata = {
  title: 'Leistungen – Rustmontage | Küchen- & Möbelmontage',
  description: 'Übersicht unserer Tischlerleistungen: Küchenmontage, Möbelmontage, Einbauschränke, individuelle Tischlerarbeiten und mehr.'
}

export default function LeistungenPage() {
    return (
    <div>
      <SEOHeader 
        primaryKeyword="Handwerker Dienstleistungen Wien"
        keywords={[
          "Tischlerarbeiten", "Küchenmontage Kosten", "Möbelmontage Preise", "Einbauschränke", 
          "Reparatur Service", "Handwerker buchen", "schnelle Reparatur", "günstige Handwerker",
          "zuverlässige Montage", "Wartung", "Instandhaltung", "Renovierung", "Umbau"
        ]}
        location="Wien und Umgebung"
      />
      <Header />
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Leistungen
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Was wir für Sie tun
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Mit über 10 Jahren Erfahrung und echter Leidenschaft für das Handwerk verwandeln wir Ihre Wohnträume in Realität. 
              Von der ersten Beratung bis zur finalen Übergabe stehen wir Ihnen mit Rat und Tat zur Seite.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      <section className="py-16 bg-wood-grain">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-black/10 bg-wood-text shadow-sm">
              <div className="text-2xl mb-2">📐</div>
              <div className="font-bold text-primary mb-2">Saubere Planung</div>
              <p className="text-readable-secondary">Transparente Abstimmung und klare Schritte – wir führen Sie sicher durch den gesamten Ablauf.</p>
            </div>
            <div className="p-8 rounded-2xl border border-black/10 bg-wood-text shadow-sm">
              <div className="text-2xl mb-2">🧰</div>
              <div className="font-bold text-primary mb-2">Präzise Umsetzung</div>
              <p className="text-readable-secondary">Sorgfältige Montage, saubere Kanten und ein aufgeräumter Arbeitsplatz – das versteht sich für uns von selbst.</p>
            </div>
            <div className="p-8 rounded-2xl border border-black/10 bg-wood-text shadow-sm">
              <div className="text-2xl mb-2">✅</div>
              <div className="font-bold text-primary mb-2">Wertige Übergabe</div>
              <p className="text-readable-secondary">Gemeinsame Abnahme und Feinschliff – damit wirklich alles passt und Sie lange Freude daran haben.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Unsere Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full magnetic" data-cursor="hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🍳
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-primary mb-2">Küchenmontage</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Ihre neue Küche soll nicht nur schön aussehen, sondern auch perfekt funktionieren. Wir sorgen für millimetergenaue 
                  Montage, nahtlose Geräte-Integration und saubere Übergänge. Von der Einbauküche bis zur Designerküche – 
                  wir bringen alles an seinen Platz.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Präzises Aufmaß und Anpassung vor Ort
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Montage aller Küchenmöbel und Arbeitsplatten
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Integration von Elektrogeräten
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Wasserleitungen und Abschlussarbeiten
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full magnetic" data-cursor="hover">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🪑
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-primary mb-2">Möbelmontage</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Designermöbel verdienen eine fachgerechte Montage. Ob Schrankwand, Sideboard oder maßgefertigte Lösung – 
                  wir sorgen dafür, dass Ihre Möbel nicht nur sicher stehen, sondern auch ihre volle Wirkung entfalten können.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Montage von Schrankwänden und Sideboards
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Aufbau von Designermöbeln aller Marken
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Sichere Wandbefestigung
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Justierung und Feinabstimmung
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full magnetic" data-cursor="hover">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏠
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-primary mb-2">Einbauschränke</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Jeder Raum ist einzigartig – und jeder Zentimeter wertvoll. Unsere maßgeschneiderten Einbauschränke 
                  nutzen auch schwierige Ecken, Dachschrägen und Nischen optimal aus. Das Ergebnis: mehr Stauraum und 
                  eine harmonische Raumwirkung.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Raumhohe Schranklösungen
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Optimale Nutzung von Dachschrägen
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Einpassung in vorhandene Nischen
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Hochwertige Beschläge und Auszüge
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full magnetic" data-cursor="hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🔨
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold text-primary mb-2">Tischlerarbeiten</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Manchmal braucht es individuelle Lösungen. Ob kleine Anpassung, Reparatur oder komplett neue Anfertigung – 
                  als erfahrene Tischler finden wir für jede Herausforderung die passende Lösung. Schnell, sauber und zu fairen Preisen.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Individuelle Anpassungen und Zuschnitte
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Reparaturen an Möbeln und Küchen
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Sonderanfertigungen nach Maß
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Kleinere Umbauarbeiten
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom text-center max-w-5xl relative z-10">
          <div className="text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Warum Sie sich für uns entscheiden sollten</h2>
            <div className="w-32 h-1 bg-white/30 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  ⏰
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Pünktlich & Zuverlässig</h3>
                <p className="text-white/80 leading-relaxed">Termine sind heilig. Wir kommen pünktlich und halten unsere Zusagen ein – darauf können Sie sich verlassen.</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Faire Preise</h3>
                <p className="text-white/80 leading-relaxed">Transparente Kostenvoranschläge ohne versteckte Überraschungen. Sie wissen immer, woran Sie sind.</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Persönlicher Service</h3>
                <p className="text-white/80 leading-relaxed">Direkter Kontakt, individuelle Beratung und maßgeschneiderte Lösungen – so wie es sein sollte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-wood-grain">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-text p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-4xl font-bold text-primary mb-6">Bereit für Ihr Projekt?</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Schicken Sie uns Maße und Fotos – wir beraten schnell, kompetent und transparent. 
              Gemeinsam finden wir die perfekte Lösung für Ihre Räume.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Kostenlos beraten lassen
              </a>
              <a href="mailto:office@rustmontage.at" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                Direkt E-Mail senden
              </a>
            </div>
          </div>
                </div>
      </section>
      <Footer />
    </div>
  )
}



