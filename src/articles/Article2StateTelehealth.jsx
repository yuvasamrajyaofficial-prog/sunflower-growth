import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Calendar, 
  ArrowRight, 
  BadgeCheck, 
  Building2, 
  HeartHandshake, 
  Clock, 
  DollarSign, 
  Activity 
} from 'lucide-react';
import { JAMA_STUDIES, CLINICAL_LEADERSHIP } from '../data/contentData';

export default function Article2StateTelehealth({ onOpenIntake }) {
  const [selectedState, setSelectedState] = useState('PA');

  const plansByState = {
    PA: {
      name: "Pennsylvania",
      abbr: "PA",
      regulator: "Pennsylvania Department of Human Services (DHS)",
      acceptedPlans: [
        { name: "UPMC For You", scope: "All 67 Pennsylvania Counties", copay: "$0 Specialist Co-Pay" },
        { name: "Keystone First", scope: "Southeastern Pennsylvania (Philadelphia, Bucks, Chester, Delaware, Montgomery)", copay: "$0 Specialist Co-Pay" },
        { name: "AmeriHealth Caritas PA", scope: "Statewide In-Network Coverage", copay: "$0 Specialist Co-Pay" },
        { name: "Geisinger Health Plan", scope: "Central & Northeastern Pennsylvania", copay: "$0 Specialist Co-Pay" },
        { name: "Health Partners Plans", scope: "Greater Philadelphia & Surrounding", copay: "$0 Specialist Co-Pay" }
      ],
      selfPayDetails: "$99/mo all-inclusive for physician visits, CBT psychotherapy, and Sunflower Sober app. Generic Naltrexone is $10-$15 at CVS/Walgreens/Rite Aid."
    },
    MI: {
      name: "Michigan",
      abbr: "MI",
      regulator: "Michigan Department of Health and Human Services (MDHHS)",
      acceptedPlans: [
        { name: "Blue Cross Complete of Michigan", scope: "Statewide Michigan Medicaid Network", copay: "$0 Specialist Co-Pay" },
        { name: "Meridian Health Plan of Michigan", scope: "All 83 Michigan Counties", copay: "$0 Specialist Co-Pay" },
        { name: "McLaren Health Plan", scope: "Flint, Lansing & Statewide", copay: "$0 Specialist Co-Pay" },
        { name: "Molina Healthcare of Michigan", scope: "Detroit, Wayne, Oakland & Statewide", copay: "$0 Specialist Co-Pay" },
        { name: "Priority Health Choice", scope: "West Michigan, Grand Rapids & Statewide", copay: "$0 Specialist Co-Pay" }
      ],
      selfPayDetails: "$99/mo flat fee. Rx is transmitted to Meijer, Walgreens, CVS, or shipped discreetly to your home."
    }
  };

  const current = plansByState[selectedState];

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      
      {/* Editorial Meta Header */}
      <header className="space-y-6 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 font-bold uppercase tracking-wider text-[11px]">
            State Healthcare &amp; Insurance
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">Pennsylvania &amp; Michigan Telehealth Network</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">Published: October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          How to Access Online Addiction Therapy &amp; Medication in Pennsylvania and Michigan
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          Looking for licensed online sobriety therapy and medication in Pennsylvania or Michigan? See how to access confidential telehealth care from home with Medicaid or transparent self-pay.
        </p>

        {/* State Toggle Selector Bar */}
        <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Select State Coverage:</span>
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
            Accepting New Telehealth Patients in {current.name}
          </span>
        </div>
      </header>

      {/* SECTION 2: Why Telehealth Outperforms Traditional Outpatient Clinics */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Why Telehealth Outperforms Traditional Outpatient Clinics
        </h2>

        <div className="prose text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            Traditional brick-and-mortar addiction clinics in Pennsylvania and Michigan often impose staggering friction: rigid 9 AM appointment windows, crowded waiting rooms where your privacy is compromised, mandatory in-person drug testing, and hours lost in traffic or bus commutes.
          </p>
          <p>
            Telehealth eliminates every one of these barriers. Patients log into a secure, HIPAA-compliant video session from their living room, parked car, or home office. Prescriptions for evidence-based medications like Naltrexone are sent electronically to your local pharmacy in minutes.
          </p>
        </div>

        {/* JAMA Network Open / Kiluk et al. Citation Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                PEER-REVIEWED EVIDENCE: DIGITAL THERAPY + PHARMACOTHERAPY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                {JAMA_STUDIES.kiluk.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {JAMA_STUDIES.kiluk.citation} • Randomized Clinical Trial
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold self-start sm:self-auto">
              JAMA Clinical Superiority
            </span>
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

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
            <strong>The Kiluk et al. Study Proved:</strong> Individuals receiving digital Cognitive Behavioral Therapy (CBT) paired with medication-assisted treatment maintained <strong>83% alcohol-free days at the 6-month follow-up</strong>, outperforming standard clinic-only visits with <strong>3.2x higher therapy retention</strong>.
          </div>
        </div>
      </section>

      {/* SECTION 3: Care Team Feature */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Clinical Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Meet Your Licensed PA &amp; MI Care Team
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Your care is led by dual board-certified physicians and licensed behavioral therapists specializing in evidence-based harm reduction and trauma-informed CBT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLINICAL_LEADERSHIP.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-0.5 shadow-xs flex items-center justify-center shrink-0">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-extrabold text-sm">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-950 flex items-center gap-1.5">
                        <span>{member.name}</span>
                        <BadgeCheck className="w-4 h-4 text-emerald-600" />
                      </h3>
                      <p className="text-xs font-bold text-amber-600">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-600 flex items-center justify-between">
                  <span>{member.license}</span>
                  <span className="font-bold text-slate-900">NPI: {member.npi}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Accepting Patients in {current.name}
                </span>
                <button
                  onClick={onOpenIntake}
                  className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
                >
                  Schedule Consult &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: How Coverage & Transparent Pricing Work in PA & MI */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Financial Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            How Coverage &amp; Transparent Pricing Work in {current.name}
          </h2>
        </div>

        {/* Accepted Medicaid MCOs Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                IN-NETWORK MANAGED CARE ORGANIZATIONS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {current.name} Medicaid Acceptance
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Regulated under the {current.regulator}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold self-start sm:self-auto">
              $0 Specialist Co-Pay for Most Members
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {current.acceptedPlans.map((plan, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-sm text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{plan.name}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="truncate max-w-[160px]">{plan.scope}</span>
                  <span className="text-amber-400 font-bold shrink-0">{plan.copay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Self-Pay Breakdown */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-sm text-amber-300">
                Self-Pay &amp; Private Pay Option ($99/Month Flat)
              </span>
              <span className="text-xs font-bold text-slate-300">Zero Insurance Record</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.selfPayDetails} No hidden facility fees, laboratory markups, or recurring retainer traps. Cancel anytime with a single click.
            </p>
          </div>
        </div>

        {/* Action Callout */}
        <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-emerald-950">
              Need assistance verifying your {current.abbr} Medicaid plan?
            </h4>
            <p className="text-xs text-emerald-800">
              Our clinical billing coordinators verify in-network coverage in under 10 minutes.
            </p>
          </div>
          <button
            onClick={onOpenIntake}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs"
          >
            Check My {current.abbr} Benefits
          </button>
        </div>
      </section>

    </article>
  );
}
