"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Austra = () => {
  return (
    <div className={`bg-sky-50 dark:bg-gray-700 ${poppins.className} w-full`}>
      <div className={`bg-sky-100 dark:bg-gray-800 py-8 ${poppins.className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse gap-4 md:flex-row -mx-4">
            {/* Product Image */}
            <div className="md:flex-1 px-4">
              <div className="h-[460px] relative rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden">
                <Image
                  src="/nurse-aide.jpg"
                  alt="nurse-aide"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300">
                    Visit Our Partners
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
                    More on Our services
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:flex-1 px-4 flex flex-col justify-evenly">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-start">
                Our Educational partnerships
              </h2>
              <p className="text-2xl mt-2 md:text-2xl font-semibold text-gray-800 dark:text-gray-200 text-start">
                Empowering{" "}
                <span className="text-sky-600">
                  Future Healthcare Professionals
                </span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-start">
                We are proud to collaborate
                with <strong>Austra Training Institute</strong> and{" "}
                <strong>64 college of professional studies</strong> in nurturing
                the next generation of healthcare professionals.
                <br />
                This strategic partnership offers students a unique opportunity
                for hands-on experience through structured{" "}
                <strong>clinical attachments and rotations</strong> at our Level
                3A facility.
              </p>
              <div className="flex justify-evenly items-center">
                <img
                  src="/partners/austra3.png"
                  className="max-w-1/2 border-r pr-2 border-sky-200 max-h-28"
                />
                <img src="/partners/64.png" className="max-w-1/2 max-h-24" />
              </div>
              {/* Description */}
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-start">
                  Together, we build a healthier future through education and
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Austra;
