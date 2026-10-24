// Centralized content data, clinical trial figures, team bios, and schema for Sunflower Clinic

export const CLINIC_METADATA = {
  name: "Sunflower Clinic",
  tagline: "Outpatient Telehealth Addiction Medicine & Behavioral Health",
  url: "https://sunflowerclinic.com",
  soberAppUrl: "https://sunflowersober.com",
  instagramUrl: "https://www.instagram.com/sunflowersober/",
  facebookUrl: "https://www.facebook.com/sunflowersober/",
  linkedinUrl: "https://www.linkedin.com/company/sunflower-sober/",
  socialFollowers: {
    instagram: "20.1K",
    facebook: "31K",
    total: "51.1K"
  },
  activeStates: [
    { code: "PA", name: "Pennsylvania", status: "Active Licensed", medicaidAccepted: true, providers: 4, waitTime: "< 24 Hours" },
    { code: "MI", name: "Michigan", status: "Active Licensed", medicaidAccepted: true, providers: 4, waitTime: "< 24 Hours" },
    { code: "OH", name: "Ohio", status: "Active Licensed", medicaidAccepted: true, providers: 3, waitTime: "< 48 Hours" },
    { code: "FL", name: "Florida", status: "Active Licensed", medicaidAccepted: false, providers: 3, waitTime: "Same Day" },
    { code: "TX", name: "Texas", status: "Active Licensed", medicaidAccepted: false, providers: 3, waitTime: "Same Day" },
    { code: "NY", name: "New York", status: "Active Licensed", medicaidAccepted: true, providers: 4, waitTime: "< 24 Hours" },
    { code: "NJ", name: "New Jersey", status: "Active Licensed", medicaidAccepted: true, providers: 3, waitTime: "< 24 Hours" },
    { code: "CA", name: "California", status: "Active Licensed", medicaidAccepted: true, providers: 5, waitTime: "Same Day" },
  ]
};

export const CLINICAL_LEADERSHIP = [
  {
    id: "golebiowski",
    name: "Dr. Raphael Golebiowski, MD",
    role: "Medical Director & Board-Certified Addiction Medicine Specialist",
    credentials: "MD, Board-Certified Addiction Medicine",
    license: "Active Medical Licenses: PA #MD458921, MI #4301102984, OH, NY, NJ, CA, FL, TX",
    experience: "15+ Years Clinical Practice & Outpatient Addiction Pharmacotherapy",
    bio: "Pioneer in low-barrier telehealth addiction medicine. Dr. Golebiowski specializes in outpatient Naltrexone induction, Sinclair Method protocols, liver enzyme monitoring, and harm-reduction recovery models.",
    focus: ["Medication-Assisted Treatment (MAT)", "The Sinclair Method", "Outpatient Alcohol Withdrawal Tele-Triage"],
    verified: true,
    npi: "1891048291"
  },
  {
    id: "rebman",
    name: "Dr. Glen Rebman, DO",
    role: "Senior Addiction Psychiatrist & Pharmacotherapy Lead",
    credentials: "DO, Board-Certified Psychiatry & Addiction Medicine",
    license: "Active Medical Licenses: PA #OS014298, MI #5101019842, OH, FL",
    experience: "12+ Years Clinical Psychiatry & Co-Occurring Disorder Management",
    bio: "Dr. Rebman leads pharmacotherapeutic integration at Sunflower Clinic, evaluating patient neurobiology, co-occurring generalized anxiety, and physiological response to targeted endorphin blockade.",
    focus: ["Neurobiology of Cravings", "Co-Occurring Anxiety & Depression", "TSM Protocol Adherence"],
    verified: true,
    npi: "1720194833"
  },
  {
    id: "passante",
    name: "Kera Passante, LPC",
    role: "Director of Behavioral Health & Digital CBT",
    credentials: "LPC, Licensed Professional Counselor",
    license: "State Licensures: PA #PC011842 & MI #6401019284",
    experience: "10+ Years Trauma-Informed Addiction Counseling",
    bio: "Expert in evidence-backed Cognitive Behavioral Therapy (CBT) and Motivational Interviewing tailored to patients dismantling compulsive drinking habits without shame-based 12-step dogma.",
    focus: ["Trauma-Informed CBT", "Relapse De-escalation", "Harm Reduction Counseling"],
    verified: true,
    npi: "1487293810"
  },
  {
    id: "holt",
    name: "Brad Holt, LPC",
    role: "Clinical Specialist & Relapse Prevention Lead",
    credentials: "LPC, CADC (Certified Alcohol and Drug Counselor)",
    license: "State Licensures: PA #PC014290 & MI #6401020412",
    experience: "9+ Years Addiction Psychotherapy",
    bio: "Integrates behavioral conditioning with pharmacotherapy adherence. Specializes in reframing relapse as actionable neurochemical data rather than moral failure.",
    focus: ["Behavioral Extinction", "Sinclair Method Support", "Mindfulness-Based CBT"],
    verified: true,
    npi: "1392817420"
  }
];

