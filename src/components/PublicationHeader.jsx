import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Calendar, Clock, ChevronDown, Menu, X } from 'lucide-react';

const ARTICLES = [
  {
    id: 'naltrexone-online',
    slug: '/resources/how-to-get-naltrexone-online-without-rehab',
    label: 'Naltrexone Online Guide',
    shortLabel: 'Naltrexone Online',
    number: '01',
    category: 'Clinical Protocol',
    readTime: '6 min read',
    tag: 'Clinical Guide'
  },
  {
    id: 'state-telehealth',
    slug: '/locations/online-addiction-therapy-medicaid-pa-mi',
    label: 'PA & MI Telehealth Coverage',
    shortLabel: 'PA & MI Coverage',
    number: '02',
    category: 'State Licensing & Medicaid',
    readTime: '7 min read',
    tag: 'Coverage Guide'
  },
  {
    id: 'tsm-guide',
    slug: '/medications/naltrexone/sinclair-method-telehealth-guide',
    label: 'The Sinclair Method (TSM)',
    shortLabel: 'Sinclair Method',
    number: '03',
    category: 'Pharmacotherapy',
    readTime: '8 min read',
    tag: 'Treatment Protocol'
  },
  {
    id: 'reddit-hub',
    slug: '/community/clinical-publications',
    label: 'Community Publications',
    shortLabel: 'Community Hub',
    number: '04',
    category: 'Peer Forum Outreach',
    readTime: '5 min read',
    tag: 'Community'
  }
];

export default function PublicationHeader({ activeArticleId, setActiveArticleId, onOpenIntake }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = ARTICLES.find(a => a.id === activeArticleId) || ARTICLES[0];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      
      {/* Trust Bar */}
      <div className="bg-slate-950 text-slate-400 text-[11px] py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
              <span className="text-emerald-400 font-semibold">Accepting New Patients in PA, MI, OH, NY, NJ, CA, FL, TX</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3 h-3 text-slate-500" />
              Board-Certified Addiction Medicine (MD/DO)
            </span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-400">HIPAA Compliant</span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-400">Medicaid Accepted</span>
          </div>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between" style={{ height: '68px' }}>
          
          {/* Publication Brand */}
          <button
            onClick={() => setActiveArticleId('naltrexone-online')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center text-lg font-black shadow-sm shrink-0 group-hover:bg-amber-300 transition-colors">
              🌻
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-[1.2rem] text-slate-950 tracking-tight leading-none">
                  Sunflower<span className="text-amber-500">Clinic</span>
                </span>
                <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">
                  Medical Journal
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block mt-0.5">
                Evidence-Based Addiction Medicine & Telehealth
              </p>
            </div>
          </button>

          {/* Desktop Article Tabs */}
          <nav className="hidden lg:flex items-stretch h-full">
            {ARTICLES.map((art) => {
              const isActive = activeArticleId === art.id;
              return (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  className={`relative px-4 flex items-center text-[13px] font-semibold transition-colors cursor-pointer nav-tab-${isActive ? 'active' : 'idle'} ${
                    isActive
                      ? 'text-slate-950 nav-tab-active'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="text-[10px] font-bold text-slate-300 mr-1.5">{art.number}</span>
                  {art.shortLabel}
                  {isActive && (
                    <motion.div
                      layoutId="hdrTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-t"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenIntake}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[13px] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book Consultation</span>
              <span className="sm:hidden">Book</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Article Breadcrumb Strip */}
      <div className="border-t border-gray-100 bg-gray-50 py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>sunflowerclinic.com</span>
            <span>›</span>
            <span className="text-slate-600 font-medium">{current.slug}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="bg-white border border-slate-200 px-2 py-0.5 rounded font-semibold text-slate-700">
              {current.tag}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {current.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-3 space-y-1">
              {ARTICLES.map((art) => (
                <button
                  key={art.id}
                  onClick={() => { setActiveArticleId(art.id); setMobileOpen(false); }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                    activeArticleId === art.id
                      ? 'bg-amber-50 text-slate-950 border border-amber-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-300">{art.number}</span>
                    {art.label}
                  </span>
                  {activeArticleId === art.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
