import React from 'react';
import { ShieldCheck, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './BrandIcons';

export default function ClinicalFooter({ onOpenIntake }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md">
                🌻
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Sunflower<span className="text-amber-400">Clinic</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Sunflower Clinic provides evidence-based, compassionate outpatient addiction medicine. We deliver FDA-approved medications (Naltrexone via The Sinclair Method or Daily Abstinence) combined with weekly digital CBT and the Sunflower Sober app.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-semibold gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed in PA, MI, OH, NY, NJ, CA, FL, TX
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 font-semibold gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Medicaid &amp; Private Pay Accepted
              </span>
            </div>
          </div>

          {/* Clinical Telehealth Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Telehealth
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Online Naltrexone Prescription
                </button>
              </li>
              <li>
                <button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  The Sinclair Method (TSM) Protocol
                </button>
              </li>
              <li>
                <button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Pennsylvania Medicaid Addiction Therapy
                </button>
              </li>
              <li>
                <button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  Michigan Medicaid Addiction Therapy
                </button>
              </li>
              <li>
                <button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  1-on-1 Cognitive Behavioral Therapy (CBT)
                </button>
              </li>
            </ul>
          </div>

          {/* Unified Ecosystem Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Sunflower Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <a 
                  href="https://sunflowerclinic.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Sunflower Clinic (Telehealth)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://sunflowersober.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Sunflower Sober App</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold">App</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/sunflowersober/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram (@sunflowersober)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/sunflowersober/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Facebook (31K Community)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/sunflower-sober/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn Company Page</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Emergency Medical Crisis Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-200 block mb-1">Emergency Medical Crisis Disclaimer:</strong>
            Sunflower Clinic provides outpatient medical and behavioral healthcare via telehealth. We do not provide emergency services or medical detox for acute, severe alcohol withdrawal (such as delirium tremens or seizures). If you are experiencing hallucinations, severe tremors, or medical distress, please call <strong>911</strong> or go to your nearest emergency department immediately. You may also dial <strong>988</strong> to connect with the Suicide &amp; Crisis Lifeline.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <div>
              &copy; 2026 Sunflower Clinic, PC &amp; Sunflower Sober Inc. All rights reserved. HIPAA Compliant Telehealth Care.
            </div>
            <div className="flex items-center space-x-3">
              <span>Dr. Raphael Golebiowski, MD (Medical Director)</span>
              <span>&bull;</span>
              <span>Dr. Glen Rebman, DO (Senior Psychiatrist)</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
