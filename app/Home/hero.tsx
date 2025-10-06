"use client";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <section
      className="w-full relative text-gray-600 dark:text-gray-200 body-font pt-32 md:pt-24 pb-4 dark:bg-black bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/reception.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/95 bg-gradient-to-br dark:from-gray-900 dark:to-black dark:opacity-80 z-0 " />

      <div className="relative w-full flex md:px-10 md:py-2 md:flex-row flex-col h-full justify-end items-center min-h-screen">
        {/* Left Column - Text and Logo */}
        <motion.div
          className="w-full h-full sm:min-w-8/12 dark:text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto h-full sm:pr-10">
            {/* Nav */}
            <nav className="flex px-4 justify-between items-center">
              <motion.div
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Jaitah<span className="text-sky-700">.</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <img
                  src="/hospitalIcon.png"
                  alt="Hospital Icon"
                  className="w-8"
                />
              </motion.div>
            </nav>

            {/* Hero Text */}
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full ">
                <motion.h1
                  className={`${poppins.className} text-4xl text-start lg:text-6xl font-bold`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Welcome to{" "}
                  <span className="text-sky-700 text-start">
                    Jaitah Memorial Healthcare Ltd
                  </span>
                </motion.h1>

                <motion.h2
                  className={`${poppins.className} text-start text-2xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Compassionate Care and Quality Life
                </motion.h2>

                <div className="w-20 h-2 bg-sky-700 my-4" />

                <motion.p
                  className={`${poppins.className} text-xl text-start mb-2`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Providing quality, compassionate, and accessible healthcare to
                  our community.
                </motion.p>

                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-32 h-32"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65 }}
                  >
                    <Image
                      src="/24.png"
                      alt="24/7"
                      width={32}
                      height={32}
                      className="object-contain object-center w-full h-full"
                      priority
                    />
                  </motion.div>

                  <div className="flex flex-col">
                    <motion.b
                      className={`${poppins.className} text-lg mb-2 font-semibold text-start text-sky-600`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Emergency Contact:{" "}
                      <span className="md:inline block">
                        +254 726 755 030/+254 707 888 486{" "}
                      </span>
                    </motion.b>

                    <motion.b
                      className={`${poppins.className} text-lg mb-2 font-semibold text-start text-sky-600`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      (24/7 Emergency Services)
                    </motion.b>
                  </div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 my-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {["Get in touch", "Visit Us", "NHIF & Insurance"].map(
                    (text, index) => (
                      <motion.button
                        key={text}
                        className={`${
                          index === 0
                            ? "bg-sky-600 text-white hover:bg-sky-700"
                            : "bg-white text-sky-700 border border-sky-600 hover:bg-sky-50"
                        } text-lg font-medium px-4 py-2 rounded shadow transition`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {text}
                      </motion.button>
                    )
                  )}
                </motion.div>
              </div>
            </header>
          </div>
        </motion.div>

        {/* Right Column - Video */}
        <motion.div
          className="lg:max-w-lg lg:w-full mb-5 md:mb-0 w-full overflow-hidden dark:hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            className="w-full h-full object-contain md:rounded"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full mb-5 md:mb-0 w-full overflow-hidden md:dark:block hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/light-logo-bg.png"
            alt="Jaitah Logo"
            width={500}
            height={500}
            className="w-full h-full object-contain md:rounded"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
