import { site } from "@/data/site";

type Variant = "nav" | "footer";

export function SchoolBrandTitle({ variant }: { variant: Variant }) {
  const [line1, line2] = site.nameLines;

  if (variant === "nav") {
    return (
      <span className="flex min-w-0 flex-col text-balance">
        <span className="text-[0.7rem] font-extrabold leading-snug text-[#151515] min-[380px]:text-[0.8125rem] min-[480px]:text-sm min-[1200px]:text-lg min-[1200px]:leading-tight">
          {line1}
        </span>
        <span className="text-[0.6rem] font-bold uppercase leading-snug tracking-[0.04em] text-[#444b5a] min-[380px]:text-[0.625rem] min-[1200px]:text-xs min-[1200px]:font-extrabold min-[1200px]:normal-case min-[1200px]:tracking-normal min-[1200px]:text-[#151515]/90">
          {line2}
        </span>
      </span>
    );
  }

  return (
    <span className="flex min-w-0 flex-col gap-0.5 text-balance">
      <span className="text-base font-extrabold leading-snug text-[#151515] min-[1200px]:text-xl min-[1200px]:leading-tight">{line1}</span>
      <span className="text-xs font-bold leading-snug text-[#444b5a] min-[1200px]:text-sm min-[1200px]:text-[#151515]/90">{line2}</span>
    </span>
  );
}
