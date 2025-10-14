import {
  Clock,
  Building,
  Users2,
  TrendingUp,
  Heart,
  Sparkles,
} from "lucide-react";

export default function OurHistory() {
  return (
    <section
      id="our-history"
      className="relative bg-white dark:bg-slate-900 py-4 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/10 rounded-full blur-3xl -z-0 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl -z-0 opacity-50"></div>

      <div className="mx-auto px-1 lg:px-1 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full px-5 py-2 text-sm font-semibold shadow-sm">
            <Clock className="h-4 w-4" />
            Our Journey
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              History
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-6xl mx-auto leading-relaxed">
            Founded in{" "}
            <span className="font-bold text-sky-600 dark:text-sky-400">
              2018
            </span>
            , Jaitah Memorial Healthcare Ltd was born from a deep desire to make
            quality, accessible medical care available to every member of our
            community.
          </p>
        </div>

        {/* Timeline cards with connecting line */}
        <div className="relative px-4 mx-auto">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-200 via-blue-300 to-sky-200 dark:from-sky-800 dark:via-blue-700 dark:to-sky-800"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            <HistoryCard
              icon={<Building className="h-6 w-6" />}
              title="Our Foundation"
              year="2018"
              description="We began with a simple mission: to provide trusted, affordable healthcare within a compassionate environment for all."
              gradient="from-sky-500 to-sky-600"
              delay="0"
            />
            <HistoryCard
              icon={<Users2 className="h-6 w-6" />}
              title="Community Growth"
              year="2019-2021"
              description="Through partnerships with leading health institutions, we expanded services and strengthened our bond with the local community."
              gradient="from-blue-500 to-blue-600"
              delay="100"
            />
            <HistoryCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Continuous Evolution"
              year="2022-Present"
              description="We've grown with technology, improved facilities, and introduced modern care programs — while keeping compassion at our core."
              gradient="from-sky-600 to-blue-600"
              delay="200"
            />
          </div>
        </div>

        {/* Bottom statement card */}
        <div className="mt-6 px-4 mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-r from-sky-500/30 via-blue-500/70 to-sky-600/80 p-[2px] shadow-xl">
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                {/* <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div> */}
                <div className="flex-1">
                  <p className="text-lg text-slate-700 text-center dark:text-slate-200 leading-relaxed">
                    Our journey is one of{" "}
                    <span className="font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      growth, innovation, and compassion
                    </span>{" "}
                    — always putting our patients first.
                  </p>
                </div>
                {/* <Sparkles className="h-6 w-6 text-sky-500 dark:text-sky-400 flex-shrink-0" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <StatCard number="7+" label="Years Serving" />
          <StatCard number="1000+" label="Patients Helped" />
          <StatCard number="15+" label="Healthcare Professionals" />
          <StatCard number="24/7" label="Emergency Care" />
        </div>
      </div>
    </section>
  );
}

function HistoryCard({
  icon,
  title,
  year,
  description,
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  year: string;
  description: string;
  gradient: string;
  delay: string;
}) {
  return (
    <div className="relative group" style={{ animationDelay: `${delay}ms` }}>
      {/* Timeline dot */}
      <div className="hidden md:flex absolute -top-[3.25rem] left-1/2 -translate-x-1/2 h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-4 border-sky-300 dark:border-sky-700 shadow-lg z-10">
        <div
          className={`h-6 w-6 rounded-full bg-gradient-to-br ${gradient}`}
        ></div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group-hover:border-sky-200 dark:group-hover:border-sky-800 h-full">
        <div
          className={`flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${gradient} mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        <div className="text-center mb-3">
          <span className="inline-block px-3 py-1 text-xs font-bold text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/30 rounded-full">
            {year}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 text-center">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-xl p-4 text-center border border-sky-100 dark:border-sky-900/50">
      <p className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
        {number}
      </p>
      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
        {label}
      </p>
    </div>
  );
}
