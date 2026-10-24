import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Pill, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  FileCode2, 
  Bot, 
  Activity, 
  Clock, 
  Truck, 
  Smartphone, 
  HelpCircle,
  FileCheck2,
  Stethoscope,
  Info
} from 'lucide-react';
import { JAMA_STUDIES, CLINICAL_LEADERSHIP, FAQ_DATA } from '../data/contentData';

export default function View2NaltrexoneOnline({ onOpenSchema, onOpenGeo, onOpenIntake }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [quizScore, setQuizScore] = useState(null);

  const steps = [
    {
      step: 1,
      title: "3-Minute Clinical Self-Check",
      subtitle: "Confidential Online Triage",
      desc: "Complete an asynchronous health history questionnaire. We screen for liver health, current alcohol consumption patterns, and exclude contraindications (such as active opioid pain medications).",
      deliverable: "Instant Clinical Suitability Confirmation",
      icon: Stethoscope
    },
    {
      step: 2,
      title: "Same-Day Clinician Video Call",
      subtitle: "Licensed State Physician Consult",
      desc: "Meet securely with Dr. Raphael Golebiowski, MD, Dr. Glen Rebman, DO, or our licensed clinical team. We review your goals (Harm Reduction / TSM vs. Abstinence) and write your e-prescription.",
      deliverable: "Electronic Rx Transmitted in < 15 Minutes",
      icon: Calendar
    },
    {
      step: 3,
      title: "Home Delivery + Sunflower Sober App",
      subtitle: "Medication & Daily Behavioral Multiplier",
      desc: "Generic Naltrexone (50mg) arrives in discreet packaging or is sent to your local pharmacy. Your patient account instantly syncs with the Sunflower Sober app for dosing reminders, craving curves, and 24/7 AI sponsor support.",
      deliverable: "Active Ongoing Clinical & Digital Care",
      icon: Truck
    }
  ];

  const handleSelfCheck = (answer) => {
    setQuizScore(answer);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 pb-12 max-w-5xl mx-auto"
    >
      {/* SEO & Programmatic Metadata Header Bar */}
      <section className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold uppercase tracking-wider text-[10px]">
              Target Keyword
            </span>
            <span className="font-mono font-semibold text-slate-800">
              "how to get naltrexone online without rehab"
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenSchema}
              className="text-slate-600 hover:text-amber-700 flex items-center gap-1 font-semibold cursor-pointer text-[11px]"
            >
              <FileCode2 className="w-3.5 h-3.5 text-amber-500" />
              <span>MedicalWebPage JSON-LD</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenGeo}
              className="text-slate-600 hover:text-amber-700 flex items-center gap-1 font-semibold cursor-pointer text-[11px]"
            >
              <Bot className="w-3.5 h-3.5 text-amber-500" />
              <span>ChatGPT Citation Preview</span>
            </button>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
          <div>
            <strong className="text-slate-500">Meta Title:</strong>{" "}
            <span className="text-slate-900 font-semibold">How to Get Naltrexone Online Without Rehab (2026 Clinical Guide) | Sunflower Clinic</span>
          </div>
          <div>
            <strong className="text-slate-500">Meta Description:</strong>{" "}
            <span className="text-slate-700">You don’t need a $30,000 inpatient rehab stay to stop alcohol cravings. Learn how to get an online Naltrexone prescription and licensed therapy from home.</span>
          </div>
        </div>
      </section>

      {/* Main Article Header */}
      <article className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>CLINICALLY REVIEWED &amp; FDA-APPROVED PROTOCOL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            How to Get Naltrexone Online Without Going to Rehab
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            For decades, traditional American addiction care insisted that the only way to treat alcohol use disorder was an expensive 30-day inpatient stay costing upwards of $30,000. Modern neurobiology and federal telehealth regulations have rendered that monopoly obsolete.
          </p>

          {/* Medical Reviewer Bar */}
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-xs">
                MD
              </div>
              <div>
                <span className="font-extrabold text-slate-900 block">
                  Medically Reviewed by Dr. Raphael Golebiowski, MD &amp; Dr. Glen Rebman, DO
                </span>
                <span className="text-slate-500">
                  Board Certified Addiction Medicine • Updated October 2026 • Verified NPI
                </span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                NPI Verified
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-[10px]">
                Ryan Haight Compliant
              </span>
            </div>
          </div>
        </div>

        {/* Clinical Data Card: JAMA COMBINE Trial */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                PEER-REVIEWED CLINICAL GROUNDING
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {JAMA_STUDIES.combine.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {JAMA_STUDIES.combine.citation} • {JAMA_STUDIES.combine.sampleSize}
              </p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold self-start sm:self-auto">
              Level 1A Medical Evidence
            </div>
          </div>

          {/* Stat Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {JAMA_STUDIES.combine.keyFindings.map((finding, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-850/80 border border-slate-800 space-y-2">
                <span className="text-2xl font-black text-amber-400 block">{finding.metric}</span>
                <p className="text-xs text-slate-300 leading-snug">{finding.label}</p>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300 font-bold">
                  {finding.change}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 leading-relaxed">
            <strong className="text-amber-300">The Clinical Takeaway:</strong> The landmark COMBINE trial demonstrated that outpatient primary care pharmacotherapy with Naltrexone matches or exceeds traditional inpatient rehab outcomes without hospital admission or career interruption.
          </div>
        </section>

        {/* 3-Step Interactive Process Cards */}
        <section className="space-y-6 pt-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Low-Barrier Telehealth Workflow</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              The 3-Step Process: From Assessment to Prescription in 24 Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((st) => {
              const Icon = st.icon;
              const isActive = activeStep === st.step;
              return (
                <motion.div
                  key={st.step}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveStep(st.step)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-amber-400 ring-2 ring-amber-400/20 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-extrabold text-xs flex items-center justify-center">
                        {st.step}
                      </span>
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">{st.title}</h3>
                      <span className="text-xs font-semibold text-slate-500">{st.subtitle}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{st.deliverable}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Interactive Self-Check Quiz Widget */}
        <section className="bg-amber-50/70 rounded-3xl p-6 sm:p-8 border border-amber-200/80 space-y-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 px-2 py-0.5 rounded bg-amber-200/80 inline-block">
              Interactive Self-Triage
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              Quick Pre-Screen: Is Online Naltrexone Right For You?
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Check if you meet the baseline clinical criteria for same-day outpatient telehealth evaluation:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => handleSelfCheck('suitable')}
              className="p-4 rounded-2xl bg-white border border-amber-300 hover:border-amber-400 text-left transition-all cursor-pointer shadow-2xs space-y-1.5"
            >
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>I want to reduce or stop cravings</span>
              </div>
              <p className="text-xs text-slate-600">
                I do not take opioid pain medications and have stable liver health.
              </p>
            </button>

            <button
              onClick={() => handleSelfCheck('opioids')}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-left transition-all cursor-pointer shadow-2xs space-y-1.5"
            >
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-600" />
                <span>I currently take daily opioid pain meds</span>
              </div>
              <p className="text-xs text-slate-600">
                Requires clinical detox/taper before Naltrexone to prevent precipitated withdrawal.
              </p>
            </button>
          </div>

          {quizScore && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                quizScore === 'suitable'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-amber-100 border-amber-300 text-amber-950'
              }`}
            >
              {quizScore === 'suitable' ? (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <strong className="block text-sm text-emerald-800">✅ High Candidate for Online Telehealth:</strong>
                    You meet initial clinical eligibility for Naltrexone and digital CBT. Our physicians can see you today in PA, MI, OH, NY, NJ, CA, FL, and TX.
                  </div>
                  <button
                    onClick={onOpenIntake}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 cursor-pointer"
                  >
                    Start Visit Now
                  </button>
                </div>
              ) : (
                <div>
                  <strong className="block text-sm text-amber-900">⚠️ Medication Adjustment Required:</strong>
                  Because Naltrexone is an opioid antagonist, taking it while opioids (like Oxycodone, Buprenorphine, or Tramadol) are in your system will trigger immediate withdrawal. Our clinicians can guide you through a safe washout schedule.
                </div>
              )}
            </motion.div>
          )}
        </section>

        {/* Animated FAQ Accordion */}
        <section className="space-y-4 pt-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Common Questions &amp; Legal Clarity</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Frequently Asked Questions About Online Naltrexone
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
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer hover:bg-slate-50/70"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40"
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

        {/* Article Bottom CTA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Confidential Telehealth Care</span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to Stop Alcohol Cravings from Home?
            </h3>
            <p className="text-xs text-slate-300 max-w-md">
              No rehab stay. No forced 12-step dogma. Just evidence-based medicine and licensed therapy covered by Medicaid &amp; commercial insurance.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenIntake}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Book Same-Day Consult</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </motion.button>
        </section>
      </article>
    </motion.div>
  );
}
