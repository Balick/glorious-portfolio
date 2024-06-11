"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { oswald } from "@/data/constants/fonts";
import { works } from "@/data/index";

export default function Works() {
  return (
    <section id="works" className="pb-32">
      <h1
        className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center`}
      >
        <span className="text-base text-amber-600">Works</span>
        <span>
          <span>Here are</span>{" "}
          <span className="text-yellow-500">My Latest Projects</span>
        </span>
        <span>with their presentations</span>
      </h1>
      <BentoGrid className="mx-auto md:auto-rows-[20rem] py-10">
        {works.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            link={item.link}
            description={item.description}
            image={item.image}
            className={cn("md:col-span-1")}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
