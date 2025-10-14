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
      title: "Outpatient & Inpatient Consultations",
      description:
        "Comprehensive general medicine consultations for all age groups with dedicated care.",
    },
    {
      title: "Pharmacy Services",
      description:
        "Affordable and available medicines, prescription & OTC medications, and vaccines.",
    },
    {
      title: "Maternal & Child Health",
      description:
        "Antenatal & postnatal care, safe delivery services, child immunization, and family planning.",
    },
    {
      title: "Chronic Disease Clinics",
      description:
        "Specialized care for hypertension, diabetes, HIV care & counseling, plus nutrition and lifestyle guidance.",
    },
    {
      title: "Emergency & First Aid",
      description:
        "24/7 emergency care for injuries, sprains, fractures, IV fluids, and injections.",
    },
    {
      title: "Minor Procedures",
      description:
        "Minor injury treatment, circumcision services, and other outpatient procedures.",
    },
    {
      title: "Pediatric & Youth-Friendly Services",
      description:
        "Specialized care designed for children and adolescents in a comfortable environment.",
    },
    {
      title: "Counseling & VCT Services",
      description:
        "Professional counseling and voluntary HIV counseling and testing services.",
    },
    {
      title: "Gynecare Services",
      description:
        "Comprehensive women's health services including reproductive health and gynecological care.",
    },
    {
      title: "Home Based Care",
      description:
        "Quality healthcare services delivered in the comfort of your home for those who need it.",
    },
    {
      title: "Specialized Services",
      description:
        "Physiotherapy, dental care, optical services, and orthopedic consultations.",
    },
    {
      title: "Laboratory Services",
      description:
        "Comprehensive lab testing: Malaria, urinalysis, pregnancy tests, HIV, hepatitis B, blood sugar, CBC, liver function, X-ray imaging and more.",
    },
  ];

  const additionalServices = [
    {
      title: "Medical Tests for Overseas Workers",
      description:
        "Complete medical examinations and certifications for workers going to the Middle East.",
      highlight: true,
    },
    {
      title: "Attachment & Training Programs",
      description:
        "Professional training for caregivers, nurse aides, support workers, healthcare assistants, certified nurse assistants, social workers, and patient attendants.",
      highlight: true,
    },
  ];

  return (
    <section className="relative w-full dark:bg-gray-800 bg-sky-50">
      <div className="absolute inset-0 bg-[url(/pattern5.png)] bg-repeat opacity-100"></div>
      <div className="relative bg-sky-50/75 dark:bg-gray-800/75 dark:bg-opacity-80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className={`container mx-auto px-2 p-3 ${poppins.className}`}
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
                  Our Services
                </h4>
                <p className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                  What we offer
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                  Affordable & Quality Healthcare Near You
                </p>
              </motion.div>
            </div>

            {/* Main Services Grid */}
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
                    index > 8 ? "lg:border-b-0" : ""
                  } p-8`}
                >
                  <div className="flex md:items-center items-start mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="h-6 w-6 text-sky-500 dark:text-sky-300 flex-shrink-0"
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

            {/* Additional Services - Highlighted Section */}
            <motion.div className="my-12" variants={containerVariants}>
              <motion.h3
                variants={headerVariants}
                className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
              >
                Special Programs
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-sky-100/80 dark:bg-sky-900/30 border-2 border-sky-400 dark:border-sky-600 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sky-900 dark:text-gray-300">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Free Service Banner */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-sky-500 to-sky-600 dark:from-sky-700 dark:to-sky-800 rounded-lg p-8 text-center my-12 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-white mb-2">
                FREE Blood Pressure Check Every Friday!
              </h3>
              <p className="text-sky-100 text-lg">
                Join us for complimentary health screenings
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="text-center pb-12">
              <p className="text-gray-900 dark:text-white text-lg mb-4">
                Helpline:{" "}
                <a
                  href="tel:+254726755030"
                  className="text-sky-600 dark:text-sky-400 hover:underline"
                >
                  +254 726 755 030
                </a>{" "}
                /{" "}
                <a
                  href="tel:+254707888486"
                  className="text-sky-600 dark:text-sky-400 hover:underline"
                >
                  +254 707 888 486
                </a>
              </p>
              <p className="text-sky-700 dark:text-sky-300 text-xl font-semibold italic">
                "Where Compassion Meets Quality Care"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
