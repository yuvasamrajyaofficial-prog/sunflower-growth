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
  Sparkles, 
  HelpCircle,
  MessageSquare,
  Zap,
  Info
} from 'lucide-react';
import { JAMA_STUDIES } from '../data/contentData';

export default function Article3SinclairMethod({ onOpenIntake }) {
  const [selectedProtocolFilter, setSelectedProtocolFilter] = useState('all');

  const comparisonData = [
    {
      feature: "Dosing Schedule & Timing",
      daily: "50mg taken once every morning upon waking, regardless of whether you plan to drink.",
      tsm: "50mg taken strictly 60 minutes before your first sip of alcohol. Never taken on alcohol-free days.",
      clinicalRationale: "TSM creates targeted pharmacological extinction when dopamine rewards are stimulated."
    },
    {
      feature: "Primary Clinical Objective",
      daily: "Immediate total abstinence from all alcohol from Day 1.",
      tsm: "Pharmacological extinction: gradual reduction of compulsive cravings leading to moderate drinking or natural abstinence.",
      clinicalRationale: "Accommodates harm-reduction goals for patients not ready for complete lifetime abstinence."
    },
    {
      feature: "Brain Endorphin Mechanics",
      daily: "Continuous 24/7 opioid receptor blockade. Can subtly dampen natural endorphins from gym workouts or hobbies.",
      tsm: "Selective blockade: On alcohol-free days (no pill), mu-opioid receptors are open and naturally sensitive to exercise and socialization.",
      clinicalRationale: "Promotes selective neurochemical reinforcement of healthy, non-alcohol rewards."
    },
    {
      feature: "Clinical Success Rate (Trials)",
      daily: "COMBINE Trial: 74% good clinical outcome when paired with medical management.",
      tsm: "Dr. John David Sinclair: ~78% extinction success across 80+ clinical trials and longitudinal cohorts.",
      clinicalRationale: "Both protocols demonstrate Level 1 clinical superiority over rehab placebo."
    },
    {
      feature: "Patient Adherence & Compliance",
      daily: "Vulnerable to deliberate skipping if a patient intends to drink without medication.",
      tsm: "High adherence because the protocol permits drinking; patients simply comply with the 'Golden 1-Hour Rule'.",
      clinicalRationale: "Removes the guilt-shame cycle that triggers binge relapse in 12-step programs."
    }
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      
      {/* Editorial Meta Header */}
      <header className="space-y-6 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold uppercase tracking-wider text-[11px]">
            Clinical Pharmacology &amp; TSM
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">Sunflower Telehealth Protocol Guide</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500 font-medium">Published: October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          The Sinclair Method (TSM) vs. Daily Naltrexone: How Our Telehealth Clinic Personalizes Your Protocol
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          Comparing Targeted Naltrexone (The Sinclair Method) vs. Daily Naltrexone with CBT. Learn how our licensed telehealth doctors personalize your protocol.
        </p>

        {/* Doctor Byline */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-extrabold flex items-center justify-center">
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
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
            Peer-Reviewed
          </span>
        </div>
      </header>

      {/* SECTION 1: Overview & Biological Foundation */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          One Size Does Not Fit All in Modern Recovery
        </h2>

        <div className="prose text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            When patients consult with Sunflower Clinic, the first question our physicians ask is not <em>"How long have you been sober?"</em> but rather <em>"What is your relationship with alcohol, and what does your ideal recovery look like?"</em>
          </p>
          <p>
            For patients who want immediate, permanent cessation, <strong>Daily Morning Naltrexone</strong> provides an unbroken safety shield against impulsive slips. For patients who struggle with white-knuckling abstinence or who wish to reach moderation without obsessive mental debates, <strong>The Sinclair Method (TSM)</strong> provides a biologically grounded off-ramp.
          </p>
        </div>

        {/* Sinclair Method 78% Trial Spotlight */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                DR. JOHN DAVID SINCLAIR'S DISCOVERY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                The Science of Pharmacological Extinction
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Sinclair, J.D. Alcohol and Alcoholism. 2001;36(1):2-11.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black self-start sm:self-auto">
              78% Extinction Rate
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In Pavlovian conditioning, when an organism performs a behavior and receives a reward, the behavior strengthens. Alcohol dependency is a learned biological reflex: alcohol intake releases endorphins that reinforce the drinking drive.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dr. Sinclair discovered that when 50mg of Naltrexone is administered <strong>strictly 60 minutes before drinking</strong>, the physical behavior of drinking occurs without the neurochemical dopamine reward. Over 3 to 6 months of repeated extinction sessions, the brain unlearns the obsession with alcohol—a permanent neurological rewiring.
          </p>
        </div>
      </section>

      {/* SECTION 2: Interactive Comparison Table */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Clinical Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Daily Oral Naltrexone vs. Targeted Naltrexone (The Sinclair Method)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Review the clinical differences below to see how our physicians match protocol to patient biology.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-extrabold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5">Clinical Dimension</th>
                  <th className="py-4 px-5 bg-slate-100 text-slate-900">Daily Morning Naltrexone</th>
                  <th className="py-4 px-5 bg-amber-100/70 text-amber-950">Targeted Naltrexone (TSM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-950 align-top w-1/4">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-slate-600 leading-relaxed align-top w-3/8">
                      {row.daily}
                    </td>
                    <td className="py-4 px-5 text-amber-950 font-medium leading-relaxed bg-amber-50/30 align-top w-3/8">
                      {row.tsm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: The CBT Multiplier */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
            The Multiplier Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            The CBT Multiplier: Medication + Weekly Therapy + AI Recovery Sponsor Sam
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Pharmacotherapy fixes the receptor mechanics. But lifelong sobriety requires rewiring the emotional coping habits behind drinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Pill className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">1. Calibrated Pharmacotherapy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prescribed and monitored by board-certified addiction physicians. Tailored 50mg dosing schedules to protect liver health and ensure extinction.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              <Brain className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">2. Weekly 1-on-1 Digital CBT</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Weekly psychotherapy sessions with licensed counselors Kera Passante, LPC and Brad Holt, LPC to deconstruct anxiety and HALT triggers.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5 text-sky-600" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">3. AI Recovery Sponsor "Sam"</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Available 24/7 inside the Sunflower Sober app. Sam manages the 60-minute TSM countdown timer, tracks craving intensity curves, and de-escalates urges.
            </p>
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">Personalized Telehealth</span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Discover which protocol is best for your lifestyle
            </h3>
            <p className="text-xs text-slate-400 max-w-md">
              Speak with Dr. Raphael Golebiowski, MD or Dr. Glen Rebman, DO from the privacy of your home today.
            </p>
          </div>
          <button
            onClick={onOpenIntake}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Book Clinical Telehealth Consult</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </article>
  );
}
