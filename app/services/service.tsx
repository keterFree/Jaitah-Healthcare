"use client";

import ServiceSection from "./list";

export default function ServicesPage() {
  return (
    <section className="relative w-full dark:bg-gray-800 bg-sky-50 ">
      <div className="absolute inset-0 bg-[url(/pattern5.png)] bg-repeat opacity-20"></div>
      <p className="text-2xl mt-2 md:text-4xl md:py-10 p-5 md:text-center font-semibold text-gray-800 dark:text-gray-200 text-start">
        Our <span className="text-sky-600">Services</span>
      </p>
      <ServiceSection
        title="Outpatient Care & General Consultations"
        description="Our Outpatient Department (OPD) is the first point of contact for many patients."
        points={[
          "General medical consultations for flu, infections, allergies, and fevers",
          "Management of chronic illnesses including diabetes, hypertension, asthma, and cardiovascular conditions",
          "Screenings & preventive care for early detection",
          "Health education & lifestyle counseling",
        ]}
        note="Consult with our experienced clinical officers and medical doctors in a respectful, confidential setting."
        image="/serviceImg/consultation.png"
      />

      <ServiceSection
        title="Maternal & Child Health Services"
        description="We are committed to the well-being of mothers and children with support from skilled midwives and pediatricians."
        points={[
          "Antenatal and postnatal care: Regular checkups, ultrasound monitoring, and pregnancy education",
          "Pediatric care: Immunizations, growth monitoring, and common illness treatment",
          "Family planning and reproductive health services",
          "Nutritional counseling for maternal and infant health",
        ]}
        note="We support healthy pregnancies, safe deliveries (in partnership with referral facilities), and thriving children."
        image="/serviceImg/mother1.png"
        reverse
      />

      <ServiceSection
        title="Emergency & Minor Procedures"
        description="Available 24/7, our emergency team delivers immediate care for urgent medical situations."
        points={[
          "Trauma response for injuries and accidents",
          "Burns, allergic reactions, and poisoning treatment",
          "Male circumcision",
          "Minor surgical interventions (suturing, abscess drainage, foreign body removal)",
          "Wound dressing and emergency stabilization",
        ]}
        note="We ensure rapid attention and safe stabilization while preparing for further care or transfer if needed."
        image="/serviceImg/er.png"
      />

      <ServiceSection
        title="Diagnostics & Imaging"
        description="Our diagnostic and imaging center provides timely, accurate results to guide your treatment."
        points={[
          "Hematology: Full Blood Count (FBC), ESR, blood group testing",
          "Biochemistry: Kidney/liver function, blood sugar, cholesterol profiles",
          "Microbiology: Urine/stool cultures, malaria, pregnancy testing",
          "Imaging: Ultrasound, ECG (X-ray coming soon)",
        ]}
        note="All lab results follow strict quality control for patient safety and treatment accuracy."
        image="/serviceImg/mri.png"
        reverse
      />

      <ServiceSection
        title="Inpatient & Short-Stay Care"
        description="We offer a clean and comfortable space for patients requiring close observation or short-term medical supervision."
        points={[
          "Observation beds for short-term monitoring",
          "Short-stay admissions for recovery from minor surgery, infections, or IV therapy",
          "Round-the-clock nursing care and medication administration",
        ]}
        note="Designed to minimize hospital stays while maximizing patient comfort and safety."
        image="/serviceImg/inpatient.png"
      />

      <ServiceSection
        title="Specialized Clinics & Rehabilitation Services"
        description="Our specialized clinics support the management and recovery from chronic or complex health conditions."
        points={[
          "Chronic disease clinics for diabetes, hypertension, asthma, and heart conditions",
          "Physiotherapy and rehabilitation for post- minor surgery recovery and mobility support",
          "Mental health and counseling for depression, anxiety, stress, and substance abuse",
          "Dermatology services for eczema, acne, skin infections, and wound healing",
        ]}
        note="We treat the whole person—mind, body, and spirit—through a holistic care model."
        image="/serviceImg/childrenRehab.png"
        reverse
      />

      <ServiceSection
        title="Pharmacy Services"
        description="Our pharmacy ensures patients have timely access to quality medications and preventive care."
        points={[
          "Wide range of prescription and over-the-counter medications",
          "Medication plans for chronic condition management",
          "Vaccination services (e.g. tetanus, hepatitis, influenza)",
          "Personalized medication counseling and safety guidance",
        ]}
        // note="NHIF and major insurance providers accepted for convenience and affordability."
        image="/serviceImg/pharmacy.png"
      />
      <ServiceSection
        title="Dental Services"
        description="Our dental unit is equipped to provide routine and emergency dental care to ensure oral health for all ages."
        points={[
          "Dental consultations for oral hygiene, pain, and preventive care",
          "Professional tooth cleaning (scaling and polishing)",
          "Tooth extractions and minor dental procedures",
          "Guidance on dental hygiene and follow-up care",
        ]}
        note="Receive dental care in a safe, clean, and compassionate environment with our skilled dental professionals."
        image="/serviceImg/dental.png"
        reverse
      />

      <ServiceSection
        title="Our partners in Education"
        description="we are proud to collaborate with Austra Training Institute and 64 college of professional studies in nurturing the next generation of healthcare professionals."
        points={[
          "This strategic partnership offers students a unique opportunity for hands-on experience through structured clinical attachments and rotations at our Level 3A facility",
        ]}
        note="Together, we build a healthier future through education and experience."
        image="/serviceImg/educ.jpg"
      />
    </section>
  );
}
