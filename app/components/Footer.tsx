"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";

// Load the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <div
      className={`${poppins.className} border-t border-sky-900/15 self-center w-full px-4 pt-16 bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-sky-50 to-blue-50 min-h-96 text-white md:max-w-full lg:px-8 bg-opacity-90`}
    >
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Jaitah Memorial Healthcare Ltd"
            className="inline-flex items-center"
          >
            <img
              src="/jaitah-red.png"
              alt="Logo"
              className="w-auto h-16 md:h-24 px-2 border-r-2 border-sky-400"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-gray-100">
              Jaitah Memorial Healthcare
              <br />
              <span className="text-xs md:text-sm text-sky-600">
                Compassionate Care and Quality Life
              </span>
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Providing compassionate, affordable healthcare services with
              modern facilities and experienced professionals.
            </p>
            <p className="mt-4 text-sm text-gray-800 dark:text-gray-300">
              Located alongside Eldoret-Iten Road at Sportlink,Hawaii centre –
              Open <span className="font-bold text-sky-500">24/7</span> for your
              wellness and emergency needs.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-200">
            Contact Us
          </p>
          <div className="flex flex-col">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Phone:</p>
            <a
              href="tel:+254712345678"
              className="text-blue-500 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              +(254) 726 755 030
            </a>
          </div>
          <div className="flex flex-col">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Email:</p>
            <a
              href="mailto:info@jaitahmemorialhealthcareltd.co.ke"
              className="text-blue-500 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              info@jaitahmemorialhealthcareltd.co.ke
            </a>
          </div>
          <div className="flex flex-col">
            <p className="mr-1 text-gray-800 dark:text-gray-300">Location:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Sportlink,Hawaii centre, Eldoret, Kenya
            </a>
          </div>
          <p className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-200">
            External links
          </p>
          <a
            href="https://austratraininginstitute.co.ke/"
            className="text-blue-500 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Austra Training Institute
          </a>
          <br />
          <a
            href="https://aussizeducationandtraining.net/"
            className="text-blue-500 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Aussiz Education and Training
          </a>
          <br />
          <a
            href="https://www.sixtyfourcollegeofprofessional.co.ke/"
            className="text-blue-500 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            64 College of Professional Studies
          </a>
        </div>
        <div>
          <div className="max-w-32">
            <Image
              src="/footer.png"
              alt="Hospital"
              width={32}
              height={32}
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
          <span className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-200">
            Follow Us
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-red-500 transition-colors duration-300 hover:text-blue-500"
            >
              {/* Facebook */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.4c0-3.1,1.9-4.8,4.7-4.8c1.3,0,2.5,0.1,2.8,0.1v3.2h-2c-1.5,0-1.8,0.7-1.8,1.8V11h4.4l-1,4h-3.4v9H22c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-red-500 transition-colors duration-300 hover:text-blue-500"
            >
              {/* Instagram */}
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Dedicated to your health and healing. Your care is our mission.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-sky-600 lg:flex-row dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Jaitah Memorial Healthcare Ltd. All rights reserved.
          <br />
          <a className="text-xs text-blue-400" href="https://ketertitus.info/">
            developed by ketertitus
          </a>
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
