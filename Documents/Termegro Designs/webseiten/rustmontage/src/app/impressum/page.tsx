import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Impressum – Rustmontage | Rechtliche Angaben',
  description: 'Impressum und rechtliche Angaben zu Rustmontage gemäß österreichischem Mediengesetz und Unternehmensgesetzbuch.'
}

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-secondary via-primary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Rechtliches
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Impressum
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-white/90">
              Rechtliche Angaben und Informationen zu unserem Unternehmen gemäß österreichischem Recht.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10 max-w-4xl">
          
          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">📍 Firmeninformationen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Unternehmensangaben</h3>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>Firmenname:</strong> Rustmontage</p>
                  <p><strong>Rechtsform:</strong> Einzelunternehmen</p>
                  <p><strong>Adresse:</strong> Pfalzgasse 5, 1220 Wien</p>
                  <p><strong>Land:</strong> Österreich</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Kontaktdaten</h3>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>Telefon:</strong> +43 66 565 788 972</p>
                  <p><strong>E-Mail:</strong> office@rustmontage.at</p>
                  <p><strong>Website:</strong> www.rustmontage.at</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">🏛️ Behördliche Angaben</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Gewerbeberechtigung</h3>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>Gewerbe:</strong> Tischler</p>
                  <p><strong>Gewerbebehörde:</strong> Magistrat der Stadt Wien</p>
                  <p><strong>Bezirk:</strong> 1. Bezirk Innere Stadt</p>
                  <p><strong>Gewerbeordnung:</strong> www.ris.bka.gv.at</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Kammer & Vertretung</h3>
                <div className="space-y-2 text-text-secondary">
                  <p><strong>Kammer:</strong> Wirtschaftskammer Wien</p>
                  <p><strong>Fachgruppe:</strong> Tischler und Holzgestaltende Gewerbe</p>
                  <p><strong>Website WKO:</strong> www.wko.at</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">🛡️ Versicherung & Haftung</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">Berufshaftpflichtversicherung</h3>
                <p>Versicherer: Mustermann Versicherung AG</p>
                <p>Deckungsraum: Österreich und EU</p>
                <p>Versicherungssumme: € 1.000.000</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">📋 Haftungsausschluss</h3>
                <p className="text-sm">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte nach den 
                  allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">⚖️ Rechtliche Hinweise</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">🔗 Haftung für Links</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3">©️ Urheberrecht</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und 
                    jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p className="text-sm bg-gray-50 p-3 rounded-lg">
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                    Gebrauch gestattet.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3">📸 Bildnachweise</h3>
                <div className="text-text-secondary leading-relaxed">
                  <p>Die verwendeten Bilder stammen aus eigener Produktion oder lizenzfreien Quellen:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>Projektfotos: © Rustmontage (eigene Aufnahmen)</li>
                    <li>Icons: Font Awesome (lizenzfrei)</li>
                    <li>Hintergrundtexturen: Eigene Erstellung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">🌐 Online-Streitbeilegung</h2>
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p><strong>OS-Platform:</strong> 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:text-secondary transition-colors ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </div>
              <p className="text-sm">
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
                an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">📞 Verbraucherhinweise</h2>
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">🏠 Haus- und Wohnungsbesitzer</h3>
                <p className="text-text-secondary text-sm">
                  Bei Handwerksleistungen in Ihrem Zuhause haben Sie ein 14-tägiges Widerrufsrecht 
                  gemäß Konsumentenschutzgesetz (KSchG), sofern der Vertrag außerhalb der Geschäftsräume 
                  geschlossen wurde.
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">⚠️ Wichtiger Hinweis</h3>
                <p className="text-text-secondary text-sm">
                  Das Widerrufsrecht erlischt bei Handwerksleistungen, wenn wir mit der Ausführung 
                  vor Ablauf der Widerrufsfrist begonnen haben und Sie Ihre ausdrückliche Einwilligung 
                  gegeben haben.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5">
            <h2 className="text-2xl font-bold text-primary mb-6">📅 Gültigkeit</h2>
            <div className="text-text-secondary leading-relaxed">
              <p>Dieses Impressum wurde zuletzt am <strong>{new Date().toLocaleDateString('de-AT')}</strong> aktualisiert.</p>
              <p className="mt-2">
                Bei Fragen zu diesem Impressum oder rechtlichen Anliegen kontaktieren Sie uns bitte unter 
                <a href="mailto:office@rustmontage.at" className="text-primary hover:text-secondary transition-colors ml-1">
                  office@rustmontage.at
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-section p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Rechtliche Fragen?</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Bei Fragen zu diesem Impressum oder anderen rechtlichen Anliegen sind wir gerne für Sie da.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Kontakt aufnehmen
              </a>
              <a href="mailto:office@rustmontage.at" className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-medium hover:bg-secondary hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}