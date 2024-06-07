import Image from "next/image";
import { ubuntu } from "@/data/constants/fonts";
import profileImg from "@/public/profile.jpg";
import { TypewriterEffect } from "./ui/typewritet-effect";
import { color } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center py-32 z-50 relative">
      <div className="rounded-full overflow-hidden w-32 h-32">
        <Image src={profileImg} alt="profile photo" />
      </div>
      <h2 className={`font-semibold text-lg`}>Hi, I&apos;m Glorious 🤗</h2>
      <h1
        className={`${ubuntu.className} font-bold text-3xl md:text-5xl flex flex-col`}
      >
        <span>From Design to Development,</span>
        <span>
          <span className="text-yellow-500">I Craft Exceptional</span> <br />
          <FlipWords
            words={[
              "Web Experiences",
              "Impactful Experiences",
              "Scalable Solutions",
              "Interactive Experiences",
              "User-Centric Solutions",
            ]}
            className="dark:text-yellow-700 text-amber-600"
          />
          .
        </span>
      </h1>
      <p className="lg:text-md dark:text-slate-300">
        Leveraging my expertise in both <b>front-end</b> <br /> and{" "}
        <b>back-end</b> development, I bring ideas to life, <br /> crafting
        seamless user experiences and robust functionality
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
