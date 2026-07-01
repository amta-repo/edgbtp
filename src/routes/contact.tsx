import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { MAPS_URL } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Devis — EDG BTP & SERVICES" },
      { name: "description", content: "Demandez votre devis BTP gratuit. Basés à Abomey-Calavi, Bénin. Réponse sous 24h ouvrées." },
      { property: "og:title", content: "Contact & Devis — EDG BTP & SERVICES" },
      { property: "og:description", content: "Devis structurel gratuit, réponse d'un ingénieur sous 24h ouvrées." },
    ],
  }),
});

function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="grid-blueprint absolute inset-0 -z-10 opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Contact</div>
            <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
              Prêt à bâtir <span className="text-gold-gradient">votre projet</span> ?
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Contactez-nous pour un devis structurel gratuit. Réponse sous 24 h ouvrées par un
              ingénieur EDG BTP.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-amber-glow/40 bg-amber-glow/10 p-5 transition hover:bg-amber-glow/15"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-glow text-navy">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-glow">
                    Ouvrir dans Google Maps
                  </div>
                  <div className="mt-0.5 truncate text-sm font-semibold">Godomey / Abomey-Calavi, Bénin</div>
                  <div className="text-xs text-muted-foreground">6.4081539° N, 2.2482677° E</div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-amber-glow transition group-hover:translate-x-1" />
              </a>

              <a href="tel:+2290190212876" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-amber-glow/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-white/10">
                  <Phone className="h-5 w-5 text-amber-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Téléphone / WhatsApp</div>
                  <div className="truncate text-sm font-semibold">+229 01 90 21 28 76</div>
                </div>
              </a>

              <a href="mailto:contact@edg-btp.bj" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-amber-glow/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-white/10">
                  <Mail className="h-5 w-5 text-amber-glow" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="truncate text-sm font-semibold">contact@edg-btp.bj</div>
                </div>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal">
            <iframe
              title="EDG BTP & SERVICES sur Google Maps"
              src="https://maps.google.com/maps?q=6.4081539,2.2482677&z=17&output=embed"
              className="h-full min-h-[440px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Besoin d'un devis rapidement ?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Notre Assistant Virtuel EDG BTP (en bas à droite) réalise un pré-diagnostic en moins d'une minute.
          </p>
        </div>
      </div>
    </section>
  );
}
