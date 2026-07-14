import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-light selection:bg-accent/30 selection:text-text-dark pt-32 pb-24">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-light mb-12">Impressum</h1>
        <div className="space-y-6 text-text-light-muted font-light leading-relaxed">
          <p>Angaben gemäß § 5 TMG</p>
          <p>
            Rijam Lebensberatung<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>
          <p>
            <strong>Kontakt:</strong><br />
            Telefon: +49 (0) 123 44 55 66<br />
            E-Mail: info@rijam-lebensberatung.de
          </p>
          <p>Umsatzsteuer-ID: DE123456789</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
