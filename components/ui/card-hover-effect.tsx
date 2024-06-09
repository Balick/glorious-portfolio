"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Button } from "./moving-border";
import { Span } from "next/dist/trace/trace.js";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    ico?: ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  pt-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          //href={item?.link}
          key={item?.title}
          className="relative group  block p-2 h-max w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-amber-600 dark:bg-yellow-500 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.ico && <span className="block dark:bg-yellow-500/25 bg-amber-500/25 w-max p-2 rounded-xl">{item.ico}</span>}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-white dark:bg-cool-black border border-black/10 group-hover:border-slate-700 dark:border-white/[0.2] dark:group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </Button>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide text-left mt-2", className)}>{children}</h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 dark:text-zinc-300 tracking-wide leading-relaxed text-sm text-left",
        className
      )}
    >
      {children}
    </p>
  );
};
