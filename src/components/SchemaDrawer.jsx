import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Code, Sparkles, ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';
import { JSON_LD_SCHEMAS } from '../data/contentData';

export default function SchemaDrawer({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [selectedSchemaType, setSelectedSchemaType] = useState('medicalWebPage');

  if (!isOpen) return null;

  const schemaString = JSON.stringify(JSON_LD_SCHEMAS[selectedSchemaType] || JSON_LD_SCHEMAS.medicalWebPage, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(schemaString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>MedicalWebPage JSON-LD Architecture</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    GEO & Schema.org Compliant
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Engineered for direct citation injection into ChatGPT Search, Perplexity, & Google SGE
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Strategic Context Bar */}
          <div className="bg-amber-50/70 border-b border-amber-200/80 px-5 py-3 text-xs text-amber-900 flex items-start sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Why this wins:</strong> Generative search engines require explicit entity co-occurrence (`reviewedBy` with accredited NPI physicians) to synthesize medical answers.
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-slate-800 hover:bg-amber-100/50 font-semibold transition-colors cursor-pointer text-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-600" />
                  <span>Copy JSON-LD</span>
                </>
              )}
            </button>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-5 overflow-y-auto bg-slate-950 font-mono text-xs text-slate-200 leading-relaxed selection:bg-amber-400 selection:text-slate-950">
            <pre className="whitespace-pre-wrap">{schemaString}</pre>
          </div>

          {/* Footer Highlights */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center space-x-3">
              <span className="flex items-center text-emerald-700 font-semibold gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Validated via Schema.org Validator
              </span>
              <span className="text-slate-400">•</span>
              <span>Rich Results: Eligible</span>
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors cursor-pointer"
            >
              Close Inspector
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
