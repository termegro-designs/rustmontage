import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Projekte – Küchen | Rustmontage',
  description: 'Ausgewählte Küchenmontagen: präzise Geräte-Integration, passgenaue Arbeitsplatten und saubere Übergabe.'
}

export default function KuechenProjektePage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Projekte
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Küchen-Montagen
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Von der U-förmigen Küche bis zur modernen Küchenzeile – jede Montage ist ein Meisterwerk aus Präzision und Handwerkskunst. 
              Entdecken Sie unsere realisierten Küchenprojekte.
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Unsere Küchen-Meisterwerke</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* U-Küche */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/kuechen/u_kueche/u_kueche.png" alt="U-förmige Küche – Rustmontage" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">U-förmige Küche</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Optimale Raumnutzung mit drei zusammenhängenden Arbeitsseiten. 
                    Präzise Eckverbindungen und perfekte Geräte-Integration für maximale Effizienz.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Eckoptimierung
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Geräte-Integration
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links-Rechts Küche */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/kuechen/links rechts küchen/links_rechts_kueche.png" alt="Küche – linke und rechte Ansicht" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">Symmetrische Küchenzeile</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Perfekte Symmetrie und Ausrichtung auf beiden Seiten. 
                    Millimetergenaue Montage für ein harmonisches Gesamtbild.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Symmetrie
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Präzision
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block Küche */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/kuechen/block_kueche_zeile/block_kueche.png" alt="Blockküche – Zeile" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">Moderne Küchenzeile</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Klare, gerade Linien für moderne Raumkonzepte. 
                    Passgenaue Montage mit durchgängigen Fronten und sauberen Übergängen.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Moderne Optik
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Durchgängige Fronten
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* L-Küche 1 */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/kuechen/L_kueche/l_kueche.png" alt="L-förmige Küche" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">L-förmige Küche</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Optimale Ecklösung mit bündigen Fronten. 
                    Perfekte Ausnutzung des verfügbaren Raums bei gleichzeitig ergonomischer Arbeitsplatzgestaltung.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Ecklösung
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Ergonomie
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* L-Küche 2 */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl mb-6 overflow-hidden">
                  <Image src="/images/kuechen/L_kueche/l_kueche_2.png" alt="L-förmige Küche – Variante" fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full mr-3"></div>
                    <h3 className="text-lg font-bold text-primary">L-Küche Premium</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Erweiterte L-Form mit optimierter Arbeitsfläche. 
                    Durchdachte Planung für maximale Funktionalität und ansprechende Optik.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary pt-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Optimierte Fläche
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      Premium-Montage
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="group relative magnetic" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white h-full flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🍳
                </div>
                <h3 className="text-2xl font-bold mb-4">Ihre Traumküche</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Planen Sie Ihre individuelle Küche? Wir beraten Sie gerne und erstellen Ihnen ein maßgeschneidertes Angebot.
                </p>
                <a href="/kontakt" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Beratung vereinbaren
                </a>
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
              Neben Küchen montieren wir auch Möbel aller Art und bieten diverse handwerkliche Dienstleistungen. 
              Entdecken Sie unser komplettes Portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/projekte" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Alle Projekte ansehen
              </a>
              <a href="/projekte/moebel" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                Möbel-Projekte
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}



