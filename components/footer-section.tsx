import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Team", href: "#team" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Praxis", href: "#praxis" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Datenschutz", href: "#" },
  { label: "Impressum", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <p className="text-white font-bold text-lg">HNO Wiedikon</p>
            <p className="text-white/60 text-sm mt-0.5">
              Bremgartnerstrasse 1 · 8003 Zürich
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <a
              href="tel:0442235900"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              044 223 59 00
            </a>
            <a
              href="mailto:info@hno-wiedikon.ch"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              info@hno-wiedikon.ch
            </a>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/50 hover:text-white text-xs transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} HNO Wiedikon. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
