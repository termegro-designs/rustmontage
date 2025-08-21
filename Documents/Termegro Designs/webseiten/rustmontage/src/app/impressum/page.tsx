import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Impressum – Rustmontage',
  description: 'Impressum von Rustmontage.'
}

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Impressum</h1>
          <div className="text-text-secondary mt-6 space-y-2">
            <p>Rustmontage</p>
            <p>Wien, Österreich</p>
            <p>Telefon: +43 664 123 456 789</p>
            <p>E-Mail: office@rustmontage.at</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}






