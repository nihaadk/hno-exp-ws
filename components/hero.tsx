import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80&auto=format&fit=crop')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a4a]/92 via-[#1a2a4a]/70 to-primary/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Zürich Wiedikon · Bremgartnerstrasse 1
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Ihre HNO-Praxis
            <br />
            <span className="text-secondary">in Zürich</span>
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Fachärztliche Behandlung für Hals, Nase und Ohren. Termine schnell
            und unkompliziert vereinbaren.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0442235900"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 h-14 text-base px-8 flex items-center gap-2.5 justify-center"
              )}
            >
              <Phone className="h-5 w-5" />
              044 223 59 00
            </a>

            <a
              href="https://wa.me/41442235900"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/30 h-14 text-base px-8 flex items-center gap-2.5 justify-center"
              )}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              href="mailto:info@hno-wiedikon.ch"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/40 text-white hover:bg-white/10 backdrop-blur-sm h-14 text-base px-8 flex items-center gap-2.5 justify-center"
              )}
            >
              <Mail className="h-5 w-5" />
              E-Mail
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
