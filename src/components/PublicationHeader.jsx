import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Calendar, ExternalLink, ChevronRight, BookOpen, Clock } from 'lucide-react';

export default function PublicationHeader({ activeArticleId, setActiveArticleId, onOpenIntake }) {
  const articles = [
    {
      id: 'naltrexone-online',
      slug: '/resources/how-to-get-naltrexone-online-without-rehab',
      label: '1. Naltrexone Online Guide',
      category: 'Clinical Guide',
      readTime: '6 min read'
    },
    {
      id: 'state-telehealth',
      slug: '/locations/online-addiction-therapy-medicaid-pa-mi',
      label: '2. PA & MI Telehealth (Medicaid)',
      category: 'State Coverage',
      readTime: '7 min read'
    },
    {
      id: 'tsm-guide',
      slug: '/medications/naltrexone/sinclair-method-telehealth-guide',
      label: '3. The Sinclair Method (TSM)',
      category: 'Pharmacology',
      readTime: '8 min read'
    }
  ];

  const current = articles.find(a => a.id === activeArticleId) || articles[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Clinical Trust Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">Sunflower Clinic Clinical Library</span>
            <span className="hidden sm:inline text-slate-400">• Evidence-Based Addiction Medicine &amp; Telehealth</span>
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hidden md:flex items-center text-emerald-400 font-medium gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Medically Reviewed by Board-Certified MDs
            </span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-amber-400 font-semibold">PA, MI, OH, NY, NJ, CA, FL, TX</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand */}
          <div 
            onClick={() => setActiveArticleId('naltrexone-online')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-xs group-hover:scale-105 transition-transform">
              🌻
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl text-slate-950 tracking-tight">
                  Sunflower<span className="text-amber-500">Clinic</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Clinical Journal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Modern Outpatient Recovery &amp; Pharmacotherapy
              </p>
            </div>
          </div>

          {/* Desktop Article Switcher Tabs */}
          <nav className="hidden lg:flex items-center space-x-1.5 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/80">
            {articles.map((art) => {
              const isActive = activeArticleId === art.id;
              return (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-slate-950'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeArticleTab"
                      className="absolute inset-0 bg-white rounded-lg shadow-xs border border-slate-200/80 -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{art.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenIntake}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Doctor Visit</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown / Bar */}
        <div className="lg:hidden py-2 border-t border-slate-100 flex items-center justify-between gap-2 overflow-x-auto text-xs pb-3">
          {articles.map((art) => (
            <button
              key={art.id}
              onClick={() => setActiveArticleId(art.id)}
              className={`shrink-0 px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeArticleId === art.id
                  ? 'bg-amber-100 text-amber-950 border border-amber-300'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {art.label}
            </button>
          ))}
        </div>
      </div>

      {/* Canonical URL & Breadcrumb Bar */}
      <div className="bg-slate-50 border-t border-slate-200/70 py-1.5 px-4 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1.5 truncate">
            <span className="text-slate-400">Canonical Slug:</span>
            <span className="font-mono font-semibold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 truncate">
              https://sunflowerclinic.com{current.slug}
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 font-semibold text-[10px]">
              {current.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3 h-3 text-slate-400" />
              {current.readTime}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