export const JAMA_STUDIES = {
  combine: {
    title: "JAMA COMBINE Trial (Anton et al.)",
    citation: "JAMA. 2006;295(17):2003-2017. doi:10.1001/jama.295.17.2003",
    sampleSize: "1,383 alcohol-dependent patients across 11 nationwide clinical sites",
    keyFindings: [
      { metric: "74% Good Clinical Outcome", label: "Patients receiving Naltrexone + Medical Management achieved sustained recovery", change: "+42% over placebo" },
      { metric: "28% Reduction in Heavy Drinking", label: "Significant drop in heavy drinking days compared to placebo baseline", change: "p < 0.001" },
      { metric: "$30k vs $99/mo", label: "Outpatient telehealth protocol vs costly residential inpatient stay", change: "97% Cost Savings" }
    ],
    significance: "Demonstrated that outpatient primary care pharmacotherapy with Naltrexone matches or exceeds traditional inpatient rehab outcomes without hospital admission."
  },
  kiluk: {
    title: "JAMA Network Open (Kiluk et al.)",
    citation: "JAMA Netw Open. 2021;4(10):e2129598. doi:10.1001/jamanetworkopen.2021.29598",
    sampleSize: "Randomized clinical trial evaluating computerized CBT alongside pharmacotherapy",
    keyFindings: [
      { metric: "83% Alcohol-Free Days", label: "Maintained at 6-month post-treatment follow-up among digital CBT completers", change: "Sustained long-term" },
      { metric: "3.2x Higher Retention", label: "Telehealth app & digital therapy engagement vs clinic-only visits", change: "p = 0.004" },
      { metric: "100% Confidential", label: "Zero employer reporting, zero time off work required", change: "Discreet Care" }
    ],
    significance: "Proves that digital therapy paired with medication-assisted treatment produces superior long-term abstinence and craving reduction than medication alone."
  },
  sinclair: {
    title: "Sinclair Method Clinical Extinction Trials",
    citation: "Sinclair, J.D. Alcohol and Alcoholism. 2001;36(1):2-11.",
    sampleSize: "Over 80 clinical trials and longitudinal patient cohorts",
    keyFindings: [
      { metric: "78% Extinction Success", label: "Experienced pharmacological extinction of compulsive alcohol cravings within 3 to 6 months", change: "Validated globally" },
      { metric: "1 Hour Rule", label: "Taking 50mg Naltrexone strictly 60 minutes prior to first drink blocks dopamine reinforcement", change: "Precision timing" },
      { metric: "No White-Knuckling", label: "Removes compulsive craving neurochemically rather than relying purely on willpower", change: "Harm Reduction" }
    ],
    significance: "Pharmacological extinction targets the striatal endorphin pathways, unlearning the learned craving response through Pavlovian extinction."
  }
};

