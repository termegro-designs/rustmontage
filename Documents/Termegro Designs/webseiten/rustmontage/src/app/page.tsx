import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary to-secondary">
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="eyebrow mb-6 text-white/80">Meistertischler seit über 10 Jahren</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Exklusive Küchen- & Möbelmontage
            </h1>
            <p className="text-lg md:text-2xl font-light mb-10 text-white/85 max-w-3xl mx-auto leading-relaxed">
              Präzision, Leidenschaft und Handwerk auf höchstem Niveau in Wien & Niederösterreich.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/leistungen" className="btn-primary">Leistungen</a>
              <a href="/kontakt" className="btn-secondary">Beratung vereinbaren</a>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Preview */}
      <section id="leistungen" className="section-padding bg-wood-section">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="eyebrow">Leistungsübersicht</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Unsere Leistungen</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mt-4">Höchste Qualität von der Planung bis zur finalen Montage.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">Küchenmontage</h3>
              <p className="text-text-secondary">Professionelle Montage hochwertiger Küchen.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">Möbelmontage</h3>
              <p className="text-text-secondary">Fachgerechte Montage von Designermöbeln.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">Tischlerarbeiten</h3>
              <p className="text-text-secondary">Individuelle Tischlerarbeiten nach Maß.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">Einbauschränke</h3>
              <p className="text-text-secondary">Perfekt angepasste Schranksysteme.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/leistungen" className="btn-primary">Alle Leistungen ansehen</a>
          </div>
        </div>
      </section>

      {/* USP / Vertrauen */}
      <section className="section-padding bg-wood-grain">
        <div className="container-custom grid md:grid-cols-3 gap-8 items-start">
          <div className="card">
            <div className="eyebrow mb-2">Erfahrung</div>
            <h3 className="text-2xl font-bold text-primary mb-2">10+ Jahre</h3>
            <p className="text-text-secondary">Tiefes Handwerkswissen und perfektionierte Prozesse.</p>
          </div>
          <div className="card">
            <div className="eyebrow mb-2">Qualität</div>
            <h3 className="text-2xl font-bold text-primary mb-2">Präzision & Sorgfalt</h3>
            <p className="text-text-secondary">Saubere Verarbeitung, millimetergenaue Montage, langlebige Ergebnisse.</p>
          </div>
          <div className="card">
            <div className="eyebrow mb-2">Service</div>
            <h3 className="text-2xl font-bold text-primary mb-2">Persönliche Betreuung</h3>
            <p className="text-text-secondary">Direkte Kommunikation, verlässliche Termine, transparente Angebote.</p>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section id="kontakt" className="section-padding bg-wood-grain">
        <div className="container-custom text-center">
          <div className="eyebrow">Kontakt</div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">Lassen Sie uns Ihr Projekt besprechen</h2>
          <div className="space-y-4 text-lg text-text-secondary">
            <div>📞 +43 664 123 456 789</div>
            <div>✉️ office@rustmontage.at</div>
            <div>📍 Wien & Niederösterreich</div>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a href="tel:+43664123456789" className="btn-primary">
              ANRUFEN
            </a>
            <a href="mailto:office@rustmontage.at" className="btn-secondary">
              E-MAIL
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}