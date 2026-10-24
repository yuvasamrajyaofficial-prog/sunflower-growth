import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, ChevronRight, X } from 'lucide-react';

/**
 * TableOfContents
 * 
 * Props:
 *  - sections: Array<{ id: string, label: string, level?: number }>
 *  - articleId: string (unique key per article to force re-mount)
 * 
 * Renders a sticky desktop sidebar TOC + a slide-out mobile drawer.
 * Auto-highlights the section currently in the viewport.
 */
export default function TableOfContents({ sections = [], articleId }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Intersection observer – watches all headings
  useEffect(() => {
    if (!sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // trigger when heading enters top 30%
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    }, observerOptions);

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, articleId]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = 120; // sticky header height approx
    const top = el.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
  };

  if (!sections.length) return null;

  return (
    <>
      {/* ── Desktop Sidebar TOC ── */}
      <aside className="hidden xl:block">
        <div
          className="sticky top-36 w-56 shrink-0"
          style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}
        >
          <div className="pb-2 mb-3 border-b border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              On this page
            </span>
          </div>

          <nav className="space-y-0.5">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              const indent = sec.level === 3 ? 'pl-4' : '';
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`w-full text-left text-[12px] py-1.5 px-2 rounded-lg transition-all cursor-pointer leading-snug ${indent} ${
                    isActive
                      ? 'text-amber-700 font-bold bg-amber-50 border-l-2 border-amber-400'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ── Mobile Floating TOC Button ── */}
      <div className="xl:hidden fixed bottom-20 left-4 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white shadow-lg text-[12px] font-bold cursor-pointer"
        >
          <List className="w-4 h-4" />
          Contents
        </motion.button>
      </div>

      {/* ── Mobile TOC Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/40 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="xl:hidden fixed left-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <span className="font-bold text-slate-900 text-[14px]">Table of Contents</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {sections.map((sec) => {
                  const isActive = activeId === sec.id;
                  const indent = sec.level === 3 ? 'pl-5' : 'pl-3';
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full text-left text-[13px] py-2.5 pr-3 rounded-xl transition-all cursor-pointer flex items-center gap-2 leading-snug ${indent} ${
                        isActive
                          ? 'text-amber-900 font-bold bg-amber-50 border border-amber-200'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                      {sec.label}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