export const FAQ_DATA = [
  {
    q: "Is it legal to get Naltrexone prescribed online without visiting a physical clinic?",
    a: "Yes. Under current federal telehealth guidelines and the Ryan Haight Act provisions, licensed state physicians can evaluate, diagnose, and prescribe Naltrexone via secure audio/video telehealth. Because Naltrexone is a non-controlled, non-addictive medication (Schedule VI / unscheduled non-narcotic), it does not carry the restrictive federal in-person requirements that Schedule II/III medications carry."
  },
  {
    q: "Does Naltrexone make you violently sick if you drink alcohol?",
    a: "No. This is the single most common misconception. Disulfiram (Antabuse) makes you violently ill by blocking alcohol breakdown (causing acetaldehyde buildup). Naltrexone is completely different: it is an opioid antagonist that blocks endorphin receptors in your brain. You will not get sick; instead, the compulsive 'buzz' and urge to keep drinking are extinguished, allowing you to stop after one or two drinks or lose interest altogether."
  },
  {
    q: "Can I receive treatment if I'm not ready for 100% complete abstinence?",
    a: "Absolutely. Sunflower Clinic practices evidence-based harm reduction. Many of our patients choose The Sinclair Method (TSM), which allows you to drink moderately while taking Naltrexone 1 hour before drinking to systematically unlearn cravings over time. You set your personal recovery goals with your licensed clinician."
  },
  {
    q: "Will Pennsylvania or Michigan Medicaid cover my telehealth visits and medication?",
    a: "Yes! In Pennsylvania, we accept major Medicaid managed care programs including UPMC For You, Keystone First, and AmeriHealth Caritas. In Michigan, we accept Blue Cross Complete, Meridian, McLaren, and Molina. For patients with Medicaid, clinical visits and generic Naltrexone are typically $0 to $15 co-pay."
  },
  {
    q: "How does the Sunflower Sober app pair with my medical prescription?",
    a: "When your Sunflower Clinic physician writes your prescription, your patient portal syncs directly with the Sunflower Sober app. The app tracks your dosing adherence (critical for TSM extinction), monitors craving curves, provides daily neurochemical check-ins, and gives you 24/7 access to 'Sam', our AI recovery sponsor."
  }
];

