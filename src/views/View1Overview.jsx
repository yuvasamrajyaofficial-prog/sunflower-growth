import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Bot, 
  MapPin, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  ExternalLink, 
  FileCode2, 
  Layers, 
  Zap, 
  Percent, 
  DollarSign,
  HeartPulse
} from 'lucide-react';
import { CLINIC_METADATA } from '../data/contentData';

export default function View1Overview({ setActiveTab, onOpenSchema, onOpenGeo, onOpenIntake }) {
  const [selectedLeak, setSelectedLeak] = useState(0);
  const [activeStateTab, setActiveStateTab] = useState('PA');
  const [communityTrafficEstimate, setCommunityTrafficEstimate] = useState(51100);
  const [conversionRate, setConversionRate] = useState(1.2); // 1.2% clinical conversion

  const calculatedMonthlyIntakes = Math.round((communityTrafficEstimate * (conversionRate / 100)));
  const monthlyRevenueEst = calculatedMonthlyIntakes * 99; // $99/mo or Medicaid equivalent value

  const coreLeaks = [
    {
      id: "leak-1",
      title: "The 51K Social Funnel Trap",
      badge: "Traffic Leak #1",
      socialStat: "20.1K IG (@sunflowersober) + 31K FB",
      problem: "51,100 engaged community members interact with inspirational recovery content on Instagram and Facebook, but bounce back into social feeds without an automated path to clinical intake.",
      fix: "Direct Clinical Intake Bridge: Deploy link-in-bio triage wizards, Instagram DM keyword automation ('CARE', 'NALTREXONE'), and direct UTM-tagged state matching quizzes routing instantly to same-day telehealth.",
      impact: "+350–600 Monthly Qualified Telehealth Intakes",
      icon: Users,
      color: "amber"
    },
    {
      id: "leak-2",
      title: "The AI Citation Gap (GEO)",
      badge: "Traffic Leak #2",
      socialStat: "ChatGPT Search, Perplexity & Gemini",
      problem: "When individuals ask AI search engines 'where can I get naltrexone online in PA without rehab?', LLMs hallucinate or cite predatory $30,000 residential rehab aggregators with zero price transparency.",
      fix: "Generative Engine Optimization (GEO): Implement structured MedicalWebPage schema, verified NPI physician co-occurrence (Dr. Raphael Golebiowski MD & Dr. Glen Rebman DO), and direct JAMA COMBINE trial citations for instant AI citation capture.",
      impact: "#1 Cited Telehealth Source across Perplexity & ChatGPT",
      icon: Bot,
      color: "emerald"
    },
    {
      id: "leak-3",
      title: "Programmatic State Matrix",
      badge: "Traffic Leak #3",
      socialStat: "8 Active Licensed State Markets",
      problem: "High-intent queries like 'online addiction therapy that takes Medicaid in Michigan' or 'Pennsylvania naltrexone doctor' hit generic homepages, causing high bounce rates due to unclear state licensing.",
      fix: "Programmatic SEO Engine: Deploy dynamic [State] × [Insurance] × [Medication] landing pages with real-time Medicaid MCO acceptance tables, local physician bios, and instant wait-time telemetry.",
      impact: "Top 3 Organic Search Rankings across PA, MI, OH, NY, NJ, CA, FL, TX",
      icon: MapPin,
      color: "sky"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 pb-10"
    >
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE BRIEF FOR CEO KOBY CONRAD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Sunflower Clinic Growth &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">GEO Intelligence Engine</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Bridging the <strong>51K organic Instagram &amp; Facebook community</strong> into high-intent telehealth clinical intake, while capturing #1 Generative Engine Optimization (GEO) citations across AI search platforms.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenIntake}
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Test Patient Intake Flow</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenGeo}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-400" />
              <span>Simulate AI Citations (GEO)</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenSchema}
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <FileCode2 className="w-4 h-4 text-amber-400" />
              <span>Inspect JSON-LD</span>
            </motion.button>
          </div>
        </div>

        {/* Floating KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-slate-800/80 mt-8">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 block">Social Community</span>
            <span className="text-xl sm:text-2xl font-extrabold text-white">51.1K</span>
            <span className="text-[10px] text-amber-400 font-bold block mt-0.5">IG 20.1K + FB 31K</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 block">JAMA COMBINE Rate</span>
            <span className="text-xl sm:text-2xl font-extrabold text-emerald-400">74%</span>
            <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Good Clinical Outcome</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 block">Sinclair Method (TSM)</span>
            <span className="text-xl sm:text-2xl font-extrabold text-amber-300">78%</span>
            <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Extinction Success</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 block">Licensed Coverage</span>
            <span className="text-xl sm:text-2xl font-extrabold text-sky-400">8 States</span>
            <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">PA &amp; MI Medicaid Open</span>
          </div>
        </div>
      </section>

      {/* 3 Core Leaks & Strategic Fixes (Interactive Grid) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Growth Architecture Analysis</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              The 3 Core Growth Leaks &amp; Immediate Engineered Fixes
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Click any leak below to inspect the architectural breakdown, mechanism, and projected conversion impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {coreLeaks.map((leak, idx) => {
            const Icon = leak.icon;
            const isSelected = selectedLeak === idx;
            return (
              <motion.div
                key={leak.id}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedLeak(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-amber-400 ring-2 ring-amber-400/20 shadow-lg'
                    : 'bg-white/80 hover:bg-white border-slate-200 shadow-xs'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent pointer-events-none rounded-bl-3xl"></div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {leak.badge}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 mb-1">
                      {leak.title}
                    </h3>
                    <span className="text-[11px] font-bold text-amber-600 block">
                      {leak.socialStat}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-200 text-rose-900">
                      <strong className="block text-[10px] uppercase tracking-wider text-rose-700 mb-0.5">The Leak:</strong>
                      {leak.problem}
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-900">
                      <strong className="block text-[10px] uppercase tracking-wider text-emerald-700 mb-0.5">The Fix:</strong>
                      {leak.fix}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {leak.impact}
                  </span>
                  <span className="text-[11px] font-bold text-amber-600">
                    {isSelected ? 'Active' : 'Inspect →'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Growth Simulator & Revenue Bridge for Koby Conrad */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live Funnel Conversion Model</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              51K Social Audience &rarr; Telehealth Clinical Conversion Calculator
            </h3>
            <p className="text-xs text-slate-500">
              Model monthly patient intake throughput based on social bridge automations and Medicaid intake.
            </p>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Projected Monthly Intakes</span>
            <span className="text-2xl font-black text-slate-900">{calculatedMonthlyIntakes}</span>
            <span className="text-[11px] font-bold text-emerald-700 block mt-0.5">
              ~${monthlyRevenueEst.toLocaleString()} Mo. Clinical Value
            </span>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-800">
              <span>Audience Pool (IG + FB Reach)</span>
              <span className="text-amber-600 font-extrabold">{communityTrafficEstimate.toLocaleString()} Followers</span>
            </div>
            <input
              type="range"
              min="20000"
              max="150000"
              step="5000"
              value={communityTrafficEstimate}
              onChange={(e) => setCommunityTrafficEstimate(Number(e.target.value))}
              className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>Current 51.1K Base</span>
              <span>100K Expanded</span>
              <span>150K Viral Growth</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-800">
              <span>Clinical Intake Conversion Rate</span>
              <span className="text-emerald-600 font-extrabold">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="4.0"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>0.5% (Passive Links)</span>
              <span>1.2% (Interactive Triage)</span>
              <span>3.5% (GEO + Medicaid Bridge)</span>
            </div>
          </div>
        </div>

        {/* Funnel Stage Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Stage 1: Social Touch</span>
            <span className="font-extrabold text-sm text-slate-800">{communityTrafficEstimate.toLocaleString()} Engagements</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">IG @sunflowersober + FB</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Stage 2: Clinical Quiz Start</span>
            <span className="font-extrabold text-sm text-slate-800">{Math.round(communityTrafficEstimate * 0.082).toLocaleString()} Starts</span>
            <span className="text-[10px] text-amber-600 font-bold block mt-0.5">8.2% CTR from Bio / DM</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Stage 3: Telehealth Scheduled</span>
            <span className="font-extrabold text-sm text-slate-800">{calculatedMonthlyIntakes} Consults</span>
            <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">PA, MI, OH, NY, NJ, CA</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Stage 4: App Retention</span>
            <span className="font-extrabold text-sm text-slate-800">{Math.round(calculatedMonthlyIntakes * 0.88)} Daily Users</span>
            <span className="text-[10px] text-sky-600 font-bold block mt-0.5">Sunflower Sober App</span>
          </div>
        </div>
      </section>

      {/* Programmatic State Matrix Selector (8 Active States) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full mb-1">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Programmatic State Matrix Telemetry</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              8 Active Licensed State Markets (PA &amp; MI Priority)
            </h3>
            <p className="text-xs text-slate-500">
              Scaling dedicated landing pages across [8 States] × [Naltrexone / TSM / Digital CBT] × [Medicaid vs Private].
            </p>
          </div>
          <button
            onClick={() => setActiveTab('article2')}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
          >
            <span>View PA &amp; MI Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* State Pill Buttons */}
        <div className="flex flex-wrap gap-2">
          {CLINIC_METADATA.activeStates.map((st) => (
            <button
              key={st.code}
              onClick={() => setActiveStateTab(st.code)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeStateTab === st.code
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{st.code} - {st.name}</span>
              {st.medicaidAccepted && (
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              )}
            </button>
          ))}
        </div>

        {/* Active State Details Box */}
        {(() => {
          const stateData = CLINIC_METADATA.activeStates.find(s => s.code === activeStateTab);
          return (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Target State Market</span>
                <h4 className="text-lg font-black text-slate-900">{stateData.name} ({stateData.code})</h4>
                <div className="flex items-center gap-2 pt-1 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    {stateData.status}
                  </span>
                  <span className="text-slate-500">Wait Time: <strong>{stateData.waitTime}</strong></span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Insurance &amp; Medicaid Status</span>
                <p className="text-xs text-slate-700 font-medium">
                  {stateData.medicaidAccepted
                    ? '✅ State Medicaid MCOs Fully Integrated ($0–$15 co-pay)'
                    : '⚡ Commercial Telehealth & Flat $99/mo Self-Pay Program'}
                </p>
                <span className="text-[11px] text-slate-500 block">
                  Prescription routed electronically to any in-state pharmacy or discreet home delivery.
                </span>
              </div>

              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenIntake}
                  className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Book Visit in {stateData.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Quick Jump Bar to the 3 Articles & Community Hub */}
      <section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div 
          onClick={() => setActiveTab('article1')} 
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all cursor-pointer group shadow-2xs hover:shadow-sm"
        >
          <span className="text-[10px] font-bold text-amber-600 uppercase block mb-1">Article 1</span>
          <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
            Naltrexone Online Without Rehab
          </h4>
          <p className="text-xs text-slate-500 mt-1">JAMA trial, 3-step process &amp; FAQ</p>
        </div>

        <div 
          onClick={() => setActiveTab('article2')} 
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all cursor-pointer group shadow-2xs hover:shadow-sm"
        >
          <span className="text-[10px] font-bold text-sky-600 uppercase block mb-1">Article 2</span>
          <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
            State Telehealth: PA &amp; MI Focus
          </h4>
          <p className="text-xs text-slate-500 mt-1">Medicaid coverage &amp; care team</p>
        </div>

        <div 
          onClick={() => setActiveTab('article3')} 
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all cursor-pointer group shadow-2xs hover:shadow-sm"
        >
          <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">Article 3</span>
          <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
            The Sinclair Method (TSM) vs Daily
          </h4>
          <p className="text-xs text-slate-500 mt-1">78% extinction trial &amp; AI sponsor</p>
        </div>

        <div 
          onClick={() => setActiveTab('community')} 
          className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all cursor-pointer group shadow-2xs hover:shadow-sm"
        >
          <span className="text-[10px] font-bold text-purple-600 uppercase block mb-1">Community &amp; Hub</span>
          <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
            Reddit Strategy &amp; Ecosystem
          </h4>
          <p className="text-xs text-slate-500 mt-1">r/Alcoholism_Medication &amp; links</p>
        </div>
      </section>
    </motion.div>
  );
}
