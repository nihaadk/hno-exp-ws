import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Mo / Mi / Fr", time: "08:00 – 12:00 & 14:00 – 17:00" },
  { day: "Di / Do", time: "08:00 – 12:00 & 14:00 – 18:00" },
];

export function ContactBar() {
  return (
    <section className="bg-accent/60 border-b border-primary/15">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
          {/* Address */}
          <div className="flex items-center gap-4 py-6 px-2 sm:pr-8">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Adresse
              </p>
              <p className="text-base font-semibold text-foreground">
                Bremgartnerstrasse 1, 8003 Zürich
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4 py-6 px-2 sm:px-8">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                Öffnungszeiten
              </p>
              {hours.map((h) => (
                <p key={h.day} className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{h.day}:</span>{" "}
                  {h.time}
                </p>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 py-6 px-2 sm:pl-8">
            <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Telefon
              </p>
              <a
                href="tel:0430000000"
                className="text-base font-bold text-primary hover:underline"
              >
                043 000 00 00
              </a>
              <p className="text-sm text-muted-foreground">oder per WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
