import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/realisations")({
  component: RealisationsPage,
  head: () => ({
    meta: [
      { title: "Réalisations — EDG BTP & SERVICES" },
      { name: "description", content: "Chantiers en cours et livrés au Bénin : résidences, infrastructures publiques, rénovations, charpente métallique." },
      { property: "og:title", content: "Réalisations — EDG BTP & SERVICES" },
      { property: "og:description", content: "Portfolio de chantiers réels au Bénin par EDG BTP & SERVICES." },
    ],
  }),
});

function RealisationsPage() {
  return (
    <section className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Chantiers réels au Bénin</div>
        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
          Notre <span className="text-gold-gradient">portfolio</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Une sélection de projets en cours et livrés, du Grand Nokoué à Sèmè-Podji.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-amber-glow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">{p.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-xl font-bold">{p.title}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-2xl font-black text-amber-glow">{p.progress}%</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Avancement</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-glow to-primary"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/contact" className="btn-primary hover:btn-primary-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide">
            Discuter de votre projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
