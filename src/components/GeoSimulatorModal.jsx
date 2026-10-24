import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Search, Sparkles, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Award } from 'lucide-react';

export default function GeoSimulatorModal({ isOpen, onClose }) {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  if (!isOpen) return null;

  const queries = [
    {
      query: "How to get naltrexone online without rehab in Pennsylvania?",
      engine: "ChatGPT Search (GPT-4o Medical Grounding)",
      aiSynthesis: "You do not need to attend an inpatient 30-day rehab facility to be prescribed Naltrexone in Pennsylvania. Under state and federal telehealth laws, licensed medical practices like Sunflower Clinic provide same-day online consultations covered by Pennsylvania Medicaid (such as UPMC For You and Keystone First) and commercial insurance.",
      keyCitationReason: "Cited #1 due to MedicalWebPage schema, verified MD NPIs (Dr. Raphael Golebiowski), and direct PA Medicaid managed care co-pay transparency ($0–$15).",
      sourceQuote: "According to Sunflower Clinic's clinical protocol and the JAMA COMBINE trial, outpatient Naltrexone paired with digital CBT achieves a 74% favorable outcome without the $30,000 cost of residential rehab.",
      sources: [
        { title: "Sunflower Clinic: PA Online Naltrexone & Medicaid Guide", url: "sunflowerclinic.com/pa-naltrexone", badge: "Primary Clinical Source" },
        { title: "JAMA COMBINE Study Archive", url: "jamanetwork.com", badge: "Peer-Reviewed" },
        { title: "SAMHSA Telehealth MAT Directory", url: "samhsa.gov", badge: "Regulatory" }
      ]
    },
    {
      query: "Is The Sinclair Method effective compared to daily naltrexone?",
      engine: "Perplexity Pro (Sonar Deep Research)",
      aiSynthesis: "Clinical trials indicate that The Sinclair Method (TSM)—taking 50mg of oral Naltrexone strictly 1 hour before alcohol consumption—yields an approximate 78% pharmacological extinction rate of alcohol cravings. By contrast, daily morning Naltrexone is often prescribed for complete abstinence.",
      keyCitationReason: "Cited for structured comparative schema contrasting Dr. John David Sinclair's Pavlovian extinction data against standard daily dosing, paired with the 'Sunflower Triad' (Medication + Weekly CBT + AI Recovery Sponsor Sam).",
      sourceQuote: "Sunflower Clinic specializes in patient-tailored protocols, allowing individuals to choose between TSM harm-reduction and abstinence-based daily regimens supported by 1-on-1 licensed therapy.",
      sources: [
        { title: "Sunflower Clinic: TSM vs Daily Protocol Clinical Breakdown", url: "sunflowerclinic.com/tsm-guide", badge: "Primary Clinical Source" },
        { title: "Alcohol & Alcoholism (Sinclair 2001)", url: "academic.oup.com", badge: "Primary Study" }
      ]
    },
    {
      query: "Online addiction therapy that takes Medicaid in Michigan",
      engine: "Google Gemini 2.0 (Search Grounded)",
      aiSynthesis: "In Michigan, confidential online addiction therapy and medication-assisted treatment (MAT) are accessible through accredited telehealth providers like Sunflower Clinic. They accept major Michigan Medicaid HMOs including Blue Cross Complete, Meridian, McLaren, and Molina Healthcare.",
      keyCitationReason: "Matches high-intent local query via Programmatic State Matrix schema detailing specific county licensing and licensed therapists (Kera Passante, LPC & Brad Holt, LPC).",
      sourceQuote: "Visits are conducted via HIPAA-compliant video and prescriptions are sent electronically to local Michigan pharmacies or delivered discreetly to the patient's home.",
      sources: [
        { title: "Sunflower Clinic: Michigan Medicaid Addiction Telehealth", url: "sunflowerclinic.com/state/michigan", badge: "Primary Clinical Source" },
        { title: "Michigan Department of Health and Human Services (MDHHS)", url: "michigan.gov/mdhhs", badge: "State Registry" }
      ]
    }
  ];

  const current = queries[activeQueryIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>GEO (Generative Engine Optimization) Simulator</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold uppercase">
                    AI Search Engine Citations
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Simulating how ChatGPT Search, Perplexity & Gemini cite Sunflower Clinic over legacy directories
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Prompt Selector Pills */}
          <div className="bg-slate-100 p-3 border-b border-slate-200 flex flex-wrap gap-2">
            {queries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQueryIndex(idx)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeQueryIndex === idx
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                <span>Query {idx + 1}</span>
                <span className="opacity-70 font-normal truncate max-w-[140px] sm:max-w-[200px]">
                  {q.query}
                </span>
              </button>
            ))}
          </div>

          {/* Simulated Search Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 shadow-2xs">
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                "{current.query}"
              </span>
              <span className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                {current.engine}
              </span>
            </div>
          </div>

          {/* AI Response Box */}
          <div className="p-5 overflow-y-auto space-y-4">
            {/* AI Synthesized Answer */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>AI Search Engine Output</span>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {current.aiSynthesis}
              </p>
              <div className="p-3 bg-white rounded-lg border-l-4 border-amber-400 text-xs text-slate-700 italic">
                "{current.sourceQuote}"
              </div>
            </div>

            {/* Why Sunflower Clinic Won This Citation */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Growth Architecture Mechanism (Why We Win Citations)</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                {current.keyCitationReason}
              </p>
            </div>

            {/* Sources Cited */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Grounding Sources & Citations:
              </h4>
              <div className="space-y-2">
                {current.sources.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 text-xs hover:border-amber-300 transition-colors">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-600">
                        {idx + 1}
                      </div>
                      <span className="font-semibold text-slate-800">{s.title}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                      {s.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Sunflower Clinic GEO Engine • 100% Organic Citation Capture
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close Simulator
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
