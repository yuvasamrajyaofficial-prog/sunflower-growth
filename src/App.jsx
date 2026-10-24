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

const VIEWS = {
  'naltrexone-online': Article1NaltrexoneOnline,
  'state-telehealth': Article2StateTelehealth,
  'tsm-guide': Article3SinclairMethod,
  'reddit-hub': CommunityRedditHub
};

export default function App() {
  const [activeArticleId, setActiveArticleId] = useState('naltrexone-online');
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArticleChange = (articleId) => {
    setActiveArticleId(articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveView = VIEWS[activeArticleId];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">

      {/* Publication Masthead Header */}
      <PublicationHeader
        activeArticleId={activeArticleId}
        setActiveArticleId={handleArticleChange}
        onOpenIntake={() => setIntakeOpen(true)}
      />

      {/* Article Stage */}
      <main className="flex-1 w-full bg-white">
        {/* Subtle divider line under header */}
        <div className="w-full border-b border-gray-100"></div>

        {/* Content area — constrained reading width */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <AnimatePresence mode="wait">
            {ActiveView && (
              <motion.div
                key={activeArticleId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <ActiveView onOpenIntake={() => setIntakeOpen(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Scroll to Top */}
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

      {/* Intake Modal */}
      <IntakeBookingModal
        isOpen={intakeOpen}
        onClose={() => setIntakeOpen(false)}
      />

      {/* Footer */}
      <ClinicalFooter onOpenIntake={() => setIntakeOpen(true)} />
    </div>
  );
}
