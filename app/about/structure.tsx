"use client";

import {
  Network,
  Stethoscope,
  BedDouble,
  Baby,
  FlaskConical,
  Pill,
  Globe2,
  Crown,
  Users,
  Activity,
} from "lucide-react";
import { useState } from "react";

export default function AdministrativeStructure() {
  return (
    <section
      id="administration"
      className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 py-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 rounded-full px-5 py-2 text-sm font-semibold shadow-sm backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50">
            <Network className="h-4 w-4" /> Administrative Structure
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-black bg-gradient-to-r from-sky-700 via-blue-600 to-indigo-600 dark:from-sky-300 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
            Administrative Structure
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We operate through a clear and efficient organizational framework to
            enhance the delivery of healthcare services and maintain
            accountability across all departments.
          </p>
        </div>

        {/* Organizational Chart Section */}
        <OrganizationalChart />
        <div className="mt-16 text-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-sky-200/50 dark:border-sky-700/50 shadow-xl">
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Each department plays a vital role in achieving{" "}
            <span className="font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              excellence in service delivery
            </span>{" "}
            and supporting our mission to care for every patient with compassion
            and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
}

function OrganizationalChart() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 lg:p-14 border border-sky-200/50 dark:border-sky-700/50">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-3">
          Organizational Chart
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl mx-auto">
          Our transparent structure illustrates how departments collaborate and
          report through clearly defined channels — ensuring efficiency,
          coordination, and accountability.
        </p>
      </div>

      <div className="flex flex-col items-center max-w-5xl mx-auto">
        {/* CMO Level */}
        <div
          className="relative transition-all duration-300"
          onMouseEnter={() => setHoveredNode("cmo")}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div
            className={`bg-gradient-to-br from-sky-500 to-blue-600 dark:from-sky-600 dark:to-blue-700 text-white rounded-2xl p-8 shadow-xl transform transition-all duration-300 ${
              hoveredNode === "cmo" ? "scale-105 shadow-2xl" : ""
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Crown className="h-8 w-8" />
              <h3 className="font-black text-xl">Chief Medical Officer</h3>
            </div>
            <p className="text-sky-100 text-sm font-medium">
              Overall Leadership & Strategic Direction
            </p>
          </div>
        </div>

        {/* Connection Line */}
        <div className="relative h-16 w-1 bg-gradient-to-b from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 my-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>

        {/* Department Heads Level */}
        <div className="relative">
          {/* Horizontal connector */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-500 -translate-y-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <OrgNode
              icon={<Stethoscope className="h-6 w-6" />}
              title="Outpatient & Emergency"
              subtitle="Head of Outpatient Services"
              color="from-sky-400 to-blue-500"
              hovered={hoveredNode === "outpatient"}
              onHover={() => setHoveredNode("outpatient")}
              onLeave={() => setHoveredNode(null)}
            />
            <OrgNode
              icon={<Users className="h-6 w-6" />}
              title="Inpatient Services"
              subtitle="Head of Inpatient Care"
              color="from-blue-400 to-indigo-500"
              hovered={hoveredNode === "inpatient"}
              onHover={() => setHoveredNode("inpatient")}
              onLeave={() => setHoveredNode(null)}
            />
            <OrgNode
              icon={<Baby className="h-6 w-6" />}
              title="Maternity & Child Health"
              subtitle="Head of Maternity Care"
              color="from-pink-400 to-rose-500"
              hovered={hoveredNode === "maternity"}
              onHover={() => setHoveredNode("maternity")}
              onLeave={() => setHoveredNode(null)}
            />
          </div>
        </div>

        {/* Connection Line */}
        <div className="relative h-12 w-1 bg-gradient-to-b from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 my-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Support Departments Level */}
        <div className="relative">
          {/* Horizontal connector */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-500 -translate-y-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OrgNode
              icon={<FlaskConical className="h-6 w-6" />}
              title="Laboratory & Diagnostics"
              subtitle="Head of Diagnostics"
              color="from-amber-400 to-orange-500"
              hovered={hoveredNode === "lab"}
              onHover={() => setHoveredNode("lab")}
              onLeave={() => setHoveredNode(null)}
            />
            <OrgNode
              icon={<Pill className="h-6 w-6" />}
              title="Pharmacy"
              subtitle="Chief Pharmacist"
              color="from-purple-400 to-violet-500"
              hovered={hoveredNode === "pharmacy"}
              onHover={() => setHoveredNode("pharmacy")}
              onLeave={() => setHoveredNode(null)}
            />
            <OrgNode
              icon={<Globe2 className="h-6 w-6" />}
              title="Community Health"
              subtitle="Outreach & Preventive Care Lead"
              color="from-emerald-400 to-teal-500"
              hovered={hoveredNode === "community"}
              onHover={() => setHoveredNode("community")}
              onLeave={() => setHoveredNode(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function OrgNode({
  icon,
  title,
  subtitle,
  color,
  hovered,
  onHover,
  onLeave,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={`relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-300 cursor-pointer ${
        hovered ? "scale-105 shadow-2xl" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 hover:opacity-10 dark:hover:opacity-20 rounded-xl transition-opacity duration-300`}
      ></div>
      <div className="relative">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white mx-auto mb-3 shadow-md`}
        >
          {icon}
        </div>
        <h4 className="font-bold text-slate-900 dark:text-white text-center mb-1">
          {title}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
