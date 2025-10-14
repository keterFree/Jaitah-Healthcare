"use client";

import Image from "next/image";
import {
  Briefcase,
  Users,
  ShieldCheck,
  Mail,
  Phone,
  Award,
  Target,
} from "lucide-react";

export default function LeadershipGovernance() {
  return (
    <section
      id="leadership"
      className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-gray-900 py-10 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full px-5 py-2 text-sm font-semibold shadow-sm">
            <Briefcase className="h-4 w-4" />
            Leadership & Governance
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Leadership &{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Governance
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-6xl mx-auto leading-relaxed">
            Our leadership ensures that we remain focused on{" "}
            <strong className="text-slate-900 dark:text-white">
              patient safety
            </strong>
            ,{" "}
            <strong className="text-slate-900 dark:text-white">
              service quality
            </strong>
            , and{" "}
            <strong className="text-slate-900 dark:text-white">
              innovation
            </strong>{" "}
            — upholding our commitment to compassionate healthcare.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
          <LeadershipCard
            icon={<Users className="h-6 w-6" />}
            title="Board of Directors"
            description="A team of seasoned professionals providing strategic guidance, governance, and institutional oversight — ensuring Jaitah Memorial Healthcare remains accountable and future-focused."
            gradient="from-sky-500 to-sky-600"
          />

          <LeadershipCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Executive Team"
            description="Led by the Chief Medical Officer (CMO) and supported by highly skilled departmental heads, each bringing years of experience in healthcare management and patient-centered leadership."
            gradient="from-blue-500 to-blue-600"
          />
        </div>

        {/* Featured Profile Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-lg">
              <Award className="h-4 w-4" />
              Meet Our Chief Medical Officer
            </div>
          </div>

          <StaffProfileCard
            name="Jephthah Mangerere"
            title="Chief Medical Officer"
            bio="Dedicated Kenya Registered Community Health Nurse. Enthusiastic, self-motivated, reliable, responsible, hardworking. Dedicated to ensuring that professional medical healthcare is given to all the patients under our care."
            imageUrl="/jeph.jpg"
            email="jephthah@jaitahmemorialhealthcareltd.co.ke"
            phone="+254 726 755030"
          />
        </div>

     </div>
    </section>
  );
}

function LeadershipCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-sky-200 dark:hover:border-sky-800">
      {/* Icon container */}
      <div
        className={`flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${gradient} mx-auto mb-5 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-center">
        {description}
      </p>

      {/* Decorative gradient line */}
      <div
        className={`mt-6 h-1 w-16 bg-gradient-to-r ${gradient} rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
    </div>
  );
}

function StaffProfileCard({
  name,
  title,
  bio,
  imageUrl,
  email,
  phone,
}: {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  email?: string;
  phone?: string;
}) {
  return (
    <div className="w-full rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-3xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 relative bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/20 dark:to-blue-900/20">
          <div className="relative w-full h-80 lg:h-full min-h-[400px]">
            <Image
              src={imageUrl}
              alt={`${name}'s photo`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>

          {/* Decorative element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-500/20 rounded-tl-full"></div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <Award className="h-3.5 w-3.5" />
              Leadership
            </div>

            {/* Name and Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {name}
            </h2>
            <p className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {title}
            </p>

            {/* Bio */}
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {bio}
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-900/50 transition-colors">
                    <Mail
                      size={18}
                      className="text-sky-600 dark:text-sky-400"
                    />
                  </div>
                  <span className="font-medium">{email}</span>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:bg-sky-200 dark:group-hover:bg-sky-900/50 transition-colors">
                    <Phone
                      size={18}
                      className="text-sky-600 dark:text-sky-400"
                    />
                  </div>
                  <span className="font-medium">{phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
