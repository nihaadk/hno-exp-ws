"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, MessageCircle, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Team", href: "#team" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Praxis", href: "#praxis" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="HNO Wiedikon Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-bold text-foreground text-base leading-tight hidden sm:inline">
            HNO <span className="text-primary">Wiedikon</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Phone CTA — always visible */}
        <div className="flex items-center gap-2">
          <a
            href="tel:0442235900"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-primary hover:bg-primary/90 text-white flex items-center gap-1.5 rounded-full px-4"
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">044 223 59 00</span>
            <span className="sm:hidden">Anrufen</span>
          </a>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="p-6 pb-4 border-b border-border">
                <SheetTitle className="flex items-center gap-2.5">
                  <Image
                    src="/logo.png"
                    alt="HNO Wiedikon"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="font-bold text-foreground">
                    HNO <span className="text-primary">Wiedikon</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 pt-2 flex flex-col gap-3 border-t border-border mt-2">
                <a
                  href="tel:0442235900"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2 justify-center rounded-xl h-12"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  044 223 59 00
                </a>
                <a
                  href="https://wa.me/41442235900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full border-secondary/40 text-secondary hover:bg-secondary/5 flex items-center gap-2 justify-center rounded-xl h-12"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
