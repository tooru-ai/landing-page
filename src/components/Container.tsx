import { cn } from "@/lib/utils";

// whelp.co .Container_container: max-width ladder 1200 → 1180 → 1120 → 1020 → 980 → 840 → 100vw+24px padding
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] max-[1320px]:max-w-[1180px] max-[1200px]:max-w-[1120px] max-[1148px]:max-w-[1020px] max-[1024px]:max-w-[980px] max-[992px]:max-w-[840px] max-[860px]:max-w-screen max-[860px]:px-6",
        className
      )}
    >
      {children}
    </div>
  );
}
