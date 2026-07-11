import Image from "next/image";

// Static replica of the Whelp livechat launcher (third-party widget on origin)
export function ChatLauncher() {
  return (
    <button
      aria-label="Open live chat"
      className="fixed right-6 bottom-6 z-1100 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-0 bg-black shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
    >
      <Image src="/images/chat-launcher.png" alt="" width={80} height={80} className="h-7 w-7" />
    </button>
  );
}
