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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="eyebrow">Projekte</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">Diverse handwerkliche Dienstleistungen</h1>
          <p className="text-text-secondary mt-4">Hier folgen bald Beispiele – Bilder werden nachgereicht.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <a href="/projekte" className="btn-secondary">Zurück zur Übersicht</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}



