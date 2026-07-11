import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";
import { FadeUp } from "@/components/FadeUp";
import { WButton } from "@/components/WButton";

type HeadingTag = "h2" | "h3";

interface FeatureSectionProps {
  heading: string;
  headingTag: HeadingTag;
  body: string;
  /* omit for sections without a "Learn more" button (feature subpages) */
  href?: string;
  image: { src: string; width: number; height: number; alt: string };
  imageSide: "left" | "right";
  /* extra classes on the DualGrid wrapper (e.g. reports pb-[120px], outbound pt-[120px]) */
  wrapperClassName?: string;
  /* override text-half padding (e.g. EmailCompose uses pl-[60px] instead of pl-20) */
  textClassName?: string;
}

// whelp.co DualGrid feature section (CRM / Inbox / Reports / Outbound / Chatbot)
export function FeatureSection({
  heading,
  headingTag: Tag,
  body,
  href,
  image,
  imageSide,
  wrapperClassName,
  textClassName,
}: FeatureSectionProps) {
  const text = (
    <FadeUp
      className={cn(
        "flex flex-col justify-center",
        imageSide === "right"
          ? "pr-24 max-[992px]:pr-[60px] max-[768px]:order-1 max-[768px]:pr-0"
          : "pl-20 max-[992px]:pl-[60px] max-[768px]:order-1 max-[768px]:pl-0",
        textClassName
      )}
    >
      <div className="flex flex-col max-[768px]:items-center">
        <Tag className="cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
          {heading}
        </Tag>
        <p className="poppins mt-5 max-w-[85%] text-base leading-6 font-normal text-(--subtext) max-[768px]:max-w-full max-[768px]:text-center">
          {body}
        </p>
        {href ? (
          <WButton
            variant="transparent"
            href={href}
            className="mt-8 w-max"
            iconRight={<ArrowRightIcon />}
          >
            Learn more
          </WButton>
        ) : null}
      </div>
    </FadeUp>
  );

  const picture = (
    <FadeUp className="flex flex-col justify-center max-[768px]:order-2">
      <div className="flex w-full justify-center">
        <div className="relative flex">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </FadeUp>
  );

  return (
    <div className={cn("grid grid-cols-2 gap-10 py-10 max-[768px]:grid-cols-1", wrapperClassName)}>
      {imageSide === "left" ? (
        <>
          {picture}
          {text}
        </>
      ) : (
        <>
          {text}
          {picture}
        </>
      )}
    </div>
  );
}
