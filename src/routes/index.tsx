import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { services, projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EDG BTP & SERVICES — Ériger l'Héritage, Structurer le Progrès" },
      {
        name: "description",
        content:
          "Entreprise de construction et génie civil à Abomey-Calavi. Béton armé, rénovations et infrastructures publiques au Bénin.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />

      {/* SERVICES teaser */}
      <section className="border-y border-white/10 bg-navy/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Nos Métiers</div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                Une expertise <span className="text-gold-gradient">complète</span> du gros œuvre à la finition.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-amber-glow/50"
            >
              Tous les services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-amber-glow/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-glow/10 text-amber-glow ring-1 ring-amber-glow/30">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-amber-glow/5 blur-2xl transition group-hover:bg-amber-glow/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS teaser */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Chantiers réels au Bénin</div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Réalisations récentes</h2>
            </div>
            <Link
              to="/realisations"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-amber-glow/50"
            >
              Portfolio complet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
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
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-white/10 bg-navy/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Confiance & Réputation</div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                4,9 / 5 sur <span className="text-gold-gradient">Google</span>
              </h2>
              <div className="mt-4 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-6 w-6 fill-amber-glow text-amber-glow" />))}
                <span className="ml-3 text-sm text-muted-foreground">Basé sur 87 avis vérifiés</span>
              </div>
              <p className="mt-4 max-w-md text-muted-foreground">
                Nos clients — particuliers, entreprises et institutions publiques — témoignent de la rigueur EDG.
              </p>
              <Link to="/contact" className="btn-primary hover:btn-primary-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wider">
                Laisser un avis Google <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: "Kossi A.", role: "Promoteur immobilier", text: "Chantier livré dans les délais, finitions irréprochables. Équipe très pro." },
                { name: "Rachida B.", role: "Directrice PME", text: "Réhabilitation de nos bureaux : suivi transparent et budget respecté." },
                { name: "Mairie de Calavi", role: "Client institutionnel", text: "Qualité technique conforme aux CCTP. Interlocuteur de confiance." },
                { name: "Yves D.", role: "Particulier", text: "Ma villa R+1 est un bijou. Merci à l'équipe EDG pour l'écoute." },
              ].map((r, i) => (
                <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (<Star key={i} className="h-3.5 w-3.5 fill-amber-glow text-amber-glow" />))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                  <div className="mt-4 text-xs">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-muted-foreground">{r.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
