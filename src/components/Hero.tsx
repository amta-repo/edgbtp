import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Building2,
  HardHat,
  Landmark,
  Hammer,
  Ruler,
  Wrench,
} from "lucide-react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

const CLIENTS = [
  { name: "Mairie de Calavi", icon: Landmark },
  { name: "Sogéa Bénin", icon: Building2 },
  { name: "BTP Cotonou", icon: HardHat },
  { name: "AtlantiqueBât", icon: Hammer },
  { name: "Cabinet Kora", icon: Ruler },
  { name: "GénieCivil BJ", icon: Wrench },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background image with gradient mask */}
      <div className="absolute inset-0 -z-10">
        <video
          src={heroVideo.url}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="grid-blueprint absolute inset-0 opacity-30" />
        {/* Ambient orbs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-glow/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-glow backdrop-blur-xl">
              <Crown className="h-3.5 w-3.5" />
              Entreprise BTP certifiée · Bénin
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Ériger l'Héritage.
              <br />
              <span className="text-gold-gradient">Structurer</span> le Progrès.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Depuis Abomey-Calavi, EDG BTP conçoit et bâtit les ouvrages qui façonnent le Bénin de
              demain — <strong className="text-foreground">béton armé structurel</strong>,{" "}
              <strong className="text-foreground">rénovations complexes</strong> et{" "}
              <strong className="text-foreground">infrastructures publiques</strong> livrés avec la
              rigueur d'un ingénieur.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="btn-primary hover:btn-primary-hover inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide sm:w-auto"
                >
                  Demander un Devis BTP
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/realisations"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur-xl hover:border-amber-glow/50 sm:w-auto"
                >
                  <Play className="h-4 w-4" />
                  Voir nos Réalisations
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Glassmorphism stats + marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Stats glass card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-glow/30 via-primary/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-2xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-glow/30 bg-amber-glow/10 text-amber-glow">
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-glow text-amber-glow" />
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground">4,9 · 87 avis</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-5xl font-black tracking-tight sm:text-6xl">120+</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">
                    Chantiers livrés au Bénin
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Taux de satisfaction client</span>
                    <span className="font-bold text-amber-glow">98%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-glow to-primary"
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "12", l: "Ans" },
                    { v: "45", l: "Ingénieurs" },
                    { v: "24/7", l: "Support" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-xl"
                    >
                      <div className="text-lg font-black text-amber-glow">{s.v}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    En chantier
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-glow/30 bg-amber-glow/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-glow">
                    <Crown className="h-3 w-3" /> Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Marquee glass card */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Ils nous font confiance
              </div>
              <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
                <div className="flex w-max animate-marquee items-center gap-8">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
                    <div
                      key={i}
                      className="flex shrink-0 items-center gap-2 text-muted-foreground"
                    >
                      <c.icon className="h-4 w-4 text-amber-glow/70" />
                      <span className="text-xs font-semibold tracking-wide">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
