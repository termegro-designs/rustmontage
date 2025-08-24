import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Projekte – Diverse handwerkliche Dienstleistungen | Rustmontage',
  description: 'Kleine Anpassungen und Reparaturen: Justierungen, Beschlagtausch, Zuschnitte u.v.m.'
}

export default function DienstleistungenProjektePage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-accent via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Projekte
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Handwerkliche Dienstleistungen
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Von kleinen Anpassungen bis hin zu individuellen Lösungen – unser Handwerk steht für Qualität, Präzision und Zuverlässigkeit. 
              Bald zeigen wir Ihnen hier unsere vielfältigen Projekte.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projekte in Vorbereitung</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service Preview Cards */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-accent to-primary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🔧
                </div>
                <h3 className="text-2xl font-bold mb-4">Reparaturen</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Kaputte Scharniere, lose Griffe oder defekte Schubladen? Wir reparieren schnell und zuverlässig.
                </p>
                <div className="text-sm text-white/60">Projektbilder folgen</div>
              </div>
            </div>

            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  📐
                </div>
                <h3 className="text-2xl font-bold mb-4">Anpassungen</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Türen kürzen, Bretter zuschneiden oder Möbel anpassen – millimetergenaue Maßarbeit.
                </p>
                <div className="text-sm text-white/60">Projektbilder folgen</div>
              </div>
            </div>

            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-secondary to-accent p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🔩
                </div>
                <h3 className="text-2xl font-bold mb-4">Nachrüstungen</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Zusätzliche Regale, neue Griffe oder Soft-Close-Dämpfer – wir erweitern Ihre Möbel.
                </p>
                <div className="text-sm text-white/60">Projektbilder folgen</div>
              </div>
            </div>

            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-accent to-secondary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🏠
                </div>
                <h3 className="text-2xl font-bold mb-4">Kleinreparaturen</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Türen justieren, Scharniere ölen oder Beschläge tauschen – wir lösen Ihre Probleme.
                </p>
                <div className="text-sm text-white/60">Projektbilder folgen</div>
              </div>
            </div>

            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ⚒️
                </div>
                <h3 className="text-2xl font-bold mb-4">Sonderanfertigungen</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Individuelle Holzarbeiten nach Ihren Wünschen – von der Skizze zur fertigen Lösung.
                </p>
                <div className="text-sm text-white/60">Projektbilder folgen</div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-secondary to-primary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <h3 className="text-2xl font-bold mb-4">Ihr Projekt</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Haben Sie ein Problem oder eine Idee? Kontaktieren Sie uns – gemeinsam finden wir die beste Lösung.
                </p>
                <a href="/kontakt" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Problem schildern
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Warum für kleine Arbeiten einen Profi?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🧰
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Richtiges Werkzeug</h3>
                <p className="text-text-secondary leading-relaxed">
                  Professionelles Werkzeug macht den Unterschied. Was für Laien schwierig ist, erledigen wir schnell und sauber.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Keine Fehlversuche</h3>
                <p className="text-text-secondary leading-relaxed">
                  Durch Erfahrung wissen wir, worauf es ankommt. So sparen Sie Zeit, Material und vermeiden teure Nachbesserungen.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  💰
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Faire Preise</h3>
                <p className="text-text-secondary leading-relaxed">
                  Auch kleine Arbeiten machen wir zu fairen Preisen. Transparente Kostenvoranschläge ohne böse Überraschungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Services Section */}
      <section className="py-20 bg-wood-section">
        <div className="container-custom text-center max-w-6xl">
          <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-6">Aktuell verfügbare Dienstleistungen</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Während wir unser Portfolio hier ausbauen, sind wir bereits für Sie da. 
              Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie gerne zu allen handwerklichen Fragen.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-primary mb-3">Schnelle Reparaturen</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Scharniere justieren oder tauschen</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Griffe und Knöpfe erneuern</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Türen und Klappen einstellen</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Kleine Beschädigungen reparieren</li>
                </ul>
              </div>
              
              <div className="text-left p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-primary mb-3">Maßarbeiten</h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Bretter und Platten zuschneiden</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Türen kürzen oder anpassen</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Regale nach Maß anfertigen</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-3"></div>Individuelle Holzlösungen</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Beratung anfragen
              </a>
              <a href="/projekte" className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-medium hover:bg-accent hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                Andere Projekte ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}



