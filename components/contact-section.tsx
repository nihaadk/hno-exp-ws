import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Mail, MapPin, MessageCircle, Phone, Printer } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="inline-block mb-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Kontakt
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            So erreichen Sie uns
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {/* Quick actions */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:0442235900"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-primary hover:bg-primary/90 h-14 text-base flex items-center gap-2 justify-center"
                )}
              >
                <Phone className="h-5 w-5" />
                Jetzt anrufen · 044 223 59 00
              </a>
              <a
                href="https://wa.me/41442235900"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-base flex items-center gap-2 justify-center"
                )}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp schreiben
              </a>
            </div>

            <Separator />

            {/* Details */}
            <Card className="border-border shadow-none bg-muted/30">
              <CardContent className="p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Adresse</p>
                    <p className="text-sm text-muted-foreground">
                      Bremgartnerstrasse 1, 8003 Zürich
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Telefon</p>
                    <a
                      href="tel:0442235900"
                      className="text-sm text-primary hover:underline"
                    >
                      044 223 59 00
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Printer className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Fax</p>
                    <p className="text-sm text-muted-foreground">
                      044 660 71 11
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Accordion multiple={false} className="w-full">
              <AccordionItem value="patients" className="border-border">
                <AccordionTrigger className="text-sm font-medium hover:no-underline">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    E-Mail für Patienten
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <a
                    href="mailto:info@hno-wiedikon.ch"
                    className="text-primary hover:underline text-sm"
                  >
                    info@hno-wiedikon.ch
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="referrals" className="border-border">
                <AccordionTrigger className="text-sm font-medium hover:no-underline">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-secondary" />
                    E-Mail für Zuweiser (HIN)
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <a
                    href="mailto:hno-wiedikon@hin.ch"
                    className="text-primary hover:underline text-sm"
                  >
                    hno-wiedikon@hin.ch
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Für Zuweisungen und ärztliche Korrespondenz via HIN-Mail.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Map placeholder */}
          <div
            id="praxis"
            className="rounded-2xl overflow-hidden bg-muted/40 border border-border min-h-72 flex items-center justify-center"
          >
            <div className="text-center px-6">
              <MapPin className="h-10 w-10 text-primary/40 mx-auto mb-3" />
              <p className="font-semibold text-foreground">
                Bremgartnerstrasse 1
              </p>
              <p className="text-muted-foreground text-sm">8003 Zürich</p>
              <a
                href="https://maps.google.com/?q=Bremgartnerstrasse+1,+8003+Zürich"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-primary hover:underline"
              >
                In Google Maps öffnen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
