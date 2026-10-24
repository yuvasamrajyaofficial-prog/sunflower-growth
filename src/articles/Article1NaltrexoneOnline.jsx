import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Calendar,
  ArrowRight,
  AlertCircle,
  Check
} from 'lucide-react';
import { FAQ_DATA } from '../data/contentData';

const steps = [
  {
    num: '01',
    title: 'Complete a 3-Minute Clinical Pre-Screening',
    subtitle: 'Confidential & Asynchronous',
    desc: 'Answer a brief clinical questionnaire covering alcohol consumption patterns, liver function history, and current medications. Our intake coordinators review your responses and confirm eligibility—typically within the hour.',
    deliverable: 'Instant eligibility confirmation'
  },
  {
    num: '02',
    title: 'Same-Day Video Consultation with a Licensed Physician',
    subtitle: 'Board-Certified Addiction Medicine',
    desc: 'Meet via HIPAA-secure video with Dr. Raphael Golebiowski, MD, or Dr. Glen Rebman, DO—both board-certified in addiction medicine—to discuss your history, goals, and the appropriate protocol (daily Naltrexone or The Sinclair Method).',
    deliverable: 'Rx transmitted electronically within 15 minutes'
  },
  {
    num: '03',
    title: 'Pharmacy Pickup or Home Delivery',
    subtitle: 'Medication + Digital Behavioral Support',
    desc: 'Collect generic Naltrexone (50 mg) at your preferred local pharmacy or opt for discreet home delivery. Your clinical record syncs with the Sunflower Sober app for craving tracking, dosing reminders, and on-demand access to our behavioral health team.',
    deliverable: 'Ongoing physician-supervised care'
  }
];

