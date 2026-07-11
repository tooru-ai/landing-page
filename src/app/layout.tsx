import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { ChatLauncher } from "@/components/ChatLauncher";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const cooper = localFont({
  variable: "--font-cooper",
  src: [
    { path: "../../public/fonts/cooper-400.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/cooper-600.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/cooper-800.ttf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Omnichannel Inbox Software - Whelp",
  description:
    "The AI-based omnichannel shared inbox for customer support over Voice, Email, Live Chat, SMS, and WhatsApp. Streamline your customer communication with our omnichannel CRM platform.",
  icons: { icon: "/seo/favicon.ico" },
  openGraph: {
    title: "Whelp - Customer Support Platform",
    description:
      "The AI-based omnichannel shared inbox for customer support over Voice, Email, Live Chat, SMS, and WhatsApp.",
    url: "https://www.whelp.co",
    type: "website",
    siteName: "Whelp",
    images: [
      {
        url: "/seo/og-image.png",
        alt: "Whelp - Landing Dashboard",
        type: "image/png",
        width: 1362,
        height: 743,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cooper.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
          <ChatLauncher />
        </div>
      </body>
    </html>
  );
}
