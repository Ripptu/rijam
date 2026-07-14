import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-bg-dark-2 text-text-light-muted py-12 border-t border-border-subtle-light text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div>
            <span className="font-display text-xl tracking-[0.15em] uppercase text-text-light">Rijam</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-8">
            <Link to="/impressum" className="hover:text-text-light transition-colors duration-300">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-text-light transition-colors duration-300">Datenschutz</Link>
            <Link to="/agb" className="hover:text-text-light transition-colors duration-300">AGB</Link>
          </div>

          <div className="md:text-right">
            &copy; {new Date().getFullYear()} Medium Rijam. Alle Rechte vorbehalten.
          </div>

        </div>
      </div>
    </footer>
  );
}
