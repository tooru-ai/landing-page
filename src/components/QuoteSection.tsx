import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

// whelp.co Quote band: purple background, centered Cooper quote + avatar + attribution
export function QuoteSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center justify-center bg-(--purple-bg) py-20 max-[768px]:py-10",
        className
      )}
    >
      <Container className="flex max-w-[800px] flex-col items-center">
        <h3 className="cooper m-0 text-center text-[32px] leading-11 font-normal max-[768px]:text-2xl max-[768px]:leading-8">
          &ldquo;WhatsApp blended with Whelp interface is the ideal tool to reach your audience and
          promote your product and service.&rdquo;
        </h3>
        <Image
          src="/images/quote/seymur.png"
          alt="Seymur Rasulov"
          width={176}
          height={168}
          className="mt-10 h-[84px] w-[88px]"
        />
        <p className="poppins mt-4 text-base leading-6 font-medium">Seymur Rasulov</p>
        <p className="poppins mt-1 text-sm leading-5 font-normal text-(--subtext)">
          Co-founder at Whelp, Inc
        </p>
      </Container>
    </div>
  );
}
