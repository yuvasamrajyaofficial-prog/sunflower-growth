import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  Calendar,
  ArrowRight,
  Check,
  MapPin
} from 'lucide-react';
import { CLINICAL_LEADERSHIP } from '../data/contentData';

const plansByState = {
  PA: {
    name: 'Pennsylvania',
    abbr: 'PA',
    regulator: 'Pennsylvania Department of Human Services (DHS)',
    acceptedPlans: [
      { name: 'UPMC For You', scope: 'All 67 Pennsylvania counties', copay: '$0 specialist co-pay' },
      { name: 'Keystone First', scope: 'Philadelphia, Bucks, Chester, Montgomery counties', copay: '$0 specialist co-pay' },
      { name: 'AmeriHealth Caritas PA', scope: 'Statewide in-network coverage', copay: '$0 specialist co-pay' },
      { name: 'Geisinger Health Plan', scope: 'Central & northeastern Pennsylvania', copay: '$0 specialist co-pay' },
      { name: 'Health Partners Plans', scope: 'Greater Philadelphia metro area', copay: '$0 specialist co-pay' }
    ],
    selfPay: 'Generic Naltrexone is $10–$15 at CVS, Walgreens, Rite Aid, or Giant Eagle.'
  },
  MI: {
    name: 'Michigan',
    abbr: 'MI',
    regulator: 'Michigan Department of Health and Human Services (MDHHS)',
    acceptedPlans: [
      { name: 'Blue Cross Complete of Michigan', scope: 'Statewide Michigan Medicaid network', copay: '$0 specialist co-pay' },
      { name: 'Meridian Health Plan of Michigan', scope: 'All 83 Michigan counties', copay: '$0 specialist co-pay' },
      { name: 'McLaren Health Plan', scope: 'Flint, Lansing & statewide', copay: '$0 specialist co-pay' },
      { name: 'Molina Healthcare of Michigan', scope: 'Detroit, Wayne, Oakland & statewide', copay: '$0 specialist co-pay' },
      { name: 'Priority Health Choice', scope: 'West Michigan, Grand Rapids & statewide', copay: '$0 specialist co-pay' }
    ],
    selfPay: 'Prescription sent to Meijer, Walgreens, CVS, or shipped discreetly to your home.'
  }
};

