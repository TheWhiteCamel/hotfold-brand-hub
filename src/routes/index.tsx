import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Snowflake, Flame, ShoppingBag, MapPin, Users, Sparkles, TrendingUp, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-empanada.jpg";
import trioImg from "@/assets/empanadas-trio.jpg";
import kioskImg from "@/assets/kiosk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HotFold — The Empanada Kiosk Concept" },
      { name: "description", content: "From Valencia memory to Budapest reality. A premium, baked-not-fried empanada kiosk concept built to scale." },
      { property: "og:title", content: "HotFold — The Empanada Kiosk Concept" },
      { property: "og:description", content: "Engineered for taste. Designed to scale. Discover the kiosk built around the empanada." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-blueprint-dark opacity-30" />
        <div className="container-x relative grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div className="flex flex-col justify-center">
            <p className="eyebrow eyebrow-gold">001 / The Concept</p>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl text-bone">
              The Empanada<br/>
              <span className="text-gold">Kiosk Concept.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-bone/75">
              From Valencia memory to Budapest reality. A baked, not fried, gourmet
              hand-pie — served from a kiosk engineered to scale.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/franchise" className="btn-gold">
                Franchise With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/events" className="btn-ghost-light">Order a Kiosk</Link>
              <a href="#concept" className="btn-ghost-light">Explore the Concept</a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-bone/15 pt-8">
              {[
                ["12+", "Flavors"],
                ["3", "Steps"],
                ["1", "Concept"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-gold">{n}</p>
                  <p className="eyebrow text-bone/60 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-sm border border-gold/30" />
            <img
              src={heroImg}
              alt="Golden baked HotFold empanada with steam rising"
              className="relative h-full w-full rounded-sm object-cover"
              width={1600}
              height={1200}
            />
            <div className="absolute -bottom-3 -right-3 rounded-sm bg-gold px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink">
              Baked · Not Fried
            </div>
          </div>
        </div>
      </section>

      {/* IDEA */}
      <section className="section bg-blueprint">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">002 / The Idea</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A question on a sunny street.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-lg text-foreground/80">
            <p>
              It started in Valencia — a paper bag, a warm empanada, and a thought that
              wouldn't leave: <em className="font-display text-foreground">why isn't this in my country?</em>
            </p>
            <p>
              That single question became HotFold. A concept built around one perfect
              product, served fast, without compromise.
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold">
              Spain → Budapest → Everywhere
            </p>
          </div>
        </div>
      </section>

      {/* CONCEPT FLOW */}
      <section id="concept" className="section bg-ink text-bone">
        <div className="container-x">
          <p className="eyebrow eyebrow-gold">003 / The Concept</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl text-bone">
            Three steps. <span className="text-gold">Zero compromise.</span>
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", icon: Snowflake, title: "Frozen", desc: "Hand-folded, flash-frozen at peak. Consistency, locked in." },
              { n: "02", icon: Flame, title: "Baked", desc: "Convection oven, no fryer. Crisp crust, clean kitchen." },
              { n: "03", icon: ShoppingBag, title: "Served", desc: "Hot, in under 60 seconds. Wrapped, gone, remembered." },
            ].map((s) => (
              <div key={s.n} className="group relative rounded-sm border border-bone/15 p-8 transition hover:border-gold">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gold">{s.n}</span>
                  <s.icon className="h-6 w-6 text-bone/60 group-hover:text-gold transition" />
                </div>
                <h3 className="mt-8 font-display text-2xl text-bone">{s.title}</h3>
                <p className="mt-3 text-sm text-bone/70">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-bone/60">
            <span>Frozen</span>
            <span className="h-px w-12 bg-gold" />
            <span>Baked</span>
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold">Served</span>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow">004 / Why It Works</p>
              <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">Engineered to win in the city.</h2>
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Tourist demand", desc: "High footfall, hungry visitors, instant recognition." },
              { icon: Sparkles, title: "Impulse-friendly", desc: "One hand. One bite. One decision." },
              { icon: Wrench, title: "Low complexity", desc: "No fryer, no chef, no chaos. Just the oven." },
              { icon: TrendingUp, title: "Scalable model", desc: "From 1 kiosk to 100 — same playbook." },
            ].map((c) => (
              <div key={c.title} className="bg-background p-8">
                <c.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-6 font-display text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="section bg-secondary/40">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <img src={trioImg} alt="Three baked empanadas on dark slate" loading="lazy" className="w-full rounded-sm object-cover" width={1400} height={1000}/>
            <div className="absolute -top-3 -left-3 rounded-sm border border-gold bg-background px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground">
              The Range
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <p className="eyebrow">005 / The Product</p>
            <h2 className="mt-4 text-4xl md:text-5xl">One shape. <span className="text-gold">Twelve stories.</span></h2>
            <p className="mt-6 text-lg text-foreground/75">
              Slow-cooked beef. Spinach & cheese. Caramelized apple. Every flavor is
              built to feel familiar yet feel premium.
            </p>
            <Link to="/products" className="btn-primary mt-8 w-fit">
              See the menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">006 / Locations</p>
          <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">Now opening in Budapest.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { city: "Budapest", status: "Flagship · 2026", live: true },
              { city: "Vienna", status: "Coming soon" },
              { city: "Prague", status: "On the map" },
            ].map((l) => (
              <div key={l.city} className="rounded-sm border border-border bg-card p-8">
                <div className="flex items-center justify-between">
                  <MapPin className={`h-5 w-5 ${l.live ? "text-gold" : "text-muted-foreground"}`} />
                  <span className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] ${l.live ? "text-gold" : "text-muted-foreground"}`}>
                    {l.live ? "Live" : "Pin"}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{l.city}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <img src={kioskImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="container-x relative py-24 md:py-32">
          <p className="eyebrow eyebrow-gold">007 / Join</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl text-bone">
            Join the HotFold journey.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-bone/75">
            Open a kiosk. Book one for your event. Or just say hello.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/franchise" className="btn-gold">Franchise</Link>
            <Link to="/events" className="btn-ghost-light">Events</Link>
            <Link to="/contact" className="btn-ghost-light">Contact</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
