import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  DollarSign, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  FileCode2, 
  Bot, 
  Stethoscope, 
  Activity,
  Heart,
  BadgeCheck,
  Building2,
  ExternalLink
} from 'lucide-react';
import { JAMA_STUDIES, CLINICAL_LEADERSHIP } from '../data/contentData';

export default function View3StateTelehealth({ onOpenSchema, onOpenGeo, onOpenIntake }) {
  const [selectedState, setSelectedState] = useState('PA');

  const stateDetails = {
    PA: {
      name: "Pennsylvania",
      abbr: "PA",
      medicaidTitle: "Pennsylvania Medical Assistance (Medicaid MCOs)",
      acceptedPlans: [
        { name: "UPMC For You", badge: "In-Network (All 67 Counties)", copay: "$0 Specialist Co-Pay" },
        { name: "Keystone First (SEPA)", badge: "Philadelphia & Surrounding", copay: "$0 Specialist Co-Pay" },
        { name: "AmeriHealth Caritas", badge: "Statewide Coverage", copay: "$0 Specialist Co-Pay" },
        { name: "Geisinger Health Plan", badge: "Central & NE PA", copay: "$0 Specialist Co-Pay" },
        { name: "Health Partners Plans", badge: "SEPA Region", copay: "$0 Specialist Co-Pay" }
      ],
      licensingSummary: "Clinicians fully licensed under PA Department of State & State Board of Medicine / Social Work.",
      rxAvailability: "Electronic transmission directly to CVS, Walgreens, Rite Aid, Giant Eagle, or discreet mail order.",
      capacity: "Same-Day Open Slots",
      leadDoctor: "Dr. Raphael Golebiowski, MD (Medical Director)"
    },
    MI: {
      name: "Michigan",
      abbr: "MI",
      medicaidTitle: "Michigan Medicaid Managed Care Plans (MDHHS)",
      acceptedPlans: [
        { name: "Blue Cross Complete of Michigan", badge: "Statewide In-Network", copay: "$0 Specialist Co-Pay" },
        { name: "Meridian Health Plan of Michigan", badge: "All 83 Counties", copay: "$0 Specialist Co-Pay" },
        { name: "McLaren Health Plan", badge: "Flint, Lansing & Statewide", copay: "$0 Specialist Co-Pay" },
        { name: "Molina Healthcare of Michigan", badge: "Wayne, Oakland & Statewide", copay: "$0 Specialist Co-Pay" },
        { name: "Priority Health Choice", badge: "West Michigan & Statewide", copay: "$0 Specialist Co-Pay" }
      ],
      licensingSummary: "Clinicians fully licensed under Michigan Department of Licensing and Regulatory Affairs (LARA).",
      rxAvailability: "Electronic transmission directly to Meijer, Walgreens, CVS, or discreet home delivery.",
      capacity: "Next-Day Open Slots",
      leadDoctor: "Dr. Glen Rebman, DO (Attending Physician)"
    }
  };

  const current = stateDetails[selectedState];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 pb-12 max-w-5xl mx-auto"
    >
      {/* Programmatic SEO Metadata Bar */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-900 font-bold uppercase tracking-wider text-[10px]">
              Programmatic SEO Target
            </span>
            <span className="font-mono font-semibold text-slate-800">
              "online addiction therapy that takes medicaid in Pennsylvania / Michigan"
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenSchema}
              className="text-slate-600 hover:text-sky-700 flex items-center gap-1 font-semibold cursor-pointer text-[11px]"
            >
              <FileCode2 className="w-3.5 h-3.5 text-sky-600" />
              <span>State Localized Schema</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenGeo}
              className="text-slate-600 hover:text-sky-700 flex items-center gap-1 font-semibold cursor-pointer text-[11px]"
            >
              <Bot className="w-3.5 h-3.5 text-sky-600" />
              <span>Test AI Local Citation</span>
            </button>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
          <div>
            <strong className="text-slate-500">Meta Title:</strong>{" "}
            <span className="text-slate-900 font-semibold">Online Addiction Therapy &amp; Medication in PA &amp; MI (Medicaid &amp; Private Pay) | Sunflower Clinic</span>
          </div>
          <div>
            <strong className="text-slate-500">Meta Description:</strong>{" "}
            <span className="text-slate-700">Looking for licensed online sobriety therapy and medication in Pennsylvania or Michigan? See how to access confidential telehealth care from home.</span>
          </div>
        </div>
      </section>

      {/* Main Article Header */}
      <article className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>PENNSYLVANIA &amp; MICHIGAN TELEHEALTH NETWORK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            How to Access Online Addiction Therapy &amp; Medication in Pennsylvania and Michigan
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Finding licensed, stigma-free addiction treatment that accepts Medicaid shouldn't require driving hours to a crowded clinic. Sunflower Clinic connects Pennsylvania and Michigan residents with board-certified addiction physicians and licensed counselors—100% online from the privacy of your home.
          </p>

          {/* Interactive State Toggle */}
          <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Select State Market:</span>
              <div className="inline-flex rounded-xl bg-white p-1 border border-slate-200 shadow-2xs">
                <button
                  onClick={() => setSelectedState('PA')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedState === 'PA'
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pennsylvania (PA)
                </button>
                <button
                  onClick={() => setSelectedState('MI')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedState === 'MI'
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Michigan (MI)
                </button>
              </div>
            </div>

            <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {current.capacity} in {current.name}
            </span>
          </div>
        </div>

        {/* Clinical Citation: JAMA Network Open trial (Kiluk et al.) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                PEER-REVIEWED EVIDENCE (DIGITAL CBT &amp; MAT)
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                {JAMA_STUDIES.kiluk.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {JAMA_STUDIES.kiluk.citation} • {JAMA_STUDIES.kiluk.sampleSize}
              </p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold self-start sm:self-auto">
              JAMA Clinical Landmark
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {JAMA_STUDIES.kiluk.keyFindings.map((finding, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-2xl font-black text-slate-900 block">{finding.metric}</span>
                <p className="text-xs text-slate-600 leading-snug">{finding.label}</p>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                  {finding.change}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            The JAMA Network Open study proves that individuals who receive computerized Cognitive Behavioral Therapy paired with medication-assisted treatment achieve <strong>83% alcohol-free days at 6-month follow-up</strong>. This is why Sunflower Clinic integrates licensed 1-on-1 counseling with the Sunflower Sober app.
          </p>
        </section>

        {/* State Coverage & Transparent Pricing Callout Box */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                COVERAGE &amp; PRICING TRANSPARENCY
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {current.medicaidTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Zero hidden charges. No facility fees. Transparent care for {current.name} residents.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                Medicaid In-Network
              </span>
            </div>
          </div>

          {/* Accepted Plans Grid */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Directly Accepted In-Network Plans in {current.name}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {current.acceptedPlans.map((plan, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center space-x-1.5 font-bold text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{plan.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{plan.badge}</span>
                    <span className="text-amber-400 font-semibold">{plan.copay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Self-Pay Callout */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <strong className="text-sm font-bold text-amber-400 block">Uninsured or Prefer Total Confidentiality?</strong>
              <p className="text-xs text-slate-300">
                Our flat <strong>$99/month Self-Pay Plan</strong> includes monthly physician video consults, prescription management, unlimited secure messaging, and full access to the Sunflower Sober app. Generic Naltrexone is typically $10–$15 at retail pharmacies with GoodRx.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenIntake}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow-xs"
            >
              Check My {current.abbr} Coverage
            </motion.button>
          </div>
        </section>

        {/* Care Team Cards */}
        <section className="space-y-6 pt-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              <Users className="w-3.5 h-3.5 text-amber-500" />
              <span>Multi-Disciplinary Clinical Leadership</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Meet Your Licensed Pennsylvania &amp; Michigan Care Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLINICAL_LEADERSHIP.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -3 }}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-0.5 shadow-sm flex items-center justify-center">
                        <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-extrabold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-1.5">
                          <span>{member.name}</span>
                          <BadgeCheck className="w-4 h-4 text-emerald-600" />
                        </h3>
                        <p className="text-xs font-semibold text-amber-600">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-600 flex items-center justify-between">
                    <span>{member.license}</span>
                    <span className="font-bold text-slate-900">NPI: {member.npi}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.focus.map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Accepting New Patients
                  </span>
                  <button
                    onClick={onOpenIntake}
                    className="font-bold text-amber-600 hover:text-amber-700 cursor-pointer"
                  >
                    Request Appointment &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* State Telehealth FAQ & Localized Trust */}
        <section className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-3">
          <h4 className="font-bold text-sm text-slate-900">
            How Telehealth Licensing Works in {current.name}:
          </h4>
          <p className="leading-relaxed">
            All medical consultations are performed strictly by clinicians actively licensed in {current.name}. Under state medical board guidelines and HIPAA standards, you can connect from any county (urban or rural) via smartphone, tablet, or laptop. No special software is needed; visits run directly through a secure web browser.
          </p>
        </section>
      </article>
    </motion.div>
  );
}
