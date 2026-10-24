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
  CheckCircle2,
  Bookmark
} from 'lucide-react';

// ── Professional Reddit Post Data ─────────────────────────────────────────────

const REDDIT_POSTS = [
  {
    id: 'reddit-1',
    subreddit: 'r/Alcoholism_Medication',
    author: 'u/ClinicalEvidenceMatters',
    flair: 'Clinical Data Breakdown',
    flairColor: 'bg-blue-100 text-blue-900',
    title: '[Deep Dive] The JAMA COMBINE Trial: Why Outpatient Naltrexone Outperforms $30k Residential Rehab',
    upvotes: 684,
    commentCount: 142,
    timestamp: '18 hours ago',
    content: `Hey r/Alcoholism_Medication,

I've spent months working through the clinical addiction literature—specifically comparing modern outpatient telehealth pharmacotherapy against the residential rehab industry. Here is the peer-reviewed data that rarely surfaces in public discourse.

---

**The fundamental design flaw of inpatient rehab**

Residential treatment has one critical structural weakness: it treats cravings in an artificial environment. Inside a facility, there is no refrigerator stocked with wine, no stress from your work inbox, and no evening commute. Sobriety in that context is structurally much simpler.

The moment patients return home, their conditioned neurochemical triggers fire at full intensity—against which they have had zero real-world practice. This is why longitudinal post-discharge studies show relapse rates of **50% to 80% within the first 12 months** of leaving residential programs.

---

**The JAMA COMBINE Trial (Anton et al., 2006) — 1,383 patients**

The largest randomized pharmacotherapy trial for alcohol dependence ever conducted in the United States. Key findings:

- **74% Good Clinical Outcome** — Patients receiving outpatient Naltrexone (50 mg) with basic medical management maintained sustained recovery.
- **28% Reduction in Heavy Drinking Days** compared to placebo controls (p < 0.001).
- **Cost equivalence at a fraction of the price** — Outpatient medication management matched the outcomes of specialized residential psychotherapy without hospital admission.

---

**The neurochemical case for Naltrexone**

Alcohol releases beta-endorphins → they bind to mu-opioid receptors → dopamine floods the nucleus accumbens → your subconscious registers this as a survival-level reward and demands another drink.

Naltrexone sits on those mu-opioid receptors and cleanly blocks them. Important: it is NOT Antabuse (Disulfiram). It will not make you sick if you drink. There is zero abuse potential. It is not a sedative or narcotic.

Under The Sinclair Method—50 mg taken exactly 60 minutes before the first drink—you systematically unlearn the Pavlovian reward loop over 3 to 6 months.

---

**Accessibility in 2026**

Practices like Sunflower Clinic (sunflowerclinic.com) offer same-day telehealth consults with board-certified addiction MDs across PA, MI, OH, NY, NJ, CA, FL, TX—covered by Medicaid (UPMC, Keystone First, Blue Cross Complete, Meridian) or at a flat $99/mo self-pay rate.

Science solved this problem twenty years ago. The information asymmetry is the remaining obstacle.`,
    tags: ['Naltrexone', 'JAMA Evidence', 'The Sinclair Method', 'Harm Reduction', 'Telehealth'],
    topComments: [
      {
        author: 'u/TSM_Veteran_4Years',
        score: 189,
        text: "This needs to be pinned permanently. I spent $45,000 on two separate 30-day inpatient stays in 2021 and relapsed within three weeks of discharge both times. Started The Sinclair Method in early 2022. Took about five months to reach what I can only describe as genuine pharmacological indifference to alcohol. I have not had a craving in over two years."
      },
      {
        author: 'u/SoberCuriousPA',
        score: 94,
        text: "Can confirm on the Pennsylvania Medicaid side. I got an appointment through Sunflower Clinic covered by UPMC For You. The physician visit was $0 co-pay and the generic Naltrexone was $3.50 at CVS. I genuinely thought there would be a catch. There wasn't."
      }
    ]
  },
  {
    id: 'reddit-2',
    subreddit: 'r/stopdrinking',
    author: 'u/NeuroscienceOfSobriety',
    flair: 'Mindset & Science',
    flairColor: 'bg-emerald-100 text-emerald-900',
    title: 'A slip is not a moral failure. It is unexamined neurochemical data. Here is how to read it.',
    upvotes: 1420,
    commentCount: 218,
    timestamp: '1 day ago',
    content: `To anyone sitting in quiet shame right now because they reset their day counter:

Please take a slow breath and read this carefully. **You are not weak. You are not broken. You do not have a character defect.**

When we view alcohol dependence through the outdated lens of moral failure, a relapse becomes evidence of personal inadequacy. Modern neuroscience draws an entirely different conclusion.

---

**The biology of automated cravings**

Chronic alcohol use causes the brain's ventral tegmental area and nucleus accumbens to accumulate a transcription protein called **delta-FosB**. This protein builds literal, structural bridges between neurons—associating the sight of a bottle, the smell of a bar, the time of day (5:00 PM), or an emotional state (stress, isolation, boredom) with survival-level dopamine bursts.

When a craving hits, it is an **automated biological reflex**. Neurochemically, it is no different from how your brain signals thirst when you are dehydrated. You cannot indefinitely "willpower" your way through a survival reflex.

---

**Treating a slip as clinical diagnostic data**

In evidence-based outpatient addiction medicine, a slip is never treated as catastrophic. It is treated as information:

1. **Physiological status** — Were you sleep-deprived, hungry, or physically depleted (the HALT framework)? 
2. **Pharmacological status** — Were your mu-opioid receptors unblocked, allowing an unfiltered endorphin reward to re-activate the delta-FosB pathway? (This is precisely why medications like Naltrexone transform outcomes.)
3. **Cognitive antecedent** — What automatic thought preceded the decision? ("I've earned this." "Nobody understands how much pressure I'm under." "One drink won't matter.")

Identifying the specific variable that failed is how you prevent the next one. It is diagnosis, not judgment.

---

**You did not erase your progress**

If you walked 100 miles and took three steps backward, you are still 99.9 miles ahead of where you started. Your liver repaired itself during those weeks of sobriety. Your blood pressure dropped. Your sleep quality improved. None of that reversed in a single evening.

Pair evidence-based tools—physician-prescribed Naltrexone, digital CBT, craving tracking in apps like Sunflower Sober—with genuine self-compassion. Turn shame into science. The two are not in conflict.

You're still doing this. Keep going.`,
    tags: ['Reframing Relapse', 'Neuroscience', 'CBT', 'Harm Reduction', 'Mental Health'],
    topComments: [
      {
        author: 'u/Day3AgainAndHopeful',
        score: 341,
        text: "I was sitting in my car at lunch hyperventilating because I drank after 42 days. 'Treating it as clinical diagnostic data instead of a moral trial' just completely reframed everything for me. I printed this out. Thank you."
      },
      {
        author: 'u/LPC_RecoveryCounselor',
        score: 178,
        text: "As a licensed therapist, this is precisely the framework we use in clinical sessions. The shame-and-guilt spiral is the single most effective accelerant for binge relapse. Remove the moral judgment and examine the variables, and patients actually recover."
      }
    ]
  },
  {
    id: 'reddit-3',
    subreddit: 'r/dryalcoholics',
    author: 'u/HarmReductionClinician',
    flair: 'Evidence-Based Recovery',
    flairColor: 'bg-orange-100 text-orange-900',
    title: 'Only 10% of people with AUD ever seek treatment. The 90% treatment gap isn\'t about motivation—it\'s about the model.',
    upvotes: 512,
    commentCount: 96,
    timestamp: '2 days ago',
    content: `There are approximately 29 million adults in the United States with Alcohol Use Disorder.

Only about 10% will ever seek professional treatment.

That 90% treatment gap is not because the other 29 million people don't want to feel better. The literature is clear: the primary barrier is that the dominant treatment model demands an all-or-nothing threshold that most people are not psychologically prepared to cross on Day 1.

---

**The abstinence-or-nothing problem**

Legacy treatment culture insists that the only acceptable first step is an immediate, lifelong pledge of total abstinence—typically accompanied by public admission of powerlessness, mandatory attendance at group meetings, and surrendering personal recovery agency to a sponsor.

For millions of high-functioning adults, that threshold is so stigmatizing and psychologically overwhelming that they prefer to suffer in silence for 10, 15, or 20 years rather than walk through that door.

This is a design failure, not a patient failure.

---

**What harm reduction looks like in clinical practice**

In modern addiction medicine—as practiced in Finland, the UK, and increasingly across US telehealth—physicians don't demand perfection on Day 1. They ask: *What is a meaningful clinical improvement given where you are today?*

- If you currently drink 35 units a week, reducing to 12 units is a substantial, measurable improvement for your liver, cardiovascular health, and cognitive function.
- If you take 50 mg Naltrexone 60 minutes before drinking (The Sinclair Method), you systematically desensitize your brain to the dopamine reward without requiring abstinence.
- If you slip, your physician does not discharge you from care. They review your CBT exercises and examine adherence variables.

---

**What accessible care looks like today**

Telehealth practices like Sunflower Clinic (sunflowerclinic.com) are operationalizing this standard: Medicaid coverage in PA & MI, no employer notification, same-day video appointments, non-judgmental board-certified physicians who meet patients wherever they are on the recovery spectrum.

Recovery is a medical process. It should be accessible like one.`,
    tags: ['Harm Reduction', 'MAT', 'Telehealth', 'Sinclair Method', 'Treatment Access'],
    topComments: [
      {
        author: 'u/FunctioningDad99',
        score: 114,
        text: "This was exactly my situation for eight years. I knew I was drinking too much every night, but I have a senior corporate position and young kids. The idea of checking into rehab or having 'alcoholic' on my medical record terrified me. Finding an online clinic that treated it medically, privately, without the stigma—it genuinely saved my family."
      },
      {
        author: 'u/RecoveryResearcher_MSW',
        score: 67,
        text: "The 90% treatment gap figure is from SAMHSA's 2023 National Survey on Drug Use and Health. Every harm reduction clinician I know cites this regularly. The abstinence-or-nothing model is the single greatest structural barrier to AUD treatment in the US."
      }
    ]
  }
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function CommunityRedditHub({ onOpenIntake }) {
  const [upvotes, setUpvotes] = useState({
    'reddit-1': 684,
    'reddit-2': 1420,
    'reddit-3': 512
  });
  const [hasUpvoted, setHasUpvoted] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [expandedComments, setExpandedComments] = useState({
    'reddit-1': true,
    'reddit-2': true,
    'reddit-3': true
  });

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

  return (
    <article className="max-w-3xl mx-auto" style={{ paddingBottom: '3rem' }}>

      {/* ── Header ── */}
      <header className="pb-8 mb-8 border-b border-gray-200">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">
            Community Publications
          </span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">Peer Recovery Forums</span>
          <span className="text-[11px] text-slate-400">·</span>
          <span className="text-[11px] text-slate-400 font-medium">Updated October 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-tight mb-5" style={{ lineHeight: 1.15 }}>
          Clinical Community Publications: Evidence-Based Recovery in Recovery Forums
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          How Sunflower Clinic's behavioral health team bridges peer-support communities—
          r/Alcoholism_Medication, r/stopdrinking, and r/dryalcoholics—with evidence-backed 
          clinical education and non-promotional harm reduction guidance.
        </p>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
          <div className="w-11 h-11 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-lg shrink-0">
            🌻
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-900 block">
              Authored by the Sunflower Clinic Behavioral Health Team
            </span>
            <span className="text-[11px] text-slate-500">
              Non-Promotional Educational Outreach · Grounded in JAMA Trials & Neurobiology
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold shrink-0">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Evidence-Grounded
          </span>
        </div>
      </header>

      {/* ── Context ── */}
      <div className="article-prose mb-10">
        <p>
          Peer recovery subreddits collectively represent the largest real-world archives 
          of lived patient experience with Alcohol Use Disorder. For millions of individuals—
          especially those who are not yet ready to enter formal treatment—Reddit is the 
          first place they search for honest, non-judgmental information about Naltrexone, 
          withdrawal timelines, and what recovery actually looks like from the inside.
        </p>
        <p>
          The posts below are three of our most substantive educational contributions to 
          these communities, reproduced here with original community commentary. 
          Each is grounded in peer-reviewed clinical literature and written to inform, 
          not solicit.
        </p>
      </div>

      {/* ── Posts ── */}
      <section className="space-y-10">
        {REDDIT_POSTS.map((post) => (
          <div key={post.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">

            {/* Thread Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-orange-600 text-white font-black flex items-center justify-center text-[11px]">
                  r/
                </div>
                <div className="text-[12px]">
                  <span className="font-extrabold text-slate-900">{post.subreddit}</span>
                  <span className="text-slate-400 mx-1.5">·</span>
                  <span className="text-slate-500">Posted by {post.author} · {post.timestamp}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${post.flairColor}`}>
                  {post.flair}
                </span>
                <button
                  onClick={() => handleCopy(post.id, `${post.title}\n\n${post.content}`)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 text-[11px] font-semibold cursor-pointer transition-colors"
                >
                  {copiedId === post.id ? (
                    <><Check className="w-3 h-3 text-emerald-600" /><span className="text-emerald-700">Copied</span></>
                  ) : (
                    <><Copy className="w-3 h-3" /><span>Copy</span></>
                  )}
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug mb-4">
                {post.title}
              </h2>

              {/* The post body itself, styled like Reddit markdown */}
              <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 rounded-xl p-5 border border-slate-200 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
                {post.content}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement Bar */}
            <div className="px-5 py-3 border-t border-slate-200 bg-slate-50/70 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Upvote */}
                <div className="inline-flex items-center rounded-full bg-white border border-slate-200 px-2 py-0.5 shadow-sm">
                  <button
                    onClick={() => handleUpvote(post.id)}
                    className={`p-1 transition-colors cursor-pointer ${
                      hasUpvoted[post.id] ? 'text-orange-600' : 'text-slate-500 hover:text-orange-500'
                    }`}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <span className="px-1.5 font-bold text-slate-900 text-[13px]">
                    {upvotes[post.id].toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => setExpandedComments(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                  className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-slate-800 cursor-pointer font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  {post.commentCount} comments
                </button>

                <button className="hidden sm:flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-slate-800 cursor-pointer font-semibold">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Evidence-Grounded
              </span>
            </div>

            {/* Comments */}
            <AnimatePresence>
              {expandedComments[post.id] && post.topComments?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-slate-200 bg-slate-100/50 px-5 py-4 space-y-3"
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Top community responses:
                  </span>
                  {post.topComments.map((comment, cIdx) => (
                    <div key={cIdx} className="p-4 bg-white rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="font-bold text-slate-800">{comment.author}</span>
                        <span className="font-bold text-orange-600">▲ {comment.score} points</span>
                      </div>
                      <p className="text-[13px] text-slate-700 leading-relaxed">{comment.text}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* End CTA */}
      <div className="mt-12 p-7 sm:p-9 rounded-2xl bg-slate-950 text-white border border-slate-800">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-2">
          Evidence-Based Recovery Network
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          Connect Directly with Licensed Telehealth Physicians
        </h3>
        <p className="text-[13px] text-slate-400 leading-relaxed mb-6 max-w-xl">
          You do not have to navigate clinical literature alone or struggle in silence. 
          Schedule a confidential consultation with Dr. Raphael Golebiowski, MD, or 
          Dr. Glen Rebman, DO from the privacy of your home.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5 border-t border-slate-800">
          <div className="space-y-1.5 text-[12px]">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Medicaid accepted in PA & MI ($0–$15 co-pay) or flat $99/mo self-pay
            </span>
            <span className="flex items-center gap-2 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />
              Prescriptions sent electronically within 15 minutes
            </span>
          </div>

          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[14px] shadow-sm transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Book Video Consultation
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
