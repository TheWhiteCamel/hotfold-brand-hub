import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, TrendingUp, Layers, Building2, Globe } from "lucide-react";
import kioskImg from "@/assets/kiosk.jpg";
import { Helmet } from "react-helmet-async";




const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  city: z.string().trim().min(2, "City required").max(100),
  message: z.string().trim().max(1000).optional(),
});

function FranchisePage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      city: fd.get("city"),
      message: fd.get("message"),
    });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>Franchise — HotFold</title>
        <meta name="description" content="Open a HotFold kiosk. Fast-food speed, gourmet positioning. Low CAPEX, high turnover, built to scale." />
        <meta property="og:title" content="Franchise — HotFold" />
        <meta property="og:description" content="Open a HotFold kiosk. Fast-food speed, gourmet positioning. Low CAPEX, high turnover, built to scale." />
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <img src={kioskImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="container-x relative py-24 md:py-32">
          <p className="eyebrow eyebrow-gold">Franchise Opportunity</p>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl text-bone">
            Fast-food speed. <span className="text-gold">Gourmet positioning.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/75">
            HotFold is a turn-key kiosk concept built around one perfect product.
            Low CAPEX. High turnover. Designed to scale.
          </p>
        </div>
      </section>

      {/* Model */}
      <section className="section">
        <div className="container-x">
          <p className="eyebrow">The Model</p>
          <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">A kiosk, not a kitchen.</h2>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {[
              { icon: Building2, title: "Small footprint", desc: "From 6m². Drops into malls, transit hubs, and high streets." },
              { icon: Layers, title: "Low CAPEX", desc: "No hood, no fryer. A streamlined fit-out built for fast ROI." },
              { icon: TrendingUp, title: "High turnover", desc: "60-second service. Single-product focus. Maximum throughput." },
            ].map((c) => (
              <div key={c.title} className="bg-background p-8">
                <c.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section bg-ink text-bone">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow eyebrow-gold">Expansion Vision</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-bone">From one kiosk to a network.</h2>
            <p className="mt-6 text-lg text-bone/75">
              We're building HotFold city by city. Budapest is just the start —
              Vienna, Prague, and Berlin are on the map.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Standardized operations playbook",
              "Central frozen production & supply",
              "Brand, training & launch support",
              "Site selection & build guidance",
              "Marketing system included",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 border-b border-bone/10 pb-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-bone/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apply */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Apply</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Open a HotFold kiosk.</h2>
            <p className="mt-6 text-foreground/75">
              Tell us about you and your city. We respond to every serious inquiry within
              5 business days.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Globe className="h-5 w-5 text-gold" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                EU-wide applications open
              </span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 space-y-5">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
                <h3 className="mt-4 font-display text-2xl">Thank you.</h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Target city" name="city" required />
                <Field label="Tell us briefly" name="message" textarea />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button type="submit" className="btn-gold w-full">Apply for Franchise</button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, textarea }: {
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean;
}) {
  const cls = "mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
  return (
    <label className="block">
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        {label}{required && " *"}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} maxLength={1000} />
      ) : (
        <input name={name} type={type} required={required} className={cls} maxLength={255} />
      )}
    </label>
  );
}

export default FranchisePage;
