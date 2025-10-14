import Image from "next/image";
import {
  Heart,
  Users,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Introduction() {
  return (
    <section
      id="about-intro"
      className="bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-gray-900"
    >
      <div className="container mx-auto px-1 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full px-4 py-2 text-sm font-semibold w-max">
              <Sparkles className="h-4 w-4" />
              Compassion • Integrity • Excellence
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
                Lear more{" "}
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>

              <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"></div>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Where{" "}
              <strong className="text-slate-900 dark:text-white">
                compassion meets excellence.
              </strong>{" "}
              We deliver quality, affordable, patient-centered healthcare with
              integrity and professionalism — serving our community through
              modern clinical care, community outreach, and continuous
              improvement.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-700 hover:shadow-xl transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-sky-200 dark:border-sky-800 px-6 py-3 text-base font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Values row */}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <ValueCard
                icon={<Users className="h-5 w-5 text-sky-600" />}
                label="Patient-Centered"
                description="Your health, our priority"
              />
              <ValueCard
                icon={<ShieldCheck className="h-5 w-5 text-sky-600" />}
                label="Safe & Compliant"
                description="Highest standards"
              />
              <ValueCard
                icon={<Award className="h-5 w-5 text-sky-600" />}
                label="Accredited"
                description="Quality assured"
              />
              <ValueCard
                icon={<Heart className="h-5 w-5 text-sky-600" />}
                label="Community-Focused"
                description="Serving together"
              />
            </div>
          </div>

          {/* Right: Image with overlay */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-bed.jpg"
                alt="Healthcare professionals interacting with a patient"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

              {/* Established badge */}
              <div className="absolute left-6 bottom-6 bg-white/95 dark:bg-slate-900/95 rounded-xl px-5 py-4 shadow-xl backdrop-blur-sm border border-sky-100 dark:border-sky-900">
                <p className="text-xs font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                  Established
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  2018
                </p>
              </div>

              {/* Floating stat card */}
              <div className="absolute top-6 right-6 bg-white/95 dark:bg-slate-900/95 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm border border-sky-100 dark:border-sky-900">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Serving the Community
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-200 dark:bg-sky-900/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Mission statement card */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-[2px]">
          <div className="rounded-2xl bg-white dark:bg-slate-900 px-8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-2">
                  Our Mission
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  To deliver{" "}
                  <strong className="text-slate-900 dark:text-white">
                    exceptional healthcare services
                  </strong>{" "}
                  through innovation, dedication, and compassion — ensuring the
                  well-being of every patient we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon,
  label,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-xl bg-white dark:bg-slate-800 p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-slate-100 dark:border-slate-700">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
            {label}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
