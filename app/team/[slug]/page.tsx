import { getMemberBySlug, team } from "@/lib/team-data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Languages,
  Phone,
  ArrowLeft,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return {};
  return {
    title: `${member.name} – HNO Wiedikon`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* Top bar */}
      <header className="bg-white border-b border-border/60 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a
            href="/#team"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zum Team
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

      <main className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Hero card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="relative w-full md:w-72 h-80 md:h-auto shrink-0" style={{ backgroundColor: "#ede9db" }}>
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 288px"
                priority
              />
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-center gap-4">
              <div>
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                  {member.role}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {member.name}
                </h1>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                  {member.title}
                </p>
              </div>

              <Separator />

              <p className="text-foreground/80 text-sm leading-relaxed max-w-xl">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="bg-secondary/10 text-secondary border-0 font-medium"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              {member.languages && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Languages className="h-4 w-4 text-primary shrink-0" />
                  {member.languages.join(" · ")}
                </div>
              )}

              <div className="flex gap-3 mt-2">
                <a
                  href="tel:0430000000"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-primary hover:bg-primary/90 text-white flex items-center gap-1.5 rounded-full"
                  )}
                >
                  <Phone className="h-3.5 w-3.5" />
                  Termin vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Career */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <h2 className="font-bold text-foreground text-base">Werdegang</h2>
            </div>
            <div className="space-y-4">
              {member.career.map((c, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {i < member.career.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-semibold text-primary mb-0.5">
                      {c.period}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {c.role}
                    </p>
                    <p className="text-xs text-muted-foreground">{c.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-secondary" />
                </div>
                <h2 className="font-bold text-foreground text-base">Ausbildung</h2>
              </div>
              <div className="space-y-3">
                {member.education.map((e, i) => (
                  <div key={i} className="flex gap-3">
                    {e.year && (
                      <span className="text-xs font-bold text-primary min-w-12 pt-0.5">
                        {e.year}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base">
                  Zertifikate & Qualifikationen
                </h2>
              </div>
              <div className="space-y-3">
                {member.certifications.map((c, i) => (
                  <div key={i} className="flex gap-3">
                    {c.year && (
                      <span className="text-xs font-bold text-primary min-w-12 pt-0.5">
                        {c.year}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Memberships */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-secondary" />
              </div>
              <h2 className="font-bold text-foreground text-base">Mitgliedschaften</h2>
            </div>
            <ul className="space-y-2">
              {member.memberships.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          {member.publications && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base">Publikationen</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.publications}
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Termin bei {member.name.split(" ").pop()} vereinbaren</h3>
          <p className="text-white/70 text-sm mb-6">
            Rufen Sie uns an oder schreiben Sie uns per WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0430000000"
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              043 000 00 00
            </a>
            <a
              href="https://wa.me/41430000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
