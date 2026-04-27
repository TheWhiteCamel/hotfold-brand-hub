import { SiteLayout } from "@/components/site/SiteLayout";
import trio from "@/assets/empanadas-trio.jpg";
import { Helmet } from "react-helmet-async";




function AboutPage() {
  return (
    <SiteLayout>
      <Helmet>
        <title>About — HotFold</title>
        <meta name="description" content="The story behind HotFold — from Valencia memory to Budapest reality." />
        <meta property="og:title" content="About — HotFold" />
        <meta property="og:description" content="The story behind HotFold — from Valencia memory to Budapest reality." />
      </Helmet>
      <section className="bg-ink text-bone">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow eyebrow-gold">About</p>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl text-bone">A concept built on <span className="text-gold">one question.</span></h1>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={trio} alt="" loading="lazy" className="w-full rounded-sm object-cover" width={1400} height={1000} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-lg text-foreground/80">
            <p className="eyebrow">The Origin</p>
            <p>
              HotFold was born on a sunny street in Valencia. A paper bag, a warm
              empanada, and a question: <em className="font-display text-foreground">why isn't this in my country?</em>
            </p>
            <p>
              That question stayed for months. It became a sketch. The sketch became a
              kiosk. The kiosk became HotFold — a single-product brand engineered for
              the modern city.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-secondary/40">
        <div className="container-x">
          <p className="eyebrow">Values</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Three principles. Non-negotiable.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              { n: "01", t: "Quality", d: "Real ingredients. Slow-cooked fillings. No shortcuts on what people taste." },
              { n: "02", t: "Simplicity", d: "One product, done right. No menu sprawl, no confusion, no compromise." },
              { n: "03", t: "Scalability", d: "Every decision tested against the question: can this work at 100 kiosks?" },
            ].map((v) => (
              <div key={v.n} className="bg-background p-8">
                <span className="font-mono text-xs text-gold">{v.n}</span>
                <h3 className="mt-6 font-display text-2xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Founder note</p>
          <blockquote className="mt-6 font-display text-3xl md:text-4xl leading-tight">
            "We didn't want to invent a new food. We wanted to bring a great one,
            properly, to a city that didn't have it yet."
          </blockquote>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">— Founder, HotFold</p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default AboutPage;
