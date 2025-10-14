"use client";
import {
  FaUserTie,
  FaUsers,
  FaClinicMedical,
  FaBaby,
  FaFlask,
  FaPills,
  FaGlobeAfrica,
} from "react-icons/fa";

export default function OrganizationalChart() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary">
          🏢 Organizational Chart
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Our structure ensures clear communication, accountability, and
          efficiency across all departments.
        </p>

        {/* CMO */}
        <div className="flex flex-col items-center">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <FaUserTie className="text-4xl text-primary mx-auto mb-2" />
            <h3 className="font-bold text-lg">Chief Medical Officer (CMO)</h3>
            <p className="text-sm text-gray-500">
              Overall Leadership & Strategic Direction
            </p>
          </div>

          {/* Vertical line */}
          <div className="w-1 bg-primary h-10 my-4"></div>

          {/* Department Heads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Outpatient & Emergency */}
            <div className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition">
              <FaClinicMedical className="text-3xl text-blue-500 mx-auto mb-2" />
              <h4 className="font-semibold">Outpatient & Emergency</h4>
              <p className="text-sm text-gray-500">
                Head of Outpatient Services
              </p>
            </div>

            {/* Inpatient */}
            <div className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition">
              <FaUsers className="text-3xl text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold">Inpatient Services</h4>
              <p className="text-sm text-gray-500">Head of Inpatient Care</p>
            </div>

            {/* Maternity */}
            <div className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition">
              <FaBaby className="text-3xl text-pink-500 mx-auto mb-2" />
              <h4 className="font-semibold">Maternity & Child Health</h4>
              <p className="text-sm text-gray-500">Head of Maternity Care</p>
            </div>
          </div>

          {/* Vertical line */}
          <div className="w-1 bg-primary h-10 my-4"></div>

          {/* Support Departments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lab */}
            <div className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition">
              <FaFlask className="text-3xl text-yellow-500 mx-auto mb-2" />
              <h4 className="font-semibold">Laboratory & Diagnostics</h4>
              <p className="text-sm text-gray-500">Head of Diagnostics</p>
            </div>

            {/* Pharmacy */}
            <div className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition">
              <FaPills className="text-3xl text-purple-500 mx-auto mb-2" />
              <h4 className="font-semibold">Pharmacy</h4>
              <p className="text-sm text-gray-500">Chief Pharmacist</p>
            </div>

            {/* Community Health */}
            <div className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition">
              <FaGlobeAfrica className="text-3xl text-emerald-500 mx-auto mb-2" />
              <h4 className="font-semibold">Community Health</h4>
              <p className="text-sm text-gray-500">
                Outreach & Preventive Care Lead
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
