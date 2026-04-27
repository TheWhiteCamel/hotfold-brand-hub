import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, MessageSquare, Truck, Sparkles } from "lucide-react";
import kioskImg from "@/assets/kiosk.jpg";
import { Helmet } from "react-helmet-async";




const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  date: z.string().trim().min(1, "Event date required").max(50),
  location: z.string().trim().min(2).max(150),
  guests: z.string().trim().min(1).max(20),
});

function EventsPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      date: fd.get("date"),
      location: fd.get("location"),
      guests: fd.get("guests"),
    });
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Invalid input"); return; }
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>Events & Kiosk Rental — HotFold</title>
        <meta name="description" content="Book the HotFold mobile empanada kiosk for festivals, corporate events and private parties." />
        <meta property="og:title" content="Events & Kiosk Rental — HotFold" />
        <meta property="og:description" content="Book the HotFold mobile empanada kiosk for festivals, corporate events and private parties." />
      </Helmet>
      <section className="relative overflow-hidden bg-ink text-bone">
        <img src={kioskImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="container-x relative py-24 md:py-32">
          <p className="eyebrow eyebrow-gold">Mobile Kiosk</p>
          <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl text-bone">
            Bring HotFold <span className="text-gold">to your event.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/75">
            Our mobile kiosk arrives, sets up, and serves freshly baked empanadas in
            under an hour. Festivals, weddings, brand activations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Perfect for</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Festivals", d: "High-volume service for music & food festivals." },
              { t: "Corporate events", d: "Branded catering for offsites, launches, and conferences." },
              { t: "Private events", d: "Weddings, birthdays, and gatherings to remember." },
            ].map((x) => (
              <div key={x.t} className="rounded-sm border border-border bg-card p-8">
                <h3 className="font-display text-2xl">{x.t}</h3>
                <p className="mt-2 text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary/40">
        <div className="container-x">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Three steps. We handle the rest.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              { icon: MessageSquare, n: "01", t: "Inquiry", d: "Tell us your date, location, and guest count." },
              { icon: Truck, n: "02", t: "Setup", d: "We arrive, install the kiosk, and prep service." },
              { icon: Sparkles, n: "03", t: "Service", d: "Hot empanadas, served fast — until the last guest." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gold">{s.n}</span>
                  <s.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-8 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Request</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Request a kiosk.</h2>
            <p className="mt-6 text-foreground/75">Share a few details — we reply within 48 hours with availability and a quote.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 space-y-5">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
                <h3 className="mt-4 font-display text-2xl">Request received.</h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <>
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Event date" name="date" type="date" required />
                <Field label="Location" name="location" required />
                <Field label="Expected guests" name="guests" type="number" required />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button type="submit" className="btn-gold w-full">Request a Kiosk</button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} maxLength={255}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
    </label>
  );
}

export default EventsPage;
