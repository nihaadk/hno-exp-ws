export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  role: string;
  photo: string;
  specialties: string[];
  bio: string;
  career: { period: string; role: string; institution: string }[];
  education: { year: string; description: string }[];
  certifications: { year: string; description: string }[];
  memberships: string[];
  languages?: string[];
  publications?: string;
};

export const team: TeamMember[] = [
  {
    slug: "roman-laske",
    name: "Dr. med. Roman Laske",
    title: "Facharzt FMH für Hals-, Nasen- und Ohrenkrankheiten spez. Hals- und Gesichtschirurgie",
    role: "Leitender Arzt",
    photo: "/team-laske.jpg",
    specialties: ["Nasenchirurgie", "Rhinoplastik", "Sinuschirurgie", "Kopf- & Halschirurgie", "Ultraschall"],
    bio: "Dr. Roman Laske ist Facharzt FMH für HNO-Krankheiten mit Schwerpunkt auf funktioneller und ästhetischer Nasenchirurgie sowie Kopf- und Halschirurgie. Nach einem Forschungsaufenthalt an der Stanford University und langjähriger Tätigkeit als Leitender Arzt am Universitätsspital Zürich führt er seit 2019 die Praxis HNO Wiedikon.",
    career: [
      { period: "2019 – heute", role: "Praxisinhaber", institution: "HNO Wiedikon, Zürich" },
      { period: "2013 – 2018", role: "Leitender Arzt", institution: "Klinik für Ohren-, Nasen-, Hals- und Gesichtschirurgie, Universitätsspital Zürich" },
      { period: "2012 – 2013", role: "Assistenzarzt", institution: "Universitätsspital Zürich" },
      { period: "2011 – 2012", role: "Assistenzarzt", institution: "Kantonsspital St. Gallen" },
      { period: "2009 – 2011", role: "Research Fellow", institution: "Stanford University, Heller Lab, California" },
      { period: "2006 – 2009", role: "Assistenzarzt", institution: "Universitätsspital Zürich" },
      { period: "2005 – 2006", role: "Chirurgischer Assistent", institution: "Kantonsspital Schaffhausen" },
    ],
    education: [
      { year: "2004", description: "Staatsexamen, Universität Zürich" },
      { year: "1998 – 2004", description: "Medizinstudium, Universität Zürich" },
      { year: "1991 – 1998", description: "Gymnasium Freudenberg, Zürich (Matura Typ B)" },
    ],
    certifications: [
      { year: "2019", description: "Gutachter für Hörgeräteanpassungen (IV/AHV)" },
      { year: "2018", description: "Schwerpunkttitel Hals- und Gesichtschirurgie (FMH)" },
      { year: "2016", description: "Tutor für Halsultraschall" },
      { year: "2014", description: "Ultraschallzertifikat Kopf-Hals (SGUM)" },
      { year: "2012", description: "Facharzt FMH für Hals-, Nasen- und Ohrenheilkunde" },
      { year: "2005", description: "Doktorat, Universität Zürich; ECFMG-Zertifizierung (USMLE Steps 1, 2CK, 2CS)" },
    ],
    memberships: [
      "FMH – Verbindung der Schweizer Ärztinnen und Ärzte",
      "AGZ – Ärztegesellschaft des Kantons Zürich",
      "SGORL – Schweizerische Gesellschaft für Oto-Rhino-Laryngologie",
      "SGUM – Schweizerische Gesellschaft für Ultraschall in der Medizin",
      "EAFPS – European Academy of Facial Plastic Surgery",
    ],
    languages: ["Deutsch", "Englisch", "Französisch"],
    publications: "15+ begutachtete Fachartikel in internationalen Zeitschriften, darunter Otology & Neurotology, Laryngoscope und Cell. Forschungsschwerpunkte: Cochlea-Implantate, Stapeschirurgie, Innenohrregeneration, Kopf-Hals-Tumoren.",
  },
  {
    slug: "dimitrios-mitsikas",
    name: "Dr. med. Dimitrios Mitsikas",
    title: "Facharzt FMH für Hals-, Nasen- und Ohrenkrankheiten",
    role: "Facharzt HNO",
    photo: "/team-mitsikas.png",
    specialties: ["Otologie", "Kopf- & Halschirurgie", "Allgemeine HNO"],
    bio: "Dr. Dimitrios Mitsikas ist seit August 2025 Teil des Teams der HNO Wiedikon. Er verfügt über eine umfassende Ausbildung an mehreren renommierten Schweizer Spitälern und bringt langjährige Erfahrung als Leitender Arzt mit.",
    career: [
      { period: "Seit 2025", role: "Facharzt", institution: "HNO Wiedikon, Zürich" },
      { period: "Vorherige Position", role: "Leitender Arzt", institution: "Kantonsspital Baselland (3 Jahre)" },
    ],
    education: [
      { year: "", description: "Ausbildung an Universitätsspital Zürich, Universitätsspital Basel, Kantonsspital Graubünden und Kantonsspital Baselland" },
    ],
    certifications: [
      { year: "", description: "Facharzt FMH für Hals-, Nasen- und Ohrenheilkunde" },
    ],
    memberships: [
      "FMH – Verbindung der Schweizer Ärztinnen und Ärzte",
      "SGORL – Schweizerische Gesellschaft für Oto-Rhino-Laryngologie",
    ],
    languages: ["Deutsch", "Griechisch", "Englisch"],
  },
  {
    slug: "konrad-thoele",
    name: "Dr. med. Konrad Thoele",
    title: "Facharzt FMH für Hals-, Nasen- und Ohrenkrankheiten",
    role: "Facharzt HNO",
    photo: "/team-thoele.png",
    specialties: ["Pädiatrische HNO", "Allergologie", "Schlafmedizin", "Allgemeine HNO"],
    bio: "Dr. Konrad Thoele ist Facharzt FMH für HNO mit Schwerpunkt in der pädiatrischen Otolaryngologie. Er hat seine Ausbildung am Universitätsspital Zürich absolviert und war anschliessend als Leitender Arzt am Kinderspital Zürich tätig. Er ist mittwochs in der Praxis HNO Wiedikon tätig.",
    career: [
      { period: "Aktuell (mittwochs)", role: "Facharzt", institution: "HNO Wiedikon, Zürich" },
      { period: "Vorherige Position", role: "Leitender Arzt", institution: "Kinderspital Zürich" },
      { period: "Ausbildung", role: "Assistenzarzt", institution: "Universitätsspital Zürich" },
    ],
    education: [
      { year: "", description: "Medizinstudium und Facharztausbildung Universitätsspital Zürich" },
    ],
    certifications: [
      { year: "", description: "Facharzt FMH für Hals-, Nasen- und Ohrenheilkunde" },
      { year: "", description: "Schwerpunkt Pädiatrische ORL" },
    ],
    memberships: [
      "FMH – Verbindung der Schweizer Ärztinnen und Ärzte",
      "SGORL – Schweizerische Gesellschaft für Oto-Rhino-Laryngologie",
    ],
    languages: ["Deutsch", "Englisch"],
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
