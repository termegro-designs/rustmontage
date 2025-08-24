import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Über uns – Rustmontage | Meistertischler in Wien',
  description: 'Rustmontage steht für präzises Tischlerhandwerk, persönliche Beratung und hochwertige Materialien.'
}

export default function UeberUnsPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Über uns
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Handwerk mit Leidenschaft
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Seit über 10 Jahren verwandeln wir Wohnträume in Realität. Mit Präzision, Hingabe und einem tiefen Verständnis für 
              zeitloses Design schaffen wir Möbel und Küchen, die Generationen überdauern.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Unsere Philosophie</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-text p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Unsere Werte</h3>
                <p className="text-readable-secondary leading-relaxed">
                  Ruhe im Design, Klarheit in der Ausführung und absolute Verlässlichkeit im Ablauf. 
                  Diese Grundsätze leiten uns bei jedem Projekt – vom ersten Beratungsgespräch bis zur finalen Übergabe.
                </p>
              </div>
            </div>

            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-text p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  🌿
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Materialien</h3>
                <p className="text-readable-secondary leading-relaxed">
                  Ausgewählte Hölzer, präzise Beschläge und strapazierfähige Oberflächen. 
                  Wir arbeiten nur mit Materialien, die höchsten Qualitätsansprüchen genügen und Jahre überdauern.
                </p>
              </div>
            </div>

            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-text p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  📋
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Unser Ablauf</h3>
                <p className="text-readable-secondary leading-relaxed">
                  Beratung – Planung – Montage – Übergabe. Transparent, termintreu und mit klarer Kommunikation 
                  begleiten wir Sie durch jeden Schritt Ihres Projekts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">10 Jahre Erfahrung, unzählige zufriedene Kunden</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-8"></div>
              <p className="text-lg text-readable-secondary leading-relaxed mb-8">
                Was als kleine Leidenschaft begann, ist heute unser Beruf und unsere Berufung. 
                Über 10 Jahre haben wir unser Handwerk perfektioniert, Erfahrungen gesammelt und 
                uns einen Namen für Qualität und Zuverlässigkeit gemacht.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-readable-secondary">Über 500 erfolgreiche Projekte</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                  <span className="text-readable-secondary">Spezialisiert auf Küchen- und Möbelmontage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-4"></div>
                  <span className="text-readable-secondary">Persönliche Betreuung von Anfang bis Ende</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-readable-secondary">Faire Preise ohne versteckte Kosten</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary via-accent to-secondary p-12 rounded-3xl text-white text-center">
                <div className="text-6xl font-bold mb-4">10+</div>
                <div className="text-xl mb-8">Jahre Erfahrung</div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm text-white/80">Projekte</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm text-white/80">Zufriedenheit</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24h</div>
                    <div className="text-sm text-white/80">Rückmeldung</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Wien</div>
                    <div className="text-sm text-white/80">& Umgebung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-wood-section">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-text p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-4xl font-bold text-primary mb-6">Lernen wir uns kennen</h2>
            <p className="text-lg text-readable-secondary mb-8 leading-relaxed">
              Jedes Projekt ist einzigartig – genau wie unsere Kunden. Lassen Sie uns in einem persönlichen Gespräch 
              herausfinden, wie wir Ihre Wohnträume Realität werden lassen können.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Persönliches Gespräch
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






