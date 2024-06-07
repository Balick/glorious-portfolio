import { ubuntu } from "@/data/constants/fonts";
import { Quote } from "lucide-react";

export default function Citation() {
  return (
    <div className="pb-32">
      <p
        className={`${ubuntu.className} font-bold text-2xl md:text-4xl flex flex-col text-center relative`}
      >
        <Quote className="absolute left-0 -top-5 rotate-180" />
        <span className="text-zinc-500 dark:text-zinc-500">
          I don&apos;t just think <br className="md:hidden" /> of a solution,
        </span>
        <span>
          I provide the solution <span className="text-amber-600">.</span>
        </span>
        <Quote className="absolute right-0 -bottom-5" />
      </p>
    </div>
  );
}
