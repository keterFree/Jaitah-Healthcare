"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HeroSection = () => {
  return (
    <section
      className={`py-10 md:py-20 bg-gradient-to-r from-white to-sky-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 ${poppins.className}`}
    >
      <div className="container mx-auto px-8 lg:flex">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <p className="text-2xl mt-2 md:text-4xl font-semibold text-gray-800 dark:text-gray-100 text-start">
            Comprehensive, Accessible, and Compassionate{" "}
            <span className="text-sky-600 dark:text-sky-400">
              Healthcare for Every Patient
            </span>
          </p>

          <p className="text-lg lg:text-xl mt-6 font-light text-gray-700 dark:text-gray-300 text-start">
            At Jaitah Memorial Healthcare Ltd, we offer a diverse range of
            health services under one roof, designed to serve individuals,
            families, and the wider community. Our integrated model of care
            ensures you receive quality medical attention at every stage—from
            <span className="text-sky-600 dark:text-sky-400">
              {" "}
              prevention
            </span>{" "}
            and
            <span className="text-sky-600 dark:text-sky-400">
              {" "}
              diagnosis
            </span>{" "}
            to
            <span className="text-sky-600 dark:text-sky-400">
              {" "}
              treatment
            </span>{" "}
            and
            <span className="text-sky-600 dark:text-sky-400"> recovery</span>.
            <br />
            Whether you're visiting for a routine check-up, urgent medical care,
            or ongoing chronic disease management, our team is ready to walk the
            journey of wellness with you.
          </p>

          <p className="mt-8 md:mt-12 text-start">
            <button
              type="button"
              className="py-4 px-12 bg-sky-500 hover:bg-sky-600 rounded text-white transition-colors"
            >
              Book an Appointment
            </button>
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 text-start">
            Compassionate Care and Quality Life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center"
        >
          <Image
            src="/bed.jpg"
            alt="Landing page visual"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
