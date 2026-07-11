import Image from "next/image";
import type { IntegrationItem } from "@/data/integrations";

// whelp.co integration card: white, soft shadow, 25% width grid (50% ≤992, full ≤768)
export function IntegrationCard({ item }: { item: IntegrationItem }) {
  return (
    <div className="mx-3 mb-6 flex min-h-[204px] w-[calc(25%-24px)] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-[0_-0.5px_4px_rgba(0,0,0,0.08),0_0_0.5px_rgba(0,0,0,0.16),0_1px_2px_rgba(0,0,0,0.1)] hover:scale-[1.02] max-[992px]:w-[calc(50%-24px)] max-[768px]:mx-0 max-[768px]:w-full">
      <div className="mx-auto flex h-20 w-20 cursor-pointer items-center justify-center rounded-[20px] border border-black/8 bg-white p-4">
        <Image
          src={`/images/pages/${item.icon}`}
          alt={item.name}
          width={96}
          height={96}
          className="h-full w-full"
        />
      </div>
      <p className="poppins m-0 mt-4 text-center text-base leading-6">{item.name}</p>
      <p className="poppins m-0 mt-1 text-center text-base leading-6 text-(--subtext)">
        {item.category}
      </p>
    </div>
  );
}
