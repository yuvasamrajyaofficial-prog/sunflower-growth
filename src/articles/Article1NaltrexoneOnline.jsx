import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Pill, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  Stethoscope, 
  Clock, 
  Truck, 
  Brain, 
  ArrowRight,
  AlertCircle,
  FileCheck,
  Check,
  Sparkles
} from 'lucide-react';
import { JAMA_STUDIES, FAQ_DATA } from '../data/contentData';

export default function Article1NaltrexoneOnline({ onOpenIntake }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [screenerAnswer, setScreenerAnswer] = useState(null);

  const steps = [
    {
      num: "01",
      title: "3-Minute Clinical Self-Check",
      subtitle: "Confidential Online Triage",
      desc: "Complete an asynchronous questionnaire assessing your alcohol consumption patterns, liver health, and ensuring you are not currently taking opioid pain medications.",
      deliverable: "Instant Eligibility Confirmation"
    },
    {
      num: "02",
      title: "Same-Day Clinician Video Call",
      subtitle: "State-Licensed Physician Consult",
      desc: "Meet face-to-face via secure video with board-certified addiction physicians Dr. Raphael Golebiowski, MD or Dr. Glen Rebman, DO to calibrate your tailored protocol.",
      deliverable: "Electronic Rx Transmitted in < 15 Min"
    },
    {
      num: "03",
      title: "Pharmacy Delivery + Sunflower Sober App",
      subtitle: "Medication & Digital Behavioral Support",
      desc: "Pick up generic Naltrexone (50mg) at your local pharmacy or receive discreet home delivery. Your patient account syncs directly with the Sunflower Sober app for craving tracking and 24/7 AI sponsor support.",
      deliverable: "Active Ongoing Clinical Care"
    }
  ];

  return (
    <article className="max-w-3xl mx-auto space-y-10 text-slate-800">
      
      {/* Editorial Meta Header & Medical Byline */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold uppercase tracking-wider text-[10px]">
            Clinical Guide
          </span>
          <span>•</span>
          <span>6 min read</span>
          <span>•</span>
          <span>Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          How to Get Naltrexone Online Without Going to Rehab
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          You don’t need a $30,000 inpatient rehab stay to stop alcohol cravings. Learn how to get an online Naltrexone prescription and licensed therapy from home.
        </p>

        {/* Medical Reviewer Schema Badge */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0">
              MD
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">
                Medically Reviewed by Dr. Raphael Golebiowski, MD &amp; Dr. Glen Rebman, DO
              </span>
              <span className="text-slate-500">
                Medical Director &amp; Senior Addiction Psychiatrist • Board-Certified Addiction Medicine
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
            <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
            Verified NPI
          </span>
        </div>
      </header>

      {/* THE HOOK (First 100 Words) */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
        <p>
          You poured your first drink at 6:30 PM with the genuine intention of stopping after one. By 9:15 PM, the bottle is empty, a familiar wave of self-recrimination sets in, and you spend the next morning promising yourself that tonight will be different.
        </p>
        <p>
          It almost never is.
        </p>
        <p>
          That failure has nothing to do with your willpower or your moral character. <strong>Your brain has spent years building dense neurochemical pathways that equate alcohol with survival-level dopamine relief.</strong> When an alcohol craving strikes, you aren't fighting a lack of discipline—you are fighting an automated biological reflex.
        </p>
      </section>

      {/* SECTION 2: Why Most People Don't Need Inpatient Rehab */}
      <section className="space-y-4 pt-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Why Most People Don't Need Inpatient Rehab to Change Their Drinking
        </h2>

        <div className="text-base sm:text-lg leading-relaxed text-slate-700 space-y-4">
          <p>
            For decades, the commercial addiction industry insisted on a single, rigid mandate: you must step away from your family, take medical leave from your job, and spend 30 days in a residential treatment center costing upwards of <strong>$30,000 to $60,000 out-of-pocket</strong>.
          </p>
          <p>
            While inpatient detox is critical for acute medical withdrawal, it presents a fundamental architectural flaw for everyday drinking: <strong>it treats your cravings in an artificial vacuum.</strong>
          </p>
          <p>
            In a residential facility, remaining abstinent is easy because there is no evening commute, no stressful work inbox, and no wine bottles sitting in your kitchen pantry.
          </p>
          <p>
            The moment you return home, those unexamined environmental triggers strike with full intensity. Peer-reviewed data reveals that between <strong>50% and 80% of residential rehab patients relapse within their first year post-discharge</strong>.
          </p>
          <p>
            To permanently extinguish an alcohol craving, you must rewire the neurochemical response in the exact living room, pantry, and daily routine where that craving was originally conditioned.
          </p>
        </div>

        {/* Solid Comparison Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Traditional 30-Day Rehab
            </span>
            <span className="text-2xl font-black text-slate-900 block">$30,000 – $60,000</span>
            <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
              <li>• Requires 30–60 days away from career &amp; family</li>
              <li>• Disconnects you from your real-world environment</li>
              <li>• Mandates immediate lifetime abstinence pledges</li>
              <li>• 50% to 80% 1-year relapse rate post-discharge</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-300 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              Sunflower Outpatient Telehealth
            </span>
            <span className="text-2xl font-black text-slate-900 block">$0 – $15 Co-pay or $99/mo</span>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
              <li>• 100% confidential visits from your living room</li>
              <li>• Covered by state Medicaid (PA &amp; MI) &amp; private insurance</li>
              <li>• Treats cravings in your real-life environment</li>
              <li>• Physician-supervised pharmacotherapy &amp; digital CBT</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: What Naltrexone Actually Does to Your Brain */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          What Naltrexone Actually Does to Your Brain
        </h2>

        <div className="text-base sm:text-lg leading-relaxed text-slate-700 space-y-4">
          <p>
            Naltrexone is an FDA-approved non-narcotic medication that functions as a <strong>pure opioid receptor antagonist</strong>. Unlike sedatives or habit-forming medications, Naltrexone has zero abuse potential, causes no physical dependence, and produces no intoxicating buzz or sedation.
          </p>
          <p>
            When you drink alcohol, your central nervous system triggers a rapid release of beta-endorphins. These endorphins bind directly to your brain's <strong>mu-opioid receptors</strong>, which downstream causes a massive dopamine surge inside your nucleus accumbens.
          </p>
          <p>
            That chemical surge is what your subconscious brain registers as profound relief and reward, compelling you to pour a second, third, and fourth drink.
          </p>
          <p>
            Naltrexone cleanly sits on those exact mu-opioid receptors and blocks them. <strong>When you drink, the endorphins have nowhere to bind.</strong> The compulsive urge to keep drinking is quieted, allowing you to stop after one drink or lose interest altogether.
          </p>
        </div>

        {/* JAMA COMBINE Trial Clinical Card */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                PEER-REVIEWED CLINICAL GROUNDING
              </span>
              <h3 className="text-lg font-bold text-white">
                The JAMA COMBINE Trial (1,383 Patients)
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              JAMA. 2006;295(17):2003-2017
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="text-2xl font-black text-amber-400 block">74%</span>
              <span className="text-xs text-slate-300 font-semibold block mt-0.5">Good Clinical Outcome</span>
              <p className="text-[11px] text-slate-400 mt-1">
                Patients receiving oral Naltrexone + medical management maintained sustained recovery without hospital admission.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <span className="text-2xl font-black text-emerald-400 block">28% Drop</span>
              <span className="text-xs text-slate-300 font-semibold block mt-0.5">Heavy Drinking Days</span>
              <p className="text-[11px] text-slate-400 mt-1">
                Significant, sustained reduction in heavy drinking episodes compared to placebo controls (p &lt; 0.001).
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            <strong>The Takeaway:</strong> Outpatient primary care pharmacotherapy with Naltrexone delivers clinical outcomes that match or exceed expensive residential stays at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* CONTEXTUAL CTA 1: Mid-Funnel Micro-Commitment */}
      <section className="p-6 rounded-2xl bg-amber-50 border border-amber-300 space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded inline-block">
            Step 1: Clinical Pre-Check
          </span>
          <h3 className="text-xl font-extrabold text-slate-950">
            Quick Pre-Screen: Is Outpatient Naltrexone Right For You?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Select your current situation below to receive instant suitability guidance:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => setScreenerAnswer('suitable')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              screenerAnswer === 'suitable'
                ? 'border-amber-500 bg-white ring-2 ring-amber-400 font-semibold shadow-xs'
                : 'border-amber-200 bg-white/80 hover:bg-white text-slate-800'
            }`}
          >
            <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>I want to reduce or stop cravings</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              I have stable liver function and do not take daily prescription opioid painkillers.
            </p>
          </button>

          <button
            onClick={() => setScreenerAnswer('opioids')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              screenerAnswer === 'opioids'
                ? 'border-amber-500 bg-white ring-2 ring-amber-400 font-semibold shadow-xs'
                : 'border-amber-200 bg-white/80 hover:bg-white text-slate-800'
            }`}
          >
            <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>I currently take daily opioid pain meds</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              Requires a safe clinical washout period before Naltrexone to avoid precipitated withdrawal.
            </p>
          </button>
        </div>

        {screenerAnswer && (
          <div className="p-3.5 rounded-xl bg-white border border-amber-300 text-xs text-slate-800 leading-relaxed">
            {screenerAnswer === 'suitable' ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <strong className="text-emerald-800 font-bold block">✅ High Eligibility for Outpatient Telehealth:</strong>
                  You meet baseline clinical requirements for same-day Naltrexone evaluation. Our physicians can see you today in PA, MI, OH, NY, NJ, CA, FL, and TX.
                </div>
                <button
                  onClick={onOpenIntake}
                  className="px-4 py-2 rounded-lg bg-slate-950 text-white font-bold text-xs shrink-0 cursor-pointer hover:bg-slate-800"
                >
                  Book Video Consult &rarr;
                </button>
              </div>
            ) : (
              <div>
                <strong className="text-amber-900 font-bold block">⚠️ Washout Protocol Required:</strong>
                Because Naltrexone blocks opioid receptors, taking it while opioids (like Oxycodone or Tramadol) are in your bloodstream will trigger acute withdrawal. Our clinicians can guide you through a safe tapering schedule.
              </div>
            )}
          </div>
        )}
      </section>

      {/* SECTION 4: How to Get Naltrexone Online in 3 Simple Steps */}
      <section className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            How to Get Naltrexone Online in 3 Simple Steps
          </h2>
          <p className="text-base text-slate-600 mt-1">
            Our low-barrier medical protocol moves you from assessment to prescription in under 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h3 className="font-extrabold text-base text-slate-950">{st.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                  {st.desc}
                </p>
              </div>

              <div className="shrink-0 pl-8 sm:pl-0 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{st.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FAQ Accordion */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 cursor-pointer hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                    >
                      <p className="pt-2">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTEXTUAL CTA 2: Primary End-of-Funnel Offer */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white space-y-5 border border-slate-800 shadow-lg">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
            CONFIDENTIAL TELEHEALTH INTAKE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Ready to Extinguish Alcohol Cravings from Home?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
            You do not need to pause your career, spend $30,000, or white-knuckle through another stressful evening. Same-day video appointments are open with board-certified addiction physicians across PA, MI, OH, NY, NJ, CA, FL, and TX.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="space-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Medicaid Accepted ($0–$15 Co-Pay) or Flat $99/mo Self-Pay
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-500" />
              Electronic Rx Sent to Your Preferred Local Pharmacy in 15 Minutes
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Schedule Telehealth Visit</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </article>
  );
}
