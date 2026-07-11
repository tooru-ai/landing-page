"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { ChevronDownIcon } from "@/components/icons";

const teamSizes = ["1-100", "101-200", "201-600", "601-1500", "1500+"];
const jobFunctions = [
  "Project manager",
  "Product owner",
  "Developer",
  "Designer",
  "Sales representative",
  "Tester",
  "Other",
];

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}

function TextField({ label, name, placeholder, value, onChange }: FieldProps) {
  return (
    <div className="w-full">
      <p className="poppins m-0 mb-2 w-full text-sm leading-5 font-medium text-black">{label}</p>
      <div className="flex h-12 w-full flex-col items-center justify-center rounded-[60px] border border-black/16 bg-(--input-bg) hover:bg-wh-neutral-0 focus-within:border-2 focus-within:border-black focus-within:shadow-[0_0_0_3px_var(--wh-blue-10)]">
        <input
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="poppins flex h-full w-full rounded-[inherit] border-none bg-inherit p-3.5 text-sm text-(--input-color) outline-none placeholder:text-(--input-placeholder)"
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="w-full cursor-pointer" onClick={() => setOpen(!open)}>
        <p className="poppins m-0 mb-2 w-full text-sm leading-5 font-medium text-black">{label}</p>
        <div className="relative flex h-12 w-full flex-col items-center justify-center rounded-[60px] border border-black/16 bg-(--input-bg) hover:bg-wh-neutral-0">
          <input
            readOnly
            value={value}
            placeholder="Select"
            className="poppins pointer-events-none flex h-full w-full rounded-[inherit] border-none bg-inherit p-3.5 text-sm text-(--input-color) outline-none placeholder:text-(--input-placeholder)"
          />
          <div className="absolute right-4 flex items-center text-wh-steel-60">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      {open ? (
        <div className="absolute top-full left-0 z-10 mt-1 w-full rounded-2xl bg-white py-2 shadow-[0_-0.5px_4px_rgba(0,0,0,0.08),0_0_0.5px_rgba(0,0,0,0.16),0_1px_2px_rgba(0,0,0,0.1)]">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="poppins cursor-pointer px-4 py-2 text-sm hover:bg-wh-neutral-0"
            >
              {opt}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

// whelp.co /request-demo: bordered card, image left (40%, hidden ≤992px), form right
export function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    jobFunction: "",
  });
  const set = (key: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [key]: v }));
  const complete = Object.values(form).every(Boolean);

  return (
    <Container>
      <div className="min-h-[calc(100vh-var(--navbar-height))] pt-20 pb-30 max-[768px]:pt-10 max-[768px]:pb-15 [@media(min-height:1000px)]:min-h-[800px]">
        <div className="flex rounded-[20px] border-2 border-black">
          <div className="flex w-2/5 shrink-0 max-[992px]:hidden">
            <Image
              src="/images/pages/form.ca76dd8b.png"
              alt="Form background"
              width={942}
              height={1338}
              className="w-full rounded-l-[17px] object-cover"
            />
          </div>
          <div className="w-full rounded-[inherit] bg-white px-20 py-15 max-[768px]:px-6 max-[768px]:py-7">
            <h1 className="cooper m-0 text-left text-[32px] leading-11 font-normal">
              Request a demo
            </h1>
            <p className="poppins mt-5 text-sm leading-6 text-(--subtext)">
              See how your customer support can transform into a lively, timely and super-efficient
              service with the tools and features we offer.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-[768px]:mt-5 max-[768px]:grid-cols-1">
              <TextField
                label="Name*"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={set("name")}
              />
              <TextField
                label="Work email*"
                name="email"
                placeholder="example@company.com"
                value={form.email}
                onChange={set("email")}
              />
              <TextField
                label="Company Inc.*"
                name="company"
                placeholder="Company*"
                value={form.company}
                onChange={set("company")}
              />
              <TextField
                label="Phone number*"
                name="phone"
                placeholder="+1 6466236536"
                value={form.phone}
                onChange={set("phone")}
              />
              <SelectField
                label="Team size*"
                options={teamSizes}
                value={form.teamSize}
                onChange={set("teamSize")}
              />
              <SelectField
                label="Job function*"
                options={jobFunctions}
                value={form.jobFunction}
                onChange={set("jobFunction")}
              />
            </div>
            <div className="inline-block">
              <button
                className={cn(
                  "poppins mt-7 flex cursor-pointer items-center justify-center rounded-[60px] border-2 border-(--black-button-border) bg-(--black-button-bg) px-6 py-3 text-base leading-[normal] text-(--black-button-color) transition-[background] duration-100 ease-linear hover:bg-(--black-button-bg-hover)",
                  !complete && "pointer-events-none opacity-50"
                )}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
