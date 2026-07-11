"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// whelp.co section reveal (measured on live site): on first viewport entry,
// animate opacity 0 -> 1 and translateY(50px) -> 0 over 500ms linear, once.
export function FadeUp({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ opacity: visible ? 1 : 0 }}
      className={cn(visible && "animate-[fade-up-reveal_500ms_linear]", className)}
    >
      {children}
    </div>
  );
}
