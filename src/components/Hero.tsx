import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";

// whelp.co hero: DualGrid.maxHeight with email capture form + 5-layer image composition
export function Hero() {
  return (
    <div className="grid min-h-[648px] grid-cols-2 gap-10 py-10 max-[768px]:grid-cols-1 [@media(min-height:1000px)]:min-h-[700px]">
      <FadeUp className="flex flex-col justify-center">
        <div className="flex flex-col max-[768px]:items-center">
          <h1 className="cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
            Elevate Your Customer Support with Our Omnichannel Solution
          </h1>
          <p className="poppins mt-5 text-base leading-6 font-normal text-(--subtext) max-[768px]:text-center">
            Connect with customers on Live Chat, SMS, WhatsApp, E-mail, and Social Media for
            seamless, personalized service. Boost efficiency with our unified customer view and
            AI-powered automations.
          </p>
          <div className="mt-8 flex min-h-[68px] w-[95%] items-center max-[768px]:w-full max-[768px]:flex-col max-[768px]:justify-center">
            <div className="w-full">
              <div className="flex h-[52px] w-full flex-col items-center justify-center rounded-l-[60px] border-2 border-r-0 border-black bg-(--input-bg) hover:bg-(--input-bg-hover) max-[768px]:rounded-[60px] max-[768px]:border-r-2">
                <input
                  className="poppins flex h-full w-full rounded-[inherit] border-none bg-inherit px-5 text-base text-(--input-color) outline-none placeholder:text-(--input-placeholder) max-[768px]:text-center"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <a
              href="/request-demo"
              className="flex h-[52px] shrink-0 cursor-pointer items-center justify-center self-end rounded-r-[60px] border-2 border-(--black-button-border) bg-(--black-button-bg) px-7 py-3.5 text-(--black-button-color) transition-[background] duration-100 ease-linear outline-none hover:bg-(--black-button-bg-hover) focus:shadow-[0_0_0_3px_var(--wh-blue-10)] max-[768px]:mt-4 max-[768px]:w-full max-[768px]:self-auto max-[768px]:rounded-[60px] max-[768px]:text-center"
            >
              <span className="poppins text-base whitespace-nowrap">Book a Demo</span>
            </a>
          </div>
        </div>
      </FadeUp>
      <FadeUp className="flex flex-col items-center justify-center">
        <div className="flex w-full justify-end max-[768px]:justify-center">
          <div className="relative flex">
            <Image
              src="/images/hero/blue-bg.png"
              alt="Hero background"
              width={1024}
              height={1232}
              className="h-full w-full object-contain"
              priority
            />
            <Image
              src="/images/hero/model.png"
              alt="Hero model"
              width={1024}
              height={1232}
              className="absolute bottom-0 left-1/2 z-4 h-full w-full -translate-x-1/2"
              priority
            />
            <Image
              src="/images/hero/top-right.png"
              alt="Hero top right"
              width={368}
              height={216}
              className="absolute top-[18%] right-[-4%] z-2 h-[100px] w-44 animate-[down-and-up_5s_linear_infinite] max-[992px]:right-0 max-[992px]:h-20 max-[992px]:w-[140px] max-[540px]:h-16 max-[540px]:w-[120px]"
            />
            <Image
              src="/images/hero/left-center.png"
              alt="Hero left center"
              width={376}
              height={200}
              className="absolute top-[40%] left-[-14%] z-2 h-[92px] w-[180px] -translate-y-[60%] animate-[down-and-up_6s_linear_infinite] max-[992px]:left-0 max-[992px]:z-4 max-[992px]:h-[73px] max-[992px]:w-[140px] max-[540px]:h-[58px] max-[540px]:w-28"
            />
            <Image
              src="/images/hero/bottom-right.png"
              alt="Hero bottom right"
              width={512}
              height={184}
              className="absolute right-[-4%] bottom-[10%] z-6 h-[84px] w-62 animate-[down-and-up_7s_linear_infinite] max-[992px]:right-0 max-[992px]:h-[59px] max-[992px]:w-[180px] max-[540px]:h-13 max-[540px]:w-40"
            />
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