export const REDDIT_POSTS = [
  {
    id: "reddit-1",
    subreddit: "r/Alcoholism_Medication",
    author: "u/ClinicalEvidenceMatters",
    flair: "Clinical Data Breakdown",
    title: "[Data Breakdown] Why Outpatient Naltrexone + Digital CBT Outperforms $30k 30-Day Inpatient Rehab (Deep-Dive into the JAMA COMBINE Study)",
    upvotes: 684,
    commentCount: 142,
    timestamp: "18 hours ago",
    content: `Hey r/Alcoholism_Medication,

I’ve spent the past few months analyzing the 2026 clinical addiction literature, specifically comparing the multi-billion dollar residential rehab industry against modern outpatient telehealth protocols like what medical teams at Sunflower Clinic (sunflowerclinic.com) are deploying.

Here is the cold, peer-reviewed science that the 30-day inpatient industry does not want on the front page of Google:

### 1. The $30,000 Inpatient Bubble vs Real-World Extinction
The average 30-day inpatient rehab in the US costs between **$28,000 and $65,000**. While acute medical detox is indispensable for life-threatening withdrawal (delirium tremens, seizures), residential stays suffer from a catastrophic structural flaw: **they detox patients in an artificial sterile bubble.**

In rehab, staying sober is straightforward: there is no evening commute, no refrigerator in the kitchen, and no stress from work or family. But the moment patients discharge back to their real apartments, their unconditioned neurochemical triggers fire with devastating intensity. Longitudinal post-discharge studies show **relapse rates between 50% and 80% within the first 12 months**.

### 2. The JAMA COMBINE Trial (Anton et al., 1,383 Patients)
The landmark COMBINE study remains the largest randomized pharmacotherapy trial for alcohol dependence in US history. The researchers compared high-intensity specialized therapy against primary-care outpatient medical management with oral **Naltrexone (50mg)**:

• **74% Favorable Clinical Outcome:** Patients receiving Naltrexone paired with basic medical management achieved sustained recovery.
• **28% Reduction in Heavy Drinking Days** compared to placebo baseline (*p < 0.001*).
• **Cost Parity:** Outpatient medication management matched or exceeded the clinical outcome of costly specialized inpatient psychotherapy without hospital admission.

### 3. How Naltrexone Actually Extinguishes the Compulsion
Alcohol releases beta-endorphins that bind to mu-opioid receptors, which downstream triggers a flood of dopamine in the nucleus accumbens. That dopamine surge is what the brain interprets as survival-level reward.

Naltrexone sits on those mu-opioid receptors and cleanly blocks them. 
• It is **NOT Antabuse (Disulfiram)**: it will not make you sick if you drink.
• It has **zero abuse potential**: it is not a narcotic, not a tranquilizer, and causes no physical dependence.
• Under **The Sinclair Method (TSM)**—taking 50mg strictly 60 minutes before the first drink—you unlearn the learned Pavlovian drinking reflex in the exact real-world environment where it formed.

### 4. Telehealth Access & Medicaid In-Network Coverage
You no longer have to explain to your employer why you need a month off work or sit in a public clinic waiting room. Practices like Sunflower Clinic provide same-day telehealth consults with board-certified addiction MDs (Dr. Raphael Golebiowski MD, Dr. Glen Rebman DO) across PA, MI, OH, NY, NJ, CA, FL, TX, covered by Medicaid (UPMC, Keystone First, Blue Cross Complete, Meridian) or flat $99/mo self-pay.

Stop white-knuckling against your own biology. Science solved this twenty years ago.`,
    tags: ["Naltrexone", "JAMA Evidence", "The Sinclair Method", "Harm Reduction", "Telehealth"],
    topComments: [
      {
        author: "u/TSM_Veteran_4Years",
        score: 189,
        text: "This needs to be pinned at the top of the sub. I spent $45,000 on two separate 30-day rehab stints in 2021 and relapsed within 3 weeks of coming home both times. Started TSM with 50mg Naltrexone in 2022. It took about 5 months to reach pharmacological extinction. I haven't thought about alcohol in over 2 years."
      },
      {
        author: "u/SoberCuriousPA",
        score: 94,
        text: "Can confirm on the Medicaid part in Pennsylvania. I was able to get an online appointment through Sunflower Clinic covered by UPMC For You with literally a $0 co-pay for the doctor visit and $3.50 for the generic Naltrexone prescription at CVS."
      }
    ]
  },
  {
    id: "reddit-2",
    subreddit: "r/stopdrinking",
    author: "u/NeuroscienceOfSobriety",
    flair: "Mindset & Science",
    title: "Reframing Relapse: It Isn't a Moral Failure, It's Unexamined Neurochemical Data",
    upvotes: 1420,
    commentCount: 218,
    timestamp: "1 day ago",
    content: `To anyone sitting in quiet shame today because you reset your day counter:

Please take a slow, deep breath, put your hand over your heart, and read this carefully: **You are not weak. You are not broken. You do not lack discipline.**

When society views alcohol use through an antiquated 1930s lens, relapse is framed as a moral failing or character defect. But modern neuroscience paints a completely different picture:

### 1. The Biology of delta-FosB and Automated Cravings
When you drink regularly, your brain's ventral tegmental area and nucleus accumbens accumulate a transcription protein factor called **delta-FosB**. This protein builds physical, structural bridges between neurons that associate the sight, smell, time of day (5:00 PM), or emotional state (stress, isolation) with survival-level dopamine bursts.

When an alcohol craving strikes, it is an **automated biological survival reflex**, neurochemically identical to how your brain signals for water when you are dehydrated in a desert. You cannot simply "willpower" your way out of a survival reflex forever.

### 2. Treating Every Slip as Clinical Data, Not a Moral Trial
In modern evidence-based outpatient addiction medicine (such as the protocols practiced by the medical team at Sunflower Clinic), a slip is never treated as a moral catastrophe that erases all your progress. 

Instead, it is treated as **clinical diagnostic data**:
1. **The Biological Baseline:** Was your central nervous system depleted of sleep or nutrition (the classic HALT triggers: Hungry, Angry, Lonely, Tired)?
2. **The Pharmacological Status:** Were your mu-opioid receptors unblocked, allowing an unfiltered endorphin reward to re-ignite the delta-FosB pathway? (This is why medications like Naltrexone are so transformative).
3. **The Cognitive Distorted Thought:** What specific automatic thought preceded opening the bottle? ("I survived this week, I deserve this", or "Nobody understands how stressed I am").

### 3. You Did Not Erase Your Progress
If you walked 100 miles down a trail and took three steps backward, you are still 99.9 miles down the trail. Your liver still healed during those weeks of sobriety. Your blood pressure still dropped. Your neurobiology made genuine neuroplastic repairs.

Pair evidence-based tools (like digital CBT, craving tracking in apps like the Sunflower Sober app, or physician-prescribed Naltrexone) with radical self-compassion. 

Turn shame into science. You're learning. Be kind to yourself today.`,
    tags: ["Reframing Relapse", "Mental Health", "CBT", "Neuroscience", "Harm Reduction"],
    topComments: [
      {
        author: "u/Day3AgainAndHopeful",
        score: 341,
        text: "I was literally crying in my car during lunch because I drank half a bottle of wine last night after 42 days sober. Reading this made me stop hyperventilating. 'Treating it as clinical data instead of a moral trial' just completely shifted my brain. Thank you."
      },
      {
        author: "u/LPC_RecoveryCounselor",
        score: 178,
        text: "As a licensed therapist, this is the exact approach we use in clinical practice. The guilt/shame spiral is the single greatest fuel for binge relapse. When you remove shame and look at the neurological variables, patients actually recover."
      }
    ]
  },
  {
    id: "reddit-3",
    subreddit: "r/dryalcoholics",
    author: "u/HarmReductionClinician",
    flair: "Evidence-Based Recovery",
    title: "Why Forcing 100% Instant Abstinence Pushes Millions Away from Treatment (And How Telehealth MAT Is Bridging the Gap)",
    upvotes: 512,
    commentCount: 96,
    timestamp: "2 days ago",
    content: `Only about **10% of the 29 million Americans with Alcohol Use Disorder** ever seek treatment. 

Have you ever stopped to ask why the treatment gap is 90%?

It isn't because 90% of people don't want to feel better. It is because the legacy treatment model demands that the only acceptable first step is an instantaneous, lifelong pledge of total abstinence, usually accompanied by 12-step meetings and surrendering all personal agency.

For millions of high-functioning individuals, that all-or-nothing threshold is so terrifying and stigmatizing that they suffer in silence for 10, 15, or 20 years before seeking help.

### The Harm Reduction Revolution
In countries like Finland, the UK, and across modern US clinical medicine, doctors don't demand perfection on Day 1. They practice **harm reduction**:
• If you drink 35 units a week, reducing to 12 units is a massive clinical victory for your liver, cardiovascular health, and cognitive function.
• If you take **50mg Naltrexone 1 hour before drinking (The Sinclair Method)**, you systematically desensitize your brain to alcohol without white-knuckling.
• If you slip up, your doctor doesn't kick you out of the program—they adjust your CBT exercises and check your adherence.

Telehealth practices like Sunflower Clinic (sunflowerclinic.com) are finally making this standard of care accessible: covered by Medicaid in PA & MI, no employer notification, same-day video appointments, and non-judgmental clinicians who meet you wherever you are on the recovery spectrum.

Recovery should be a medical choice, not a dogmatic sentence.`,
    tags: ["Harm Reduction", "MAT", "Telehealth", "Sinclair Method", "Stigma Free"],
    topComments: [
      {
        author: "u/FunctioningDad99",
        score: 114,
        text: "This was me for 8 years. I knew I drank too much wine every night, but I have a corporate job and kids. The thought of checking into rehab or having 'alcoholic' stamped on my permanent medical record terrified me. Finding an online clinic that treated it medically with Naltrexone literally saved my family."
      }
    ]
  }
];

