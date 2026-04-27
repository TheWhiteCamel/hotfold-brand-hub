import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold text-ink font-display">H</span>
            <span className="font-display text-xl">HotFold</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-bone/70">
            The empanada kiosk concept. From Valencia memory to Budapest reality —
            engineered for taste, designed to scale.
          </p>
          <p className="eyebrow eyebrow-gold mt-6">Budapest · Hungary</p>
        </div>

        <div>
          <p className="eyebrow text-bone/60 mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/franchise" className="hover:text-gold">Franchise</Link></li>
            <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            <li><Link to="/press" className="hover:text-gold">Press</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bone/60 mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-bone/80">
            <li>hello@hotfold.co</li>
            <li>franchise@hotfold.co</li>
            <li>events@hotfold.co</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container-x flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone/50">
            © {new Date().getFullYear()} HotFold Kiosk Co.
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone/50">
            Frozen → Baked → Served
          </p>
        </div>
      </div>
    </footer>
  );
}
