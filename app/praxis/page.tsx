import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Bus,
  Car,
  Clock,
  MapPin,
  Phone,
  Accessibility,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Praxis – HNO Wiedikon",
  description:
    "Moderne HNO-Praxis im Herzen von Zürich Wiedikon. Erfahren Sie mehr über unsere Räumlichkeiten, Lage und Erreichbarkeit.",
};

const images = [
  { src: "/praxis-1.jpg", alt: "Praxis Eingang" },
  { src: "/praxis-2.jpg", alt: "Empfang" },
  { src: "/praxis-3.jpg", alt: "Wartebereich" },
  { src: "/praxis-4.jpg", alt: "Behandlungszimmer" },
  { src: "/praxis-5.jpg", alt: "Untersuchungsraum" },
  { src: "/praxis-6.jpg", alt: "Geräte & Ausstattung" },
  { src: "/praxis-7.jpg", alt: "Praxisräume" },
  { src: "/praxis-8.jpg", alt: "Praxisdetail" },
  { src: "/praxis-9.jpg", alt: "Praxis Aussenansicht" },
];

const hours = [
  { day: "Mo / Mi / Fr", time: "08:00 – 12:00 & 14:00 – 17:00" },
  { day: "Di / Do", time: "08:00 – 12:00 & 14:00 – 18:00" },
];

export default function PraxisPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* Top bar */}
      <header className="bg-white border-b border-border/60 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </a>
          <a
            href="tel:0430000000"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-primary hover:bg-primary/90 text-white flex items-center gap-1.5 rounded-full px-4"
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">043 000 00 00</span>
            <span className="sm:hidden">Anrufen</span>
          </a>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] overflow-hidden">
        <Image
          src={images[0].src}
          alt="HNO Wiedikon Praxis"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a4a]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 pb-8">
          <span className="inline-block mb-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest">
            Unsere Praxis
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            HNO Wiedikon
          </h1>
          <p className="mt-1 text-white/80 text-base md:text-lg">
            Bremgartnerstrasse 1, 8003 Zürich
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">

        {/* Intro text + info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Description */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                Über die Praxis
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Moderne HNO-Praxis im Herzen von Zürich
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Unsere Praxis befindet sich im Erdgeschoss an der Ecke
                  Seebahnstrasse / Bremgartnerstrasse, direkt im Quartier
                  Wiedikon. Die zentrale Lage macht uns gut erreichbar – ob mit
                  dem öffentlichen Verkehr oder dem Auto.
                </p>
                <p>
                  Die Räumlichkeiten sind modern eingerichtet und barrierefrei
                  zugänglich. Wir legen grossen Wert auf eine angenehme
                  Atmosphäre, in der Sie sich wohlfühlen – vom Empfang bis zum
                  Behandlungszimmer.
                </p>
                <p>
                  Unsere Praxis verfügt über modernste diagnostische Geräte für
                  eine umfassende HNO-Versorgung: Nasenendoskopie,
                  Hörprüfungen, Gleichgewichtsdiagnostik, Allergietests und
                  vieles mehr – alles unter einem Dach.
                </p>
              </div>
            </div>
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col gap-4">
            {/* Opening hours */}
            <div className="bg-accent/50 rounded-2xl border border-primary/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">Öffnungszeiten</p>
              </div>
              <div className="space-y-1.5">
                {hours.map((h) => (
                  <p key={h.day} className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{h.day}:</span>{" "}
                    {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-accent/50 rounded-2xl border border-primary/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">Adresse</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Bremgartnerstrasse 1<br />
                8003 Zürich
              </p>
              <a
                href="https://maps.google.com/?q=Bremgartnerstrasse+1,+8003+Zürich"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs font-semibold text-primary hover:underline"
              >
                In Google Maps öffnen →
              </a>
            </div>

            {/* Call CTA */}
            <a
              href="tel:0430000000"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2 justify-center rounded-xl h-12"
              )}
            >
              <Phone className="h-4 w-4" />
              Termin vereinbaren
            </a>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-14">
          <div className="mb-7 text-center">
            <span className="inline-block mb-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
              Galerie
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Einblick in unsere Räumlichkeiten
            </h2>
          </div>

          {/* Main large image + 2 side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <div className="relative sm:col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 66vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-auto sm:min-h-[220px]">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Grid of remaining images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.slice(3).map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Anfahrt */}
        <div className="mb-14">
          <div className="mb-7 text-center">
            <span className="inline-block mb-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Anfahrt
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              So finden Sie uns
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-accent/50 rounded-2xl border border-primary/10 p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Bus className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Öffentlicher Verkehr</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tram 2, 3 &amp; 9 – Haltestelle «Hölderlinstrasse» oder
                  «Schmiede Wiedikon» (2 Min. Fussweg)
                </p>
              </div>
            </div>
            <div className="bg-accent/50 rounded-2xl border border-primary/10 p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Car className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Auto</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Parkplätze in der Tiefgarage Schmiede Wiedikon sowie
                  Strassenparkplätze in der Umgebung verfügbar.
                </p>
              </div>
            </div>
            <div className="bg-accent/50 rounded-2xl border border-primary/10 p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Accessibility className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Barrierefreiheit</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Die Praxis befindet sich im Erdgeschoss und ist vollständig
                  barrierefrei zugänglich.
                </p>
              </div>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="rounded-2xl overflow-hidden bg-accent/40 border border-primary/10 min-h-64 flex items-center justify-center">
            <div className="text-center px-6 py-10">
              <MapPin className="h-10 w-10 text-primary/40 mx-auto mb-3" />
              <p className="font-semibold text-foreground">Bremgartnerstrasse 1</p>
              <p className="text-muted-foreground text-sm mb-4">8003 Zürich</p>
              <a
                href="https://maps.google.com/?q=Bremgartnerstrasse+1,+8003+Zürich"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "border-primary/30 text-primary hover:bg-primary/5"
                )}
              >
                In Google Maps öffnen →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-border/50 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HNO Wiedikon · Bremgartnerstrasse 1, 8003 Zürich
        </div>
      </footer>
    </div>
  );
}
