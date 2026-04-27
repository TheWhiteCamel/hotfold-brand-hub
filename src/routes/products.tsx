import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import beef from "@/assets/product-beef.jpg";
import chicken from "@/assets/product-chicken.jpg";
import spinach from "@/assets/product-spinach.jpg";
import apple from "@/assets/product-apple.jpg";
import ham from "@/assets/product-ham.jpg";
import veggie from "@/assets/product-veggie.jpg";
import { Leaf, Beef, Cookie } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — HotFold Empanadas" },
      { name: "description", content: "Twelve baked empanada flavors — meat, vegetarian, sweet. Crafted for taste, engineered for speed." },
      { property: "og:title", content: "HotFold Products" },
      { property: "og:description", content: "Browse our full empanada range." },
    ],
  }),
  component: ProductsPage,
});

type Item = { name: string; desc: string; img: string; cat: "meat" | "veg" | "sweet"; tags?: string[] };

const items: Item[] = [
  { name: "Slow Beef", desc: "Braised beef, onion, paprika, green olive.", img: beef, cat: "meat" },
  { name: "Tinga Chicken", desc: "Chipotle chicken, lime, fresh coriander.", img: chicken, cat: "meat", tags: ["spicy"] },
  { name: "Ham & Cheese", desc: "Smoked ham, melted mozzarella, oregano.", img: ham, cat: "meat" },
  { name: "Spinach & Ricotta", desc: "Wilted spinach, ricotta, nutmeg.", img: spinach, cat: "veg", tags: ["veggie"] },
  { name: "Wild Mushroom", desc: "Roasted mushrooms, thyme, white wine.", img: veggie, cat: "veg", tags: ["veggie"] },
  { name: "Caprese", desc: "Tomato, mozzarella, basil pesto.", img: veggie, cat: "veg", tags: ["veggie"] },
  { name: "Apple Cinnamon", desc: "Caramelized apple, cinnamon, brown sugar.", img: apple, cat: "sweet", tags: ["sweet"] },
  { name: "Dulce de Leche", desc: "Argentine caramel, sea salt finish.", img: apple, cat: "sweet", tags: ["sweet"] },
];

const cats = [
  { id: "meat", label: "Meat", icon: Beef },
  { id: "veg", label: "Vegetarian", icon: Leaf },
  { id: "sweet", label: "Sweet", icon: Cookie },
] as const;

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="bg-ink text-bone">
        <div className="container-x py-20 md:py-28">
          <p className="eyebrow eyebrow-gold">The Menu</p>
          <h1 className="mt-4 text-5xl md:text-6xl text-bone">One shape. <span className="text-gold">Twelve stories.</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-bone/70">
            Every HotFold empanada is hand-folded, flash-frozen, then baked to order.
            Familiar flavors, premium execution.
          </p>
        </div>
      </section>

      {cats.map((c) => {
        const list = items.filter((i) => i.cat === c.id);
        return (
          <section key={c.id} className="section">
            <div className="container-x">
              <div className="flex items-center gap-3">
                <c.icon className="h-5 w-5 text-gold" />
                <p className="eyebrow">{c.label}</p>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl">{c.label} selection</h2>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((i) => (
                  <article key={i.name} className="group">
                    <div className="aspect-square overflow-hidden rounded-sm bg-secondary">
                      <img src={i.img} alt={i.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" width={800} height={800}/>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl">{i.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                      </div>
                      {i.tags?.[0] && (
                        <span className="shrink-0 rounded-sm border border-gold/40 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                          {i.tags[0]}
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </SiteLayout>
  );
}
