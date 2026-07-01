import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Calendar, ShieldCheck, Award, Users } from "lucide-react";

export const MAPS_URL =
  "https://www.google.com/maps/place/EDG+BTP+%26+SERVICES/@6.4081539,2.2456874,17z/data=!3m1!4b1!4m6!3m5!1s0x1024a7e8b8cb074f:0x887a2db29287c5c2!8m2!3d6.4081539!4d2.2482677!16s%2Fg%2F11zb797s4n?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy/60 pt-16 pb-8">
      <div className="grid-blueprint absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-black text-primary-foreground">
                E
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold tracking-wide">EDG BTP & SERVICES</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Construction · Bénin
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Entreprise de construction et de génie civil basée à Abomey-Calavi. Nous érigeons des
              ouvrages durables pour particuliers, entreprises et institutions publiques du Bénin.
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-2xl border border-amber-glow/40 bg-amber-glow/10 p-4 transition hover:bg-amber-glow/15"
            >
              <MapPin className="h-5 w-5 shrink-0 text-amber-glow" />
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-glow">
                  Ouvrir dans Google Maps
                </div>
                <div className="truncate text-sm font-semibold">Godomey / Abomey-Calavi, Bénin</div>
              </div>
            </a>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-glow">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/realisations" className="hover:text-foreground">Réalisations</Link></li>
              <li><Link to="/a-propos" className="hover:text-foreground">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-amber-glow">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" /><a href="tel:+2290190212876" className="hover:text-foreground">+229 01 90 21 28 76</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" /><a href="mailto:contact@edg-btp.bj" className="hover:text-foreground">contact@edg-btp.bj</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow" /><span>Abomey-Calavi, Bénin</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: "RCCM", value: "RB/ABC/13-B-XXXX" },
            { icon: Award, label: "IFU", value: "3201900XXXXX" },
            { icon: Users, label: "Agrément BTP", value: "MOP/DGCMP/2019" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-charcoal/50 p-3">
              <c.icon className="h-5 w-5 shrink-0 text-amber-glow" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-semibold">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            <span>© {new Date().getFullYear()} EDG BTP & SERVICES — Tous droits réservés.</span>
          </div>
          <div>Abomey-Calavi · République du Bénin</div>
        </div>
      </div>
    </footer>
  );
}
