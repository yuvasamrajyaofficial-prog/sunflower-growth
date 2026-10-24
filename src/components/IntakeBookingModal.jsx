import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Calendar, ArrowRight, User, Pill, Sparkles, AlertCircle, Clock } from 'lucide-react';

export default function IntakeBookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    state: 'PA',
    goal: 'harm-reduction',
    insurance: 'medicaid',
    preferredTime: 'today',
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const states = [
    { code: 'PA', name: 'Pennsylvania (Medicaid & Private)' },
    { code: 'MI', name: 'Michigan (Medicaid & Private)' },
    { code: 'OH', name: 'Ohio (Medicaid & Private)' },
    { code: 'NY', name: 'New York (Medicaid & Private)' },
    { code: 'NJ', name: 'New Jersey (Medicaid & Private)' },
    { code: 'CA', name: 'California (Medi-Cal & Private)' },
    { code: 'FL', name: 'Florida (Self-Pay $99/mo & Commercial)' },
    { code: 'TX', name: 'Texas (Self-Pay $99/mo & Commercial)' },
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Sunflower Telehealth Intake Portal</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Confidential, HIPAA-Compliant • Prescriptions Sent Same-Day
                </p>
              </div>
            </div>
            <button 
              onClick={handleReset}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Progress Bar */}
          {!isSubmitted && (
            <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className={`flex items-center gap-1.5 ${step >= 1 ? 'text-amber-700 font-bold' : ''}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-300'}`}>1</span>
                <span>State & Goal</span>
              </span>
              <span className="text-slate-300">──</span>
              <span className={`flex items-center gap-1.5 ${step >= 2 ? 'text-amber-700 font-bold' : ''}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-amber-400 text-slate-950' : 'bg-slate-300'}`}>2</span>
                <span>Coverage</span>
              </span>
              <span className="text-slate-300">──</span>
              <span className={`flex items-center gap-1.5 ${step >= 3 ? 'text-amber-700 font-bold' : ''}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-300'}`}>3</span>
                <span>Schedule</span>
              </span>
            </div>
          )}

          {/* Form Content */}
          <div className="p-6">
            {!isSubmitted ? (
              <>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Select Your State of Residence
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                      >
                        {states.map(s => (
                          <option key={s.code} value={s.code}>{s.name}</option>
                        ))}
                      </select>
                      <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Licensed clinicians ready in your state.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Personal Recovery Preference
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, goal: 'the-sinclair-method' })}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            formData.goal === 'the-sinclair-method'
                              ? 'border-amber-400 bg-amber-50 text-amber-950 ring-1 ring-amber-400 font-semibold'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5">
                            <Pill className="w-4 h-4 text-amber-600" />
                            <span>The Sinclair Method</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            Targeted Naltrexone 1 hour before drinking to unlearn cravings gradually.
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, goal: 'complete-abstinence' })}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                            formData.goal === 'complete-abstinence'
                              ? 'border-amber-400 bg-amber-50 text-amber-950 ring-1 ring-amber-400 font-semibold'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>Daily Abstinence</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">
                            Daily morning Naltrexone paired with weekly digital CBT for complete sobriety.
                          </p>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Payment & Insurance Preference
                      </label>
                      <div className="space-y-2 text-xs">
                        <label className={`flex items-start p-3 rounded-xl border cursor-pointer ${
                          formData.insurance === 'medicaid' ? 'border-amber-400 bg-amber-50 text-amber-950 ring-1 ring-amber-400 font-semibold' : 'border-slate-200'
                        }`}>
                          <input
                            type="radio"
                            name="insurance"
                            checked={formData.insurance === 'medicaid'}
                            onChange={() => setFormData({ ...formData, insurance: 'medicaid' })}
                            className="mt-0.5 mr-2 text-amber-500 focus:ring-amber-400"
                          />
                          <div>
                            <span className="font-bold block">Medicaid / State Insurance</span>
                            <span className="text-[11px] text-slate-500">
                              Typically $0–$15 co-pay for visits & Generic Naltrexone (PA & MI accepted).
                            </span>
                          </div>
                        </label>

                        <label className={`flex items-start p-3 rounded-xl border cursor-pointer ${
                          formData.insurance === 'commercial' ? 'border-amber-400 bg-amber-50 text-amber-950 ring-1 ring-amber-400 font-semibold' : 'border-slate-200'
                        }`}>
                          <input
                            type="radio"
                            name="insurance"
                            checked={formData.insurance === 'commercial'}
                            onChange={() => setFormData({ ...formData, insurance: 'commercial' })}
                            className="mt-0.5 mr-2 text-amber-500 focus:ring-amber-400"
                          />
                          <div>
                            <span className="font-bold block">Commercial Insurance (Aetna, BCBS, Cigna, UHC)</span>
                            <span className="text-[11px] text-slate-500">
                              Standard specialist telehealth co-pay applies.
                            </span>
                          </div>
                        </label>

                        <label className={`flex items-start p-3 rounded-xl border cursor-pointer ${
                          formData.insurance === 'self-pay' ? 'border-amber-400 bg-amber-50 text-amber-950 ring-1 ring-amber-400 font-semibold' : 'border-slate-200'
                        }`}>
                          <input
                            type="radio"
                            name="insurance"
                            checked={formData.insurance === 'self-pay'}
                            onChange={() => setFormData({ ...formData, insurance: 'self-pay' })}
                            className="mt-0.5 mr-2 text-amber-500 focus:ring-amber-400"
                          />
                          <div>
                            <span className="font-bold block">Transparent Self-Pay ($99/mo All-Inclusive)</span>
                            <span className="text-[11px] text-slate-500">
                              Includes physician consults, Rx management, and full Sunflower Sober app access.
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Contact Information (Confidential)
                      </label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Full Name (or Preferred First Name)"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-400"
                        />
                        <input
                          type="email"
                          placeholder="Confidential Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-400"
                        />
                        <input
                          type="tel"
                          placeholder="Mobile Number (for Secure Video Link SMS)"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Next available video visit: <strong>Today within 2 hours</strong></span>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Intake Request Reserved!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you! Your intake evaluation has been scheduled. A secure HIPAA video link has been prepared for Dr. Raphael Golebiowski, MD's clinical queue in {formData.state}.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto text-left space-y-1">
                  <div><strong>State:</strong> {formData.state}</div>
                  <div><strong>Protocol:</strong> {formData.goal === 'the-sinclair-method' ? 'The Sinclair Method (TSM)' : 'Abstinence & Daily Naltrexone'}</div>
                  <div><strong>Prescription Routing:</strong> Electronic to your preferred local pharmacy</div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            {!isSubmitted ? (
              <>
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-400">100% HIPAA Private</span>
                )}
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{step === 3 ? 'Confirm & Request Visit' : 'Continue'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            ) : (
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs cursor-pointer"
              >
                Close Portal
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
