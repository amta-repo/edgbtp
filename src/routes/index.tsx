import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Building2,
  HardHat,
  Ruler,
  Wrench,
  ShieldCheck,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import projRes from "@/assets/project-residential.jpg";
import projInfra from "@/assets/project-infrastructure.jpg";
import projSteel from "@/assets/project-steel.jpg";
import projReno from "@/assets/project-renovation.jpg";
import { ChatBot } from "@/components/ChatBot";

const MAPS_URL =
  "https://www.google.com/maps/place/EDG+BTP+%26+SERVICES/@6.4081539,2.2456874,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a7e8b8cb074f:0x887a2db29287c5c2!8m2!3d6.4081539!4d2.2482677!16s%2Fg%2F11zb797s4n?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--d2f8b451-14f4-48ea-ba74-dd0bb620dfda.lovable.app/og.jpg" },
    ],
  }),
});

const projects = [
  {
    img: projRes,
    tag: "Gros Œuvre",
    title: "Résidence R+3 — Godomey",
    location: "Abomey-Calavi, Bénin",
    progress: 78,
  },
  {
    img: projInfra,
    tag: "Infrastructure Publique",
    title: "Réhabilitation voirie urbaine",
    location: "Cotonou — Zone portuaire",
    progress: 45,
  },
  {
    img: projSteel,
    tag: "Charpente Métallique",
    title: "Hangar industriel 2 400 m²",
    location: "Sèmè-Podji",
    progress: 92,
  },
  {
    img: projReno,
    tag: "Rénovation Complexe",
    title: "Siège administratif — Rénovation",
    location: "Cadjèhoun, Cotonou",
    progress: 60,
  },
];

const services = [
  { icon: Building2, title: "Gros Œuvre", desc: "Béton armé, fondations profondes, structures R+N conformes aux normes." },
  { icon: Ruler, title: "Plans Architecturaux", desc: "Conception, études techniques, dessins d'exécution et permis de construire." },
  { icon: Wrench, title: "Rénovation Complexe", desc: "Réhabilitation de bâtiments existants et mises aux normes structurelles." },
  { icon: HardHat, title: "Charpente Métallique", desc: "Hangars, usines et structures acier — calcul, fabrication et pose." },
];

