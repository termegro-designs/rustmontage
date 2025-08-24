import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Projekte – Rustmontage | Referenzen & Arbeiten',
  description: 'Eine Auswahl unserer jüngsten Montageprojekte: Küchen, Einbauschränke und individuelle Tischlerarbeiten.'
}

const projects = [
  {
    title: 'Küchen',
    desc: 'Planung, Anpassung und Montage hochwertiger Einbauküchen – präzise Geräte-Integration, passgenaue Arbeitsplatten, saubere Übergabe.',
    href: '/projekte/kuechen',
    icon: '🏠',
    gradient: 'from-primary to-secondary'
  },
  {
    title: 'Möbel',
    desc: 'Schränke, Sideboards, Regale und mehr – millimetergenau montiert und auf Ihre Räume abgestimmt.',
    href: '/projekte/moebel',
    icon: '🪑',
    gradient: 'from-secondary to-accent'
  },
  {
    title: 'Diverse handwerkliche Dienstleistungen',
    desc: 'Tür- und Schubladenjustierung, Beschlagtausch, Arbeitsplattenzuschnitt, Silikonfugen, kleinere Anpassungen und Reparaturen.',
    href: '/projekte/dienstleistungen',
    icon: '🔧',
    gradient: 'from-accent to-primary'
  },
]

export default function ProjektePage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section with Gradient Overlay */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6 font-medium">
              Projekte & Referenzen
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Ausgewählte Referenzen
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ein Blick in unsere Arbeit – <span className="font-semibold">schlicht, präzise, langlebig.</span> 
              <br className="hidden md:block" />
              Jedes Projekt erzählt eine Geschichte von Handwerkskunst und Perfektion.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-wood to-transparent"></div>
      </section>

      {/* Project Categories with Enhanced Cards */}
      <section className="bg-wood py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={project.title} className="group" style={{animationDelay: `${index * 100}ms`}}>
                <Link href={project.href} className="block">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 h-full">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{project.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                      <div className={`w-20 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                    </div>
                    <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                      {project.desc}
                    </p>
                    <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${project.gradient} text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group-hover:gap-4 magnetic`} 
                         data-cursor="hover">
                      Ansehen
                      <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Dark Gradient */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-wood opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm tracking-widest uppercase mb-8 font-medium">
              Bereit für Ihr Projekt?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interesse geweckt?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Gerne senden wir Ihnen weitere Beispiele, passend zu Ihrem Vorhaben. 
              <br className="hidden md:block" />
              Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/kontakt" 
                 className="group bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 magnetic" 
                 data-cursor="hover">
                <span className="flex items-center gap-3">
                  Kontakt aufnehmen
                  <span className="group-hover:translate-x-1 transition-transform">📞</span>
                </span>
              </a>
              <a href="tel:+436643034066" 
                 className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 magnetic" 
                 data-cursor="hover">
                <span className="flex items-center gap-3">
                  Direkt anrufen
                  <span className="group-hover:rotate-12 transition-transform">📱</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wood to-transparent"></div>
      </section>

      <Footer />
    </div>
  )
}