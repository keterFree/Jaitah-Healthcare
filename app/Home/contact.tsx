"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className={`${poppins.className} bg-gradient-to-r p-3 dark:from-gray-900 dark:to-gray-800 from-sky-50 to-sky-100 `}
    >
      <div className="h-full md:hidden">
        <Image
          src="/contact.png"
          alt="Get in touch"
          width={32}
          height={32}
          className="max-h-24 object-contain w-full h-full"
          priority
        />
      </div>
      <h2 className="text-4xl font-bold mb-4 md:text-center text-start">
        Contact Us
      </h2>
      <p className="mb-6 text-gray-600 dark:text-white md:text-center text-start">
        Feel free to use the form or drop us an email. Old-fashioned phone calls
        work too.
      </p>
      <div className="md:flex md:justify-center md:items-start md:space-x-16">
        {/* Contact Details */}
        <ul className="mb-6 md:max-w-1/3 md:mb-0 space-y-6">
          <div className="flex md:items-end md:flex-row flex-col items-start">
            {" "}
            <div className="h-full">
              <Image
                src="/contact.png"
                alt="Get in touch"
                width={32}
                height={32}
                className="px-1  object-contain md:min-w-36 h-full hidden md:block"
                priority
              />
            </div>
            <p className="md:text-start text-center md:block hidden">
              We’re here to support your health and well-being. Whether you need
              to book an appointment, ask a question, or speak with one of our
              professionals — don’t hesitate to reach out.
            </p>
          </div>
          {/* Address */}
          <li className="flex items-start md:flex-row flex-col">
            <div className="flex ml-5 md:ml-0 items-center justify-center w-12 h-12 rounded-xl bg-sky-600 dark:bg-sky-600 text-white shadow-lg">
              {/* Map Pin Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-start">
                Our Address:
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-start">
                Alongside Eldoret-Iten Road
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-start">
                Sportlink,Hawaii centre
              </p>
            </div>
          </li>

          {/* Contact */}
          <li className="flex items-start md:flex-row flex-col">
            <div className=" ml-5 md:ml-0 flex items-center justify-center w-12 h-12 rounded-xl bg-sky-600 dark:bg-sky-600 text-white shadow-lg">
              {/* Phone Call Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-start">
                Contact
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-start">
                +(254) 726 755 030
              </p>
              <p className="text-gray-600 dark:text-slate-400 text-start">
                info@jaitahmemorialhealthcareltd.co.ke
              </p>
            </div>
          </li>

          {/* Working Hours */}
          <li className="flex items-start md:flex-row flex-col">
            <div className="flex ml-5 md:ml-0 items-center justify-center w-12 h-12 rounded-xl bg-sky-600 dark:bg-sky-600 text-white shadow-lg">
              {/* Clock Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-start">
                Working Hours
              </h3>
              <p className="text-sky-600 font-bold dark:text-slate-400 text-start">
                24/7 (All day, Everyday)
              </p>
            </div>
          </li>
        </ul>
        <div className="md:max-w-1/2 md:mt-10">
          <form onSubmit={handleSubmit} className="mt-10 md:mt-0 space-y-6">
            <div className="flex md:flex-row flex-col gap-2 max-w-screen justify-between">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full   p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="07x-xxx-xxxx"
              value={formData.phone}
              onChange={handleChange}
              className="w-full   p-3 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Type your message ..."
              value={formData.message}
              onChange={handleChange}
              className="w-full   p-3 border border-gray-300 rounded h-32 resize-none"
              required
            ></textarea>
            <div className="flex w-full justify-end gap-10">
              {/* Email Button */}
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
              >
                {/* Mail Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" stroke="none" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                Email
              </button>

              {/* WhatsApp Button */}
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.52-.075-.149-.67-1.612-.917-2.212-.242-.582-.487-.503-.67-.513l-.572-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.48c0 1.465 1.065 2.875 1.213 3.073.149.198 2.1 3.2 5.077 4.487.71.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.273-.198-.57-.347z" />
                  <path
                    fillRule="evenodd"
                    d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.767.462 3.423 1.267 4.874L2 22l5.267-1.386A9.964 9.964 0 0012.04 22c5.523 0 10-4.477 10-10s-4.478-10-10-10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8a7.966 7.966 0 01-3.938-1.05l-.28-.162-3.128.824.832-3.042-.174-.31A7.962 7.962 0 014.04 12c0-4.418 3.582-8 8-8z"
                    clipRule="evenodd"
                  />
                </svg>
                Whatsapp
              </button>
            </div>
          </form>
          <p className="text-start py-10 block md:hidden">
            We’re here to support your health and well-being. Whether you need
            to book an appointment, ask a question, or speak with one of our
            professionals — don’t hesitate to reach out.
          </p>
        </div>
      </div>
    </div>
  );
}
