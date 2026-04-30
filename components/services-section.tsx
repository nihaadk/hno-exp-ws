import {
  Activity,
  Brain,
  Ear,
  Flower2,
  Stethoscope,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Nasendiagnostik & Chirurgie",
    desc: "Septumkorrektur, Nasennebenhöhlen-OP, funktionelle und ästhetische Rhinoplastik.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Ear,
    title: "Ohren & Gehör",
    desc: "Hörprüfungen, Tinnitus-Diagnostik, Ohrerkrankungen und Gleichgewichtsstörungen.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Activity,
    title: "Hals & Stimme",
    desc: "Kehlkopfspiegelung, Stimmstörungen, Schluckbeschwerden und Halslymphknoten.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Wind,
    title: "Schlaf & Schnarchen",
    desc: "Diagnostik und Therapie von Schnarchen, Schlafapnoe und Atemwegsproblemen.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Flower2,
    title: "Allergologie",
    desc: "Allergietests, Hyposensibilisierung und Behandlung von Heuschnupfen.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Brain,
    title: "Kopf- & Halschirurgie",
    desc: "Spezialisierte ambulante und stationäre Eingriffe an Kopf und Hals.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
            Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Was wir für Sie tun
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-base">
            Umfassende HNO-Diagnostik und Therapie – ambulant und operativ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-primary/10 bg-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.color}`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
