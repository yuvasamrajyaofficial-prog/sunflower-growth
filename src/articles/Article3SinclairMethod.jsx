import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Pill, 
  Clock, 
  Brain, 
  CheckCircle2, 
  Bot, 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  Check, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { JAMA_STUDIES } from '../data/contentData';

export default function Article3SinclairMethod({ onOpenIntake }) {
  const [protocolPreference, setProtocolPreference] = useState(null);

  const comparisonData = [
    {
      feature: "Dosing Schedule & Timing",
      daily: "50mg taken once every morning upon waking, regardless of whether you plan to drink.",
      tsm: "50mg taken strictly 60 minutes before your first sip of alcohol. Never taken on alcohol-free days."
    },
    {
      feature: "Primary Clinical Objective",
      daily: "Immediate total abstinence from all alcohol from Day 1.",
      tsm: "Pharmacological extinction: systematic reduction of cravings leading to moderate drinking or natural abstinence."
    },
    {
      feature: "Brain Endorphin Mechanics",
      daily: "Continuous 24/7 opioid receptor blockade. Can subtly dampen natural endorphins from gym workouts or hobbies.",
      tsm: "Selective blockade: On alcohol-free days (no pill), mu-opioid receptors remain open and naturally sensitive to exercise, food, and socializing."
    },
    {
      feature: "Clinical Success Rate (Trials)",
      daily: "COMBINE Trial: 74% good clinical outcome when paired with medical management.",
      tsm: "Dr. John David Sinclair: ~78% extinction success across international cohorts."
    },
    {
      feature: "Patient Adherence & Compliance",
      daily: "Vulnerable to deliberate skipping if a patient intends to drink without medication.",
      tsm: "High adherence because the protocol permits drinking; patients simply comply with the 'Golden 1-Hour Rule'."
    }
  ];

  return (
    <article className="max-w-3xl mx-auto space-y-10 text-slate-800">
      
      {/* Editorial Meta Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold uppercase tracking-wider text-[10px]">
            Clinical Pharmacology &amp; TSM
          </span>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          The Sinclair Method (TSM) vs. Daily Naltrexone: How Our Telehealth Clinic Personalizes Your Protocol
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          Comparing Targeted Naltrexone (The Sinclair Method) vs. Daily Naltrexone with CBT. Learn how our licensed telehealth doctors personalize your protocol.
        </p>

        {/* Doctor Byline */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center shrink-0">
              MD
            </div>
            <div>
              <span className="font-bold text-slate-900 block">
                Authored by Dr. Raphael Golebiowski, MD &amp; Dr. Glen Rebman, DO
              </span>
              <span className="text-slate-500">
                Board-Certified Addiction Medicine • Active in PA, MI, OH, NY, NJ, CA, FL, TX
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
            Level 1 Evidence
          </span>
        </div>
      </header>

      {/* THE HOOK (First 100 Words) */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
        <p>
          If you have ever attempted to quit drinking by swearing off alcohol entirely, you are familiar with the "white-knuckle exhaustion."
        </p>
        <p>
          You survive 7, 14, or 21 days on pure willpower. But every social gathering, work dinner, and stressful evening becomes an agonizing internal debate. Eventually, willpower fatigues, you take a single sip, and within 48 hours you find yourself caught in an intense binge cycle driven by shame and rebound cravings.
        </p>
        <p>
          <strong>One size does not fit all in modern addiction medicine.</strong> While traditional programs mandate immediate, permanent abstinence, modern pharmacotherapy offers a revolutionary alternative: <strong>The Sinclair Method (TSM)</strong>, a targeted protocol that unlearns cravings at the receptor level without demanding an instant cold-turkey pledge.
        </p>
      </section>

      {/* SECTION 1: Dr. Sinclair's Discovery & Extinction */}
      <section className="space-y-4 pt-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          The Science of Pharmacological Extinction
        </h2>

        <div className="text-base sm:text-lg leading-relaxed text-slate-700 space-y-4">
          <p>
            In behavioral psychology, when an organism performs a specific action and receives an immediate neurochemical reward, that behavior becomes deeply conditioned. Alcohol dependency is fundamentally a learned reflex: drinking triggers beta-endorphins, which flood the nucleus accumbens with dopamine.
          </p>
          <p>
            In the 1990s, Finnish researcher <strong>Dr. John David Sinclair</strong> discovered that this Pavlovian loop could be dismantled in reverse.
          </p>
          <p>
            By taking 50mg of oral Naltrexone strictly <strong>60 minutes prior to the first drink of the day</strong>, the mu-opioid receptors are blocked before alcohol enters the bloodstream. You drink, but your brain receives zero dopamine reinforcement.
          </p>
          <p>
            Over 3 to 6 months of repeated extinction sessions, your brain realizes that alcohol no longer provides survival-level pleasure. Compulsive cravings gradually dissolve, allowing you to easily stop after one drink or lose interest in alcohol entirely.
          </p>
        </div>

        {/* Sinclair Trial Spotlight Card */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                PRIMARY STUDY ARCHIVE
              </span>
              <h3 className="text-lg font-bold text-white">
                Dr. John David Sinclair's Extinction Trials
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Alcohol and Alcoholism. 2001;36(1):2-11
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
            <div className="space-y-1">
              <span className="text-3xl font-black text-amber-400 block">78% Extinction Rate</span>
              <p className="text-xs text-slate-300">
                Patients experienced complete extinction of alcohol dependence or reduced consumption to safe, non-hazardous levels.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 max-w-xs shrink-0">
              <strong className="text-amber-300 block mb-0.5">The Golden Rule of TSM:</strong>
              Never drink without waiting 60 minutes after taking 50mg of Naltrexone.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Solid Head-to-Head Comparison Table */}
      <section className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Daily Morning Naltrexone vs. Targeted Naltrexone (The Sinclair Method)
          </h2>
          <p className="text-base text-slate-600 mt-1">
            Review the clinical differences below to see how our physicians match the protocol to your biology.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-extrabold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 w-1/4">Clinical Dimension</th>
                  <th className="py-3.5 px-4 w-3/8 bg-slate-100 text-slate-900">Daily Morning Naltrexone</th>
                  <th className="py-3.5 px-4 w-3/8 bg-amber-100/70 text-amber-950">Targeted Naltrexone (TSM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-950 align-top">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed align-top">
                      {row.daily}
                    </td>
                    <td className="py-3.5 px-4 text-amber-950 font-medium leading-relaxed bg-amber-50/20 align-top">
                      {row.tsm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONTEXTUAL CTA 1: Mid-Funnel Protocol Matcher */}
      <section className="p-6 rounded-2xl bg-amber-50 border border-amber-300 space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded inline-block">
            Step 1: Protocol Assessment
          </span>
          <h3 className="text-xl font-extrabold text-slate-950">
            Which Recovery Strategy Fits Your Personal Goal?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700">
            Select your preferred recovery target to view physician recommendations:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => setProtocolPreference('tsm')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              protocolPreference === 'tsm'
                ? 'border-amber-500 bg-white ring-2 ring-amber-400 font-semibold shadow-xs'
                : 'border-amber-200 bg-white/80 hover:bg-white text-slate-800'
            }`}
          >
            <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>"I want to reduce cravings gradually or drink moderately"</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              You prefer The Sinclair Method harm-reduction model to unlearn cravings over 3 to 6 months without total abstinence pressure.
            </p>
          </button>

          <button
            onClick={() => setProtocolPreference('daily')}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              protocolPreference === 'daily'
                ? 'border-amber-500 bg-white ring-2 ring-amber-400 font-semibold shadow-xs'
                : 'border-amber-200 bg-white/80 hover:bg-white text-slate-800'
            }`}
          >
            <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>"I want immediate, complete sobriety from Day 1"</span>
            </div>
            <p className="text-[11px] text-slate-600 mt-1">
              You prefer daily morning protection combined with weekly CBT to eliminate the daily debate over whether you will drink.
            </p>
          </button>
        </div>

        {protocolPreference && (
          <div className="p-3.5 rounded-xl bg-white border border-amber-300 text-xs text-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-slate-900 font-bold block">
                {protocolPreference === 'tsm' ? '🌻 Recommended: The Sinclair Method (TSM Protocol)' : '🛡️ Recommended: Daily Morning Naltrexone + CBT'}
              </strong>
              <span className="text-slate-600">
                {protocolPreference === 'tsm'
                  ? 'Our physicians will calibrate your 50mg targeted dosing and sync your portal with the 60-minute countdown timer.'
                  : 'Our physicians will prescribe daily morning dosing paired with weekly digital CBT for sustained abstinence.'}
              </span>
            </div>
            <button
              onClick={onOpenIntake}
              className="px-4 py-2 rounded-lg bg-slate-950 text-white font-bold text-xs shrink-0 cursor-pointer hover:bg-slate-800"
            >
              Consult with Doctor &rarr;
            </button>
          </div>
        )}
      </section>

      {/* SECTION 3: The CBT Multiplier */}
      <section className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            The CBT Multiplier: Medication + Therapy + AI Recovery Sponsor Sam
          </h2>
          <p className="text-base text-slate-600 mt-1">
            Pharmacotherapy blocks receptor reinforcement. But lasting sobriety requires rewiring the emotional triggers behind drinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Pill className="w-4 h-4 text-amber-600" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-950">1. Calibrated Pharmacotherapy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Supervised by board-certified addiction physicians (Dr. Raphael Golebiowski MD &amp; Dr. Glen Rebman DO) with tailored dosing adjustments.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              <Brain className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-950">2. Weekly 1-on-1 Digital CBT</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sessions with licensed counselors Kera Passante, LPC and Brad Holt, LPC to deconstruct anxiety, stress habits, and distorted thoughts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-900 flex items-center justify-center font-bold">
              <Bot className="w-4 h-4 text-sky-600" />
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-950">3. AI Recovery Sponsor "Sam"</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              24/7 in-app support inside the Sunflower Sober app. Sam manages your 60-min TSM timer and provides non-judgmental craving de-escalation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXTUAL CTA 2: Primary End-of-Funnel Offer */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white space-y-5 border border-slate-800 shadow-lg">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
            PERSONALIZED PROTOCOL INTAKE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Consult an Addiction Physician to Personalize Your Protocol
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
            Whether your goal is targeted harm reduction via The Sinclair Method or complete daily abstinence, Sunflower Clinic has licensed clinicians ready today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="space-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Medicaid Accepted or Flat $99/mo Self-Pay
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-500" />
              Same-Day Electronic Prescriptions &amp; App Sync
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book Doctor Consultation</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </article>
  );
}
