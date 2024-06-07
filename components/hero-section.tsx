import Image from "next/image";
import { ubuntu } from "@/data/constants/fonts";
import profileImg from "@/public/profile.jpg";
import { TypewriterEffect } from "./ui/typewritet-effect";
import { color } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center py-32 z-50 relative">
      <div className="rounded-full overflow-hidden w-32 h-32">
        <Image src={profileImg} alt="profile photo" />
      </div>
      <h2 className={`font-semibold text-lg`}>Hi, I&apos;m Balick 🤗</h2>
      <h1
        className={`${ubuntu.className} font-bold text-3xl md:text-5xl flex flex-col`}
      >
        <span>Building digital</span>
        <span>products, brands, and</span>
        <span>experiences.</span>
      </h1>
      <p className="lg:text-md dark:text-slate-300">
        a <b>Product Designer</b> and <b>Visual Developper</b> in SF. <br />I
        specialized in UI/UX Design, Responsive Web Design,{" "}
        <br className="hidden sm:block" /> and Visual Developement.
      </p>
      <a
        href=""
        className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white rounded-full px-8 py-4 flex items-center justify-center"
      >
        <span>connect with me</span>
      </a>
    </div>
  );
}
