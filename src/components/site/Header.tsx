import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLinkItem = { to: string; label: string; end?: boolean };
const links: NavLinkItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/franchise", label: "Franchise" },
  { to: "/events", label: "Events" },
  { to: "/press", label: "Press" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink text-bone font-display text-sm">H</span>
          <span className="font-display text-lg tracking-tight">HotFold</span>
          <span className="hidden sm:inline font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">/ Kiosk Co.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/franchise" className="btn-gold !px-4 !py-2 text-xs">Franchise</Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base ${isActive ? "text-foreground font-medium" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
