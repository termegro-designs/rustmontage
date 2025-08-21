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
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="eyebrow">Kontakt</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">Anfrage & Beratung</h1>
          <p className="text-text-secondary mt-4">Wir melden uns werktags meist innerhalb von 24 Stunden.</p>
          <div className="mt-10">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}






