import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Projekte – Möbel | Rustmontage',
  description: 'Referenzen im Bereich Möbelmontage: Schränke, Sideboards, Regale und mehr.'
}

export default function MoebelProjektePage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-secondary via-accent to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Projekte
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Möbel-Montagen
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Von der stylischen Wohnwand bis zum funktionalen Badezimmermöbel – jedes Stück wird mit Sorgfalt und Präzision montiert. 
              Sehen Sie, wie wir Ihre Möbel perfekt in Szene setzen.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Unsere Möbel-Meisterwerke</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Wohnwand */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/moebel/wohnwand_mit_licht_tv.png" alt="Wohnwand mit Licht und TV-Bereich" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">Designer Wohnwand</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Moderne Wohnwand mit integrierter LED-Beleuchtung und TV-Bereich. 
                    Versteckte Kabelführung und perfekte Wandausrichtung für ein harmonisches Gesamtbild.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      LED-Integration
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Kabelmanagement
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schiebetürschrank */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/moebel/schiebetuerschrank_spiegel_mitte.png" alt="Schiebetürschrank mit Spiegel in der Mitte" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">Schiebetürschrank Premium</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Eleganter Schiebetürschrank mit zentralem Spiegel. 
                    Laufruhige Premiumschienen und millimetergenaue Spaltmaße für perfekte Funktion.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Spiegelintegration
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Premium-Schienen
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badezimmermöbel */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/moebel/badezimmer_moebel_4_teilig.png" alt="Badezimmermöbel 4-teilig" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">Badmöbel-Set</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Komplettes 4-teiliges Badezimmermöbel-Set. 
                    Wasserfeste Montage mit speziellen Befestigungen und perfekte Ausrichtung für maximale Funktionalität.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Wasserfest
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Spezialbefestigung
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 1 */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-secondary to-accent p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🪑
                </div>
                <h3 className="text-2xl font-bold mb-4">Alle Möbelarten</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Von Schrankwänden über Regale bis hin zu Designerstücken – wir montieren alle Möbeltypen fachgerecht.
                </p>
                <a href="/leistungen" className="bg-white text-secondary px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Alle Leistungen
                </a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-accent to-primary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🔧
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium Service</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Sichere Wandbefestigung, präzise Ausrichtung und saubere Montage – Qualität ist unser Standard.
                </p>
                <a href="/kontakt" className="bg-white text-accent px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Termin vereinbaren
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  💡
                </div>
                <h3 className="text-2xl font-bold mb-4">Ihr Möbelprojekt</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Neue Möbel gekauft? Wir montieren sie sicher und professionell – damit Sie sie lange genießen können.
                </p>
                <a href="/kontakt" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Beratung anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Warum Möbel-Profis beauftragen?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Sichere Befestigung</h3>
                <p className="text-text-secondary leading-relaxed">
                  Schwere Möbel brauchen die richtige Wandbefestigung. Wir kennen jeden Wandtyp und verwenden die passenden Dübel und Schrauben.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Perfekte Ausrichtung</h3>
                <p className="text-text-secondary leading-relaxed">
                  Schief hängende Regale oder unebene Schränke? Nicht mit uns. Wir richten alles millimetergenau aus – mit Profi-Werkzeug.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ⏱️
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Zeit & Nerven sparen</h3>
                <p className="text-text-secondary leading-relaxed">
                  Stundenlange Montage, fehlendes Werkzeug, schlechte Anleitungen? Sparen Sie sich den Stress – wir machen das schnell und richtig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Overview CTA */}
      <section className="py-20 bg-wood-section">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-text p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Weitere Projekte entdecken</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Neben Möbeln montieren wir auch Küchen und bieten diverse handwerkliche Dienstleistungen. 
              Entdecken Sie unser komplettes Portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/projekte" className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Alle Projekte ansehen
              </a>
              <a href="/projekte/kuechen" className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-medium hover:bg-secondary hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                Küchen-Projekte
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}



