"use client";
import { motion } from "framer-motion";

export default function ServicesOverview() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const labTests = [
    "Malaria",
    "Urinalysis",
    "Vidal Test",
    "Brucella",
    "Stool Microscopy",
    "Pregnancy Test & Confirmatory",
    "HIV",
    "VDRL/PRR",
    "Hepatitis B (HBsAg)",
    "Blood Sugar",
    "Haemoglobin (HB)",
    "ESR",
    "ASOT",
    "Rheumatoid Factor",
    "Helicobacter Pylori Ag, Ab",
    "Complete Blood Count (CBC)",
    "Full Haemogram",
    "UEC's",
    "Liver Function Tests",
    "Blood Grouping",
    "Salmonella Typhi Ag",
    "X-Ray Imaging",
  ];

  const trainingRoles = [
    { icon: "🩺", title: "Care Givers" },
    { icon: "👩‍⚕️", title: "Nurse Aides" },
    { icon: "🤝", title: "Support Workers" },
    { icon: "💉", title: "Health Care Assistants" },
    { icon: "🏥", title: "Certified Nurse Assistants" },
    { icon: "🫶", title: "Social Workers" },
    { icon: "🧍", title: "Patients Attendants" },
    { icon: "🌟", title: "Special Medical Services" },
  ];

  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-sky-100 text-gray-800 py-20 px-6 md:px-12 font-[Poppins] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Comprehensive Care
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-sky-700">
              Additional Medical Services
            </h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed pl-15">
            Physiotherapy devices, Dental Services, Optical Services, and
            Orthopedic Services – comprehensive care under one roof.
          </p>
        </motion.div>

        {/* Laboratory Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl p-10 shadow-2xl text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Laboratory Services</h3>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {labTests.map((test, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-sm hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sky-200">✓</span>
                  {test}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-6 text-sky-100 text-sm italic">
            ...and many more specialized diagnostic tests available
          </p>
        </motion.div>

        {/* Training Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 bg-gradient-to-br from-white to-sky-50 rounded-3xl p-10 shadow-xl border-2 border-sky-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-sky-800 mb-3">
              Attachment & Training Programs
            </h3>
            <p className="text-gray-600 text-lg">
              Professional development opportunities for healthcare workers
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {trainingRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-sky-100"
              >
                <span className="text-3xl">{role.icon}</span>
                <span className="text-gray-700 font-medium">{role.title}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="bg-gradient-to-r from-sky-100 to-sky-200 rounded-2xl p-6 border-l-4 border-sky-600">
            <p className="text-sky-800 font-bold text-lg flex items-center gap-3">
              <svg
                className="w-6 h-6 text-sky-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              We conduct Medical Tests for workers going to the Middle East
            </p>
          </div>
        </motion.div>

        {/* Free BP Check Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-10 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider">
                Special Offer
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              FREE Blood Pressure Check Every Friday!
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sky-100">
              <span className="flex items-center gap-2 text-lg">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Inside Sportlink Hawaii – Eldoret
              </span>
              <span className="hidden md:block text-sky-300">|</span>
              <span className="flex items-center gap-2 text-lg font-semibold">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+254726755030"
                  className="hover:text-white transition-colors"
                >
                  +254 726 755 030
                </a>
                <span className="text-sky-300">/</span>
                <a
                  href="tel:+254707888486"
                  className="hover:text-white transition-colors"
                >
                  +254 707 888 486
                </a>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-2xl italic text-gray-700 font-medium">
            <span className="text-sky-600">"</span>
            Where Compassion Meets Quality Care
            <span className="text-sky-600">"</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
