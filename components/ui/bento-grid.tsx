import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  link,
}: {
  className?: string;
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento transition duration-200 p-4 dark:bg-cool-black dark:border-zinc-600 bg-white border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 h-full flex flex-col justify-between">
        <div>
          <div className="overflow-hidden w-full h-[135px] rounded-xl">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="font-sans font-bold dark:text-zinc-100 mb-2 mt-2">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-zinc-800 text-base dark:text-neutral-300">
          {description.length > 120
            ? `${description.slice(0, 90)}...`
            : description}
        </div>
        <a
          href={link}
          target="_blank"
          className="flex gap-2 items-center text-amber-600 dark:text-yellow-500 font-semibold mt-2"
        >
          <span>Visit website</span>
          <MoveUpRight />
        </a>
      </div>
    </div>
  );
};
