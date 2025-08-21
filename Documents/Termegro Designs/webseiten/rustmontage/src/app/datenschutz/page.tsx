import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Datenschutz – Rustmontage',
  description: 'Datenschutzerklärung von Rustmontage.'
}

export default function DatenschutzPage() {
  return (
    <div>
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Datenschutzerklärung</h1>
          <p className="text-text-secondary mt-6">Wir behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Vorschriften.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}






