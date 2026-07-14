import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-light selection:bg-accent/30 selection:text-text-dark pt-32 pb-24">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="font-display text-4xl md:text-5xl font-light mb-12">Datenschutz</h1>
        <div className="space-y-6 text-text-light-muted font-light leading-relaxed">
          <p>Datenschutzerklärung</p>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