export default function Article2StateTelehealth({ onOpenIntake }) {
  const [selectedState, setSelectedState] = useState('PA');
  const [verifiedPlan, setVerifiedPlan] = useState(null);

  const current = plansByState[selectedState];

  return (
    <article className="max-w-3xl mx-auto" style={{ paddingBottom: '3rem' }}>

      {/* ── Header ── */}
      <header className="pb-8 mb-8 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
            Coverage Guide
          </span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">7 min read</span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-5" style={{ lineHeight: 1.15 }}>
          Online Addiction Therapy & Naltrexone in Pennsylvania and Michigan: Your Complete Insurance Guide
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          If you are enrolled in Medicaid in Pennsylvania or Michigan, licensed telehealth addiction 
          care—including physician visits, Naltrexone prescriptions, and behavioral therapy—is 
          available to you at little or no cost.
        </p>

        {/* State selector inside header */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
          <span className="text-[12px] font-bold text-slate-600 uppercase tracking-wider shrink-0">Select state:</span>
          <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            {['PA', 'MI'].map((st) => (
              <button
                key={st}
                onClick={() => { setSelectedState(st); setVerifiedPlan(null); }}
                className={`px-4 py-1.5 rounded-md text-[13px] font-bold transition-all cursor-pointer ${
                  selectedState === st
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {st === 'PA' ? 'Pennsylvania' : 'Michigan'}
              </button>
            ))}
          </div>
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-emerald-700 ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot inline-block"></span>
            Open intake in {current.name}
          </span>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="article-prose">

        <p>
          If you have ever searched for a local addiction psychiatrist in Pennsylvania or Michigan, 
          you have likely encountered the same demoralizing reality: the next available appointment 
          is 10 to 14 weeks away, the clinic requires you to be there at 8:00 AM on a weekday, 
          and when you arrive, the treatment model is rooted in practices that haven't changed 
          meaningfully since the 1980s.
        </p>
        <p>
          The growth of HIPAA-compliant telehealth has changed this calculus entirely. Under current 
          state law in both Pennsylvania and Michigan, licensed addiction physicians can evaluate, 
          diagnose, and prescribe medication-assisted treatment via secure video—with full Medicaid 
          reimbursement and without requiring you to set foot in a clinic.
        </p>

        <h2>Why Access Is the Central Problem in Addiction Care</h2>

        <p>
          The academic literature on Alcohol Use Disorder is clear: the most significant barrier 
          to recovery is not patient motivation. It is <strong>structural access.</strong> Research 
          consistently demonstrates that the more friction you introduce between a patient and 
          their first clinical contact, the sharper the treatment dropout rate becomes.
        </p>
        <p>
          Traditional outpatient clinics require patients to navigate traffic to Pittsburgh, 
          Detroit, Philadelphia, or Grand Rapids during business hours, sit in shared waiting rooms 
          that carry significant stigma, and interact with providers who may not specialize in 
          modern pharmacotherapy.
        </p>
        <p>
          Telehealth reduces that friction to near-zero. You open a HIPAA-compliant video link 
          from your smartphone, speak with a board-certified addiction physician, and receive a 
          prescription transmitted electronically to your local pharmacy—often within the same 
          clinical hour.
        </p>
      </div>

      {/* JAMA Evidence Block */}
      <div className="my-8 p-6 rounded-2xl bg-slate-950 text-white">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800 mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              Peer-Reviewed Evidence
            </span>
            <h3 className="text-[1.05rem] font-bold text-white leading-snug">
              JAMA Network Open: Digital CBT + Pharmacotherapy
            </h3>
            <span className="text-[11px] text-slate-500 font-mono">JAMA Netw Open. 2021;4(10):e2129598</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {[
            { stat: '83%', label: 'Alcohol-Free Days at 6 Months', detail: 'Sustained among patients combining digital CBT with medication-assisted treatment' },
            { stat: '3.2×', label: 'Higher Therapy Retention', detail: 'Telehealth access vs. mandatory in-person clinic attendance (p = 0.004)' },
            { stat: '100%', label: 'Confidential', detail: 'No employer reporting required. No waiting room. No travel disruption.' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="text-2xl font-black text-amber-400 block">{item.stat}</span>
              <span className="text-[11px] font-bold text-slate-300 block mt-0.5 mb-1.5">{item.label}</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-slate-300 leading-relaxed">
          <strong className="text-slate-100">Clinical Takeaway:</strong>{' '}
          Pairing digital behavioral therapy and app-based tracking with prescription Naltrexone 
          produces significantly higher patient retention and sustained sobriety than medication alone.
        </p>
      </div>

      {/* Insurance Checker */}
      <div className="my-8 p-6 rounded-2xl bg-sky-50 border border-sky-200">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-800 bg-sky-100 px-2.5 py-1 rounded-full inline-block mb-3">
          Insurance Verification
        </span>
        <h3 className="text-xl font-extrabold text-slate-950 mb-1">
          Verify Your {current.name} Medicaid Plan
        </h3>
        <p className="text-[13px] text-slate-600 mb-4">
          Select your plan below to confirm in-network status and co-pay information:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {current.acceptedPlans.map((plan, idx) => (
            <button
              key={idx}
              onClick={() => setVerifiedPlan(plan.name)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                verifiedPlan === plan.name
                  ? 'border-sky-400 bg-white ring-2 ring-sky-300 shadow-sm'
                  : 'border-sky-200 bg-white/70 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className="font-bold text-[13px] text-slate-900 flex items-center justify-between mb-0.5">
                <span>{plan.name}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">In-Network</span>
              </div>
              <span className="text-[11px] text-slate-500">{plan.scope}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {verifiedPlan && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-white border border-sky-300 text-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <strong className="text-emerald-800 block mb-0.5">✓ In-Network Confirmed: {verifiedPlan}</strong>
                Your physician visits and generic Naltrexone are typically <strong>$0–$15 co-pay</strong> in {current.name}.{' '}
                {current.selfPay}
              </div>
              <button
                onClick={onOpenIntake}
                className="px-4 py-2 rounded-lg bg-slate-950 text-white font-bold text-[12px] shrink-0 cursor-pointer hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Book Visit →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Care Team */}
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
          Your Licensed {current.name} Clinical Team
        </h2>
        <p className="text-[14px] text-slate-500 mb-6">
          Every consultation is conducted by a state-licensed medical or behavioral health practitioner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CLINICAL_LEADERSHIP.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 font-black flex items-center justify-center text-[11px] shrink-0 tracking-wide">
                    {member.name.split(' ').filter(n => n[0] === n[0].toUpperCase()).slice(0,2).map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-bold text-[14px] text-slate-950 flex items-center gap-1">
                      {member.name}
                      <BadgeCheck className="w-4 h-4 text-emerald-500" />
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-700">{member.role}</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg mb-3">
                  NPI: {member.npi} · {member.experience}
                </div>

                <p className="text-[13px] text-slate-600 leading-relaxed">{member.bio}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Accepting patients in {current.abbr}
                </span>
                <button
                  onClick={onOpenIntake}
                  className="text-[12px] font-bold text-slate-800 hover:text-amber-600 cursor-pointer transition-colors"
                >
                  Schedule →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="article-prose my-8">
        <h2>Transparent Pricing in {current.name}</h2>
        <p>
          Healthcare billing in addiction medicine has historically been opaque. Sunflower Clinic 
          operates with complete upfront financial transparency:
        </p>
      </div>

      <div className="my-4 space-y-3">
        {[
          { label: 'Medicaid In-Network', detail: `If you are enrolled in an accepted ${current.name} Medicaid MCO, your clinical visits and generic Naltrexone are typically $0–$15 co-pay. No unexpected billing.`, color: 'emerald' },
          { label: 'Commercial Insurance', detail: 'We provide detailed superbills with correct medical billing codes (CPT 99214, CPT 90834) for out-of-network reimbursement from your private insurer.', color: 'sky' },
          { label: 'Self-Pay — $99/month flat', detail: 'If you prefer complete confidentiality with zero insurance records, our flat monthly fee covers physician consults, e-prescriptions, and full access to the Sunflower Sober app.', color: 'amber' }
        ].map((item, i) => (
          <div key={i} className={`p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-4`}>
            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
              item.color === 'emerald' ? 'bg-emerald-500' :
              item.color === 'sky' ? 'bg-sky-500' : 'bg-amber-400'
            }`}></div>
            <div>
              <h4 className="font-bold text-[14px] text-slate-950 mb-1">{item.label}</h4>
              <p className="text-[13px] text-slate-600 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* End CTA */}
      <div className="mt-10 p-7 sm:p-9 rounded-2xl bg-slate-950 text-white border border-slate-800">
        <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 block mb-2">
          {current.name} Telehealth Intake
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          Schedule Your {current.name} Telehealth Visit
        </h3>
        <p className="text-[13px] text-slate-400 leading-relaxed mb-6 max-w-xl">
          Connect securely with licensed addiction physicians and counselors from the privacy 
          of your home in {current.name}. Next opening is typically within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 border-t border-slate-800">
          <div className="space-y-1.5 text-[12px]">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Medicaid accepted ({current.abbr} MCOs) or $99/mo self-pay
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-600" />
              Video consultation available within 24 hours
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-600" />
              No employer notification · HIPAA-compliant
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[14px] shadow-sm transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Book Visit in {current.abbr}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
