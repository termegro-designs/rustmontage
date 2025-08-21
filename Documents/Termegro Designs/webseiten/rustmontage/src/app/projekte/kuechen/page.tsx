import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import u_kueche from '@/img/küchenmontage/u_kueche/u_kueche.png'
import links_rechts_kueche from '@/img/küchenmontage/links rechts küchen/links_rechts_kueche.png'
import block_kueche from '@/img/küchenmontage/block_kueche_zeile/block_kueche.png'
import l_kueche from '@/img/küchenmontage/L_kueche/l_kueche.png'
import l_kueche_2 from '@/img/küchenmontage/L_kueche/l_kueche_2.png'

export const metadata = {
  title: 'Projekte – Küchen | Rustmontage',
  description: 'Ausgewählte Küchenmontagen: präzise Geräte-Integration, passgenaue Arbeitsplatten und saubere Übergabe.'
}

export default function KuechenProjektePage() {
  return (
    <div>
      <Header />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="eyebrow">Projekte</div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2">Küchen</h1>
          <p className="text-text-secondary mt-4">Einige Eindrücke unserer Küchenmontagen.</p>
        </div>
      </section>

      <section className="bg-background-light py-12">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="card">
            <div className="relative w-full aspect-[4/3] bg-white">
              <Image src={u_kueche} alt="U-förmige Küche – Rustmontage" fill className="object-contain" />
            </div>
            <div className="mt-4 text-text-secondary">U-förmige Küche mit präziser Anpassung und sauberer Fuge.</div>
          </div>
          <div className="card">
            <div className="relative w-full aspect-[4/3] bg-white">
              <Image src={links_rechts_kueche} alt="Küche – linke und rechte Ansicht" fill className="object-contain" />
            </div>
            <div className="mt-4 text-text-secondary">Zwei Ansichten – exakte Ausrichtung und Geräte-Integration.</div>
          </div>
          <div className="card">
            <div className="relative w-full aspect-[4/3] bg-white">
              <Image src={block_kueche} alt="Blockküche – Zeile" fill className="object-contain" />
            </div>
            <div className="mt-4 text-text-secondary">Blockküche als Zeile – klare Linien und passgenaue Montage.</div>
          </div>
          <div className="card">
            <div className="relative w-full aspect-[4/3] bg-white">
              <Image src={l_kueche} alt="L-förmige Küche" fill className="object-contain" />
            </div>
            <div className="mt-4 text-text-secondary">L-förmige Küche – exakte Ecklösung und bündige Fronten.</div>
          </div>
          <div className="card">
            <div className="relative w-full aspect-[4/3] bg-white">
              <Image src={l_kueche_2} alt="L-förmige Küche – Variante" fill className="object-contain" />
            </div>
            <div className="mt-4 text-text-secondary">L-förmige Küche – Variante mit optimierter Arbeitsfläche.</div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <a href="/projekte" className="btn-secondary">Zurück zur Übersicht</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}



