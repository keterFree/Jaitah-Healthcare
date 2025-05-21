"use client";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  const services = [
    {
      title: "General Medical Check-ups",
      description:
        "Routine check-ups and treatment for various health concerns to maintain overall well-being.",
    },
    {
      title: "Chronic Disease Management",
      description:
        "Care for chronic conditions such as diabetes, hypertension, and cardiovascular diseases.",
    },
    {
      title: "Maternal & Child Health Services",
      description:
        "Antenatal/postnatal care, family planning, and child immunization.",
    },
    {
      title: "Emergency & Minor Procedures",
      description:
        "24/7 emergency stabilization, minor surgical procedures, and first aid.",
    },
    {
      title: "Diagnostics & Imaging",
      description:
        "Lab testing and imaging for accurate diagnosis and health screenings.",
    },
    {
      title: "Inpatient & Short-Stay Care",
      description:
        "Observation beds and short-stay admissions for acute conditions.",
    },
    {
      title: "Specialized Clinics & Rehab",
      description:
        "Physiotherapy, mental health, dermatology, and chronic care clinics.",
    },
    {
      title: "Comprehensive Medical Services",
      description:
        "General consultations and infectious disease prevention strategies.",
    },
    {
      title: "Pharmacy Services",
      description:
        "Prescription & OTC meds, chronic condition meds, and vaccines.",
    },
  ];

  return (
    <section className="relative w-full dark:bg-gray-800 bg-sky-50">
      <div className="absolute inset-0 bg-[url(/pattern5.png)] bg-repeat opacity-100"></div>
      <div className="relative bg-sky-50/75 dark:bg-gray-800/75 dark:bg-opacity-80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className={`container mx-auto px-2 p-3 ${poppins.className}`} // Applying Poppins font
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header */}
            <div className="flex flex-col items-center md:flex-row w-full justify-center">
             
              <motion.div
                className="mb-4 text-center"
                variants={headerVariants}
              >
                <h4 className="text-base text-sky-600 dark:text-sky-300 font-semibold tracking-wide uppercase">
                  Services
                </h4>
                <p className=" text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                  What we offer
                </p>
              </motion.div>
            </div>
            {/* Grid */}
            <motion.div
              className="flex flex-wrap my-12"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`border-sky-400 hover:bg-sky-200/50 hover:text-xl transition-all duration-700 dark:border-sky-700 w-full border-b md:w-1/2 lg:w-1/3 ${
                    (index + 1) % 3 !== 0 ? "lg:border-r" : ""
                  } ${index < 3 ? "lg:border-b" : ""} ${
                    index > 5 ? "lg:border-b-0" : ""
                  } p-8`}
                >
                  <div className="flex md:items-center items-start mb-2">
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
                    <div className="ml-4 text-xl text-start text-gray-900 dark:text-white">
                      {service.title}
                    </div>
                  </div>
                  <p className="text-start text-sky-900 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
