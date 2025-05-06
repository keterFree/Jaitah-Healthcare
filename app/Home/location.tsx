"use client";
export default function LocationSection() {
  return (
    <section className="w-full bg-sky-100 dark:bg-gray-800 py-2 px-4 text-center">
      {/* <h2 className="font-semibold text-gray-800 dark:text-gray-100">
        Visit Us
      </h2> */}
      <div className="flex gap-4 flex-col-reverse items-center lg:flex-row lg:items-start lg:justify-center lg:space-x-2">
        {/* Image */}
        <div className="w-full max-w-md h-96 lg:max-w-sm relative min-h-80 rounded shadow dark:shadow-gray-700 overflow-hidden">
          
          <img
            src="/premise.jpg"
            alt="Location"
            className="object-cover w-full h-full rounded"
          />
        </div>

        {/* Map */}
        <div className="w-full mt-8 md:mt-0 lg:mt-0 h-96 rounded shadow dark:shadow-gray-700 overflow-hidden">
          <iframe
            title="Google Map Location"
            className="w-full h-full rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6403895997255!2d35.299008758897656!3d0.5411132654125462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781059c24e63529%3A0x9d9875d8cd5b913b!2sJaitah%20Memorial%20Healthcare%20LTD!5e0!3m2!1sen!2ske!4v1744034139474!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
