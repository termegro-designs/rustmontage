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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="eyebrow">Über uns</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">Handwerk mit Anspruch</h1>
          <p className="text-text-secondary mt-4">Seit über 10 Jahren realisieren wir langlebige Lösungen mit sauberer Linienführung und respektvoller Materialbehandlung.</p>
        </div>
      </section>

      <section className="bg-background-light py-12">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-2">Werte</h3>
            <p className="text-text-secondary">Ruhe im Design, Klarheit in der Ausführung, Verlässlichkeit im Ablauf.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-2">Materialien</h3>
            <p className="text-text-secondary">Ausgewählte Hölzer, präzise Beschläge, strapazierfähige Oberflächen.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-2">Ablauf</h3>
            <p className="text-text-secondary">Beratung – Planung – Montage – Übergabe. Transparent und termintreu.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary">Lernen wir uns kennen</h2>
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






