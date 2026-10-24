import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Pill, 
  Clock, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  FileCode2, 
  Activity, 
  ShieldCheck, 
  HelpCircle,
  TrendingDown,
  Award,
  Zap,
  MessageSquare
} from 'lucide-react';
import { JAMA_STUDIES } from '../data/contentData';

export default function View4TsmGuide({ onOpenSchema, onOpenGeo, onOpenIntake }) {
  const [selectedProtocol, setSelectedProtocol] = useState('tsm'); // 'tsm' or 'daily'
  const [quizAnswer, setQuizAnswer] = useState(null);

  const comparisonRows = [
    {
      dimension: "Timing & Administration",
      daily: "Taken every single morning (50mg), regardless of cravings or plans to drink.",
      tsm: "Strictly targeted: 50mg taken 60 minutes before the first alcoholic drink.",
      winner: "TSM provides targeted pharmacological extinction precisely when dopamine rewards fire."
    },
    {
      dimension: "Biological Mechanism",
      daily: "Constant 24/7 opioid receptor blockade. May dampen endorphins from natural exercise/food.",
      tsm: "Selective blockade: Protects non-drinking days so natural endorphins (exercise, social connection) feel rewarding.",
      winner: "TSM preserves natural pleasure on alcohol-free days."
    },
    {
      dimension: "Primary Recovery Goal",
      daily: "Immediate and permanent total abstinence from all alcohol.",
      tsm: "Extinction of compulsive cravings (allows controlled moderate drinking or gradual natural abstinence).",
      winner: "TSM accommodates patient-directed harm reduction."
    },
    {
      dimension: "Clinical Evidence & Success Rate",
      daily: "COMBINE Trial: 74% favorable outcome when combined with Medical Management.",
      tsm: "Sinclair Clinical Trials: 78% pharmacological extinction across international cohorts.",
      winner: "Both protocols demonstrate Level 1 clinical superiority over rehab placebo."
    },
    {
      dimension: "Risk of Discontinuation",
      daily: "Higher non-compliance if patients stop taking morning pills when planning to drink.",
      tsm: "Lower psychological resistance because drinking is not forbidden.",
      winner: "TSM eliminates the guilt/shame relapse spiral."
    }
  ];

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
            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold uppercase tracking-wider text-[10px]">
              Target Keyword
            </span>
            <span className="font-mono font-semibold text-slate-800">
              "the sinclair method naltrexone telehealth clinic"
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenSchema}
              className="text-slate-600 hover:text-amber-700 flex items-center gap-1 font-semibold cursor-pointer text-[11px]"
            >
              <FileCode2 className="w-3.5 h-3.5 text-amber-500" />
              <span>TSM Clinical Schema</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={onOpenGeo}
              className="text-slate-600 hover:text-amber-700 flex items-center gap-1 font-semibold cursor-pointer text-[11px]"
            >
              <Bot className="w-3.5 h-3.5 text-amber-500" />
              <span>Perplexity GEO Citation Preview</span>
            </button>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
          <div>
            <strong className="text-slate-500">Meta Title:</strong>{" "}
            <span className="text-slate-900 font-semibold">The Sinclair Method (TSM) vs Daily Naltrexone: Telehealth Protocol | Sunflower Clinic</span>
          </div>
          <div>
            <strong className="text-slate-500">Meta Description:</strong>{" "}
            <span className="text-slate-700">Compare The Sinclair Method (targeted dosing 1 hour before drinking) with daily morning Naltrexone. Discover how Sunflower Clinic personalizes your alcohol recovery protocol.</span>
          </div>
        </div>
      </section>

      {/* Main Article Header */}
      <article className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
            <Brain className="w-3.5 h-3.5 text-amber-600" />
            <span>NEUROBIOLOGY OF PHARMACOLOGICAL EXTINCTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            The Sinclair Method (TSM) vs. Daily Naltrexone: How Our Telehealth Clinic Personalizes Your Protocol
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            One size does not fit all in alcohol use disorder recovery. While traditional 12-step programs mandate instantaneous abstinence, Sunflower Clinic offers both <strong>The Sinclair Method (TSM)</strong> and <strong>Daily Morning Naltrexone</strong>, allowing you and your physician to choose the protocol matching your lifestyle and neurobiology.
          </p>
        </div>

        {/* Sinclair Method Clinical Trial Spotlight */}
        <section className="bg-gradient-to-br from-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                DR. JOHN DAVID SINCLAIR'S DISCOVERY
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {JAMA_STUDIES.sinclair.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {JAMA_STUDIES.sinclair.citation} • {JAMA_STUDIES.sinclair.sampleSize}
              </p>
            </div>
            <div className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 text-xs font-extrabold self-start sm:self-auto">
              78% Extinction Rate
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {JAMA_STUDIES.sinclair.keyFindings.map((finding, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <span className="text-2xl font-black text-amber-400 block">{finding.metric}</span>
                <p className="text-xs text-slate-300 leading-snug">{finding.label}</p>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
                  {finding.change}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-amber-300 block mb-1">How Pharmacological Extinction Works:</strong>
            Drinking alcohol normally releases beta-endorphins that bind to mu-opioid receptors, reinforcing the compulsion to drink more. By taking 50mg of Naltrexone strictly 1 hour prior to drinking, the opioid receptors are blocked. The brain drinks, but receives no neurochemical reward. Over 3 to 6 months, the learned addiction pathways systematically dissolve—a process known as <em>Pavlovian extinction</em>.
          </div>
        </section>

        {/* Interactive Comparison Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full mb-1">
                <Activity className="w-3.5 h-3.5 text-amber-600" />
                <span>Clinical Head-to-Head</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Daily Oral Naltrexone vs. Targeted Naltrexone (The Sinclair Method)
              </h3>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4 rounded-l-xl">Protocol Attribute</th>
                  <th className="py-3 px-4 bg-slate-100 text-slate-900">Daily Morning Naltrexone (50mg)</th>
                  <th className="py-3 px-4 bg-amber-100/70 text-amber-950 rounded-r-xl">Targeted Naltrexone (TSM Protocol)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 align-top w-1/4">
                      {row.dimension}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 leading-relaxed align-top w-3/8">
                      {row.daily}
                    </td>
                    <td className="py-3.5 px-4 text-amber-950 font-medium leading-relaxed bg-amber-50/30 align-top w-3/8">
                      {row.tsm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Multiplier Section: The Sunflower Triad */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
              THE COMPLETE CARE SYSTEM
            </span>
            <h3 className="text-2xl font-black text-white">
              The "Sunflower Triad" Multiplier
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Medication alone extinguishes the biological reflex. But long-term sobriety requires addressing the emotional triggers, habits, and isolation that drove drinking in the first place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Pill className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">1. Personalized Medication</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Naltrexone prescribed via TSM or Daily protocol by board-certified addiction physicians (Dr. Raphael Golebiowski MD &amp; Dr. Glen Rebman DO).
              </p>
              <span className="text-[10px] text-amber-400 font-bold block pt-1">
                Blocks Endorphin Reinforcement
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-bold">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">2. Weekly 1-on-1 Digital CBT</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct psychotherapy sessions with licensed counselors Kera Passante, LPC and Brad Holt, LPC to reprogram anxiety, stress habits, and distorted thoughts.
              </p>
              <span className="text-[10px] text-emerald-400 font-bold block pt-1">
                83% Alcohol-Free Days (JAMA Trial)
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">3. AI Recovery Sponsor "Sam"</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                24/7 in-app craving de-escalation inside the Sunflower Sober app. Sam tracks your 1-hour TSM countdown timer and provides real-time HALT check-ins.
              </p>
              <span className="text-[10px] text-sky-400 font-bold block pt-1">
                Zero Judgment • Always Available
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Protocol Matcher */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
              Patient Protocol Self-Selection
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              Which Protocol Matches Your Current Recovery Goals?
            </h3>
            <p className="text-xs text-slate-500">
              Select what resonates most to see what our clinical team typically recommends during your telehealth intake:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => setQuizAnswer('tsm')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                quizAnswer === 'tsm'
                  ? 'border-amber-400 bg-amber-50 text-slate-900 ring-2 ring-amber-400/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>"I want to drink moderately or cut back gradually"</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                You want to unlearn cravings over time without the pressure of an immediate 100% cold-turkey pledge.
              </p>
            </button>

            <button
              onClick={() => setQuizAnswer('daily')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                quizAnswer === 'daily'
                  ? 'border-emerald-400 bg-emerald-50 text-slate-900 ring-2 ring-emerald-400/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>"I want immediate, complete sobriety from day one"</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                You prefer daily morning protection to eliminate the daily debate of whether or when you might drink.
              </p>
            </button>
          </div>

          {quizAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <strong className="text-slate-900 font-bold block text-sm">
                  {quizAnswer === 'tsm' ? '🌻 Recommended: The Sinclair Method (TSM)' : '🛡️ Recommended: Daily Morning Naltrexone + CBT'}
                </strong>
                <p className="text-slate-600 mt-0.5">
                  {quizAnswer === 'tsm'
                    ? 'Our physicians will calibrate your 50mg targeted dosing and pair your app with the 1-hour extinction timer.'
                    : 'Our physicians will prescribe daily morning dosing paired with weekly digital CBT for full abstinence support.'}
                </p>
              </div>
              <button
                onClick={onOpenIntake}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow-xs"
              >
                Discuss with Doctor
              </button>
            </motion.div>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-amber-400 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-900">Personalized Telehealth</span>
            <h3 className="text-2xl font-black text-slate-950">
              Take the First Step with Physician Guidance
            </h3>
            <p className="text-xs text-slate-900 font-medium max-w-md">
              Whether you choose TSM harm-reduction or complete daily abstinence, Sunflower Clinic has licensed clinicians ready today.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenIntake}
            className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Book Doctor Consultation</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </motion.button>
        </section>
      </article>
    </motion.div>
  );
}
