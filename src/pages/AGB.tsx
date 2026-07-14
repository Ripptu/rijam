import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AGB() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-light selection:bg-accent/30 selection:text-text-dark pt-32 pb-24">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-light mb-12">AGB</h1>
        <div className="space-y-6 text-text-light-muted font-light leading-relaxed">
          <p>Allgemeine Geschäftsbedingungen</p>
          <p>
            1. Geltungsbereich...<br />
            Diese AGB gelten für alle Dienstleistungen von Rijam Lebensberatung.
          </p>
          <p>
            2. Dienstleistungen...<br />
            Alle Dienstleistungen werden mit größter Sorgfalt durchgeführt. Es kann jedoch keine Garantie für bestimmte Ergebnisse übernommen werden.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
