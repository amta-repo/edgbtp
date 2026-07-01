import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — EDG BTP & SERVICES" },
      { name: "description", content: "Gros œuvre, plans architecturaux, rénovation complexe et charpente métallique au Bénin." },
      { property: "og:title", content: "Services — EDG BTP & SERVICES" },
      { property: "og:description", content: "L'expertise EDG : structure, conception, rénovation et charpente métallique." },
    ],
  }),
});

const details: Record<string, string[]> = {
  "Gros Œuvre": [
    "Fondations superficielles et profondes (pieux, semelles filantes)",
    "Structures béton armé R+1 à R+8",
    "Dalles, poutres, poteaux calculés selon Eurocode",
    "Suivi de chantier par ingénieur BTP dédié",
  ],
  "Plans Architecturaux": [
    "Esquisses, APS, APD, DCE",
    "Plans d'exécution et notes de calcul",
    "Dossiers de permis de construire",
    "Modélisation 3D BIM sur demande",
  ],
  "Rénovation Complexe": [
    "Diagnostic structurel préalable",
    "Reprises en sous-œuvre",
    "Mise aux normes électrique et sanitaire",
    "Rénovation patrimoniale et administrative",
  ],
  "Charpente Métallique": [
    "Étude et calcul de structure acier",
    "Fabrication en atelier certifié",
    "Montage sur site avec matériel dédié",
    "Hangars, usines, entrepôts, mezzanines",
  ],
};

function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40">
        <div className="grid-blueprint absolute inset-0 -z-10 opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Nos Métiers</div>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            Une expertise <span className="text-gold-gradient">complète</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            De la conception au dernier coup de pinceau, EDG BTP maîtrise l'ensemble de la chaîne de valeur du bâtiment.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[auto_1fr]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-glow/10 text-amber-glow ring-1 ring-amber-glow/30">
                <s.icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {details[s.title]?.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}

          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-primary hover:btn-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
