import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Datenschutz – Rustmontage | DSGVO-konforme Datenverarbeitung',
  description: 'Informationen zum Datenschutz bei Rustmontage gemäß österreichischem Recht und DSGVO.'
}

export default function DatenschutzPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Rechtliches
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Datenschutzerklärung
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-white/90">
              Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10 max-w-4xl">
          
          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">1. Verantwortlicher</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-medium text-primary">Rustmontage</p>
                <p>Pfalzgasse 5</p>
                <p>1220 Wien, Österreich</p>
                <p>Telefon: +43 66 565 788 972</p>
                <p>E-Mail: office@rustmontage.at</p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">2. Rechtsgrundlage</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der EU-Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG).</p>
              <p>Rechtsgrundlagen sind insbesondere:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
              </ul>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">3. Erhebung und Verwendung von Daten</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">🌐 Website-Besuch</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>Bei jedem Aufruf unserer Website werden automatisch folgende Daten erfasst:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Aufgerufene Seite</li>
                    <li>Browser-Typ und -Version</li>
                    <li>Betriebssystem</li>
                  </ul>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">
                    <strong>Zweck:</strong> Technische Bereitstellung der Website, Sicherheit und Funktionalität
                    <br />
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)
                    <br />
                    <strong>Speicherdauer:</strong> 30 Tage
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3">📧 Kontaktformular</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>Wenn Sie unser Kontaktformular nutzen, erheben wir:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Telefonnummer (optional)</li>
                    <li>Nachricht</li>
                  </ul>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">
                    <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Angebotserstellung, Kundenbetreuung
                    <br />
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
                    <br />
                    <strong>Speicherdauer:</strong> 3 Jahre nach letztem Kontakt
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3">🍪 Cookies</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>Unsere Website verwendet Cookies für:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Technisch notwendige Funktionen</li>
                    <li>Verbesserung der Nutzererfahrung</li>
                    <li>Analyse der Website-Nutzung (mit Ihrer Einwilligung)</li>
                  </ul>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. f DSGVO (technisch notwendige Cookies)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">4. Ihre Rechte</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">📋 Auskunftsrecht</h3>
                <p className="text-sm text-text-secondary">Sie haben das Recht zu erfahren, welche Daten wir über Sie speichern.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">✏️ Berichtigungsrecht</h3>
                <p className="text-sm text-text-secondary">Falsche Daten können Sie jederzeit korrigieren lassen.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">🗑️ Löschungsrecht</h3>
                <p className="text-sm text-text-secondary">Sie können die Löschung Ihrer Daten verlangen.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">🚫 Widerspruchsrecht</h3>
                <p className="text-sm text-text-secondary">Der Verarbeitung können Sie widersprechen.</p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">5. Weitergabe von Daten</h2>
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>Eine Weitergabe Ihrer Daten erfolgt nur in folgenden Fällen:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mit Ihrer ausdrücklichen Einwilligung</li>
                <li>Zur Vertragserfüllung (z.B. an Subunternehmer)</li>
                <li>Bei gesetzlicher Verpflichtung</li>
              </ul>
              <p className="bg-primary/10 p-4 rounded-lg">
                <strong>Wichtig:</strong> Wir verkaufen Ihre Daten niemals an Dritte!
              </p>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">6. Kontakt & Beschwerden</h2>
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>Bei Fragen zum Datenschutz kontaktieren Sie uns:</p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p><strong>E-Mail:</strong> datenschutz@rustmontage.at</p>
                <p><strong>Telefon:</strong> +43 66 565 788 972</p>
              </div>
              <p>Beschwerden können Sie an die österreichische Datenschutzbehörde richten:</p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p><strong>Datenschutzbehörde Österreich</strong></p>
                <p>Barichgasse 40-42, 1030 Wien</p>
                <p>E-Mail: dsb@dsb.gv.at</p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5">
            <h2 className="text-2xl font-bold text-primary mb-6">7. Aktualität</h2>
            <div className="text-text-secondary leading-relaxed">
              <p>Diese Datenschutzerklärung wurde zuletzt am <strong>{new Date().toLocaleDateString('de-AT')}</strong> aktualisiert.</p>
              <p className="mt-2">Wir behalten uns vor, diese Erklärung bei Bedarf anzupassen. Die jeweils aktuelle Version finden Sie auf unserer Website.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-section p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Fragen zum Datenschutz?</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Wir helfen Ihnen gerne bei allen Fragen rund um den Schutz Ihrer Daten.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Kontakt aufnehmen
              </a>
              <a href="mailto:datenschutz@rustmontage.at" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                Datenschutz E-Mail
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}