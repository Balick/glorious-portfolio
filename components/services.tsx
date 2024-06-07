import { oswald } from "@/data/constants/fonts";
import { services } from "@/data/index";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Services() {
  return (
    <section className="pb-32" id="services">
      <h1
        className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center`}
      >
        <span className="text-base text-amber-600">Services</span>
        <span>
          Explore <span className="text-yellow-500">My Offerings</span> for you
        </span>
      </h1>
      <HoverEffect items={services} />
    </section>
  );
}
