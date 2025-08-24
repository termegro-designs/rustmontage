import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Suspense } from 'react'

export const metadata = {
  title: 'Kontakt – Rustmontage | Anfrage & Beratung',
  description: 'Kontaktieren Sie uns für Küchen- und Möbelmontage. Schnelle Rückmeldung und transparente Beratung.'
}

function ContactForm() {
  async function handleSubmit(formData: FormData) {
    'use server'
    const payload = Object.fromEntries(formData.entries())
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  }

  return (
    <form action={handleSubmit} className="grid md:grid-cols-2 gap-6">
      <input name="name" placeholder="Name" required className="border border-black/10 p-4" />
      <input name="phone" placeholder="Telefon" required className="border border-black/10 p-4" />
      <input name="email" placeholder="E-Mail" type="email" required className="border border-black/10 p-4 md:col-span-2" />
      <input name="service" placeholder="Gewünschte Leistung (optional)" className="border border-black/10 p-4 md:col-span-2" />
      <textarea name="message" placeholder="Nachricht (optional)" rows={5} className="border border-black/10 p-4 md:col-span-2" />
      <button className="btn-primary md:col-span-2">Anfrage senden</button>
    </form>
  )
}

export default function KontaktPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-secondary via-primary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              Kontakt
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Lassen Sie uns sprechen
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Haben Sie Fragen zu Ihrem Projekt? Benötigen Sie ein Angebot? Wir sind für Sie da. 
              Kontaktieren Sie uns – wir melden uns werktags meist innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">Anfrage senden</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
                </div>
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Direkt Kontakt aufnehmen</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mb-8"></div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="group relative magnetic" data-cursor="hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                        📞
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Telefon</h3>
                        <p className="text-text-secondary mb-2">Für schnelle Fragen und Terminvereinbarungen</p>
                        <a href="tel:+436656578897" className="text-secondary font-medium hover:text-accent transition-colors duration-200">
                          +43 66 565 788 972
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative magnetic" data-cursor="hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                        ✉️
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">E-Mail</h3>
                        <p className="text-text-secondary mb-2">Für detaillierte Anfragen und Projektbeschreibungen</p>
                        <a href="mailto:office@rustmontage.at" className="text-secondary font-medium hover:text-accent transition-colors duration-200">
                          office@rustmontage.at
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative magnetic" data-cursor="hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                        📍
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Einzugsgebiet</h3>
                        <p className="text-text-secondary mb-2">Wir sind in ganz Wien und Umgebung für Sie da</p>
                        <p className="text-secondary font-medium">Pfalzgasse 5, 1220 Wien</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative magnetic" data-cursor="hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-wood-section p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                        ⏰
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Arbeitszeiten</h3>
                        <p className="text-text-secondary mb-2">Wir sind zu flexiblen Zeiten für Sie verfügbar</p>
                        <div className="text-secondary font-medium">
                          <div>Mo-Fr: 7:00 - 18:00</div>
                          <div>Sa: Nach Vereinbarung</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">So läuft es ab</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Anfrage senden</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Schicken Sie uns Ihre Anfrage über das Formular oder direkt per E-Mail/Telefon.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Schnelle Rückmeldung</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Wir melden uns werktags meist innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Beratung & Angebot</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Persönliche Beratung und transparenter Kostenvoranschlag – ganz unverbindlich.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Terminvereinbarung</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Bei Interesse vereinbaren wir einen passenden Termin für die Montage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-wood-section">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-text p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Lieber direkt anrufen?</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Manchmal ist ein kurzes Gespräch die schnellste Lösung. Rufen Sie uns einfach an – 
              wir beraten Sie gerne und unverbindlich zu Ihrem Projekt.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+4366565788972" className="bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                📞 Jetzt anrufen
              </a>
              <a href="mailto:office@rustmontage.at" className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-medium hover:bg-secondary hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}






