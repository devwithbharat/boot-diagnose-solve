import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-[0.2em]",
          dark ? "text-cyan" : "text-electric",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-slate-300" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
