import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Link2,
  Check,
  MessageSquare,
  Mail
} from 'lucide-react';

/**
 * ShareBar
 * 
 * Props:
 *  - title: string
 *  - url: string (canonical article URL)
 *  - description: string
 *  - variant?: 'horizontal' | 'compact'  (default: 'horizontal')
 */
export default function ShareBar({ title, url, description = '', variant = 'horizontal' }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const fullUrl = `https://sunflowerclinic.com${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description.slice(0, 200));

  const platforms = [
    {
      id: 'twitter',
      label: 'Share on X',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:bg-black hover:text-white'
    },
    {
      id: 'linkedin',
      label: 'Share on LinkedIn',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-blue-700 hover:text-white'
    },
    {
      id: 'facebook',
      label: 'Share on Facebook',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      id: 'reddit',
      label: 'Share on Reddit',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: 'hover:bg-orange-600 hover:text-white'
    },
    {
      id: 'email',
      label: 'Share via Email',
      icon: <Mail className="w-4 h-4" />,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0ARead more: ${encodedUrl}`,
      color: 'hover:bg-slate-700 hover:text-white'
    }
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback: create a temp input
      const el = document.createElement('input');
      el.value = fullUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // ── Compact variant: single dropdown trigger ──
  if (variant === 'compact') {
    return (
      <div className="relative inline-block">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[12px] font-semibold cursor-pointer transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share
        </button>

        <AnimatePresence>
          {open && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -4 }}
                className="absolute right-0 top-9 z-40 w-48 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden py-1.5"
              >
                {platforms.map((p) => (
                  <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-3.5 py-2 text-[12px] font-medium text-slate-700 transition-all ${p.color}`}
                  >
                    {p.icon}
                    {p.label}
                  </a>
                ))}
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-[12px] font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Link2 className="w-4 h-4" />}
                  {copied ? 'Link copied!' : 'Copy link'}
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── Horizontal variant (inline article toolbar) ──
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 shrink-0">
        Share:
      </span>

      {platforms.map((p) => (
        <a
          key={p.id}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          title={p.label}
          className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 transition-all cursor-pointer border border-slate-200 ${p.color}`}
        >
          {p.icon}
        </a>
      ))}

      <button
        onClick={handleCopy}
        title="Copy link"
        className={`h-8 flex items-center gap-1.5 px-3 rounded-full text-[11px] font-bold transition-all cursor-pointer border ${
          copied
            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
            : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
        }`}
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Link2 className="w-3.5 h-3.5" />}
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  );
}
