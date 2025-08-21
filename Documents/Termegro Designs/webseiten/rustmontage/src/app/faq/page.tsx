import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'FAQ – Rustmontage | Häufige Fragen',
  description: 'Antworten zu Ablauf, Terminen, Preisen und Vorbereitung für Küchen- und Möbelmontage.'
}

const faqs = [
  {
    q: 'Wie schnell bekomme ich einen Termin?',
    a: 'In der Regel innerhalb von 7–10 Werktagen. Für Notfälle bemühen wir uns um schnellere Lösungen.'
  },
  {
    q: 'Welche Informationen benötigen Sie vorab?',
    a: 'Maße, Fotos der Situation und – falls vorhanden – Pläne oder Herstellerangaben. Dann erhalten Sie ein präzises Angebot.'
  },
  {
    q: 'Arbeiten Sie auch am Wochenende?',
    a: 'Nach Absprache sind Samstagstermine möglich.'
  },
]

export default function FAQPage() {
  return (
    <div>
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="eyebrow">FAQ</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">Häufige Fragen</h1>
          <p className="text-text-secondary mt-4">Kurz, klar, hilfreich.</p>
        </div>
      </section>

      <section className="bg-background-light py-12">
        <div className="container-custom max-w-4xl space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="card">
              <div className="text-lg font-bold text-primary">{item.q}</div>
              <p className="text-text-secondary mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary">Noch Fragen offen?</h2>
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






