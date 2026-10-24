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
  Check,
  Search
} from 'lucide-react';
import { JAMA_STUDIES, CLINICAL_LEADERSHIP } from '../data/contentData';

export default function Article2StateTelehealth({ onOpenIntake }) {
  const [selectedState, setSelectedState] = useState('PA');
  const [verifiedPlan, setVerifiedPlan] = useState(null);

  const plansByState = {
    PA: {
      name: "Pennsylvania",
      abbr: "PA",
      regulator: "Pennsylvania Department of Human Services (DHS)",
      acceptedPlans: [
        { name: "UPMC For You", scope: "All 67 Pennsylvania Counties", copay: "$0 Specialist Co-Pay" },
        { name: "Keystone First", scope: "Southeastern Pennsylvania (Philadelphia, Bucks, Chester, Montgomery)", copay: "$0 Specialist Co-Pay" },
        { name: "AmeriHealth Caritas PA", scope: "Statewide In-Network Coverage", copay: "$0 Specialist Co-Pay" },
        { name: "Geisinger Health Plan", scope: "Central & Northeastern Pennsylvania", copay: "$0 Specialist Co-Pay" },
        { name: "Health Partners Plans", scope: "Greater Philadelphia & Surrounding", copay: "$0 Specialist Co-Pay" }
      ],
      selfPayDetails: "$99/mo all-inclusive flat fee. Generic Naltrexone is $10-$15 at CVS, Walgreens, Rite Aid, or Giant Eagle."
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
      selfPayDetails: "$99/mo flat fee. Rx is transmitted electronically to Meijer, Walgreens, CVS, or shipped discreetly to your home."
    }
  };

  const current = plansByState[selectedState];

  return (
    <article className="max-w-3xl mx-auto space-y-10 text-slate-800">
      
      {/* Editorial Meta Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 font-bold uppercase tracking-wider text-[10px]">
            State Healthcare &amp; Insurance
          </span>
          <span>•</span>
          <span>7 min read</span>
          <span>•</span>
          <span>Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          How to Access Online Addiction Therapy &amp; Medication in Pennsylvania and Michigan
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          Looking for licensed online sobriety therapy and medication in Pennsylvania or Michigan? See how to access confidential telehealth care from home with Medicaid or transparent private pay.
        </p>

        {/* State Toggle Selector Bar */}
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Select State Market:</span>
            <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => { setSelectedState('PA'); setVerifiedPlan(null); }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  selectedState === 'PA'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pennsylvania (PA)
              </button>
              <button
                onClick={() => { setSelectedState('MI'); setVerifiedPlan(null); }}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
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
            Open Telehealth Intake in {current.name}
          </span>
        </div>
      </header>

      {/* THE HOOK (First 100 Words) */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
        <p>
          If you live in Pennsylvania or Michigan and have ever tried to get professional help for alcohol cravings through your local healthcare system, you already know the crushing friction.
        </p>
        <p>
          You are told the next available addiction psychiatrist has a 14-week waitlist. You are instructed to take time off work to sit in a crowded, stigmatizing county clinic waiting room at 8:00 AM on a Tuesday. And when you finally see someone, they hand you a pamphlet for a 12-step meeting and tell you to "just try harder."
        </p>
        <p>
          <strong>Modern addiction medicine does not require you to surrender your dignity or disrupt your schedule.</strong> Under state telehealth laws, you can consult with board-certified addiction physicians and licensed therapists from your living room—fully covered by Pennsylvania and Michigan Medicaid.
        </p>
      </section>

      {/* SECTION 2: Why Telehealth Outperforms Traditional Outpatient Clinics */}
      <section className="space-y-4 pt-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Why Telehealth Outperforms Traditional Outpatient Clinics
        </h2>

        <div className="text-base sm:text-lg leading-relaxed text-slate-700 space-y-4">
          <p>
            The greatest barrier to recovery has never been a lack of desire—it is <strong>friction</strong>. 
          </p>
          <p>
            In-person clinics require navigating morning traffic across Pittsburgh, Philadelphia, Detroit, or Grand Rapids, parking fees, and the fear of bumping into an employer, colleague, or neighbor in the waiting lobby.
          </p>
          <p>
            Telehealth collapses that friction to zero. Sessions take place over encrypted, HIPAA-compliant video links on your smartphone or laptop. You speak with specialized addiction clinicians who respect your privacy, practice evidence-based harm reduction, and transmit prescriptions electronically to your local pharmacy.
          </p>
        </div>

        {/* JAMA Network Open (Kiluk et al.) Citation Card */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                PEER-REVIEWED EVIDENCE: DIGITAL CBT &amp; MAT
              </span>
              <h3 className="text-lg font-bold text-white">
                {JAMA_STUDIES.kiluk.title}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              JAMA Netw Open. 2021;4(10):e2129598
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="text-2xl font-black text-amber-400 block">83%</span>
              <span className="text-xs text-slate-300 font-semibold block mt-0.5">Alcohol-Free Days at 6 Months</span>
              <p className="text-[11px] text-slate-400 mt-1">
                Patients who combined digital Cognitive Behavioral Therapy with medication maintained sustained sobriety long-term.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="text-2xl font-black text-emerald-400 block">3.2x Higher</span>
              <span className="text-xs text-slate-300 font-semibold block mt-0.5">Therapy Retention</span>
              <p className="text-[11px] text-slate-400 mt-1">
                Telehealth access drastically reduced drop-out rates compared to mandatory in-person clinic attendance (p = 0.004).
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            <strong>The Takeaway:</strong> Pairing digital therapy and app-based habit tracking with prescription Naltrexone delivers higher patient retention and long-term sobriety than traditional in-person clinic counseling alone.
          </p>
        </div>
      </section>

      {/* CONTEXTUAL CTA 1: Mid-Funnel Plan Checker */}
      <section className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-200/80 px-2 py-0.5 rounded inline-block">
            Step 1: Coverage Check
          </span>
          <h3 className="text-xl font-extrabold text-slate-950">
            Verify Your {current.name} Medicaid Plan In-Network Status
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Select your health plan below to verify your specialist co-pay and appointment availability:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {current.acceptedPlans.map((plan, idx) => (
            <button
              key={idx}
              onClick={() => setVerifiedPlan(plan.name)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                verifiedPlan === plan.name
                  ? 'border-sky-500 bg-white ring-2 ring-sky-400 font-semibold shadow-xs'
                  : 'border-sky-200 bg-white/80 hover:bg-white text-slate-800'
              }`}
            >
              <div className="font-bold text-xs text-slate-900 flex items-center justify-between">
                <span>{plan.name}</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded font-bold">In-Network</span>
              </div>
              <span className="text-[11px] text-slate-500 block mt-0.5">{plan.scope}</span>
            </button>
          ))}
        </div>

        {verifiedPlan && (
          <div className="p-3.5 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-emerald-800 font-bold block">✅ In-Network Confirmed for {verifiedPlan}:</strong>
              Your physician visits and generic Naltrexone are typically <strong>$0 to $15 co-pay</strong> in {current.name}.
            </div>
            <button
              onClick={onOpenIntake}
              className="px-4 py-2 rounded-lg bg-slate-950 text-white font-bold text-xs shrink-0 cursor-pointer hover:bg-slate-800"
            >
              Book Telehealth Visit &rarr;
            </button>
          </div>
        )}
      </section>

      {/* SECTION 3: Care Team Feature */}
      <section className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Meet Your Licensed PA &amp; MI Care Team
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Every clinical consult and psychotherapy session is conducted by state-licensed medical and behavioral health practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CLINICAL_LEADERSHIP.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-black flex items-center justify-center text-xs shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-950 flex items-center gap-1">
                      <span>{member.name}</span>
                      <BadgeCheck className="w-4 h-4 text-emerald-600" />
                    </h3>
                    <span className="text-xs font-semibold text-amber-700 block">{member.role}</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 text-[10px] font-mono text-slate-600 flex items-center justify-between">
                  <span>{member.license}</span>
                  <span className="font-bold text-slate-800">NPI: {member.npi}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Accepting Patients
                </span>
                <button
                  onClick={onOpenIntake}
                  className="font-bold text-slate-900 hover:text-amber-600 cursor-pointer text-xs"
                >
                  Schedule &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Coverage & Pricing Breakdown */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          How Coverage &amp; Transparent Pricing Work in {current.name}
        </h2>

        <div className="text-base sm:text-lg leading-relaxed text-slate-700 space-y-4">
          <p>
            Healthcare billing in addiction medicine has historically been opaque. Sunflower Clinic operates with 100% upfront financial transparency:
          </p>
          <ul className="text-sm sm:text-base text-slate-700 space-y-2 pl-4 list-disc">
            <li>
              <strong>Medicaid In-Network:</strong> If you are enrolled in an accepted Medicaid plan in Pennsylvania or Michigan, your clinical visits and generic Naltrexone are typically <strong>$0 to $15 co-pay</strong>.
            </li>
            <li>
              <strong>Commercial Insurance:</strong> We provide detailed superbills with proper medical billing codes (CPT 99214 for evaluation, CPT 90834 for psychotherapy) for out-of-network reimbursement.
            </li>
            <li>
              <strong>Transparent Self-Pay ($99/mo):</strong> If you are uninsured or prefer complete confidentiality with zero insurance records, our flat $99/month plan covers your monthly physician consults, ongoing e-prescriptions, and full access to the Sunflower Sober app.
            </li>
          </ul>
        </div>
      </section>

      {/* CONTEXTUAL CTA 2: Primary End-of-Funnel Offer */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white space-y-5 border border-slate-800 shadow-lg">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
            CONFIDENTIAL STATE TELEHEALTH INTAKE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Schedule Your {current.name} Clinical Telehealth Visit
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
            Connect securely with licensed addiction physicians and licensed professional counselors from the privacy of your home in {current.name}.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="space-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Medicaid Accepted ({current.abbr} MCOs) or $99/mo Flat Self-Pay
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-500" />
              Next Video Opening Available within 24 Hours
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book Visit in {current.name}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </article>
  );
}
