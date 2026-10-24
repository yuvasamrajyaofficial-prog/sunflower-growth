import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PublicationHeader from './components/PublicationHeader';
import ClinicalFooter from './components/ClinicalFooter';
import Article1NaltrexoneOnline from './articles/Article1NaltrexoneOnline';
import Article2StateTelehealth from './articles/Article2StateTelehealth';
import Article3SinclairMethod from './articles/Article3SinclairMethod';
import CommunityRedditHub from './articles/CommunityRedditHub';
import IntakeBookingModal from './components/IntakeBookingModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeArticleId, setActiveArticleId] = useState('naltrexone-online');
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArticleChange = (articleId) => {
    setActiveArticleId(articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-950 font-sans">
      
      {/* Publication Clinical Masthead Header */}
      <PublicationHeader
        activeArticleId={activeArticleId}
        setActiveArticleId={handleArticleChange}
        onOpenIntake={() => setIntakeOpen(true)}
      />

      {/* Main Journal Article Stage */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {activeArticleId === 'naltrexone-online' && (
            <motion.div
              key="naltrexone-online"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Article1NaltrexoneOnline onOpenIntake={() => setIntakeOpen(true)} />
            </motion.div>
          )}

          {activeArticleId === 'state-telehealth' && (
            <motion.div
              key="state-telehealth"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Article2StateTelehealth onOpenIntake={() => setIntakeOpen(true)} />
            </motion.div>
          )}

          {activeArticleId === 'tsm-guide' && (
            <motion.div
              key="tsm-guide"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Article3SinclairMethod onOpenIntake={() => setIntakeOpen(true)} />
            </motion.div>
          )}

          {activeArticleId === 'reddit-hub' && (
            <motion.div
              key="reddit-hub"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <CommunityRedditHub onOpenIntake={() => setIntakeOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900 text-amber-400 hover:text-white shadow-xl border border-slate-700 cursor-pointer transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Telehealth Intake Modal */}
      <IntakeBookingModal
        isOpen={intakeOpen}
        onClose={() => setIntakeOpen(false)}
      />

      {/* Clinical Publication Footer with Unified Ecosystem Links */}
      <ClinicalFooter
        onOpenIntake={() => setIntakeOpen(true)}
      />

    </div>
  );
}
