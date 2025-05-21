"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const Welcome = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-fixed w-full bg-cover bg-center bg-no-repeat py-2 px-2 sm:px-8 md:px-16 lg:px-24 dark:bg-gray-900"
      style={{
        backgroundImage: "url('/glove.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-slate-800/80 z-0" />

      <motion.div
        variants={staggerContainer}
        className="relative z-10 max-w-screen-xl mx-auto lg:py-16 lg:px-6"
      >
        <div className="flex">
          <motion.div
            className="w-32 h-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
          >
            <Image
              src="/stats.png"
              alt="Our core values"
              width={50}
              height={50}
              className="object-contain w-32 object-center h-full"
              priority
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="border-b-4 mb-10 border-sky-400 text-center mx-auto w-full"
          >
            <h2
              className={`text-4xl tracking-tight font-bold text-sky-800 dark:text-white ${poppins.className}`}
            >
              Our core values
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col-reverse items-center md:flex-row">
          {/* Left Image */}
          <motion.div
            variants={fadeInUp}
            className="mr-0 md:mr-8 mb-6 md:mb-0 md:max-w-5/12"
          >
            <motion.img
              src="/dental.jpg"
              alt="can_help_banner"
              className="md:w-full mx-auto hidden md:block rounded shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col sm:flex-row flex-wrap mb-2"
          >
            {[
              {
                title: "Patient-Centered Care",
                description:
                  "At Jaitah Memorial Healthcare Ltd, we prioritize the needs, comfort, and overall well-being of our patients. Our dedicated team ensures that every individual receives personalized attention and care tailored to their unique health requirements.",
              },
              {
                title: "Excellence & Professionalism",
                description:
                  "We are committed to maintaining the highest standards of care across all our services. Our medical and support teams are highly trained professionals who deliver exceptional healthcare with integrity and respect.",
              },
              {
                title: "Innovation in Healthcare",
                description:
                  "We leverage the latest technology and medical advancements to enhance treatment outcomes. Our facility is equipped with state-of-the-art diagnostic tools and treatment options, ensuring that our patients receive the best possible care.",
              },
              {
                title: "Community Empowerment",
                description:
                  "Jaitah Memorial Healthcare Ltd actively promotes health education and outreach programs to empower our community. We believe in preventive healthcare initiatives and work closely with local organizations to improve healthcare accessibility for all.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="w-full sm:w-1/2 mb-2 px-2 "
              >
                <div className="hover:bg-sky-500/50 group transition-all h-full py-6 px-6 border border-sky-500 border-t-0 border-l-0 rounded-br-xl bg-white/20 dark:bg-slate-900/20 duration-300">
                  <h3
                    className={` group-hover:text-3xl transition-all duration-700 group-hover:text-white text-2xl font-semibold tracking-wide text-sky-600 dark:text-white mb-4 ${poppins.className}`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed font-light text-end">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Welcome;
