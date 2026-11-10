import { useState } from "react";
import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { shopConfig } from "@/lib/shop/config";
import { useShop, scrollToId } from "@/lib/shop/store";

export function SiteFooter() {
  const { setView, openDialog } = useShop();
  const [email, setEmail] = useState("");
  const soon = (name: string) => () => toast(`${name} is coming soon`);
  const cols: { title: string; links: { label: string; run: () => void }[] }[] = [
    { title: "About Sholok", links: [{ label: "About Us", run: soon("About Us") }, { label: "Contact Us", run: soon("Contact Us") }] },
    { title: "Customer Service", links: ["Help Center", "Shipping Information", "Returns and Refunds", "FAQs"].map((l) => ({ label: l, run: soon(l) })) },
    { title: "Shopping", links: [
      { label: "Shop All", run: () => setView({ type: "all" }) },
      { label: "New Arrivals", run: () => scrollToId("new-arrivals") },
      { label: "Flash Sale", run: () => scrollToId("flash-sale") },
      { label: "Trending Items", run: () => scrollToId("trending") },
    ] },
    { title: "Seller Information", links: [{ label: "Become a Seller", run: () => openDialog("seller") }, { label: "Seller Guidelines", run: soon("Seller Guidelines") }] },
  ];
  return (
    <footer className="mt-16 bg-primary-deep text-primary-foreground">
      <div className="container-shop grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl font-extrabold">SHOLOK<span className="text-sale">.</span></p>
          <p className="mt-3 max-w-xs text-sm opacity-80">Fashion, beauty, home and everyday essentials — discover more and love more, all in one place.</p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${shopConfig.phone.tel}`} className="flex items-center gap-2 hover:underline"><Phone className="size-4" aria-hidden />{shopConfig.phone.display}</a>
            <a href={`mailto:${shopConfig.email}`} className="flex items-center gap-2 hover:underline"><Mail className="size-4" aria-hidden />{shopConfig.email}</a>
          </div>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <button key={i} onClick={soon("Social profiles")} aria-label={["Facebook", "Instagram", "YouTube"][i]} className="grid size-9 place-items-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary">
                <Icon className="size-4" />
              </button>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">{c.title}</h3>
            <ul className="space-y-2 text-sm opacity-85">
              {c.links.map((l) => <li key={l.label}><button onClick={l.run} className="text-left hover:underline">{l.label}</button></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-shop flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <form onSubmit={(e) => { e.preventDefault(); if (email) { toast("Newsletter sign-up is a demo — nothing was sent."); setEmail(""); } }} className="flex w-full max-w-md overflow-hidden rounded-full bg-primary-foreground/10">
            <label htmlFor="newsletter" className="sr-only">Email for newsletter</label>
            <input id="newsletter" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email for offers & updates" className="min-w-0 flex-1 bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-primary-foreground/60" />
            <button className="bg-sale px-5 text-sm font-semibold text-sale-foreground">Subscribe</button>
          </form>
          <p className="text-xs opacity-70">© {new Date().getFullYear()} Sholok Shopping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
