import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  Calendar, 
  FileCode2, 
  Bot, 
  ExternalLink,
  PhoneCall,
  Activity
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenSchema, onOpenGeo, onOpenIntake }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Funnel Audit & Strategy', shortLabel: 'Audit & Strategy', badge: '51K Bridge' },
    { id: 'article1', label: 'Article 1: Naltrexone Online', shortLabel: 'Naltrexone Online', badge: 'JAMA Data' },
    { id: 'article2', label: 'Article 2: State Telehealth', shortLabel: 'PA & MI Telehealth', badge: 'Medicaid' },
    { id: 'article3', label: 'Article 3: TSM Guide', shortLabel: 'TSM vs Daily', badge: '78% Rate' },
    { id: 'community', label: 'Community & Distribution', shortLabel: 'Reddit & Hub', badge: '51K Social' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top CEO & Growth Proof-of-Concept ribbon */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
              CEO Koby Conrad Briefing
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              AI SEO Lead Architecture Proof-of-Concept & Growth Engine
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <button 
              onClick={onOpenGeo}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              <span>Test AI Citation (GEO)</span>
            </button>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenSchema}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <FileCode2 className="w-3.5 h-3.5 text-amber-400" />
              <span>JSON-LD Schema</span>
            </button>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center text-emerald-400 font-semibold gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              PA & MI Clinical Capacity: Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('overview')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 p-0.5 shadow-md flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="text-xl">🌻</span>
                <div className="absolute inset-0 bg-amber-400/10 pointer-events-none"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                  Sunflower<span className="text-amber-500">Clinic</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                  Licensed Telehealth
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 hidden sm:block">
                AI SEO Growth Engine & Medical Recovery
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-slate-950 font-bold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-amber-100/90 border border-amber-300/80 rounded-lg shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{item.shortLabel}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-amber-400 text-slate-950' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenIntake}
              className="px-3.5 sm:px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-900" />
              <span>Book Telehealth Intake</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    isActive 
                      ? 'bg-amber-100 text-slate-950 border border-amber-300' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                    {item.badge}
                  </span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => { onOpenGeo(); setMobileMenuOpen(false); }}
                className="p-2 rounded bg-slate-100 text-slate-800 font-medium flex items-center justify-center gap-1.5"
              >
                <Bot className="w-3.5 h-3.5 text-amber-500" />
                <span>GEO Citation Tool</span>
              </button>
              <button 
                onClick={() => { onOpenSchema(); setMobileMenuOpen(false); }}
                className="p-2 rounded bg-slate-100 text-slate-800 font-medium flex items-center justify-center gap-1.5"
              >
                <FileCode2 className="w-3.5 h-3.5 text-amber-500" />
                <span>JSON-LD Schema</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
