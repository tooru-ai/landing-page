import { cn } from "@/lib/utils";

type WButtonVariant = "black" | "transparent" | "white" | "flat";

const variantClasses: Record<WButtonVariant, string> = {
  black:
    "bg-(--black-button-bg) border-(--black-button-border) text-(--black-button-color) hover:bg-(--black-button-bg-hover) focus:shadow-[0_0_0_3px_var(--wh-blue-10)]",
  transparent:
    "bg-(--transparent-button-bg) border-(--transparent-button-border) text-(--transparent-button-color) hover:bg-(--transparent-button-bg-hover) focus:shadow-[0_0_0_3px_var(--wh-blue-10)]",
  white:
    "bg-(--white-button-bg) border-(--white-button-border) text-(--white-button-color) hover:bg-(--white-button-bg-hover) focus:shadow-[0_0_0_3px_var(--wh-blue-10)]",
  flat: "bg-(--flat-button-bg) border-(--flat-button-border) text-(--flat-button-color) hover:[&>span]:underline",
};

interface WButtonProps {
  variant: WButtonVariant;
  href: string;
  className?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  children: React.ReactNode;
}

// whelp.co Button: <a> h-48px, padding 12/24, radius 60px, 2px border, 0.1s linear transitions
export function WButton({ variant, href, className, iconRight, iconLeft, children }: WButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center rounded-[60px] border-2 px-6 py-3 outline-none transition-[background] duration-100 ease-linear",
        variantClasses[variant],
        className
      )}
    >
      {iconLeft ? <div className="mr-2 flex items-center justify-center">{iconLeft}</div> : null}
      <span className="poppins text-base leading-[normal] whitespace-nowrap">{children}</span>
      {iconRight ? <div className="ml-2 flex items-center justify-center">{iconRight}</div> : null}
    </a>
  );
}
