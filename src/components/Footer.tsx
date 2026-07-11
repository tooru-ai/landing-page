import { Container } from "@/components/Container";
import { WButton } from "@/components/WButton";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  WhelpLogoMark,
} from "@/components/icons";
import type { FooterColumn } from "@/types/content";

const columns: FooterColumn[] = [
  {
    header: "Products",
    links: [
      { label: "Inbox", href: "/inbox" },
      { label: "CRM", href: "/crm" },
      { label: "Reporting", href: "/reporting" },
      { label: "Chatbot", href: "/chatbot" },
      { label: "Outbound", href: "/outbound" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    header: "Resources",
    links: [
      { label: "Blog", href: "https://whelp.co/blog/" },
      { label: "Status", href: "https://status.whelp.co/" },
    ],
  },
  {
    header: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms-of-service" },
    ],
  },
  {
    header: "Compare",
    links: [
      { label: "Kustomer", href: "/compare/kustomer" },
      { label: "Zendesk", href: "/compare/zendesk" },
    ],
  },
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/getwhelp/", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/whelp.co/", label: "Instagram" },
  { icon: TwitterIcon, href: "https://twitter.com/getwhelp", label: "Twitter" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/whelp", label: "LinkedIn" },
];

// whelp.co footer: CTA band + link columns + copyright, all on --footer-bg (#f5f4ef)
export function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="flex w-full items-center justify-center rounded-t-[40px] border-b border-black/[0.059] bg-(--footer-bg) py-20 max-[768px]:py-15">
        <Container className="max-w-[588px]">
          <h4 className="cooper m-0 text-center text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-[32px] max-[768px]:leading-10">
            Get started now!
          </h4>
          <p className="poppins mt-5 text-center text-base leading-6 text-(--subtext)">
            Sign up now to improve your customer support with our tools and solutions.
          </p>
          <div className="mt-8 flex items-center justify-center max-[768px]:flex-col">
            {/* origin quirk kept for fidelity: first button carries margin-bottom, no horizontal gap */}
            <WButton variant="black" href="/request-demo" className="mb-4 w-max max-[768px]:w-full">
              Book a Demo
            </WButton>
            <WButton variant="transparent" href="/pricing" className="w-max max-[768px]:w-full">
              View pricing
            </WButton>
          </div>
        </Container>
      </div>

      {/* Link columns */}
      <div className="flex w-full items-center justify-center border-b border-black/[0.059] bg-(--footer-bg) py-20 max-[768px]:flex-col max-[768px]:pt-10 max-[768px]:pb-15">
        <Container className="flex max-[992px]:flex-col">
          <div className="flex flex-col gap-[15px]">
            <WhelpLogoMark className="h-[46px] w-[60px]" />
          </div>
          <div className="ml-[186px] grid w-full grid-cols-4 gap-6 max-[1200px]:ml-[146px] max-[992px]:mt-10 max-[992px]:ml-0 max-[992px]:grid-cols-2 max-[992px]:gap-10">
            {columns.map((col) => (
              <div key={col.header} className="flex flex-col">
                <p className="poppins m-0 mb-1 block text-base font-medium">{col.header}</p>
                <div>
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      referrerPolicy="no-referrer"
                      className="poppins mt-4 block text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="bg-(--footer-bg) py-[26px] max-[992px]:py-6">
        <Container className="flex w-full justify-between max-[992px]:flex-col">
          <p className="poppins m-0 text-base leading-6 text-(--subtext)">
            Copyright © 2025, Whelp, Inc.
          </p>
          <div className="flex max-[992px]:mt-5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  aria-label={social.label}
                  className="ml-4 w-max cursor-pointer text-wh-steel-60 hover:text-black max-[992px]:ml-0 max-[992px]:mr-4"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </Container>
      </div>
    </footer>
  );
}
