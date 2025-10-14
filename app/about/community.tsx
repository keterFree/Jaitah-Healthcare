import {
  HeartPulse,
  BookOpen,
  Syringe,
  Handshake,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";

export default function CommunityEngagement() {
  return (
    <section className="relative py-4 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating hearts */}
        <Heart
          className="absolute top-1/4 left-1/4 h-8 w-8 text-pink-300/20 dark:text-pink-500/20 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Heart
          className="absolute top-2/3 right-1/4 h-6 w-6 text-blue-300/20 dark:text-blue-500/20 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Heart
          className="absolute bottom-1/3 left-2/3 h-7 w-7 text-sky-300/20 dark:text-sky-500/20 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 rounded-full px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50 mb-6">
            <Users className="h-4 w-4" /> Community Engagement
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-600 dark:from-sky-300 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
            Community Engagement
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            At Jaitah Memorial Healthcare Ltd, we believe that good health
            begins in the community. Through outreach, education, and
            compassion, we make healthcare accessible and impactful.
          </p>
        </div>

        {/* Engagement Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <EngagementCard
            icon={<HeartPulse className="h-8 w-8" />}
            title="Free Medical Camps"
            description="Providing free consultations and checkups to underserved communities."
            gradient="from-rose-400 via-pink-500 to-red-500"
            delay="0"
          />

          <EngagementCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Health Education & Awareness"
            description="Empowering communities with knowledge on healthy living and disease prevention."
            gradient="from-sky-400 via-blue-500 to-indigo-500"
            delay="100"
          />

          <EngagementCard
            icon={<Syringe className="h-8 w-8" />}
            title="Preventive Care & Vaccination"
            description="Conducting vaccination drives and preventive health programs to protect all ages."
            gradient="from-emerald-400 via-teal-500 to-cyan-500"
            delay="200"
          />

          <EngagementCard
            icon={<Handshake className="h-8 w-8" />}
            title="Partnerships with Local Organizations"
            description="Working hand-in-hand with NGOs and local leaders to expand healthcare access."
            gradient="from-purple-400 via-violet-500 to-indigo-500"
            delay="300"
          />
        </div>

        {/* Impact Statement */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-sky-200/50 dark:border-sky-700/50">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-rose-500 animate-pulse" />
              <Sparkles className="h-6 w-6 text-sky-500" />
              <Users className="h-8 w-8 text-blue-500 animate-pulse delay-500" />
            </div>

            <p className="text-xl text-slate-700 dark:text-slate-200 text-center leading-relaxed">
              Through{" "}
              <span className="font-black bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
                outreach, education, and compassion
              </span>
              , we make healthcare{" "}
              <span className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                accessible, inclusive, and impactful
              </span>
              .
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <StatCard number="1000+" label="Lives Touched" />
          <StatCard number="50+" label="Medical Camps" />
          <StatCard number="25+" label="Partner Organizations" />
          <StatCard number="100%" label="Community Focused" />
        </div>
      </div>
    </section>
  );
}

function EngagementCard({
  icon,
  title,
  description,
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: string;
}) {
  return (
    <div
      className="group relative animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}
      ></div>

      <div className="relative h-full p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-sky-100 dark:border-sky-900/50 overflow-hidden">
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <div className="relative">
          {/* Icon with gradient background */}
          <div className="relative inline-block mb-6">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity`}
            ></div>
            <div
              className={`relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
            >
              {icon}
            </div>
            <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
          </div>

          <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Bottom accent line */}
          <div
            className={`mt-5 h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-sky-200/50 dark:border-sky-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
        {label}
      </div>
    </div>
  );
}
