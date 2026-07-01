import projRes from "@/assets/project-residential.jpg";
import projInfra from "@/assets/project-infrastructure.jpg";
import projSteel from "@/assets/project-steel.jpg";
import projReno from "@/assets/project-renovation.jpg";
import { Building2, HardHat, Ruler, Wrench } from "lucide-react";

export const projects = [
  {
    img: projRes,
    tag: "Gros Œuvre",
    title: "Résidence R+3 — Godomey",
    location: "Abomey-Calavi, Bénin",
    progress: 78,
    desc: "Construction d'une résidence haut standing en béton armé, 12 logements avec parking sous-sol.",
  },
  {
    img: projInfra,
    tag: "Infrastructure Publique",
    title: "Réhabilitation voirie urbaine",
    location: "Cotonou — Zone portuaire",
    progress: 45,
    desc: "Terrassement, assainissement et revêtement bitumineux sur 2,3 km de voirie urbaine.",
  },
  {
    img: projSteel,
    tag: "Charpente Métallique",
    title: "Hangar industriel 2 400 m²",
    location: "Sèmè-Podji",
    progress: 92,
    desc: "Charpente métallique de grande portée, bardage et couverture pour plateforme logistique.",
  },
  {
    img: projReno,
    tag: "Rénovation Complexe",
    title: "Siège administratif — Rénovation",
    location: "Cadjèhoun, Cotonou",
    progress: 60,
    desc: "Réhabilitation structurelle et mise aux normes d'un immeuble R+2 de 1 800 m².",
  },
];

export const services = [
  { icon: Building2, title: "Gros Œuvre", desc: "Béton armé, fondations profondes, structures R+N conformes aux normes." },
  { icon: Ruler, title: "Plans Architecturaux", desc: "Conception, études techniques, dessins d'exécution et permis de construire." },
  { icon: Wrench, title: "Rénovation Complexe", desc: "Réhabilitation de bâtiments existants et mises aux normes structurelles." },
  { icon: HardHat, title: "Charpente Métallique", desc: "Hangars, usines et structures acier — calcul, fabrication et pose." },
];