const stats = [
  { value: "120+", label: "Chantiers livrés" },
  { value: "12", label: "Années d'expertise" },
  { value: "95%", label: "Clients satisfaits" },
  { value: "24/7", label: "Support technique" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-40 w-full border-b border-border/50 bg-navy/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-black text-primary-foreground">
              E
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-bold tracking-wide">EDG BTP & SERVICES</div>
              <div className="truncate text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Construction · Bénin
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#projects" className="hover:text-foreground">Réalisations</a>
            <a href="#trust" className="hover:text-foreground">Avis</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="btn-primary hover:btn-primary-hover hidden rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider sm:inline-flex"
          >
            Devis
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-32">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Chantier EDG BTP au Bénin"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="grid-blueprint absolute inset-0 opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-glow/30 bg-amber-glow/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" />
              Abomey-Calavi · Depuis 2013 · Certifié
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
              Bâtir l'Avenir
              <br />
              <span className="text-gold-gradient">avec Excellence</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Expertise reconnue en <strong className="text-foreground">béton armé structurel</strong>,{" "}
              <strong className="text-foreground">rénovations de bâtiments</strong> et{" "}
              <strong className="text-foreground">infrastructures publiques</strong>. EDG BTP transforme vos ambitions en ouvrages durables, du Bénin à toute l'Afrique de l'Ouest.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="btn-primary hover:btn-primary-hover inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide"
              >
                Demander un Devis BTP
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-charcoal/60 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground backdrop-blur hover:border-amber-glow/50"
              >
                Voir nos Réalisations
              </motion.a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div className="text-2xl font-black text-amber-glow sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-navy/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">Nos Métiers</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
              Une expertise <span className="text-gold-gradient">complète</span> du gros œuvre à la finition.
            </h2>
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-charcoal p-6 transition hover:border-amber-glow/40"
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

      {/* PROJECTS */}
      <section id="projects" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-14 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
            <div className="min-w-0">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
                Chantiers réels au Bénin
              </div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">Portfolio en cours</h2>
            </div>
            <a
              href="#contact"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-amber-glow/50 sm:inline-flex"
            >
              Tous les projets <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 2) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-border bg-charcoal"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-amber-glow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-bold">{p.title}</h3>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-2xl font-black text-amber-glow">{p.progress}%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Avancement
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-navy">
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

      {/* TRUST / REVIEWS */}
      <section id="trust" className="border-y border-border bg-navy/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-glow">
                Confiance & Réputation
              </div>
              <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
                4,9 / 5 sur <span className="text-gold-gradient">Google</span>
              </h2>
              <div className="mt-4 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-glow text-amber-glow" />
                ))}
                <span className="ml-3 text-sm text-muted-foreground">Basé sur 87 avis vérifiés</span>
              </div>
              <p className="mt-4 max-w-md text-muted-foreground">
                Nos clients — particuliers, entreprises et institutions publiques — témoignent de la
                rigueur EDG. Rejoignez-les en partageant votre expérience.
              </p>
              <a
                href="#contact"
                className="btn-primary hover:btn-primary-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wider"
              >
                Laisser un avis Google <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: "Kossi A.", role: "Promoteur immobilier", text: "Chantier livré dans les délais, finitions irréprochables. Équipe très pro." },
                { name: "Rachida B.", role: "Directrice PME", text: "Réhabilitation de nos bureaux : suivi transparent et budget respecté." },
                { name: "Mairie de Calavi", role: "Client institutionnel", text: "Qualité technique conforme aux CCTP. Interlocuteur de confiance." },
                { name: "Yves D.", role: "Particulier", text: "Ma villa R+1 est un bijou. Merci à l'équipe EDG pour l'écoute." },
              ].map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-charcoal p-5"
                >
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-glow text-amber-glow" />
                    ))}
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

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="relative overflow-hidden pt-20 pb-8">
        <div className="grid-blueprint absolute inset-0 opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Prêt à bâtir <span className="text-gold-gradient">votre projet</span> ?
              </h2>
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
                    <div className="mt-0.5 truncate text-sm font-semibold">
                      Godomey / Abomey-Calavi, Bénin
                    </div>
                    <div className="text-xs text-muted-foreground">6.4081539° N, 2.2482677° E</div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-amber-glow transition group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+2290190212876"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-charcoal p-5 hover:border-amber-glow/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-border">
                    <Phone className="h-5 w-5 text-amber-glow" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Téléphone / WhatsApp</div>
                    <div className="truncate text-sm font-semibold">+229 01 90 21 28 76</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@edg-btp.bj"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-charcoal p-5 hover:border-amber-glow/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-charcoal ring-1 ring-border">
                    <Mail className="h-5 w-5 text-amber-glow" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="truncate text-sm font-semibold">contact@edg-btp.bj</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded map */}
            <div className="overflow-hidden rounded-3xl border border-border bg-charcoal">
              <iframe
                title="EDG BTP & SERVICES sur Google Maps"
                src="https://maps.google.com/maps?q=6.4081539,2.2482677&z=17&output=embed"
                className="h-full min-h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Compliance */}
          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "RCCM", value: "RB/ABC/13-B-XXXX" },
              { icon: Award, label: "IFU", value: "3201900XXXXX" },
              { icon: Users, label: "Agrément BTP", value: "MOP/DGCMP/2019" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 rounded-xl border border-border bg-charcoal/50 p-4">
                <c.icon className="h-5 w-5 shrink-0 text-amber-glow" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex sm:justify-between">
            <div className="min-w-0 flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">© {new Date().getFullYear()} EDG BTP & SERVICES — Tous droits réservés.</span>
            </div>
            <div className="shrink-0 text-right">Abomey-Calavi · République du Bénin</div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
