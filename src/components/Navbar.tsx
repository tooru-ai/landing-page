"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import {
  ChatbotIcon,
  ChevronDownIcon,
  IntegrationsIcon,
  InboxIcon,
  MenuTipIcon,
  ReportingIcon,
  SendIcon,
  UsersIcon,
  WhelpLogo,
} from "@/components/icons";
import type { NavDropdown, NavMenuItem } from "@/types/content";

const featureItems: NavMenuItem[] = [
  { label: "Inbox", href: "/inbox", icon: InboxIcon },
  { label: "CRM", href: "/crm", icon: UsersIcon },
  { label: "Reporting", href: "/reporting", icon: ReportingIcon },
  { label: "Chatbot", href: "/chatbot", icon: ChatbotIcon },
  { label: "Outbound", href: "/outbound", icon: SendIcon },
  { label: "Integrations", href: "/integrations", icon: IntegrationsIcon },
];

const navItems: NavDropdown[] = [
  { label: "Feature", items: featureItems },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "https://whelp.co/blog/" },
];

function DropdownMenu({ items }: { items: NavMenuItem[] }) {
  return (
    <div className="absolute top-14 left-1/2 -translate-x-1/2 rounded-3xl bg-white p-3 shadow-[0_0_0_1px_#e9ebed] drop-shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3.5">
        <MenuTipIcon />
      </div>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.label} href={item.href}>
            <div className="flex items-center rounded-xl p-3 hover:bg-wh-neutral-0 active:bg-wh-steel-0">
              {Icon ? <Icon width={20} height={20} /> : null}
              <p className={cn("poppins m-0 text-base font-medium whitespace-nowrap", Icon && "ml-3")}>
                {item.label}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function MobileMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="fixed top-16 left-0 z-1001 flex h-[calc(100vh-var(--navbar-height-sm))] w-screen flex-col overflow-y-auto bg-(--main) px-6 py-2">
      {navItems.map((item, i) => (
        <div key={item.label} className="w-full">
          {item.items ? (
            <>
              <div
                className="flex w-full cursor-pointer border-b border-black/6 py-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex w-full items-center">
                  <p className="poppins m-0 text-xl font-medium">{item.label}</p>
                  <div className={cn("ml-auto transition-transform", openIndex === i && "rotate-180")}>
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>
              {openIndex === i ? (
                <div className="mt-3 border-b border-black/6 pb-3">
                  {item.items.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <a key={sub.label} href={sub.href}>
                        <div className="flex cursor-pointer items-center rounded-xl px-4 py-3 hover:bg-wh-neutral-0 active:bg-wh-steel-0">
                          {Icon ? (
                            <div className="mr-3">
                              <Icon width={20} height={20} />
                            </div>
                          ) : null}
                          <p className="poppins m-0 text-base font-medium">{sub.label}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </>
          ) : (
            <a href={item.href} className="flex w-full cursor-pointer border-b border-black/6 py-4">
              <p className="poppins m-0 text-xl font-medium">{item.label}</p>
            </a>
          )}
        </div>
      ))}
      <div className="mt-4 flex flex-col gap-3 pb-8">
        <a
          href="https://web.whelp.co/"
          className="flex h-12 items-center justify-center rounded-[60px] border-2 border-transparent bg-transparent px-6 py-3"
        >
          <span className="poppins text-base">Sign In</span>
        </a>
        <a
          href="/request-demo"
          className="flex h-12 items-center justify-center rounded-[60px] border-2 border-(--black-button-border) bg-(--black-button-bg) px-6 py-3 text-(--black-button-color)"
        >
          <span className="poppins text-base">Book a Demo</span>
        </a>
      </div>
    </div>
  );
}

// whelp.co navbar: fixed, bottom border after scroll, hover dropdowns, ≤1200px hamburger
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div
      className={cn(
        "fixed! top-0 left-0 z-1000 flex h-(--navbar-height) w-full items-center bg-(--main) max-[768px]:h-(--navbar-height-sm)",
        scrolled && !mobileOpen && "border-b border-black/6"
      )}
    >
      <Container className="max-[768px]:pr-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex w-full">
                <div>
                  <WhelpLogo className="h-7 w-[126px]" />
                </div>
              </div>
            </Link>
            <div className="ml-12 grid grid-cols-[repeat(3,minmax(min-content,60px))] items-center gap-4 max-[1200px]:hidden">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative z-10 flex w-max"
                  onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.items ? (
                    <div className="flex cursor-pointer items-center px-2 py-1">
                      <p className="poppins m-0 mr-1 text-base! font-medium! select-none">
                        {item.label}
                      </p>
                      <ChevronDownIcon />
                    </div>
                  ) : (
                    <a href={item.href} className="flex cursor-pointer items-center px-2 py-1">
                      <p className="poppins m-0 text-base! font-medium! select-none">{item.label}</p>
                    </a>
                  )}
                  {item.items && openDropdown === item.label ? (
                    <DropdownMenu items={item.items} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="flex max-[1200px]:hidden">
            <a
              href="https://web.whelp.co/"
              className="flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-[60px] border-2 border-(--flat-button-border) bg-(--flat-button-bg) px-6 py-3 text-(--flat-button-color) transition-[background] duration-100 ease-linear hover:[&>span]:underline"
            >
              <span className="poppins text-base whitespace-nowrap">Sign In</span>
            </a>
            <a
              href="/request-demo"
              className="ml-2 flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-[60px] border-2 border-(--black-button-border) bg-(--black-button-bg) px-6 py-3 text-(--black-button-color) transition-[background] duration-100 ease-linear hover:bg-(--black-button-bg-hover) focus:shadow-[0_0_0_3px_var(--wh-blue-10)]"
            >
              <span className="poppins text-base whitespace-nowrap">Book a Demo</span>
            </a>
          </div>
          <div className="hidden max-[1200px]:block">
            <button
              aria-expanded={mobileOpen}
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative h-12 w-12 cursor-pointer border-0 bg-transparent outline-none select-none"
            >
              <div
                className={cn(
                  "absolute left-3 h-0.5 w-6 bg-current transition-all duration-400",
                  mobileOpen ? "top-[23px] rotate-45" : "top-[19px]"
                )}
              />
              <div
                className={cn(
                  "absolute left-3 h-0.5 w-6 bg-current transition-all duration-400",
                  mobileOpen ? "top-[23px] -rotate-45" : "top-7"
                )}
              />
            </button>
          </div>
        </div>
      </Container>
      {mobileOpen ? <MobileMenu /> : null}
    </div>
  );
}
