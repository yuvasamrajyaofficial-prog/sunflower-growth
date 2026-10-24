import React from 'react';
import { ShieldCheck, ExternalLink, CheckCircle2, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './BrandIcons';

const LINKS = {
  clinical: [
    { label: 'Online Naltrexone Prescription', action: 'intake' },
    { label: 'The Sinclair Method (TSM)', action: 'intake' },
    { label: 'Pennsylvania Medicaid Addiction Care', action: 'intake' },
    { label: 'Michigan Medicaid Addiction Care', action: 'intake' },
    { label: 'Cognitive Behavioral Therapy (CBT)', action: 'intake' },
    { label: 'Harm Reduction Consultation', action: 'intake' }
  ],
  ecosystem: [
    { label: 'Sunflower Clinic (Telehealth)', href: 'https://sunflowerclinic.com/', external: true },
    { label: 'Sunflower Sober App', href: 'https://sunflowersober.com/', badge: 'App', external: true },
    { label: 'Instagram (@sunflowersober)', href: 'https://www.instagram.com/sunflowersober/', icon: 'instagram', external: true },
    { label: 'Facebook (31K Community)', href: 'https://www.facebook.com/sunflowersober/', icon: 'facebook', external: true },
    { label: 'LinkedIn Company Page', href: 'https://www.linkedin.com/company/sunflower-sober/', icon: 'linkedin', external: true }
  ],
  states: ['PA', 'MI', 'OH', 'NY', 'NJ', 'CA', 'FL', 'TX']
};

export default function ClinicalFooter({ onOpenIntake }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800" style={{ paddingTop: '4rem', paddingBottom: '3rem', marginTop: '5rem' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-lg font-black shadow-sm">
                🌻
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Sunflower<span className="text-amber-400">Clinic</span>
              </span>
            </div>

            <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm">
              Sunflower Clinic provides evidence-based, compassionate outpatient addiction 
              medicine via telehealth. We deliver FDA-approved Naltrexone pharmacotherapy—
              via The Sinclair Method or Daily Abstinence protocol—combined with licensed 
              digital CBT and the Sunflower Sober recovery app.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Licensed in 8 States
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-amber-300 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Medicaid & Private Pay
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-semibold">
                HIPAA Compliant
              </span>
            </div>

            {/* Active states */}
            <div className="pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-2">
                Active Clinical States
              </span>
              <div className="flex flex-wrap gap-1.5">
                {LINKS.states.map(st => (
                  <span key={st} className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Clinical Services */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-200">
              Clinical Services
            </h4>
            <ul className="space-y-2">
              {LINKS.clinical.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={onOpenIntake}
                    className="text-[13px] text-slate-400 hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
              Sunflower Ecosystem
            </h4>
            <ul className="space-y-2.5">
              {LINKS.ecosystem.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.icon === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />}
                    {link.icon === 'facebook' && <FacebookIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                    {link.icon === 'linkedin' && <LinkedinIcon className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
                    {!link.icon && <ExternalLink className="w-3 h-3 text-slate-600 shrink-0" />}
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency disclaimer */}
        <div className="pt-8 pb-6 border-b border-slate-800">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-500 leading-relaxed">
            <strong className="text-slate-300 block mb-1">Medical Emergency Disclaimer:</strong>
            Sunflower Clinic provides outpatient medication management and behavioral healthcare 
            via telehealth. We do not provide emergency services or acute medical detox for 
            severe alcohol withdrawal (delirium tremens, seizures). If you are experiencing 
            hallucinations, severe tremors, or medical distress, call{' '}
            <strong className="text-slate-300">911</strong> or go to your nearest emergency 
            department immediately. You may also dial{' '}
            <strong className="text-slate-300">988</strong> to reach the Suicide & Crisis Lifeline.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-600">
          <span>© 2026 Sunflower Clinic, PC & Sunflower Sober Inc. All rights reserved. HIPAA Compliant.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Dr. Raphael Golebiowski, MD — Medical Director</span>
            <span className="hidden sm:inline">·</span>
            <span>Dr. Glen Rebman, DO — Senior Psychiatrist</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
