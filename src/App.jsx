import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import View1Overview from './views/View1Overview';
import View2NaltrexoneOnline from './views/View2NaltrexoneOnline';
import View3StateTelehealth from './views/View3StateTelehealth';
import View4TsmGuide from './views/View4TsmGuide';
import View5CommunityHub from './views/View5CommunityHub';
import SchemaDrawer from './components/SchemaDrawer';
import GeoSimulatorModal from './components/GeoSimulatorModal';
import IntakeBookingModal from './components/IntakeBookingModal';
import { Calendar, Bot, ShieldCheck, Sparkles, PhoneCall, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [schemaOpen, setSchemaOpen] = useState(false);
  const [geoOpen, setGeoOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-950">
      
      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSchema={() => setSchemaOpen(true)}
        onOpenGeo={() => setGeoOpen(true)}
        onOpenIntake={() => setIntakeOpen(true)}
      />

      {/* Main Page Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <View1Overview
                setActiveTab={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenSchema={() => setSchemaOpen(true)}
                onOpenGeo={() => setGeoOpen(true)}
                onOpenIntake={() => setIntakeOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'article1' && (
            <motion.div
              key="article1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <View2NaltrexoneOnline
                onOpenSchema={() => setSchemaOpen(true)}
                onOpenGeo={() => setGeoOpen(true)}
                onOpenIntake={() => setIntakeOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'article2' && (
            <motion.div
              key="article2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <View3StateTelehealth
                onOpenSchema={() => setSchemaOpen(true)}
                onOpenGeo={() => setGeoOpen(true)}
                onOpenIntake={() => setIntakeOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'article3' && (
            <motion.div
              key="article3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <View4TsmGuide
                onOpenSchema={() => setSchemaOpen(true)}
                onOpenGeo={() => setGeoOpen(true)}
                onOpenIntake={() => setIntakeOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'community' && (
            <motion.div
              key="community"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <View5CommunityHub
                onOpenSchema={() => setSchemaOpen(true)}
                onOpenGeo={() => setGeoOpen(true)}
                onOpenIntake={() => setIntakeOpen(true)}
              />
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
            className="fixed bottom-20 sm:bottom-8 right-5 z-30 p-3 rounded-full bg-slate-900 text-amber-400 hover:text-white shadow-lg border border-slate-700 cursor-pointer transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-lg flex items-center justify-between gap-2">
        <button
          onClick={() => setGeoOpen(true)}
          className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Bot className="w-4 h-4 text-amber-500" />
          <span>AI GEO Tester</span>
        </button>

        <button
          onClick={() => setIntakeOpen(true)}
          className="flex-1 py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>Book Telehealth</span>
        </button>
      </div>

      {/* Global Modals */}
      <SchemaDrawer
        isOpen={schemaOpen}
        onClose={() => setSchemaOpen(false)}
      />

      <GeoSimulatorModal
        isOpen={geoOpen}
        onClose={() => setGeoOpen(false)}
      />

      <IntakeBookingModal
        isOpen={intakeOpen}
        onClose={() => setIntakeOpen(false)}
      />

      {/* Unified Ecosystem Footer */}
      <Footer
        onOpenSchema={() => setSchemaOpen(true)}
        onOpenGeo={() => setGeoOpen(true)}
        onOpenIntake={() => setIntakeOpen(true)}
      />
    </div>
  );
}
