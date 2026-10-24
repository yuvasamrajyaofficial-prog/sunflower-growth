import React from 'react';
import { ShieldCheck, Heart, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './BrandIcons';
import { CLINIC_METADATA } from '../data/contentData';

export default function Footer({ onOpenSchema, onOpenGeo, onOpenIntake }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md">
                🌻
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Sunflower<span className="text-amber-400">Clinic</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sunflower Clinic provides evidence-based, compassionate outpatient addiction medicine. We pair FDA-approved medications (Naltrexone via TSM or Daily) with digital CBT therapy and the Sunflower Sober app.
            </p>
            <div className="flex items-center space-x-3 text-xs pt-1">
              <span className="inline-flex items-center px-2 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-semibold gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed in 8 States
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400 font-semibold gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                51.1K Community
              </span>
            </div>
          </div>

          {/* Clinical Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Online Naltrexone RX</button></li>
              <li><button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">The Sinclair Method (TSM)</button></li>
              <li><button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">PA Medicaid Telehealth</button></li>
              <li><button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">MI Medicaid Telehealth</button></li>
              <li><button onClick={onOpenIntake} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Digital CBT &amp; Relapse Prevention</button></li>
            </ul>
          </div>

          {/* Unified Ecosystem Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Unified Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a 
                  href={CLINIC_METADATA.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Sunflower Clinic Website</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href={CLINIC_METADATA.soberAppUrl} 
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
                  href={CLINIC_METADATA.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram (20.1K)</span>
                </a>
              </li>
              <li>
                <a 
                  href={CLINIC_METADATA.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Facebook (31K)</span>
                </a>
              </li>
              <li>
                <a 
                  href={CLINIC_METADATA.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>Sunflower LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Growth & Architecture Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              AI SEO Architecture
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designed as a live growth engine proof-of-concept for <strong>CEO Koby Conrad</strong> to illustrate AI citation dominance and 51K funnel monetization.
            </p>
            <div className="space-y-1.5 pt-1">
              <button
                onClick={onOpenGeo}
                className="w-full text-left p-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-amber-300 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Launch GEO AI Simulator</span>
                <span className="text-amber-400">&rarr;</span>
              </button>
              <button
                onClick={onOpenSchema}
                className="w-full text-left p-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-amber-300 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Inspect JSON-LD Schema</span>
                <span className="text-amber-400">&rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Clinical Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300 block mb-1">Medical Disclaimer &amp; Emergency Care:</strong>
            Naltrexone is an FDA-approved non-narcotic prescription medication for alcohol use disorder. Telehealth consultations are delivered by state-licensed physicians and mental health counselors. Sunflower Clinic does not provide emergency medical detox for severe, life-threatening alcohol withdrawal (such as delirium tremens or seizures). If you are in acute distress or medical emergency, please call 911 or visit the nearest emergency department immediately.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <div>
              &copy; 2026 Sunflower Clinic, PC &amp; Sunflower Sober Inc. All rights reserved. HIPAA Compliant Telehealth.
            </div>
            <div className="flex items-center space-x-4">
              <span>Dr. Raphael Golebiowski, MD (Medical Director)</span>
              <span>&bull;</span>
              <span>Dr. Glen Rebman, DO</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
