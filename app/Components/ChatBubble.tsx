

import ChatBubbleIcon from "@/public/icons/chat.png";
import Image from "next/image";
import Link from "next/link";


export default function ChatBubble() {
  return (
    <div className="fixed lg:bottom-[8rem] top-[6rem] z-1 right-0 m-4">
      <Link href="https://m.me/225234614014503" target="_blank" className="rounded-full z-8 cursor-pointer flex-col w-12 h-12 flex items-center gap-1 justify-center">
        <Image src={ChatBubbleIcon} alt="chat-bubble" width={36} height={36} />
        <p className="text-xs text-[#0865FE] leading-[13px] font-semibold text-center antialiased">Chatta med oss</p>
      </Link>
    </div>
  );
}
