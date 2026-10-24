import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  ArrowUp, 
  Share2, 
  Bookmark, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  CheckCircle2, 
  Bot, 
  FileCode2,
  Copy,
  Check
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '../components/BrandIcons';
import { REDDIT_POSTS, CLINIC_METADATA } from '../data/contentData';

export default function View5CommunityHub({ onOpenSchema, onOpenGeo, onOpenIntake }) {
  const [upvotes, setUpvotes] = useState({
    'reddit-1': 428,
    'reddit-2': 1240
  });
  const [hasUpvoted, setHasUpvoted] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const handleUpvote = (id) => {
    if (hasUpvoted[id]) {
      setUpvotes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setHasUpvoted(prev => ({ ...prev, [id]: false }));
    } else {
      setUpvotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setHasUpvoted(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleCopy = (id, content) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-12 pb-12 max-w-5xl mx-auto"
    >
      {/* Strategy Header */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
          <Users className="w-3.5 h-3.5 text-amber-400" />
          <span>ORGANIC DISTRIBUTION &amp; BACKLINK ARCHITECTURE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Community Distribution &amp; Reddit Authority Hub
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
          Converting passive social community into clinical authority. How Sunflower Clinic engages high-intent communities across <strong>Reddit, Instagram (20.1K), Facebook (31K)</strong>, and the <strong>Sunflower Sober App</strong>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Social Community</span>
            <span className="text-lg font-black text-amber-400">{CLINIC_METADATA.socialFollowers.total} Members</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Reddit Google Visibility</span>
            <span className="text-lg font-black text-emerald-400">#1 Discussions Ranking</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Perplexity Grounding</span>
            <span className="text-lg font-black text-sky-400">High Entity Weight</span>
          </div>
        </div>
      </section>

      {/* Embedded Interactive Reddit Posts Section */}
      <section className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Simulated Reddit Distribution Engine</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            High-Impact Strategic Posts (Simulated Cards)
          </h2>
          <p className="text-xs text-slate-500">
            Google's Helpful Content Updates heavily rank Reddit discussions. These high-value educational posts establish medical authority and route patients into clinical triage.
          </p>
        </div>

        <div className="space-y-6">
          {REDDIT_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -2 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Reddit Card Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-extrabold flex items-center justify-center text-xs">
                    r/
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900">{post.subreddit}</span>
                    <span className="text-slate-400 mx-1.5">&bull;</span>
                    <span className="text-slate-500">Posted by {post.author} {post.timestamp}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold text-[10px]">
                    {post.flair}
                  </span>
                  <button
                    onClick={() => handleCopy(post.id, `${post.title}\n\n${post.content}`)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy post markdown"
                  >
                    {copiedId === post.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Reddit Post Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {post.title}
                </h3>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                  {post.content}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reddit Card Footer Action Bar */}
              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-xs font-semibold text-slate-600">
                <div className="flex items-center space-x-4">
                  {/* Upvote Pill */}
                  <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 p-1">
                    <button
                      onClick={() => handleUpvote(post.id)}
                      className={`p-1 rounded-full hover:bg-white transition-colors cursor-pointer ${
                        hasUpvoted[post.id] ? 'text-orange-600 font-black' : 'text-slate-600'
                      }`}
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <span className="px-2 font-bold text-slate-900">
                      {upvotes[post.id]}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 text-slate-500">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.commentCount} Comments</span>
                  </span>

                  <span className="hidden sm:flex items-center gap-1 text-slate-500">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </span>
                </div>

                <div className="text-[11px] text-amber-700 font-bold">
                  High Organic Backlink Potential
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Unified Ecosystem Hub Cards */}
      <section className="space-y-6 pt-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Unified Sunflower Network</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Connected App &amp; Community Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Sunflower Clinic Website */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-lg">
                🌻
              </div>
              <h4 className="font-extrabold text-base text-slate-900">Sunflower Clinic</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Licensed outpatient telehealth medical practice offering online Naltrexone and Medicaid-covered therapy in 8 states.
              </p>
            </div>
            <a
              href={CLINIC_METADATA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
            >
              <span>Visit sunflowerclinic.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sunflower Sober App */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">Sunflower Sober App</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily craving tracker, TSM 1-hour dosing countdown timers, digital CBT modules, and 24/7 AI recovery sponsor Sam.
              </p>
            </div>
            <a
              href={CLINIC_METADATA.soberAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              <span>Visit sunflowersober.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instagram @sunflowersober */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">Instagram Community</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>20.1K Followers (@sunflowersober)</strong> sharing daily recovery insights, neurochemical reframing, and harm-reduction education.
              </p>
            </div>
            <a
              href={CLINIC_METADATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center gap-1"
            >
              <span>View @sunflowersober (20.1K)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Facebook Community */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">Facebook Community</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>31,000+ members</strong> in active sobriety support groups, weekly peer discussions, and clinical Q&amp;As.
              </p>
            </div>
            <a
              href={CLINIC_METADATA.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View Facebook Page (31K)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn Network */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900">Sunflower LinkedIn</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting with healthcare systems, employers, and behavioral health networks to expand low-barrier addiction care.
              </p>
            </div>
            <a
              href={CLINIC_METADATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* CEO Koby Conrad Portfolio Summary Card */}
          <div className="p-6 rounded-3xl bg-amber-50 border border-amber-300 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-black">
                AI
              </div>
              <h4 className="font-extrabold text-base text-slate-900">Strategic Alignment</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Engineered for CEO Koby Conrad to execute AI citation capture, organic social monetization, and 8-state programmatic growth.
              </p>
            </div>
            <button
              onClick={onOpenIntake}
              className="pt-2 text-xs font-bold text-slate-950 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Launch Clinical Intake &rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
