import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  ArrowUp, 
  Share2, 
  Copy, 
  Check, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles,
  Users,
  CheckCircle2,
  Bookmark,
  Heart
} from 'lucide-react';
import { REDDIT_POSTS } from '../data/contentData';

export default function CommunityRedditHub({ onOpenIntake }) {
  const [upvotes, setUpvotes] = useState({
    'reddit-1': 684,
    'reddit-2': 1420,
    'reddit-3': 512
  });
  const [hasUpvoted, setHasUpvoted] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [expandedComments, setExpandedComments] = useState({ 'reddit-1': true, 'reddit-2': true, 'reddit-3': true });

  const handleUpvote = (id) => {
    if (hasUpvoted[id]) {
      setUpvotes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setHasUpvoted(prev => ({ ...prev, [id]: false }));
    } else {
      setUpvotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setHasUpvoted(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleComments = (id) => {
    setExpandedComments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <article className="max-w-3xl mx-auto space-y-10 text-slate-800">
      
      {/* Editorial Meta Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-950 font-bold uppercase tracking-wider text-[10px]">
            Community Distribution
          </span>
          <span>•</span>
          <span>Peer Recovery Forums</span>
          <span>•</span>
          <span>Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
          Clinical Community Publications: Evidence-Based Recovery on Reddit
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-normal">
          How modern addiction medicine bridges peer-support forums like <strong>r/Alcoholism_Medication</strong>, <strong>r/stopdrinking</strong>, and <strong>r/dryalcoholics</strong> into evidence-backed clinical care.
        </p>

        {/* Editorial Notice Card */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-slate-900 text-amber-400 font-extrabold flex items-center justify-center shrink-0">
              🌻
            </div>
            <div>
              <span className="font-bold text-slate-900 block">
                Authored by the Sunflower Clinic Behavioral Health Team
              </span>
              <span className="text-slate-500">
                Non-Promotional Educational Outreach • Grounded in JAMA Trials &amp; Neurobiology
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
            Community Verified
          </span>
        </div>
      </header>

      {/* Rationale on Reddit as a Clinical Education Channel */}
      <section className="space-y-3 text-base sm:text-lg leading-relaxed text-slate-700">
        <p>
          Peer recovery subreddits represent the largest living archives of real-world patient experiences with Alcohol Use Disorder. For millions of individuals, Reddit is the first place they search when seeking honest, non-judgmental information about Naltrexone, withdrawal timelines, and harm reduction.
        </p>
        <p>
          Below are three of our most comprehensive educational publications published across recovery communities, complete with verified clinical citations, community responses, and actionable harm-reduction guidance.
        </p>
      </section>

      {/* The Reddit Posts List */}
      <section className="space-y-8">
        {REDDIT_POSTS.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl border border-slate-300 bg-white shadow-2xs overflow-hidden"
          >
            {/* Reddit Thread Header */}
            <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-orange-600 text-white font-black flex items-center justify-center text-xs">
                  r/
                </div>
                <div>
                  <span className="font-extrabold text-slate-900">{post.subreddit}</span>
                  <span className="text-slate-400 mx-1.5">•</span>
                  <span className="text-slate-500">Posted by {post.author} • {post.timestamp}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-900 font-bold text-[10px]">
                  {post.flair}
                </span>
                <button
                  onClick={() => handleCopy(post.id, `${post.title}\n\n${post.content}`)}
                  className="px-2.5 py-1 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  title="Copy formatted post markdown"
                >
                  {copiedId === post.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-[11px]">Copy Post</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Post Title & Content */}
            <div className="p-5 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                {post.title}
              </h2>

              <div className="prose text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line bg-slate-50/70 p-4 rounded-xl border border-slate-200 font-sans">
                {post.content}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement Action Bar */}
            <div className="px-5 py-3 border-t border-slate-200 bg-slate-50/60 flex items-center justify-between text-xs font-semibold text-slate-600">
              <div className="flex items-center space-x-4">
                {/* Upvote Pill */}
                <div className="inline-flex items-center rounded-full bg-white border border-slate-300 px-2 py-0.5 shadow-2xs">
                  <button
                    onClick={() => handleUpvote(post.id)}
                    className={`p-1 hover:text-orange-600 transition-colors cursor-pointer ${
                      hasUpvoted[post.id] ? 'text-orange-600 font-black' : 'text-slate-600'
                    }`}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <span className="px-1.5 font-bold text-slate-900 text-xs">
                    {upvotes[post.id]}
                  </span>
                </div>

                <button
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.commentCount} Comments</span>
                </button>

                <span className="hidden sm:flex items-center gap-1 text-slate-500">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </span>
              </div>

              <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Evidence-Grounded
              </span>
            </div>

            {/* Top Verified Reddit Community Comments */}
            {expandedComments[post.id] && post.topComments && post.topComments.length > 0 && (
              <div className="border-t border-slate-200 bg-slate-100/60 p-4 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                  Top Community Discussion:
                </span>
                {post.topComments.map((comment, cIdx) => (
                  <div key={cIdx} className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span className="font-bold text-slate-800">{comment.author}</span>
                      <span className="font-bold text-orange-700">▲ {comment.score} points</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-sans">
                      {comment.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Contextual Outpatient Telehealth Offer */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white space-y-5 border border-slate-800 shadow-lg">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
            EVIDENCE-BASED RECOVERY NETWORK
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Connect Directly with Licensed Telehealth Physicians
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
            You do not have to struggle in silence or navigate complex clinical literature alone. Schedule a confidential consultation with Dr. Raphael Golebiowski, MD or Dr. Glen Rebman, DO from the privacy of your home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="space-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Medicaid Accepted in PA &amp; MI ($0–$15 Co-Pay) or Flat $99/mo Self-Pay
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
              Prescriptions Sent Electronically in 15 Minutes
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book Video Consult</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </article>
  );
}