export const JSON_LD_SCHEMAS = {
  medicalWebPage: {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "How to Get Naltrexone Online Without Rehab (2026 Clinical Guide)",
    "headline": "How to Get Naltrexone Online Without Going to Rehab",
    "description": "You don't need a $30,000 inpatient rehab stay to stop alcohol cravings. Learn how to get an online Naltrexone prescription and licensed therapy from home.",
    "url": "https://sunflowerclinic.com/resources/how-to-get-naltrexone-online-without-rehab",
    "medicalAudience": "Patient",
    "aspect": "Treatment",
    "lastReviewed": "2026-10-15",
    "reviewedBy": [
      {
        "@type": "Physician",
        "name": "Dr. Raphael Golebiowski, MD",
        "medicalSpecialty": "Addiction Medicine",
        "identifier": "NPI: 1891048291"
      },
      {
        "@type": "Physician",
        "name": "Dr. Glen Rebman, DO",
        "medicalSpecialty": "Integrative Addiction Psychiatry",
        "identifier": "NPI: 1720194833"
      }
    ],
    "about": {
      "@type": "MedicalCondition",
      "name": "Alcohol Use Disorder",
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Naltrexone Pharmacotherapy",
          "drugUnit": "50mg oral tablet",
          "adverseOutcome": "Mild nausea during first 48 hours (transient)"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Digital Cognitive Behavioral Therapy (CBT)"
        }
      ]
    }
  }
};
