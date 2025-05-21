"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "swiper/css";

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const partners = [
  { name: "Kenya Red Cross", logo: "/partners/redCross.png" },
  { name: "Austra Training institute", logo: "/partners/austra3.png" },
  { name: "64 collage of professional studies", logo: "/partners/64.png" },
  // { name: "Social Health Authority Kenya", logo: "/partners/sha.svg" },
  { name: "Ministry of Health", logo: "/partners/moh.png" },
  { name: "AMREF Health Africa", logo: "/partners/amref.png" },
  { name: "Pathfinder International", logo: "/partners/pathfinder.png" },
  { name: "UNICEF", logo: "/partners/unicef.jpeg" },
];

const PartnersSection = () => {
  return (
    <div
      className={`w-full bg-sky-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 ${poppins.className}`}
    >
      <div className="text-center">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
          Our Partners
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Trusted Healthcare Collaborators
        </p>
      </div>

      {/* Swiper Carousel - Only shows one partner on small screens */}
      <div className="mt-12 md:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={1}
          className="w-full max-w-xs"
        >
          {partners.map((partner, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={180}
                className="object-contain h-full flex justify-center items-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid on medium and up */}
      <div className="hidden md:grid mt-12 grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="flex justify-center group items-center opacity-80 hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain group-hover:scale-105 transition-all duration-700"
            />
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto text-center">
        Together with our partners, we ensure access to quality healthcare for
        all.
      </p>
    </div>
  );
};

export default PartnersSection;
