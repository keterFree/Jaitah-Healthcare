"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import {
  MdPeopleAlt,
  MdVerifiedUser,
  MdMedicalServices,
  MdLocalHospital,
  MdEmergency,
  MdFavorite,
} from "react-icons/md";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const reasons = [
  {
    title: "Trusted Community Health Partner",
    description:
      "We have built a strong relationship with the community, offering patient-centered care that truly makes a difference.",
    icon: <MdPeopleAlt className="h-10 w-10 text-sky-600 dark:text-sky-400" />,
  },
  // {
  //   title: "NHIF & Private Insurance Accepted",
  //   description:
  //     "We accept NHIF and a wide range of private insurance covers, making healthcare more accessible and affordable.",
  //   icon: (
  //     <MdVerifiedUser className="h-10 w-10 text-sky-600 dark:text-sky-400" />
  //   ),
  // },
  {
    title: "Integrity & Ethical Practice",
    description:
      "We adhere to strict ethical guidelines in all medical procedures and interactions",
    icon: (
      <MdVerifiedUser className="h-10 w-10 text-sky-600 dark:text-sky-400" />
    ),
  },
  {
    title: "Experienced & Friendly Medical Staff",
    description:
      "Our team of skilled medical professionals is dedicated to providing care with expertise, warmth, and compassion.",
    icon: (
      <MdMedicalServices className="h-10 w-10 text-sky-600 dark:text-sky-400" />
    ),
  },
  {
    title: "Modern Equipment & Clean Facility",
    description:
      "Our facility is well-maintained and equipped with modern tools to support accurate diagnosis and treatment.",
    icon: (
      <MdLocalHospital className="h-10 w-10 text-sky-600 dark:text-sky-400" />
    ),
  },
  {
    title: "24/7 Emergency Services",
    description:
      "We’re available around the clock to handle emergencies with efficiency and urgency.",
    icon: <MdEmergency className="h-10 w-10 text-sky-600 dark:text-sky-400" />,
  },
  {
    title: "Focus on Compassionate, Ethical Care",
    description:
      "We uphold strong ethical values and always prioritize the dignity and respect of every patient we serve.",
    icon: <MdFavorite className="h-10 w-10 text-sky-600 dark:text-sky-400" />,
  },
];

const WhyUs = () => {
  return (
    <section
      className={`bg-sky-100 dark:bg-gray-900 py-3 pt-10 px-6 sm:px-12 transition-colors duration-300 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-sky-100"
        >
          Why Choose Us?
        </motion.h2>
      </div>

      <div className="-mx-4 flex flex-wrap justify-center">
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="w-full px-4 md:w-1/2 lg:w-1/3"
          >
            <div className="mb-9 rounded-xl py-6 px-7 bg-transparent dark:bg-gray-800 shadow-md hover:shadow-lg transition-all sm:p-9 lg:px-6 xl:px-9 text-center">
              <div className="mb-5 flex justify-start ">{item.icon}</div>
              <h3 className="mb-4 text-xl text-start  font-semibold text-gray-900 dark:text-sky-50">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 text-start dark:text-gray-300 font-normal">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
