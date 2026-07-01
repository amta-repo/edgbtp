import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
  Award,
  Users,
  Clock,
  Building2,
  HardHat,
  Hammer,
  Ruler,
  Send,
  ArrowUpRight,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export const MAPS_URL =
  "https://www.google.com/maps/place/EDG+BTP+%26+SERVICES/@6.4081539,2.2456874,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a7e8b8cb074f:0x887a2db29287c5c2!8m2!3d6.4081539!4d2.2482677!16s%2Fg%2F11zb797s4n?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D";

const services = [
  { label: "Gros Œuvre & Structure", icon: Building2 },
  { label: "Plans Architecturaux", icon: Ruler },
  { label: "Rénovation Complexe", icon: Hammer },
  { label: "Charpente Métallique", icon: HardHat },
];

const zones = [
  "Abomey-Calavi",
  "Cotonou",
  "Godomey",
  "Porto-Novo",
  "Ouidah",
  "Sèmè-Podji",
  "Allada",
  "Parakou",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy/70 pt-20 pb-8">
      <div className="grid-blueprint absolute inset-0 opacity-10" />
      <div
        className="absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.17 78 / 0.6), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        {/* CTA Band */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-amber-glow/20 bg-gradient-to-br from-charcoal/80 via-navy/60 to-charcoal/80 p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-glow/30 bg-amber-glow/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-glow" />
                Disponible pour nouveaux chantiers
              </div>
              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Un projet à <span className="text-gold-gradient">bâtir</span> ?
                <br className="hidden sm:block" /> Parlons structure, coûts et délais.
              </h3>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
                Devis détaillé sous 48h. Étude de faisabilité gratuite pour tout chantier
                supérieur à 20 000 000 FCFA.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                to="/contact"
                className="btn-primary hover:btn-primary-hover inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wider"
              >
                Demander un devis <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/2290190212876"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition hover:bg-white/10"
              >
                <Send className="h-4 w-4" /> WhatsApp direct
              </a>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary font-black text-primary-foreground">
                E
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wide">EDG BTP & SERVICES</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Construction · Génie Civil · Bénin
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Entreprise béninoise de construction et de génie civil. Depuis notre base
              d'Abomey-Calavi, nous érigeons des ouvrages durables — résidences, immeubles,
              écoles et infrastructures publiques — au service des particuliers, entreprises
              et institutions.
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex items-center gap-3 rounded-2xl border border-amber-glow/40 bg-amber-glow/10 p-4 transition hover:bg-amber-glow/15"
            >
              <MapPin className="h-5 w-5 shrink-0 text-amber-glow" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-glow">
                  Siège · Ouvrir dans Google Maps
                </div>
                <div className="truncate text-sm font-semibold">
                  Godomey / Abomey-Calavi, Bénin
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-amber-glow transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-amber-glow/40 hover:bg-amber-glow/10 hover:text-amber-glow"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-glow">
              Navigation
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="transition hover:text-foreground">Accueil</Link></li>
              <li><Link to="/services" className="transition hover:text-foreground">Services</Link></li>
              <li><Link to="/realisations" className="transition hover:text-foreground">Réalisations</Link></li>
              <li><Link to="/a-propos" className="transition hover:text-foreground">À propos</Link></li>
              <li><Link to="/contact" className="transition hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-glow">
              Expertises
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.label} className="flex items-center gap-2">
                  <s.icon className="h-4 w-4 shrink-0 text-amber-glow/80" />
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-glow">
              Contact & Horaires
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
                <a href="tel:+2290190212876" className="transition hover:text-foreground">
                  +229 01 90 21 28 76
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
                <a href="mailto:contact@edg-btp.bj" className="transition hover:text-foreground">
                  contact@edg-btp.bj
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
                <span>Carrefour Godomey, Abomey-Calavi, Bénin</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" />
                <div>
                  <div>Lun – Ven · 08h00 – 18h00</div>
                  <div className="text-xs">Sam · 09h00 – 14h00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Zones */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-charcoal/40 p-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-glow">
            Zones d'intervention
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {zones.map((z) => (
              <span
                key={z}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {z}
              </span>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: "RCCM", value: "RB/ABC/13-B-XXXX" },
            { icon: Award, label: "IFU", value: "3201900XXXXX" },
            { icon: Users, label: "Agrément BTP", value: "MOP/DGCMP/2019" },
          ].map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-charcoal/50 p-3"
            >
              <c.icon className="h-5 w-5 shrink-0 text-amber-glow" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm font-semibold">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal bottom */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span>
              © {new Date().getFullYear()} EDG BTP & SERVICES — Tous droits réservés.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="transition hover:text-foreground">Mentions légales</a>
            <a href="#" className="transition hover:text-foreground">Confidentialité</a>
            <a href="#" className="transition hover:text-foreground">Conditions</a>
            <span>Abomey-Calavi · République du Bénin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
