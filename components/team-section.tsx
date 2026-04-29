import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/team-data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-[#f4f7fb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Unsere Fachärzte
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto text-base">
            Erfahrene Spezialisten – für Sie und Ihre Gesundheit.
          </p>
        </div>

        {/* Cards — single column on mobile, 3 columns on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member) => (
            <a
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>

              {/* Text — clearly below image */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-bold text-foreground text-base leading-snug">
                    {member.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                  {member.title}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.slice(0, 3).map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="text-xs bg-secondary/10 text-secondary border-0 font-medium"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all pt-1">
                  Profil ansehen <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
