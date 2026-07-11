"use client";

import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { IntegrationCard } from "@/components/IntegrationCard";
import { ChevronDownIcon } from "@/components/icons";
import { integrationItems } from "@/data/integrations";

const categories = [
  "All integrations",
  "Channel integrations",
  "CRM",
  "Payments & Accounting",
  "Analytics",
  "Other",
];

function FilterListIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm2 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm4 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-9a9 9 0 1 0 5.618 16.032l3.675 3.675a1 1 0 0 0 1.414-1.414l-3.675-3.675A9 9 0 0 0 11 2Z"
      />
    </svg>
  );
}

// whelp.co /integrations: intro with category filter + search, card grid
export function IntegrationsDirectory() {
  const [category, setCategory] = useState(categories[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const visible = useMemo(
    () =>
      integrationItems.filter(
        (item) =>
          (category === "All integrations" || item.category === category) &&
          item.name.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );

  return (
    <Container>
      <div className="pt-30 pb-20 max-[768px]:pt-10 max-[768px]:pb-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
            Explore integrations
          </h2>
          <p className="poppins mt-5 max-w-1/2 text-center text-base leading-6 text-(--subtext) max-[992px]:max-w-[85%] max-[768px]:max-w-full">
            Our integrations make it easy to work with the applications your teams already love.
          </p>
          <div className="mt-8 flex w-full justify-center">
            <div className="relative">
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="mr-3 flex h-[52px] w-max shrink-0 cursor-pointer items-center rounded-[60px] border-2 border-black px-5 py-3.5 transition-[width] duration-200 hover:bg-black/4 max-[768px]:max-w-[220px]"
              >
                <FilterListIcon />
                <span className="poppins mx-3 ml-2 w-full text-base font-medium whitespace-nowrap capitalize">
                  {category}
                </span>
                <div className="ml-auto">
                  <ChevronDownIcon />
                </div>
              </div>
              {menuOpen ? (
                <div className="absolute top-14 left-0 z-10 rounded-2xl bg-white py-2 shadow-[0_-0.5px_4px_rgba(0,0,0,0.08),0_0_0.5px_rgba(0,0,0,0.16),0_1px_2px_rgba(0,0,0,0.1)]">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setMenuOpen(false);
                      }}
                      className={cn(
                        "poppins cursor-pointer px-5 py-2.5 text-base whitespace-nowrap hover:bg-wh-neutral-0",
                        cat === category && "font-medium"
                      )}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchRef.current?.focus(), 50);
              }}
              className={cn(
                "relative flex h-[52px] shrink-0 cursor-pointer items-center rounded-[60px] border-2 border-black px-5 py-3.5 transition-[width] duration-200 hover:bg-black/4 max-[768px]:max-w-[220px]",
                searchOpen ? "w-[280px]" : "w-max"
              )}
            >
              <SearchIcon />
              {searchOpen ? (
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onBlur={() => {
                    if (!query) setSearchOpen(false);
                  }}
                  placeholder="Search"
                  className="poppins mr-3 ml-2 w-full border-none bg-transparent pr-2 text-base leading-6 outline-none placeholder:text-(--subtext)"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center pb-15">
        {visible.map((item) => (
          <IntegrationCard key={item.name} item={item} />
        ))}
      </div>
    </Container>
  );
}
