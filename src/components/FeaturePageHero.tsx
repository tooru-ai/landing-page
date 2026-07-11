import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import { ArrowRightIcon } from "@/components/icons";

interface FeaturePageHeroProps {
  heading: string;
  sub: string;
  image: { src: string; width: number; height: number; alt: string };
}

// whelp.co feature-page hero: Header_hero (56/68), subtext, black CTA, image right
export function FeaturePageHero({ heading, sub, image }: FeaturePageHeroProps) {
  return (
    <div className="grid min-h-[648px] grid-cols-2 gap-10 py-10 max-[768px]:grid-cols-1 [@media(min-height:1000px)]:min-h-[700px]">
      <FadeUp className="flex flex-col justify-center">
        <div className="flex max-w-[85%] flex-col max-[768px]:max-w-full max-[768px]:items-center">
          <h1 className="cooper m-0 text-[56px] leading-[68px] font-normal max-[992px]:text-[40px] max-[992px]:leading-11 max-[768px]:text-center">
            {heading}
          </h1>
          <p className="poppins mt-5 text-base leading-6 font-normal text-(--subtext) max-[768px]:text-center">
            {sub}
          </p>
          <div>
            <a
              href="/request-demo"
              className="mt-8 flex h-[52px] w-max shrink-0 cursor-pointer items-center justify-center rounded-[60px] border-2 border-(--black-button-border) bg-(--black-button-bg) px-7 py-3.5 text-(--black-button-color) transition-[background] duration-100 ease-linear outline-none hover:bg-(--black-button-bg-hover) focus:shadow-[0_0_0_3px_var(--wh-blue-10)]"
            >
              <span className="poppins text-base leading-[normal] whitespace-nowrap">
                Book a Demo
              </span>
              <div className="ml-2 flex items-center justify-center">
                <ArrowRightIcon width="1em" height="1em" />
              </div>
            </a>
          </div>
        </div>
      </FadeUp>
      <FadeUp className="flex flex-col items-center justify-center">
        <div className="flex w-full justify-center">
          <div className="relative flex">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
