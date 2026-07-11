import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { FadeUp } from "@/components/FadeUp";
import { WButton } from "@/components/WButton";
import { ArrowRightIcon } from "@/components/icons";

function IntegrationsPanel({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={cn(
        "mt-5 mb-30 grid grid-cols-2 gap-10 rounded-[40px] bg-wh-blue-5 px-20 py-10 max-[768px]:mb-15 max-[768px]:grid-cols-1 max-[768px]:rounded-none max-[768px]:px-5",
        mobile && "mb-15 rounded-none px-5"
      )}
    >
      <FadeUp className="flex flex-col justify-center max-[992px]:pr-[60px] max-[768px]:pr-0">
        <div className="flex flex-col max-[768px]:items-center">
          <h2 className="cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
            Explore integrations
          </h2>
          <p className="poppins mt-5 max-w-[85%] text-base leading-6 font-normal text-(--subtext) max-[768px]:max-w-full max-[768px]:text-center">
            Our integrations make it easy to work with the applications your teams already love.
          </p>
          <WButton
            variant="transparent"
            href="/integrations"
            className="mt-8 w-max"
            iconRight={<ArrowRightIcon />}
          >
            Learn more
          </WButton>
        </div>
      </FadeUp>
      <FadeUp className="flex flex-col items-end justify-center max-[768px]:justify-center">
        <div className="flex w-full justify-end max-[768px]:justify-center">
          <div className="relative flex">
            <Image
              src="/images/sections/integrations.png"
              alt="Integrations icons"
              width={776}
              height={576}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

// whelp.co Integrations: light-blue rounded panel; desktop inside Container, mobile full-bleed
export function IntegrationsSection() {
  return (
    <>
      <Container className="flex max-[768px]:hidden">
        <div className="w-full">
          <IntegrationsPanel />
        </div>
      </Container>
      <div className="hidden max-[768px]:block">
        <IntegrationsPanel mobile />
      </div>
    </>
  );
}
