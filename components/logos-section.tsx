import Image from "next/image";

const hospitals = [
  { name: "Limmatklinik", src: "/logo-limmatklinik.png" },
  { name: "Privatklinik Bethanien", src: "/logo-bethanien.png" },
  { name: "Spital Bülach", src: "/logo-buelach.png" },
  { name: "See-Spital", src: "/logo-seespital.png" },
];

const associations = [
  { name: "FMH", src: "/logo-fmh.png" },
  { name: "SGORL", src: "/logo-sgorl.png" },
  { name: "SGUM", src: "/logo-sgum.png" },
  { name: "EAFPS", src: "/logo-eafps.png" },
  { name: "AGZ", src: "/logo-agz.png" },
  { name: "FGORLZH", src: "/logo-fgorlzh.png" },
  { name: "ZMED", src: "/logo-zmed.png" },
];

function LogoRow({
  logos,
}: {
  logos: { name: string; src: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="relative h-10 w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            className="object-contain"
            sizes="112px"
          />
        </div>
      ))}
    </div>
  );
}

export function LogosSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Partner hospitals */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-8">
            Belegspitäler & Kooperationspartner
          </p>
          <LogoRow logos={hospitals} />
        </div>

        <div className="h-px bg-border/50 max-w-sm mx-auto mb-12" />

        {/* Associations */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-8">
            Mitgliedschaften & Fachgesellschaften
          </p>
          <LogoRow logos={associations} />
        </div>
      </div>
    </section>
  );
}
