'use client';

import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

type StaffProfileProps = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email?: string;
  phone?: string;
};

export default function StaffProfileCard({
  name,
  title,
  bio,
  imageUrl,
  email,
  phone,
}: StaffProfileProps) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto my-8 rounded-3xl shadow-xl overflow-hidden px-4
        bg-gradient-to-tr from-white via-[#f9fdfd] to-[#e6f7fb] 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 
        border border-[#d0eaf2] dark:border-gray-600 
        hover:shadow-2xl transition duration-300 ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 relative">
          <div className="relative w-full h-72 md:h-full">
            <Image
              src={imageUrl}
              alt={`${name}'s photo`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between 
          text-gray-800 dark:text-gray-100">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f4c75] dark:text-blue-300 mb-1">
              {name}
            </h2>
            <p className="text-md md:text-lg font-medium text-[#3282b8] dark:text-blue-400">
              {title}
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {bio}
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-[#00adb5] dark:hover:text-teal-400 transition"
              >
                <Mail size={18} /> {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 hover:text-[#00adb5] dark:hover:text-teal-400 transition"
              >
                <Phone size={18} /> {phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
