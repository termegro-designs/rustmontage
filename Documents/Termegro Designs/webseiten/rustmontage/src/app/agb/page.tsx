import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AGB – Rustmontage | Allgemeine Geschäftsbedingungen',
  description: 'Allgemeine Geschäftsbedingungen für Tischlerleistungen von Rustmontage nach österreichischem Recht.'
}

export default function AGBPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-accent via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Rechtliches
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Geschäftsbedingungen
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-white/90">
              Transparente Bedingungen für eine vertrauensvolle Zusammenarbeit bei Ihren Tischlerprojekten.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10 max-w-4xl">
          
          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">1. Geltungsbereich</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen 
                <strong> Rustmontage</strong> (nachfolgend "wir" oder "uns") und unseren Kunden.
              </p>
              <div className="bg-primary/10 p-4 rounded-xl">
                <p><strong>Leistungsbereich:</strong> Tischlerarbeiten, Küchen- und Möbelmontage, Reparaturen und handwerkliche Dienstleistungen</p>
                <p><strong>Gültigkeitsgebiet:</strong> Österreich, insbesondere Wien und Umgebung</p>
              </div>
              <p>
                Abweichende Bedingungen des Kunden werden nur dann und nur insoweit Vertragsbestandteil, 
                als wir ihrer Geltung ausdrücklich schriftlich zugestimmt haben.
              </p>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">2. Vertragsabschluss</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">📞 Angebot</h3>
                  <p className="text-sm">
                    Unsere Angebote sind freibleibend und unverbindlich, sofern nicht anders angegeben. 
                    Der Vertrag kommt durch Ihre schriftliche oder mündliche Auftragserteilung zustande.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">✅ Auftragsbestätigung</h3>
                  <p className="text-sm">
                    Wir bestätigen Ihren Auftrag schriftlich oder beginnen mit der Leistungserbringung. 
                    Damit ist der Vertrag verbindlich geschlossen.
                  </p>
                </div>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">🏠 Hausbesuche</h3>
                <p>
                  Bei Vertragsabschluss außerhalb unserer Geschäftsräume (z.B. bei Ihnen zu Hause) 
                  haben Sie als Verbraucher ein 14-tägiges Widerrufsrecht nach dem Konsumentenschutzgesetz.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">3. Preise und Zahlungsbedingungen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">💰 Preisgestaltung</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Festpreise bei Pauschalangeboten</li>
                    <li>Stundensätze bei Kleinarbeiten und Reparaturen</li>
                    <li>Materialkosten werden separat ausgewiesen</li>
                    <li>Anfahrtskosten bei Entfernung über 25 km</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3">💳 Zahlungsmodalitäten</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">🏠 Privatkunden</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Rechnung bei Fertigstellung</li>
                      <li>• 14 Tage Zahlungsziel</li>
                      <li>• Bar oder Überweisung</li>
                      <li>• Bei Großprojekten: 50% Anzahlung</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">🏢 Geschäftskunden</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• 30 Tage Zahlungsziel</li>
                      <li>• 2% Skonto bei 10 Tagen</li>
                      <li>• Nur Überweisung</li>
                      <li>• Bei Erstaufträgen: Vorkasse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">4. Leistungserbringung</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">📅 Termine</h3>
                <div className="text-text-secondary leading-relaxed space-y-2">
                  <p>
                    Vereinbarte Termine halten wir nach Möglichkeit ein. Geringe Abweichungen 
                    (bis zu 2 Stunden) berechtigen nicht zur Vertragsauflösung.
                  </p>
                  <div className="bg-accent/10 p-3 rounded-lg text-sm">
                    <strong>Terminverschiebung:</strong> Bei unvorhersehbaren Ereignissen (Krankheit, Wetter, etc.) 
                    informieren wir Sie umgehend und vereinbaren einen Ersatztermin.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3">🛠️ Arbeitsausführung</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Unsere Leistungen</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Fachgerechte Montage</li>
                      <li>• Eigenes Werkzeug und Material</li>
                      <li>• Saubere Arbeitsweise</li>
                      <li>• Aufräumen nach Arbeitsende</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Ihre Mitwirkung</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      <li>• Freier Zugang zum Arbeitsplatz</li>
                      <li>• Strom- und Wasseranschluss</li>
                      <li>• Bereitstellung der Möbel</li>
                      <li>• Anwesenheit bei Übergabe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">5. Gewährleistung</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Für alle Arbeiten gewähren wir die gesetzliche Gewährleistung von 2 Jahren 
                ab Übergabe bzw. Abnahme der Leistung.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">✅ Gewährleistung umfasst</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Mängelbehebung</li>
                    <li>• Kostenloser Austausch</li>
                    <li>• Nachbesserung</li>
                    <li>• Bei Unmöglichkeit: Preisminderung</li>
                  </ul>
                </div>
                <div className="bg-accent/10 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">❌ Ausgeschlossen sind</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Normale Abnutzung</li>
                    <li>• Unsachgemäße Behandlung</li>
                    <li>• Fremdeinwirkung</li>
                    <li>• Materialfehler bei Kundenmaterial</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">⏰ Wichtige Fristen</h3>
                <p className="text-sm">
                  Mängel müssen uns umgehend nach Entdeckung gemeldet werden. 
                  Bei beweglichen Sachen beträgt die Vermutung für rechtzeitige Übergabe 6 Monate, 
                  bei unbeweglichen Sachen 3 Jahre.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">6. Haftung</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Wir haften nach den gesetzlichen Bestimmungen für Vorsatz und grobe Fahrlässigkeit 
                sowie bei Verletzung wesentlicher Vertragspflichten.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">🛡️ Versicherungsschutz</h3>
                  <p className="text-sm">
                    Wir verfügen über eine Berufshaftpflichtversicherung mit einer 
                    Deckungssumme von € 1.000.000 für Personen-, Sach- und Vermögensschäden.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">⚠️ Haftungsausschluss</h3>
                  <p className="text-sm">
                    Für leichte Fahrlässigkeit haften wir nur bei Verletzung kardinalischer 
                    Vertragspflichten und nur bis zur Höhe des vorhersehbaren Schadens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">7. Rücktritt und Stornierung</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div className="bg-accent/10 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">👤 Rücktritt durch Kunden</h3>
                <ul className="text-sm space-y-1">
                  <li>• Bis 48h vor Termin: kostenfrei</li>
                  <li>• Bis 24h vor Termin: 50% der Arbeitszeit</li>
                  <li>• Am Arbeitstag: 100% der vereinbarten Arbeitszeit</li>
                  <li>• Bereits beschaffte Materialien sind zu erstatten</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">🔧 Rücktritt durch uns</h3>
                <p className="text-sm">
                  Wir können zurücktreten bei: Unmöglichkeit der Leistung, Zahlungsverzug, 
                  mangelnder Mitwirkung des Kunden oder unzumutbaren Arbeitsbedingungen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">8. Schlussbestimmungen</h2>
            
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">⚖️ Gerichtsstand</h3>
                  <p className="text-sm">
                    Gerichtsstand ist Wien. Es gilt österreichisches Recht unter 
                    Ausschluss der Verweisungsbestimmungen.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-bold text-primary mb-2">📄 Salvatorische Klausel</h3>
                  <p className="text-sm">
                    Sollten einzelne Bestimmungen unwirksam sein, bleibt der 
                    übrige Vertrag bestehen.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-xl">
                <h3 className="font-bold text-primary mb-2">🌐 Online-Streitbeilegung</h3>
                <p className="text-sm">
                  Link zur OS-Plattform der EU: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:text-secondary ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Wir sind nicht verpflichtet, an Streitbeilegungsverfahren teilzunehmen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-wood-section p-8 rounded-2xl shadow-lg border border-black/5">
            <h2 className="text-2xl font-bold text-primary mb-6">Stand der AGB</h2>
            <div className="text-text-secondary leading-relaxed">
              <p>Diese AGB wurden zuletzt am <strong>{new Date().toLocaleDateString('de-AT')}</strong> aktualisiert.</p>
              <p className="mt-2">
                Bei Fragen zu diesen Geschäftsbedingungen kontaktieren Sie uns unter:
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
            <h2 className="text-3xl font-bold text-primary mb-6">Bereit für Ihr Projekt?</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Jetzt, da Sie unsere fairen Geschäftsbedingungen kennen, können wir gemeinsam 
              Ihr Tischlerprojekt planen und umsetzen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Projekt anfragen
              </a>
              <a href="/leistungen" className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-medium hover:bg-accent hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
