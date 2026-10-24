import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Brain,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Check,
  Pill,
  Bot
} from 'lucide-react';

const comparisonRows = [
  {
    feature: 'Dosing schedule',
    daily: '50 mg every morning upon waking, regardless of whether you plan to drink.',
    tsm: '50 mg taken exactly 60 minutes before your first sip of alcohol. Not taken on alcohol-free days.'
  },
  {
    feature: 'Primary clinical objective',
    daily: 'Immediate and complete abstinence from Day 1.',
    tsm: 'Pharmacological extinction: progressive reduction of cravings leading to natural abstinence or safe moderation.'
  },
  {
    feature: 'Receptor mechanics',
    daily: 'Continuous 24/7 opioid blockade. May slightly dampen natural endorphins from exercise and social activity.',
    tsm: 'Selective blockade only during drinking episodes. On alcohol-free days, mu-opioid receptors remain fully open.'
  },
  {
    feature: 'Clinical success rate',
    daily: 'JAMA COMBINE Trial: 74% good clinical outcome with medical management.',
    tsm: 'Sinclair extinction trials: ~78% of patients achieved pharmacological extinction within 3–6 months.'
  },
  {
    feature: 'Ideal candidate profile',
    daily: 'Patients with a clear goal of immediate sobriety and strong behavioral support structure.',
    tsm: 'Patients who are not ready for immediate abstinence, or who want to reduce cravings gradually without willpower alone.'
  }
];

