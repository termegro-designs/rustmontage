import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-merriweather font-bold">RUSTMONTAGE</div>
            <p className="text-white/80 mt-4 leading-relaxed max-w-sm">
              Meistertischler für exklusive Küchen- und Möbelmontage in Wien & Niederösterreich.
            </p>
          </div>
          <div>
            <div className="text-sm tracking-widest text-white/70 mb-4">NAVIGATION</div>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/leistungen" className="hover:text-white">Leistungen</Link></li>
              <li><Link href="/projekte" className="hover:text-white">Projekte</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-white">Über uns</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm tracking-widest text-white/70 mb-4">KONTAKT</div>
            <ul className="space-y-2 text-white/90">
              <li>+43 664 123 456 789</li>
              <li>office@rustmontage.at</li>
              <li>Wien & Niederösterreich</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div>© {new Date().getFullYear()} Rustmontage. Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}



