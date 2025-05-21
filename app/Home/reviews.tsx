"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "swiper/css";
import { motion } from "framer-motion";

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const testimonials = [
  {
    name: "David Mwenda",
    comment:
      "I was impressed by the cleanliness and organization of the facility. Highly recommend for anyone seeking care.",
    avatar: "/patients/p (4).jpg",
  },
  {
    name: "Fatima Abdi",
    comment:
      "The pediatric care was exceptional. My child was treated with kindness and expertise.",
    avatar: "/patients/p (2).jpg",
  },
  {
    name: "Peter Kamau",
    comment:
      "I appreciate the holistic approach to healthcare. The staff truly cares about the well-being of their patients.",
    avatar: "/patients/p (5).jpg",
  },
  {
    name: "Samuel Otieno",
    comment:
      "I had a wonderful experience during my stay. The nurses were attentive and the doctors explained everything clearly.",
    avatar: "/patients/p (6).jpg",
  },
  {
    name: "Lydia Wambui",
    comment:
      "The emergency services were prompt and efficient. I felt safe and cared for during my visit.",
    avatar: "/patients/p (1).jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <div
      className={`w-full pt-10 md:pt-4 dark:bg-gray-800 bg-sky-50 ${poppins.className}`}
    >
      <div className="md:p-5 lg:w-4/5 mx-auto md:pb-10 pb-3 px-4 w-full flex justify-around items-center flex-col bg-transparent text-center">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
          What our patients say
        </h2>
        <h2 className="text-xs mb-4 md:block hidden">
          Auto rotates every few seconds
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4500 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full mt-6"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; comment: string; avatar: string };
}) => {
  return (
    <div className="rounded-lg bg-sky-100 p-6 shadow-lg border-y-2 dark:bg-gray-800 border-blue-400 transition-all duration-300 mx-2">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-6">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-lg italic dark:text-white text-gray-700">
            "{testimonial.comment}"
          </p>
          <p className="text-sm font-semibold dark:text-sky-400 italic text-gray-900">
            — {testimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