export default function Article1NaltrexoneOnline({ onOpenIntake }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [screenerAnswer, setScreenerAnswer] = useState(null);

  return (
    <article className="max-w-3xl mx-auto" style={{ paddingBottom: '3rem' }}>

      {/* ── Article Header ── */}
      <header className="pb-8 mb-8 border-b border-gray-200">
        
        {/* Category & meta */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
            Clinical Guide
          </span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">6 min read</span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-5" style={{ lineHeight: 1.15 }}>
          How to Get Naltrexone Online<br className="hidden sm:block" /> Without Going to Rehab
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6 font-normal">
          You don't need a $30,000 inpatient stay to address alcohol dependence. 
          A same-day telehealth visit with a board-certified addiction physician can 
          put an FDA-approved prescription in your hands before the end of the day.
        </p>

        {/* Reviewer card */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
          <div className="w-11 h-11 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 tracking-wide">
            MD
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-900 block">
              Medically reviewed by Dr. Raphael Golebiowski, MD & Dr. Glen Rebman, DO
            </span>
            <span className="text-[11px] text-slate-500">
              Medical Director & Senior Addiction Psychiatrist · Board-Certified Addiction Medicine
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold shrink-0">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Verified NPI
          </span>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="article-prose">

        <p>
          You intended to stop after one drink. By the third hour of the evening, 
          the bottle was empty and the familiar cycle of remorse had already begun. 
          The next morning, you promised yourself tonight would be different.
        </p>
        <p>
          It rarely is—and the reason has nothing to do with willpower.
        </p>
        <p>
          <strong>Your brain has spent years constructing dense neurochemical pathways 
          that associate alcohol with survival-level dopamine relief.</strong> When a craving 
          strikes, you are not fighting a failure of character. You are up against an 
          automated biological reflex—and willpower is simply not designed to override it indefinitely.
        </p>

        <h2>Why Inpatient Rehab Fails Most People</h2>

        <p>
          For decades, the treatment industry operated on a single, rigid prescription: 
          step away from your career, your family, and your life for 30 days and check 
          into a residential facility costing <strong>$30,000 to $60,000 out-of-pocket.</strong>
        </p>
        <p>
          For severe, acute withdrawal—the kind that carries risk of seizures or delirium 
          tremens—medically supervised inpatient detox remains essential. But for the vast 
          majority of people with Alcohol Use Disorder, inpatient treatment carries a 
          fundamental design flaw.
        </p>
        <p>
          It treats your cravings in an artificial environment. Inside a residential 
          facility, there is no evening commute, no wine in the refrigerator, and no 
          stress-loaded inbox. Staying sober in that context is structurally much simpler. 
          But the moment you return home, every conditioned environmental trigger fires 
          with full intensity—and you have had no practice managing them. Peer-reviewed 
          longitudinal data consistently shows <strong>50% to 80% of residential patients 
          relapse within the first 12 months of discharge.</strong>
        </p>
        <p>
          To permanently extinguish an alcohol craving, the rewiring must happen in the 
          same living room, kitchen, and daily routine where the craving was originally conditioned.
        </p>

        {/* Comparison table */}
        <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
              Traditional 30-Day Rehab
            </span>
            <span className="text-2xl font-black text-slate-900 block mb-3">$30,000 – $60,000</span>
            <ul className="text-[12px] text-slate-600 space-y-1.5">
              <li className="flex items-start gap-1.5"><span className="text-slate-300 mt-0.5">–</span> Requires 30–60 days away from work & family</li>
              <li className="flex items-start gap-1.5"><span className="text-slate-300 mt-0.5">–</span> Treats cravings in an artificial environment</li>
              <li className="flex items-start gap-1.5"><span className="text-slate-300 mt-0.5">–</span> Demands immediate lifetime abstinence commitment</li>
              <li className="flex items-start gap-1.5"><span className="text-slate-300 mt-0.5">–</span> 50–80% 12-month relapse rate post-discharge</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 block mb-2">
              Sunflower Outpatient Telehealth
            </span>
            <span className="text-2xl font-black text-slate-900 block mb-3">$0 – $15 co-pay or $99/mo</span>
            <ul className="text-[12px] text-slate-700 space-y-1.5">
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /> 100% confidential—from your own home</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /> Covered by Medicaid (PA & MI) & private insurance</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /> Treats cravings in your real-life environment</li>
              <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /> Physician-supervised pharmacotherapy + digital CBT</li>
            </ul>
          </div>
        </div>

        <h2>How Naltrexone Works at the Neurochemical Level</h2>

        <p>
          Naltrexone is an FDA-approved, non-narcotic medication classified as a pure 
          opioid receptor antagonist. It carries no abuse potential, produces no intoxication 
          or sedation, and creates no physical dependence. It is, in every clinical sense, 
          a remarkably clean drug.
        </p>
        <p>
          When you drink alcohol, your central nervous system triggers a cascade release 
          of beta-endorphins. These endorphins bind to the brain's <strong>mu-opioid receptors</strong>, 
          which then drive a surge of dopamine in the nucleus accumbens—the brain's primary 
          reward center. That dopamine flood is what your subconscious registers as profound 
          relief and reward, compelling you to pour another drink.
        </p>
        <p>
          Naltrexone occupies those exact mu-opioid receptors and blocks them. <strong>When 
          you drink while taking Naltrexone, the endorphins have nowhere to bind.</strong> The 
          compulsive urge to continue drinking is neurochemically silenced—not by willpower, 
          but by pharmacology.
        </p>
      </div>

      {/* ── JAMA Evidence Card ── */}
      <div className="my-8 p-6 rounded-2xl bg-slate-950 text-white">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800 mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Peer-Reviewed Evidence
            </span>
            <h3 className="text-[1.05rem] font-bold text-white leading-snug">
              The JAMA COMBINE Trial (Anton et al.)
            </h3>
            <span className="text-[11px] text-slate-500 font-mono">JAMA. 2006;295(17):2003–2017</span>
          </div>
          <span className="shrink-0 text-[10px] font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
            1,383 Patients · 11 Sites
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {[
            { stat: '74%', label: 'Good Clinical Outcome', detail: 'Naltrexone + medical management achieved sustained recovery without hospital admission' },
            { stat: '28%', label: 'Reduction in Heavy Drinking', detail: 'Significant, sustained drop in heavy drinking episodes vs. placebo controls (p < 0.001)' },
            { stat: '97%', label: 'Cost Reduction', detail: 'Outpatient telehealth protocol vs. average 30-day residential inpatient cost' }
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
          Outpatient primary care pharmacotherapy with Naltrexone delivers outcomes 
          that match or exceed expensive residential treatment at a fraction of the cost—
          without requiring patients to leave their jobs, families, or communities.
        </p>
      </div>

      {/* ── Screener CTA ── */}
      <div className="my-8 p-6 rounded-2xl bg-amber-50 border border-amber-200">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full inline-block mb-3">
          Clinical Pre-Screen
        </span>
        <h3 className="text-xl font-extrabold text-slate-950 mb-1">
          Is Outpatient Naltrexone Right for You?
        </h3>
        <p className="text-[13px] text-slate-600 mb-4">
          Select your current situation to receive immediate clinical guidance:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            {
              id: 'suitable',
              icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
              label: 'I want to reduce or stop alcohol cravings',
              sub: 'I have stable liver function and am not currently taking daily opioid pain medications.'
            },
            {
              id: 'opioids',
              icon: <AlertCircle className="w-4 h-4 text-amber-600" />,
              label: 'I currently take daily opioid pain medications',
              sub: 'A clinical washout protocol is required before initiating Naltrexone.'
            }
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setScreenerAnswer(opt.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                screenerAnswer === opt.id
                  ? 'border-amber-400 bg-white ring-2 ring-amber-300 shadow-sm'
                  : 'border-amber-200 bg-white/70 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className="font-bold text-[13px] text-slate-900 flex items-center gap-1.5 mb-1">
                {opt.icon}
                {opt.label}
              </div>
              <p className="text-[11px] text-slate-500 pl-5">{opt.sub}</p>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {screenerAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="p-4 rounded-xl bg-white border border-amber-200 text-[12px] text-slate-800"
            >
              {screenerAnswer === 'suitable' ? (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <strong className="text-emerald-800 block mb-0.5">✓ You appear eligible for same-day telehealth care.</strong>
                    You meet baseline clinical requirements for outpatient Naltrexone evaluation. 
                    Our physicians are available today in PA, MI, OH, NY, NJ, CA, FL, and TX.
                  </div>
                  <button
                    onClick={onOpenIntake}
                    className="px-4 py-2 rounded-lg bg-slate-950 text-white font-bold text-[12px] shrink-0 cursor-pointer hover:bg-slate-800 transition-colors whitespace-nowrap"
                  >
                    Schedule a Visit →
                  </button>
                </div>
              ) : (
                <div>
                  <strong className="text-amber-800 block mb-0.5">⚠ A washout protocol is required before initiating Naltrexone.</strong>
                  Because Naltrexone blocks opioid receptors, administering it while opioids 
                  remain in your system will precipitate acute withdrawal. Our clinicians are 
                  experienced with safe tapering protocols—please book a consultation to 
                  discuss your specific medications and timeline.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── 3-Step Process ── */}
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
          How to Get Naltrexone Online: Three Steps
        </h2>
        <p className="text-[14px] text-slate-500 mb-6">
          Our low-barrier clinical protocol moves you from assessment to prescription 
          in under 24 hours.
        </p>

        <div className="space-y-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-slate-950 text-amber-400 text-[11px] font-black flex items-center justify-center shrink-0">
                    {st.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[14px] text-slate-950 leading-snug">{st.title}</h3>
                    <span className="text-[11px] text-slate-400 font-medium">{st.subtitle}</span>
                  </div>
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed pl-10">{st.desc}</p>
              </div>
              <div className="shrink-0 sm:text-right pl-10 sm:pl-0">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  {st.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-5">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-[14px] text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                    >
                      <p className="pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── End CTA ── */}
      <div className="mt-10 p-7 sm:p-9 rounded-2xl bg-slate-950 text-white border border-slate-800">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-2">
          Confidential Telehealth Intake
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          Begin Treatment from Home — Today
        </h3>
        <p className="text-[13px] text-slate-400 leading-relaxed mb-6 max-w-xl">
          You do not need to pause your career, spend $30,000, or white-knuckle through 
          another difficult evening. Same-day video appointments are available with 
          board-certified addiction physicians across eight states.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 border-t border-slate-800">
          <div className="space-y-1.5 text-[12px]">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Medicaid accepted ($0–$15 co-pay) or flat $99/mo self-pay
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-600" />
              Electronic prescription sent to your pharmacy within 15 minutes
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-600" />
              No employer notification required · HIPAA-compliant visits
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[14px] shadow-sm transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Schedule Telehealth Visit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