export default function Article3SinclairMethod({ onOpenIntake }) {
  const [protocolChoice, setProtocolChoice] = useState(null);

  return (
    <article className="max-w-3xl mx-auto" style={{ paddingBottom: '3rem' }}>

      {/* ── Header ── */}
      <header className="pb-8 mb-8 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
            Treatment Protocol
          </span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">8 min read</span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-5" style={{ lineHeight: 1.15 }}>
          The Sinclair Method vs. Daily Naltrexone: A Clinical Comparison
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Both protocols use the same FDA-approved medication. The difference lies in timing, 
          mechanism, and clinical objective. Here is how our physicians determine which approach 
          is right for your neurobiology and recovery goals.
        </p>

        {/* Reviewer card */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
          <div className="w-11 h-11 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0">
            MD
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-900 block">
              Authored by Dr. Raphael Golebiowski, MD & Dr. Glen Rebman, DO
            </span>
            <span className="text-[11px] text-slate-500">
              Board-Certified Addiction Medicine · Active in PA, MI, OH, NY, NJ, CA, FL, TX
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-[11px] font-bold shrink-0">
            Level 1 Evidence
          </span>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="article-prose">

        <p>
          If you have tried to stop drinking through willpower alone, you are familiar 
          with the pattern: seven days of white-knuckled sobriety followed by a stressful 
          Thursday evening, a single drink, and a full relapse cycle driven by shame and 
          neurochemical rebound.
        </p>
        <p>
          The problem is architectural, not motivational. <strong>Abstinence pledges do 
          not change the underlying neurobiology.</strong> They simply suppress behavior 
          until the suppressive force—willpower—exhausts itself.
        </p>
        <p>
          Modern pharmacotherapy addresses this at the receptor level. The same medication, 
          Naltrexone (50 mg), can be deployed in two clinically distinct protocols: 
          daily morning dosing for complete abstinence, or targeted pre-drinking dosing 
          under The Sinclair Method (TSM) for pharmacological extinction of cravings.
        </p>

        <h2>How Pharmacological Extinction Works</h2>

        <p>
          In the 1990s, Finnish researcher <strong>Dr. John David Sinclair</strong> published 
          findings suggesting that alcohol dependence—like any conditioned behavior—could be 
          methodically "unlearned" at the neurochemical level through Pavlovian extinction.
        </p>
        <p>
          The mechanism is straightforward: when you drink alcohol, beta-endorphins bind to 
          mu-opioid receptors in the brain, triggering a downstream dopamine surge in the 
          nucleus accumbens. That dopamine signal is what the brain registers as reward, 
          reinforcing the drinking behavior each time it occurs.
        </p>
        <p>
          Under TSM, you take 50 mg of Naltrexone exactly <strong>60 minutes before your 
          first drink.</strong> When alcohol enters your bloodstream, the mu-opioid receptors 
          are already occupied. The endorphins have nowhere to bind. <strong>No dopamine 
          surge occurs.</strong>
        </p>
        <p>
          Repeated over three to six months, the brain's reward circuitry gradually 
          "unlearns" the association between alcohol and pleasure. Cravings diminish 
          progressively until many patients find they can easily stop after one drink, 
          or lose interest in alcohol entirely.
        </p>
      </div>

      {/* Sinclair Study Card */}
      <div className="my-8 p-6 rounded-2xl bg-slate-950 text-white">
        <div className="pb-4 border-b border-slate-800 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
            Primary Study Archive
          </span>
          <h3 className="text-[1.05rem] font-bold text-white">
            Dr. John David Sinclair's Extinction Trials
          </h3>
          <span className="text-[11px] text-slate-500 font-mono">Alcohol and Alcoholism. 2001;36(1):2–11</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between gap-5">
          <div>
            <span className="text-4xl font-black text-amber-400 block mb-1">78%</span>
            <span className="text-[13px] font-bold text-slate-200 block mb-2">Pharmacological Extinction Rate</span>
            <p className="text-[12px] text-slate-400 leading-relaxed max-w-xs">
              Patients achieved complete extinction of compulsive alcohol dependence 
              or reduced drinking to clinically safe, non-hazardous levels within 3–6 months.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-[12px] text-slate-300 max-w-xs">
            <strong className="text-amber-300 block mb-1.5">The Golden Rule of TSM:</strong>
            <span>Never consume alcohol without first waiting 60 minutes after taking 50 mg of Naltrexone. Adherence to this rule is the single most critical determinant of extinction success.</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
          Clinical Comparison: Daily Naltrexone vs. The Sinclair Method
        </h2>
        <p className="text-[14px] text-slate-500 mb-5">
          Both approaches use the same medication at the same dose. The distinction is 
          entirely in timing and clinical intent.
        </p>

        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">Dimension</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-slate-600">Daily Naltrexone</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50/60">Sinclair Method (TSM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 text-[12px] font-bold text-slate-800 align-top">{row.feature}</td>
                    <td className="py-4 px-4 text-[12px] text-slate-600 leading-relaxed align-top">{row.daily}</td>
                    <td className="py-4 px-4 text-[12px] text-amber-900 leading-relaxed align-top bg-amber-50/30 font-medium">{row.tsm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Protocol Matcher */}
      <div className="my-8 p-6 rounded-2xl bg-amber-50 border border-amber-200">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full inline-block mb-3">
          Protocol Assessment
        </span>
        <h3 className="text-xl font-extrabold text-slate-950 mb-1">
          Which Protocol Fits Your Recovery Goal?
        </h3>
        <p className="text-[13px] text-slate-600 mb-4">
          Select your primary objective to see the physician recommendation:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            {
              id: 'tsm',
              icon: <Clock className="w-4 h-4 text-amber-600" />,
              label: 'I want to reduce cravings gradually',
              sub: 'Not ready for immediate abstinence. Prefer to unlearn cravings over time while drinking moderately.'
            },
            {
              id: 'daily',
              icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
              label: 'I want complete sobriety from Day 1',
              sub: 'Committed to immediate abstinence. Prefer a once-daily pill and structured behavioral therapy.'
            }
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setProtocolChoice(opt.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                protocolChoice === opt.id
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
          {protocolChoice && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-xl bg-white border border-amber-200 text-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <strong className="text-slate-900 block mb-0.5">
                  {protocolChoice === 'tsm' ? '🌻 Recommended: The Sinclair Method (TSM)' : '🛡 Recommended: Daily Morning Naltrexone + CBT'}
                </strong>
                <span className="text-slate-600">
                  {protocolChoice === 'tsm'
                    ? 'Our physicians will calibrate your targeted 50 mg protocol and sync your Sunflower Sober app with a 60-minute countdown timer.'
                    : 'Our physicians will prescribe once-daily morning dosing paired with weekly licensed behavioral therapy sessions.'}
                </span>
              </div>
              <button
                onClick={onOpenIntake}
                className="px-4 py-2 rounded-lg bg-slate-950 text-white font-bold text-[12px] shrink-0 cursor-pointer hover:bg-slate-800 transition-colors whitespace-nowrap"
              >
                Consult a Doctor →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CBT + App Section */}
      <div className="my-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
          The Full Treatment Stack: Medication, Therapy & Digital Support
        </h2>
        <p className="text-[14px] text-slate-500 mb-6">
          Pharmacotherapy interrupts the neurochemical reward loop. Behavioral therapy and 
          digital tools address the emotional and cognitive patterns that underlie it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <Pill className="w-4 h-4 text-amber-600" />,
              bg: 'bg-amber-50',
              label: 'Calibrated Pharmacotherapy',
              desc: 'Supervised by board-certified addiction physicians. Dosing, timing, and protocol adjustments are managed at every monthly check-in.'
            },
            {
              icon: <Brain className="w-4 h-4 text-emerald-600" />,
              bg: 'bg-emerald-50',
              label: 'Weekly Digital CBT',
              desc: 'One-on-one sessions with licensed counselors (Kera Passante, LPC; Brad Holt, LPC) to address triggers, anxiety, and distorted thought patterns.'
            },
            {
              icon: <Bot className="w-4 h-4 text-sky-600" />,
              bg: 'bg-sky-50',
              label: 'AI Recovery Support (24/7)',
              desc: '\'Sam\', our in-app AI recovery sponsor, manages your 60-min TSM countdown, monitors craving curves, and provides non-judgmental de-escalation support.'
            }
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-[14px] text-slate-950 mb-1.5">{item.label}</h3>
              <p className="text-[12px] text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* End CTA */}
      <div className="mt-10 p-7 sm:p-9 rounded-2xl bg-slate-950 text-white border border-slate-800">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-2">
          Personalized Protocol Consultation
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          Let a Physician Personalize Your Protocol
        </h3>
        <p className="text-[13px] text-slate-400 leading-relaxed mb-6 max-w-xl">
          Whether your goal is targeted harm reduction via TSM or complete daily abstinence, 
          our licensed clinicians are available for same-day video consultations across 
          PA, MI, OH, NY, NJ, CA, FL, and TX.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 border-t border-slate-800">
          <div className="space-y-1.5 text-[12px]">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5" />
              Medicaid accepted or flat $99/mo self-pay
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <Check className="w-3.5 h-3.5 text-slate-600" />
              Same-day electronic prescriptions & Sunflower Sober app sync
            </span>
          </div>
          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[14px] shadow-sm transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Book Doctor Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
