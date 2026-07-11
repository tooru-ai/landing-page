import { Container } from "@/components/Container";
import type { StatItem } from "@/types/content";

const stats: StatItem[] = [
  { value: "68%", label: "Automation for Ecommerce at least" },
  { value: "2.7%", label: "Increase in usage of WhatsApp" },
  { value: "4M+", label: "Conversations have been answered" },
];

// whelp.co Why Whelp?: black band with 3 stat cards
export function WhyWhelp() {
  return (
    <div className="my-10 grid grid-cols-1 items-center justify-center bg-wh-neutral-100 py-30 max-[768px]:my-5 max-[768px]:py-15">
      <Container className="flex flex-col items-center">
        <h3 className="cooper m-0 mb-12 text-5xl leading-[64px] font-normal text-white max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
          Why Whelp?
        </h3>
        <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex h-46 w-full flex-col items-center justify-center rounded-[20px] bg-wh-neutral-90 px-8 py-10 max-[768px]:h-35 max-[768px]:rounded-2xl"
            >
              <p className="poppins m-0 text-center text-5xl leading-[64px] font-medium text-wh-blue-20 max-[768px]:text-[32px] max-[768px]:leading-11">
                {stat.value}
              </p>
              <p className="poppins m-0 mt-4 text-center text-base text-wh-blue-0 max-[768px]:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
