"use client";

import { useEffect, useState, useRef } from "react";
import { oswald } from "@/data/constants/fonts";
import { skills, skillsIcons } from "@/data/index";
import GaugeCircle from "./magicui/gauge-circle";
import IconCloud from "./magicui/icon-cloud";

export default function Skills() {
  // State to hold the current values of the skills
  const [values, setValues] = useState<number[]>(skills.map(() => 0));
  // Ref to the section element
  const sectionRef = useRef<HTMLElement>(null);
  // State to track if the section is visible
  const [isVisible, setIsVisible] = useState(false);

  // Effect to set up the Intersection Observer
  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Effect to handle the animation when the section becomes visible
  useEffect(() => {
    if (isVisible) {
      const intervals = skills.map((skill, index) => {
        return setInterval(() => {
          setValues((prevValues) => {
            const newValues = [...prevValues];
            // Stop the interval when the value reaches the skill percentage
            if (newValues[index] >= skill.percentage) {
              clearInterval(intervals[index]);
              newValues[index] = skill.percentage;
            } else {
              newValues[index] += 10; // Increment the value
            }
            return newValues;
          });
        }, 300); // Interval time in milliseconds
      });

      return () => intervals.forEach(clearInterval); // Clean up intervals on unmount
    }
  }, [isVisible]);

  return (
    <section
      id="skills"
      className="pb-32 flex flex-col gap-12 lg:gap-24 md:flex-row justify-center items-center"
      ref={sectionRef}
    >
      <div className="flex flex-col items-center">
        <h1
          className={`${oswald.className} font-semibold text-2xl md:text-4xl flex flex-col text-center pb-10`}
        >
          <span className="text-base text-amber-600">Skills</span>
          <span>
            What makes me{" "}
            <span className="text-amber-600 dark:text-yellow-500">
              so strong
            </span>
            ?
          </span>
        </h1>
        <div className="flex flex-col items-center sm:flex-row gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <GaugeCircle
                max={100}
                min={0}
                value={values[index]}
                gaugePrimaryColor="#d97706"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              />
              <span className="text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-[32rem] items-center justify-center overflow-hidden">
        <IconCloud iconSlugs={skillsIcons} />
      </div>
    </section>
  );
}
