import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

const channelIcons = [
  { src: "/images/pages/facebook.ab616759.png", alt: "Facebook channel" },
  { src: "/images/pages/twitter.18389b2a.png", alt: "Twitter channel" },
  { src: "/images/pages/whatsapp.f970ecad.png", alt: "Whatsapp channel" },
  { src: "/images/pages/instagram.0d786cb9.png", alt: "Instagram channel" },
  { src: "/images/pages/telegram.d5133a4f.png", alt: "Telegram channel" },
  { src: "/images/pages/viber.58fef085.png", alt: "Viber channel" },
  { src: "/images/pages/line.75967287.png", alt: "Line channel" },
];

function Marquee() {
  return (
    <div className="mt-12 flex w-full overflow-x-hidden rounded-[32px] bg-wh-blue-5 py-14 max-[768px]:mt-10 max-[768px]:rounded-none">
      <div className="flex shrink-0 flex-nowrap animate-[omni-marquee_60s_linear_infinite]">
        {Array.from({ length: 6 }).flatMap((_, copy) =>
          channelIcons.map((icon) => (
            /* eslint-disable-next-line @next/next/no-img-element -- plain <img> as on origin */
            <img
              key={`${icon.src}-${copy}`}
              src={icon.src}
              alt={icon.alt}
              className="mx-2 h-12"
              loading="lazy"
            />
          ))
        )}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex w-full flex-col items-center py-20 max-[768px]:py-10">
      <div className="flex max-w-[720px] flex-col items-center justify-center">
        <h2 className="cooper m-0 text-center text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-[32px] max-[768px]:leading-10">
          Truly omnichannel
        </h2>
        <p className="poppins mt-5 max-w-[85%] text-center text-base leading-6 text-(--subtext)">
          Communicate with your customers on their preferred channels, including Live Chat, SMS,
          WhatsApp, E-mail, and Social Media.
        </p>
      </div>
      <Marquee />
    </div>
  );
}

// whelp.co Truly omnichannel band: blue marquee of channel icons (60s linear loop);
// desktop inside Container, mobile full-bleed
export function OmniChannelSection() {
  return (
    <>
      <Container className={cn("flex max-[768px]:hidden")}>
        <Content />
      </Container>
      <div className="hidden max-[768px]:block">
        <Content />
      </div>
    </>
  );
}
