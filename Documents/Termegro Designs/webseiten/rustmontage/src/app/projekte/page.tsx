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
    href: '/projekte/kuechen'
  },
  {
    title: 'Möbel',
    desc: 'Schränke, Sideboards, Regale und mehr – millimetergenau montiert und auf Ihre Räume abgestimmt.',
    href: '/projekte/moebel'
  },
  {
    title: 'Diverse handwerkliche Dienstleistungen',
    desc: 'Tür- und Schubladenjustierung, Beschlagtausch, Arbeitsplattenzuschnitt, Silikonfugen, kleinere Anpassungen und Reparaturen.',
    href: '/projekte/dienstleistungen'
  },
]

export default function ProjektePage() {
  return (
    <div>
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="eyebrow">Projekte</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">Ausgewählte Referenzen</h1>
          <p className="text-text-secondary mt-4">Ein Blick in unsere Arbeit – schlicht, präzise, langlebig.</p>
        </div>
      </section>

      <section className="bg-background-light py-12">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link key={p.title} href={p.href} className="card block hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-text-secondary">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary">Interesse geweckt?</h2>
          <p className="text-text-secondary mt-3">Gerne senden wir Ihnen weitere Beispiele, passend zu Ihrem Vorhaben.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/kontakt" className="btn-primary">Kontakt</a>
            <a href="mailto:office@rustmontage.at" className="btn-secondary">E-Mail</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}


