"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type ServiceSectionProps = {
  title: string;
  description: string;
  points: string[];
  image: string;
  note?: string;
  reverse?: boolean;
};

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="20"
    height="20"
    fill="currentColor"
    className="h-6 w-6 text-sky-500 dark:text-sky-300"
  >
    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z" />
  </svg>
);

export default function ServiceSection({
  title,
  description,
  points,
  image,
  note,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <motion.section
      className={`py-5 md:max-w-7xl m-auto border-b-sky-100 bg-transparent md:py-20 ${poppins.className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`container mx-auto px-8 flex flex-col-reverse lg:flex-row ${
          reverse ? "gap-5 lg:flex-row-reverse" : ""
        }`}
      >
        <div className="lg:w-2/3 lg:pr-4">
          <p className="text-2xl mt-2 md:text-4xl font-semibold text-sky-800 dark:text-sky-400 text-start">
            {title}
          </p>
          <p className="text-lg pb-2 lg:text-xl  mt-6 text-sky-700 dark:text-sky-300 font-light text-start">
            {description}
          </p>
          <ul className="space-y-4 mt-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                {checkIcon}
                <p className="text-start">{point}</p>
              </li>
            ))}
          </ul>
          {note && (
            <p className="italic text-teal-500 mt-6 text-start">{note}</p>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:w-1/3 mt-10 lg:mt-0 flex justify-center items-center"
        >
          <Image
            src={image}
            alt={`${title} image`}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
