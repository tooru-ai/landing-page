"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { faqItems } from "@/data/feature-pages";

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-14-1a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
      />
    </svg>
  );
}

// whelp.co FAQ accordion: bordered rows, plus icon toggles answer
export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Container>
      <div className="flex w-full flex-col items-center pt-20 pb-30 max-[768px]:pt-10 max-[768px]:pb-15">
        <h4 className="cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
          Frequently asked questions
        </h4>
        <div className="mx-auto mt-12 w-3/4 max-[768px]:mt-10 max-[768px]:w-full">
          {faqItems.map((item, i) => (
            <div
              key={item.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full cursor-pointer flex-col border-y border-black px-4 py-6 first:border-t-2 last:border-b-2"
            >
              <div className="flex items-center">
                <p className="poppins m-0 text-base font-medium">{item.q}</p>
                <div className="ml-auto flex shrink-0 items-center justify-center">
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              {open === i ? (
                <p className="poppins m-0 mt-3 text-sm text-(--subtext)">{item.a}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
