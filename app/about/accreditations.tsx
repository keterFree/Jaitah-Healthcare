import {
  Award,
  ShieldCheck,
  Trophy,
  Medal,
  Sparkles,
  Star,
} from "lucide-react";

export default function AccreditationsRecognitions() {
  return (
    <section
      id="accreditations"
      className="relative bg-gradient-to-br from-white via-sky-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950 py-20 lg:py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-sky-400 rounded-full animate-ping opacity-20 delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-20 delay-700"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 rounded-full px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50">
            <ShieldCheck className="h-4 w-4" /> Accreditations & Recognitions
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-600 dark:from-sky-300 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
            Accreditations & Recognitions
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are accredited by relevant national healthcare authorities and
            consistently meet or exceed required healthcare standards — ensuring
            safety, quality, and patient trust.
          </p>
        </div>

        {/* Awards & Recognition List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AwardCard
            icon={<Trophy className="h-7 w-7" />}
            title="Excellence in Community Health Outreach"
            gradient="from-amber-400 via-yellow-500 to-orange-500"
            glowColor="amber"
          />
          <AwardCard
            icon={<Award className="h-7 w-7" />}
            title="Quality Patient Care Achievement"
            gradient="from-sky-400 via-blue-500 to-indigo-500"
            glowColor="blue"
          />
          <AwardCard
            icon={<Medal className="h-7 w-7" />}
            title="Professionalism & Service Innovation Award"
            gradient="from-purple-400 via-violet-500 to-indigo-500"
            glowColor="purple"
          />
        </div>

        {/* Trust Statement Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-sky-200/50 dark:border-sky-700/50">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="h-8 w-8 text-blue-500 animate-pulse" />
              <Sparkles className="h-6 w-6 text-sky-500" />
              <Star className="h-8 w-8 text-indigo-500 animate-pulse delay-500" />
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed text-center">
              Our reputation is built on{" "}
              <span className="font-black bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
                trust, compliance,
              </span>{" "}
              and the{" "}
              <span className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                satisfaction of every patient
              </span>{" "}
              we serve.
            </p>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <CertBadge
            icon={<ShieldCheck className="h-6 w-6" />}
            label="Nationally Accredited"
          />
          <CertBadge
            icon={<Award className="h-6 w-6" />}
            label="Quality Certified"
          />
          <CertBadge
            icon={<Star className="h-6 w-6" />}
            label="Patient Safety Excellence"
          />
        </div>
      </div>
    </section>
  );
}

function AwardCard({
  icon,
  title,
  gradient,
  glowColor,
}: {
  icon: React.ReactNode;
  title: string;
  gradient: string;
  glowColor: string;
}) {
  const glowColors = {
    amber: "group-hover:shadow-amber-500/50",
    blue: "group-hover:shadow-blue-500/50",
    purple: "group-hover:shadow-purple-500/50",
  };

  return (
    <div className={`group relative`}>
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}
      ></div>

      <div
        className={`relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl ${
          glowColors[glowColor as keyof typeof glowColors]
        } transition-all duration-500 text-center border border-sky-100 dark:border-sky-900/50 overflow-hidden`}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <div className="relative">
          {/* Icon container with gradient */}
          <div className="relative inline-block mb-5">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity`}
            ></div>
            <div
              className={`relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} text-white mx-auto shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
            >
              {icon}
            </div>
            {/* Sparkle effect */}
            <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
            {title}
          </h3>

          {/* Bottom accent line */}
          <div
            className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} rounded-full mx-auto transition-all duration-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

function CertBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="group flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-5 py-3 rounded-full shadow-md hover:shadow-xl border border-sky-200/50 dark:border-sky-700/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white group-hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </span>
    </div>
  );
}
