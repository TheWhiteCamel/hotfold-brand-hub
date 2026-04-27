import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Mail, Instagram, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HotFold" },
      { name: "description", content: "Get in touch with the HotFold team. Press, partnerships, and general inquiries." },
      { property: "og:title", content: "Contact HotFold" },
      { property: "og:description", content: "Say hello." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Invalid input"); return; }
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <section className="bg-ink text-bone">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow eyebrow-gold">Contact</p>
          <h1 className="mt-4 text-5xl md:text-6xl text-bone">Say <span className="text-gold">hello.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-bone/70">Press, partnerships, or just curious — we read every message.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Email</p>
              <ul className="mt-4 space-y-3 text-foreground/85">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold"/> hello@hotfold.co</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold"/> franchise@hotfold.co</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold"/> events@hotfold.co</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Social</p>
              <div className="mt-4 flex gap-3">
                <a href="#" aria-label="Instagram" className="rounded-sm border border-border p-3 hover:border-gold hover:text-gold transition"><Instagram className="h-4 w-4"/></a>
                <a href="#" aria-label="LinkedIn" className="rounded-sm border border-border p-3 hover:border-gold hover:text-gold transition"><Linkedin className="h-4 w-4"/></a>
              </div>
            </div>
            <div>
              <p className="eyebrow">Studio</p>
              <p className="mt-3 text-foreground/85">Budapest, Hungary</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 space-y-5">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
                <h3 className="mt-4 font-display text-2xl">Message sent.</h3>
                <p className="mt-2 text-muted-foreground">Thanks — we'll reply soon.</p>
              </div>
            ) : (
              <>
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Message" name="message" textarea required />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <button type="submit" className="btn-gold w-full">Send message</button>
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
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">{label}{required && " *"}</span>
      {textarea
        ? <textarea name={name} rows={5} required={required} maxLength={1000} className={cls}/>
        : <input name={name} type={type} required={required} maxLength={255} className={cls}/>}
    </label>
  );
}
