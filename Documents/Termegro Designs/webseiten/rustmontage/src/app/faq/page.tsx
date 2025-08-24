import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'FAQ – Rustmontage | Häufige Fragen',
  description: 'Antworten zu Ablauf, Terminen, Preisen und Vorbereitung für Küchen- und Möbelmontage.'
}

const faqs = [
  {
    q: 'Wie schnell bekomme ich einen Termin?',
    a: 'In der Regel innerhalb von 7–10 Werktagen. Für Notfälle oder dringende Reparaturen bemühen wir uns um schnellere Lösungen. Kontaktieren Sie uns einfach – wir finden einen Weg.',
    icon: '⏰'
  },
  {
    q: 'Welche Informationen benötigen Sie vorab?',
    a: 'Maße, Fotos der aktuellen Situation und – falls vorhanden – Pläne oder Herstellerangaben. Mit diesen Informationen können wir Ihnen ein präzises und faires Angebot erstellen.',
    icon: '📋'
  },
  {
    q: 'Arbeiten Sie auch am Wochenende?',
    a: 'Nach Absprache sind Samstagstermine möglich. Besonders für berufstätige Kunden versuchen wir flexible Lösungen zu finden. Sprechen Sie uns einfach an.',
    icon: '📅'
  },
  {
    q: 'Was kostet eine Küchenmontage?',
    a: 'Die Kosten hängen von der Größe, Komplexität und den örtlichen Gegebenheiten ab. Wir erstellen Ihnen gerne einen transparenten Kostenvoranschlag – natürlich kostenlos und unverbindlich.',
    icon: '💰'
  },
  {
    q: 'Müssen die Küchenmöbel bereits geliefert sein?',
    a: 'Ja, alle Möbel sollten vor unserem Termin bereits bei Ihnen angeliefert sein. Wir prüfen vorab, ob alles vollständig ist und alle Teile unbeschädigt angekommen sind.',
    icon: '📦'
  },
  {
    q: 'Wie lange dauert eine typische Montage?',
    a: 'Eine Standard-Küche benötigt meist 1-2 Tage. Große oder komplexe Küchen können auch länger dauern. Möbelmontagen sind oft am selben Tag fertig. Wir informieren Sie vorab über den geplanten Zeitaufwand.',
    icon: '🔧'
  },
  {
    q: 'Was passiert bei Beschädigungen?',
    a: 'Wir arbeiten sehr sorgfältig und schützen Ihre Wohnung entsprechend. Sollte dennoch ein Schaden entstehen, sind wir vollständig versichert und regeln alles schnell und unkompliziert.',
    icon: '🛡️'
  },
  {
    q: 'Bringen Sie Ihr eigenes Werkzeug mit?',
    a: 'Selbstverständlich! Wir bringen alle professionellen Werkzeuge und Hilfsmittel mit. Sie müssen sich um nichts kümmern – wir kommen mit allem, was wir für eine perfekte Montage brauchen.',
    icon: '🧰'
  },
  {
    q: 'Muss ich während der Montage anwesend sein?',
    a: 'Sie sollten zu Beginn und Ende der Montage anwesend sein. Während der Arbeiten können Sie gerne Ihre gewohnten Tätigkeiten nachgehen oder auch das Haus verlassen.',
    icon: '🏠'
  },
  {
    q: 'Bieten Sie auch Reparaturen an?',
    a: 'Ja, wir reparieren defekte Scharniere, ersetzen Griffe, justieren Türen und vieles mehr. Auch für kleine Arbeiten sind wir gerne da – rufen Sie uns einfach an.',
    icon: '🔨'
  }
]

export default function FAQPage() {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-accent via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm tracking-widest uppercase mb-6">
              FAQ
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Häufige Fragen
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-white/90">
              Alle wichtigen Antworten zu Ablauf, Terminen, Kosten und Vorbereitung – 
              kurz, klar und hilfreich. So wissen Sie genau, was Sie erwartet.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-wood-section relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Antworten auf Ihre Fragen</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((item, index) => (
              <div key={item.q} className="group relative magnetic" data-cursor="hover">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-wood-section p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary mb-3 leading-tight">{item.q}</h3>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed ml-16">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Schnelle Hilfe</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Notfall-Service</h3>
                <p className="text-text-secondary leading-relaxed">
                  Dringende Reparaturen? Wir versuchen, Ihnen schnellstmöglich zu helfen. Rufen Sie uns einfach an.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Kostenlose Beratung</h3>
                <p className="text-text-secondary leading-relaxed">
                  Unsicher bei der Planung? Wir beraten Sie gerne kostenlos und unverbindlich zu Ihrem Projekt.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  📞
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Direkte Antwort</h3>
                <p className="text-text-secondary leading-relaxed">
                  Ihre Frage ist nicht dabei? Rufen Sie uns an oder schreiben Sie uns – wir antworten schnell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-wood-section">
        <div className="container-custom text-center max-w-4xl">
          <div className="bg-wood-text p-12 rounded-3xl shadow-xl border border-black/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Noch Fragen offen?</h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Konnten wir Ihre Frage nicht beantworten? Kein Problem! Kontaktieren Sie uns direkt – 
              wir helfen Ihnen gerne weiter und erstellen Ihnen ein individuelles Angebot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt" className="bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 magnetic" data-cursor="hover">
                Persönlich beraten lassen
              </a>
              <a href="mailto:office@rustmontage.at" className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-medium hover:bg-accent hover:text-white transition-all duration-300 magnetic" data-cursor="hover">
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






