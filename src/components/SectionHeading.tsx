import { cn } from "@/lib/utils";
import type { JSX } from "react";

interface SectionHeadingProps {
  as?: keyof Pick<JSX.IntrinsicElements, "h1" | "h2" | "h3" | "h4">;
  className?: string;
  children: React.ReactNode;
}

// whelp.co Header_h1 + cooper: 48px/64px w400, ≤992px 40px/48px, ≤768px 32px/40px centered
export function SectionHeading({ as: Tag = "h2", className, children }: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10",
        className
      )}
    >
      {children}
    </Tag>
  );
}
