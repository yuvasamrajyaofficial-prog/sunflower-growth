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
  Activity, 
  Brain, 
  DollarSign,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { JAMA_STUDIES, FAQ_DATA } from '../data/contentData';

export default function Article1NaltrexoneOnline({ onOpenIntake }) {
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      num: "01",
      title: "3-Minute Clinical Self-Check",
      subtitle: "Confidential Online Triage",
      desc: "Complete an asynchronous clinical questionnaire reviewing your medical history, liver health, and current drinking patterns to verify eligibility and rule out active opioid medications.",
      deliverable: "Instant Eligibility Feedback",
      icon: Stethoscope
    },
    {
      num: "02",
      title: "Same-Day Clinician Video Call",
      subtitle: "State-Licensed Physician Consult",
      desc: "Meet face-to-face with Dr. Raphael Golebiowski, MD or Dr. Glen Rebman, DO via secure, HIPAA-compliant video. Your physician tailors your dosing protocol and transmits your prescription immediately.",
      deliverable: "Electronic Rx Transmitted in < 15 Min",
      icon: Calendar
    },
    {
      num: "03",
      title: "Pharmacy Delivery + Sunflower Sober App",
      subtitle: "Medication & Digital Behavioral Support",
      desc: "Generic Naltrexone (50mg) arrives at your doorstep in discreet packaging or at your local pharmacy. Your patient chart syncs with the Sunflower Sober app for TSM timers, craving tracking, and 24/7 AI sponsor check-ins.",
      deliverable: "Active Ongoing Clinical Care",
      icon: Truck
    }
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      
      {/* Editorial Meta Header & Medical Byline */}
      <header className="space-y-6 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold uppercase tracking-wider text-[11px]">
            Medication-Assisted Treatment
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">Published by Sunflower Medical Editorial Board</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">Last Clinically Updated: October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          How to Get Naltrexone Online Without Going to Rehab
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          You don’t need a $30,000 inpatient rehab stay to stop alcohol cravings. Learn how to get an online Naltrexone prescription and licensed therapy from the privacy of your home.
        </p>

        {/* Medical Reviewer Schema Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 font-black flex items-center justify-center text-sm shadow-xs shrink-0">
              MD
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm sm:text-base text-slate-950">
                  Medically Reviewed by Dr. Raphael Golebiowski, MD &amp; Dr. Glen Rebman, DO
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Medical Director &amp; Senior Addiction Psychiatrist • Board-Certified Addiction Medicine • Verified NPI
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              Level 1 Evidence
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-[10px] font-bold">
              Ryan Haight Compliant
            </span>
          </div>
        </div>
      </header>

      {/* SECTION 2: Why Most People Don't Need Inpatient Rehab */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Why Most People Don't Need Inpatient Rehab to Change Their Drinking
        </h2>

        <div className="prose text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            For more than half a century, American addiction care operated under a single rigid premise: if you struggled to control your drinking, you had to step away from your family, surrender your smartphone, pause your career, and spend 30 days in a residential treatment center costing upwards of <strong>$30,000 to $60,000 out-of-pocket</strong>.
          </p>
          <p>
            Yet longitudinal addiction data reveals a striking truth: the vast majority of individuals with mild to moderate Alcohol Use Disorder (AUD) do not need inpatient hospitalization. Detoxing in an artificial facility often produces a honeymoon period of abstinence, only for intense cravings to rebound the moment the patient returns to their everyday living room, pantry, and social triggers.
          </p>
          <p>
            Modern clinical addiction medicine has shifted decisively toward <strong>outpatient harm-reduction and telehealth pharmacotherapy</strong>. By treating cravings in the exact environment where you live and work, your brain learns to extinguish the alcohol reflex in real-world contexts.
          </p>
        </div>

        {/* Cost & Barrier Comparison Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-rose-700 block">
              Traditional 30-Day Inpatient Rehab
            </span>
            <span className="text-2xl font-black text-slate-900 block">$30,000 – $60,000</span>
            <ul className="text-xs text-rose-900 space-y-1.5 pt-1">
              <li>• Requires taking 30–60 days off employment</li>
              <li>• Disconnects you from family, children, and daily life</li>
              <li>• Mandates immediate, 100% complete abstinence pledges</li>
              <li>• High post-discharge relapse rate (50% to 80% at 1 year)</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block">
              Sunflower Outpatient Telehealth
            </span>
            <span className="text-2xl font-black text-slate-900 block">$0 – $15 Co-pay or $99/mo</span>
            <ul className="text-xs text-emerald-900 space-y-1.5 pt-1">
              <li>• 100% confidential visits from home on your schedule</li>
              <li>• Covered by state Medicaid (PA &amp; MI) and private insurance</li>
              <li>• Supports both The Sinclair Method (TSM) and abstinence</li>
              <li>• Extinguishes cravings in your real-life environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: What Naltrexone Actually Does to Your Brain (JAMA COMBINE Trial) */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          What Naltrexone Actually Does to Your Brain
        </h2>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Naltrexone is an FDA-approved non-narcotic medication that functions as a <strong>pure opioid receptor antagonist</strong>. Unlike sedatives or habit-forming anti-anxiety medications, Naltrexone has zero abuse potential, causes no physical dependence, and produces no intoxicating buzz or sedation.
        </p>

        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
          <div className="flex items-center space-x-2 font-bold text-amber-950 text-sm">
            <Brain className="w-5 h-5 text-amber-600" />
            <span>The Neurobiology of the "Endorphin Circuit"</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            When you drink alcohol, your brain releases a surge of beta-endorphins that bind to mu-opioid receptors, which downstream triggers a massive dopamine release in the nucleus accumbens. This rapid dopamine burst is what the brain interprets as euphoria and reward, etching a deep Pavlovian habit loop that demands the next drink.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Naltrexone cleanly sits on those exact mu-opioid receptors and blocks them. When endorphins are released, they have nowhere to bind. The compulsive urge to keep ordering drinks is quieted, allowing you to naturally put down a drink after one or two sips.
          </p>
        </div>

        {/* JAMA COMBINE Trial Deep Dive Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                PEER-REVIEWED CLINICAL GROUNDING
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                The JAMA COMBINE Trial Findings
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {JAMA_STUDIES.combine.citation} • 1,383 Alcohol-Dependent Patients
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold self-start sm:self-auto">
              JAMA Clinical Landmark
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {JAMA_STUDIES.combine.keyFindings.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-2xl font-black text-amber-400 block">{item.metric}</span>
                <p className="text-xs text-slate-300 leading-snug">{item.label}</p>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  {item.change}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            <strong>Clinical Consensus:</strong> The landmark COMBINE trial proved that outpatient medical management with oral Naltrexone achieves a <strong>74% favorable clinical outcome</strong> and a <strong>28% reduction in heavy drinking days</strong>. Hospitalization is simply not required for the majority of patients to achieve lasting neurochemical recovery.
          </p>
        </div>
      </section>

      {/* SECTION 4: How to Get Naltrexone Online in 3 Simple Steps */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Care Pathway
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            How to Get Naltrexone Online in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-900 opacity-20">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-950">{st.title}</h3>
                  <span className="text-xs font-semibold text-slate-500 block">{st.subtitle}</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{st.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar inside process */}
        <div className="p-6 rounded-3xl bg-amber-400 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-extrabold text-lg text-slate-950">
              Ready to verify your eligibility today?
            </h4>
            <p className="text-xs text-slate-900 font-medium">
              Appointments available within 24 hours across PA, MI, OH, NY, NJ, CA, FL, and TX.
            </p>
          </div>
          <button
            onClick={onOpenIntake}
            className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs shrink-0 cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <span>Start 3-Minute Pre-Check</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>

      {/* SECTION 5: FAQ Accordion */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Clinical Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                    >
                      <p className="pt-3">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </article>
  );
}
