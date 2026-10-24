import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PublicationHeader from './components/PublicationHeader';
import ClinicalFooter from './components/ClinicalFooter';
import ReadingProgress from './components/ReadingProgress';
import ArticleMeta from './components/ArticleMeta';
import TableOfContents from './components/TableOfContents';
import Article1NaltrexoneOnline from './articles/Article1NaltrexoneOnline';
import Article2StateTelehealth from './articles/Article2StateTelehealth';
import Article3SinclairMethod from './articles/Article3SinclairMethod';
import CommunityRedditHub from './articles/CommunityRedditHub';
import IntakeBookingModal from './components/IntakeBookingModal';
import { ArrowUp } from 'lucide-react';
import {
  META_ARTICLE_1,
  META_ARTICLE_2,
  META_ARTICLE_3,
  META_ARTICLE_4
} from './data/seoData';

const ARTICLE_CONFIG = {
  'naltrexone-online': {
    Component: Article1NaltrexoneOnline,
    meta: META_ARTICLE_1
  },
  'state-telehealth': {
    Component: Article2StateTelehealth,
    meta: META_ARTICLE_2
  },
  'tsm-guide': {
    Component: Article3SinclairMethod,
    meta: META_ARTICLE_3
  },
  'reddit-hub': {
    Component: CommunityRedditHub,
    meta: META_ARTICLE_4
  }
};

export default function App() {
  const [activeArticleId, setActiveArticleId] = useState('naltrexone-online');
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleArticleChange = (id) => {
    setActiveArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { Component: ActiveComponent, meta: activeMeta } = ARTICLE_CONFIG[activeArticleId];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">

      {/* ── Reading Progress ── */}
      <ReadingProgress />

      {/* ── Per-Article SEO Head Injection ── */}
      <ArticleMeta meta={activeMeta} />

      {/* ── Publication Header / Navigation ── */}
      <PublicationHeader
        activeArticleId={activeArticleId}
        setActiveArticleId={handleArticleChange}
        onOpenIntake={() => setIntakeOpen(true)}
      />

      {/* ── Main Content Stage ── */}
      <main className="flex-1 w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          {/*
            Two-column layout on XL screens:
            [ TOC sidebar (fixed) ] [ Article content ]
            Single column on smaller screens
          */}
          <div className="flex gap-14 items-start">

            {/* ── TOC Sidebar (desktop only) ── */}
            <TableOfContents
              sections={activeMeta?.toc || []}
              articleId={activeArticleId}
            />

            {/* ── Article Body ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArticleId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <ActiveComponent
                    meta={activeMeta}
                    onOpenIntake={() => setIntakeOpen(true)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </main>

      {/* ── Scroll to Top ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-slate-900 text-amber-400 hover:text-white shadow-lg border border-slate-700 cursor-pointer transition-colors flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Intake Modal ── */}
      <IntakeBookingModal
        isOpen={intakeOpen}
        onClose={() => setIntakeOpen(false)}
      />

      {/* ── Footer ── */}
      <ClinicalFooter onOpenIntake={() => setIntakeOpen(true)} />
    </div>
  );
}
