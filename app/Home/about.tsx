import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const About = () => {
  return (
    <div className={`w-full md:py-24 bg-sky-50 p-2 dark:bg-gray-800 ${poppins.className}`}>
      <div className="flex flex-col lg:w-4/5 md:mx-auto">
        <div className="w-full md:w-4/5 md:mx-auto text-center pt-3 py-4 md:!px-0">
          <h1 className="text-3xl mt-2 md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
            We <span className="text-sky-600">Care</span>
          </h1>
          <p className="md:text-xl md:text-center text-start text-sm font-thin mb-4 mt-4 text-gray-500 dark:text-gray-100">
            Jaitah Memorial Healthcare Ltd is a Level 3A healthcare facility
            dedicated to comprehensive and patient-centered medical services.
            Established to bridge the gap in accessible healthcare, our facility
            provides outpatient, diagnostic, maternal, pediatric, and minor
            surgical care, ensuring that patients receive timely, high-quality
            treatment in a well-equipped and welcoming environment.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center py-6 gap-8">
          {/* Mission */}
          <div className="group w-full md:w-1/3 flex flex-col justify-between items-center shadow-md dark:shadow-lg border-b-4 border-sky-600 border-y hover:bg-sky-600 py-12 px-6 rounded-md transition-all duration-500">
            <Image
              src="/mission.png"
              alt="Mission"
              width={56}
              height={56}
              className="group-hover:w-44 w-40 transition-all duration-1000"
            />
            <h1 className="group-hover:text-4xl transition-all duration-1000 text-2xl mt-4 font-semibold text-gray-800 dark:text-gray-400 group-hover:text-white">
              Our Mission
            </h1>
            <p className="font-light md:font-thin mb-4 mt-4 text-gray-500 dark:text-gray-100 group-hover:text-white dark:group-hover:text-gray-200">
              To provide holistic, affordable, and high-quality healthcare
              services that improve the well-being of our community.
            </p>
            <h4 className="mt-2 font-semibold text-gray-800 dark:text-gray-400 group-hover:text-white cursor-pointer">
              Read more
            </h4>
          </div>

          {/* Vision */}
          <div className="group w-full md:w-1/3 flex flex-col justify-between items-center shadow-md dark:shadow-lg border-b-4 border-sky-600 border-y hover:bg-sky-600 py-12 px-6 rounded-md transition-all duration-500">
            <Image
              src="/vision.png"
              alt="Vision"
              width={56}
              height={56}
              className="group-hover:w-44 w-40 transition-all duration-1000"
            />
            <h1 className="group-hover:text-4xl transition-all duration-1000 text-2xl mt-4 font-semibold text-gray-800 dark:text-gray-400 group-hover:text-white">
              Our Vision
            </h1>
            <p className="font-light md:font-thin mb-4 mt-4 text-gray-500 dark:text-gray-100 group-hover:text-white dark:group-hover:text-gray-200">
              To become a leading regional healthcare provider, known for
              medical excellence and compassionate care.
            </p>
            <h4 className="mt-2 font-semibold text-gray-800 dark:text-gray-400 group-hover:text-white cursor-pointer">
              Read more
            </h4>
          </div>

          {/* Values */}
          <div className="group w-full md:w-1/3 flex flex-col justify-between items-center shadow-md dark:shadow-lg border-b-4 border-sky-600 border-y hover:bg-sky-600 py-12 px-6 rounded-md transition-all duration-500">
            <Image
              src="/values.png"
              alt="Values"
              width={56}
              height={56}
              className="group-hover:w-36 w-32 transition-all duration-1000"
            />
            <h1 className="group-hover:text-4xl transition-all duration-1000 text-2xl mt-4 font-semibold text-gray-800 dark:text-gray-400 group-hover:text-white">
              Our Values
            </h1>
            <p className="font-light md:font-thin mb-4 mt-4 text-gray-500 dark:text-gray-100 group-hover:text-white dark:group-hover:text-gray-200">
              We believe in integrity, compassion, accountability, and teamwork
              in delivering exceptional health services.
            </p>
            <h4 className="mt-2 font-semibold text-gray-800 dark:text-gray-400 group-hover:text-white cursor-pointer">
              Read more
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
