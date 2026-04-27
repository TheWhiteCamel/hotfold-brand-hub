import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";




const posts = [
  { date: "Apr 2026", tag: "Press release", title: "HotFold launches the empanada kiosk concept in Budapest", excerpt: "A new category of premium street food arrives in Hungary's capital." },
  { date: "Mar 2026", tag: "Update", title: "Pilot kiosk validates 60-second service time", excerpt: "Internal trials confirm throughput targets ahead of public launch." },
  { date: "Feb 2026", tag: "Story", title: "From Valencia to Budapest: the HotFold origin story", excerpt: "A founder's diary on turning a question into a concept." },
  { date: "Jan 2026", tag: "Note", title: "We're hiring our first kiosk operations lead", excerpt: "Join the team building the next premium street-food brand." },
];

function PressPage() {
  return (
    <SiteLayout>
      <Helmet>
        <title>Press & News — HotFold</title>
        <meta name="description" content="Press releases, updates and news from the HotFold empanada kiosk concept." />
        <meta property="og:title" content="Press & News — HotFold" />
        <meta property="og:description" content="Press releases, updates and news from the HotFold empanada kiosk concept." />
      </Helmet>
      <section className="bg-ink text-bone">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow eyebrow-gold">Press & News</p>
          <h1 className="mt-4 text-5xl md:text-6xl text-bone">The <span className="text-gold">HotFold</span> file.</h1>
          <p className="mt-6 max-w-2xl text-lg text-bone/70">Press releases, product updates, and notes from the build.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((p) => (
              <li key={p.title}>
                <a href="#" className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.date}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="rounded-sm border border-gold/40 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">{p.tag}</span>
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl md:text-3xl group-hover:text-gold transition">{p.title}</h2>
                    <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-gold transition" />
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-sm border border-border bg-card p-8">
            <p className="eyebrow">Press inquiries</p>
            <p className="mt-3 text-foreground/80">For interviews and media kits, reach us at <a href="mailto:press@hotfold.co" className="text-gold underline-offset-4 hover:underline">press@hotfold.co</a>.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default PressPage;
