/**
 * seoData.js
 * 
 * Complete per-article SEO metadata:
 * - Meta title (optimized, ≤60 chars)
 * - Meta description (optimized, ≤160 chars)
 * - Focus keywords (primary + semantic LSI)
 * - JSON-LD structured data (MedicalWebPage + Article + FAQPage schemas)
 * - Open Graph images
 * - Table of Contents section definitions
 */

// ─── Shared clinic entity ─────────────────────────────────────────────────────
const CLINIC_ORG = {
  "@type": "MedicalOrganization",
  "name": "Sunflower Clinic",
  "url": "https://sunflowerclinic.com",
  "logo": "https://sunflowerclinic.com/logo.png",
  "sameAs": [
    "https://www.instagram.com/sunflowersober/",
    "https://www.facebook.com/sunflowersober/",
    "https://www.linkedin.com/company/sunflower-sober/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "medicalSpecialty": "Addiction Medicine",
  "availableService": {
    "@type": "MedicalTherapy",
    "name": "Naltrexone Pharmacotherapy for Alcohol Use Disorder"
  }
};

const REVIEWER_1 = {
  "@type": "Physician",
  "name": "Dr. Raphael Golebiowski, MD",
  "medicalSpecialty": "Addiction Medicine",
  "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1891048291" },
  "worksFor": { "@type": "MedicalOrganization", "name": "Sunflower Clinic" }
};

const REVIEWER_2 = {
  "@type": "Physician",
  "name": "Dr. Glen Rebman, DO",
  "medicalSpecialty": "Addiction Psychiatry",
  "identifier": { "@type": "PropertyValue", "name": "NPI", "value": "1720194833" },
  "worksFor": { "@type": "MedicalOrganization", "name": "Sunflower Clinic" }
};

// ─── Article 1: Naltrexone Online ─────────────────────────────────────────────
export const META_ARTICLE_1 = {
  slug: '/resources/how-to-get-naltrexone-online-without-rehab',
  title: 'How to Get Naltrexone Online Without Rehab (2026 Guide) | Sunflower Clinic',
  description: "Get a same-day Naltrexone prescription online from a board-certified addiction physician. No inpatient rehab needed. Medicaid accepted in PA & MI. $99/mo self-pay.",
  keywords: [
    'naltrexone online prescription',
    'get naltrexone without rehab',
    'online naltrexone doctor',
    'naltrexone telehealth',
    'alcohol use disorder medication online',
    'buy naltrexone online',
    'naltrexone for alcohol cravings',
    'medication assisted treatment telehealth',
    'sinclair method online',
    'alcohol craving medication',
    'naltrexone 50mg online',
    'outpatient addiction treatment',
    'sunflower clinic naltrexone',
    'AUD treatment without rehab',
    'same day alcohol medication'
  ],
  author: 'Dr. Raphael Golebiowski, MD & Dr. Glen Rebman, DO',
  datePublished: '2026-10-01',
  dateModified: '2026-10-24',
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://sunflowerclinic.com/resources/how-to-get-naltrexone-online-without-rehab",
        "url": "https://sunflowerclinic.com/resources/how-to-get-naltrexone-online-without-rehab",
        "name": "How to Get Naltrexone Online Without Rehab (2026 Clinical Guide)",
        "headline": "How to Get Naltrexone Online Without Going to Rehab",
        "description": "You don't need a $30,000 inpatient rehab stay to stop alcohol cravings. Learn how to get an online Naltrexone prescription from a licensed physician.",
        "datePublished": "2026-10-01",
        "dateModified": "2026-10-24",
        "inLanguage": "en-US",
        "medicalAudience": { "@type": "Patient" },
        "lastReviewed": "2026-10-24",
        "reviewedBy": [REVIEWER_1, REVIEWER_2],
        "publisher": CLINIC_ORG,
        "about": {
          "@type": "MedicalCondition",
          "name": "Alcohol Use Disorder",
          "alternateName": ["AUD", "Alcoholism", "Alcohol Dependence"],
          "code": { "@type": "MedicalCode", "code": "F10.20", "codingSystem": "ICD-10-CM" },
          "possibleTreatment": [
            {
              "@type": "Drug",
              "name": "Naltrexone",
              "nonProprietaryName": "Naltrexone HCl 50mg",
              "activeIngredient": "Naltrexone Hydrochloride",
              "administrationRoute": "Oral tablet",
              "prescriptionStatus": "PrescriptionOnly",
              "legalStatus": "FDA Approved"
            },
            {
              "@type": "MedicalTherapy",
              "name": "The Sinclair Method (TSM)",
              "description": "Targeted Naltrexone dosing 60 minutes before alcohol consumption to achieve pharmacological extinction of cravings."
            },
            {
              "@type": "MedicalTherapy",
              "name": "Digital Cognitive Behavioral Therapy (CBT)"
            }
          ]
        },
        "mainEntity": {
          "@type": "MedicalStudy",
          "name": "JAMA COMBINE Trial (Anton et al., 2006)",
          "description": "1,383-patient landmark trial demonstrating 74% good clinical outcome with outpatient Naltrexone and medical management.",
          "studyLocation": "11 nationwide clinical sites",
          "citation": "JAMA. 2006;295(17):2003-2017. doi:10.1001/jama.295.17.2003"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is it legal to get Naltrexone prescribed online without visiting a physical clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under current federal telehealth guidelines, licensed state physicians can evaluate and prescribe Naltrexone via secure audio/video telehealth. Naltrexone is a non-controlled, non-addictive medication that does not carry the restrictive federal in-person prescribing requirements of Schedule II/III medications."
            }
          },
          {
            "@type": "Question",
            "name": "Does Naltrexone make you sick if you drink alcohol?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This is the most common misconception. Disulfiram (Antabuse) causes illness by blocking alcohol metabolism. Naltrexone is an opioid receptor antagonist—it does not interact with alcohol metabolism. You will not become sick; instead the compulsive urge to keep drinking is neurochemically extinguished."
            }
          },
          {
            "@type": "Question",
            "name": "Will Pennsylvania or Michigan Medicaid cover my telehealth visits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In Pennsylvania, we accept UPMC For You, Keystone First, AmeriHealth Caritas, and Geisinger Health Plan. In Michigan, we accept Blue Cross Complete, Meridian, McLaren, and Molina Healthcare. Medicaid patients typically pay $0–$15 co-pay for visits and generic Naltrexone."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunflowerclinic.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://sunflowerclinic.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "How to Get Naltrexone Online", "item": "https://sunflowerclinic.com/resources/how-to-get-naltrexone-online-without-rehab" }
        ]
      }
    ]
  },
  toc: [
    { id: 'toc-why-rehab-fails', label: 'Why Inpatient Rehab Fails Most People', level: 2 },
    { id: 'toc-how-naltrexone-works', label: 'How Naltrexone Works', level: 2 },
    { id: 'toc-jama-evidence', label: 'JAMA COMBINE Trial Evidence', level: 2 },
    { id: 'toc-pre-screen', label: 'Clinical Pre-Screening', level: 2 },
    { id: 'toc-3-steps', label: 'Getting Naltrexone: 3 Steps', level: 2 },
    { id: 'toc-faq', label: 'Frequently Asked Questions', level: 2 }
  ]
};

// ─── Article 2: PA & MI State Telehealth ─────────────────────────────────────
export const META_ARTICLE_2 = {
  slug: '/locations/online-addiction-therapy-medicaid-pa-mi',
  title: 'Online Naltrexone & Addiction Therapy in PA & MI — Medicaid Covered | Sunflower Clinic',
  description: "Licensed online addiction therapy and Naltrexone prescriptions in Pennsylvania & Michigan. Medicaid accepted (UPMC, Blue Cross Complete). Same-day video appointments.",
  keywords: [
    'online addiction therapy Pennsylvania',
    'addiction treatment Michigan Medicaid',
    'naltrexone Pennsylvania Medicaid',
    'naltrexone Michigan Medicaid',
    'UPMC For You addiction treatment',
    'Blue Cross Complete Michigan naltrexone',
    'telehealth substance abuse PA',
    'Keystone First addiction therapy',
    'alcohol treatment Medicaid Pennsylvania',
    'Meridian Health naltrexone Michigan',
    'online alcohol counseling Pennsylvania',
    'medication assisted treatment Michigan',
    'addiction medicine telehealth Pennsylvania',
    'AUD treatment Michigan',
    'Sunflower Clinic Pennsylvania Michigan'
  ],
  author: 'Sunflower Clinic Clinical Team',
  datePublished: '2026-10-01',
  dateModified: '2026-10-24',
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://sunflowerclinic.com/locations/online-addiction-therapy-medicaid-pa-mi",
        "url": "https://sunflowerclinic.com/locations/online-addiction-therapy-medicaid-pa-mi",
        "name": "Online Addiction Therapy & Naltrexone in Pennsylvania and Michigan",
        "description": "Licensed online addiction medicine covered by Medicaid in PA & MI. Same-day Naltrexone prescriptions from board-certified physicians.",
        "datePublished": "2026-10-01",
        "dateModified": "2026-10-24",
        "inLanguage": "en-US",
        "lastReviewed": "2026-10-24",
        "reviewedBy": [REVIEWER_1],
        "publisher": CLINIC_ORG,
        "about": [
          { "@type": "State", "name": "Pennsylvania" },
          { "@type": "State", "name": "Michigan" }
        ],
        "specialty": "Addiction Medicine"
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://sunflowerclinic.com/#organization",
        "name": "Sunflower Clinic",
        "url": "https://sunflowerclinic.com",
        "areaServed": [
          { "@type": "State", "name": "Pennsylvania" },
          { "@type": "State", "name": "Michigan" },
          { "@type": "State", "name": "Ohio" },
          { "@type": "State", "name": "New York" },
          { "@type": "State", "name": "New Jersey" },
          { "@type": "State", "name": "California" },
          { "@type": "State", "name": "Florida" },
          { "@type": "State", "name": "Texas" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Telehealth Addiction Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Naltrexone Telehealth (Medicaid)",
              "price": "0",
              "priceCurrency": "USD",
              "eligibleCustomerType": "Medicaid Enrollee in PA or MI",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Naltrexone Telehealth (Self-Pay)",
              "price": "99",
              "priceCurrency": "USD",
              "billingPeriod": "P1M",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunflowerclinic.com" },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://sunflowerclinic.com/locations" },
          { "@type": "ListItem", "position": 3, "name": "PA & MI Telehealth Coverage", "item": "https://sunflowerclinic.com/locations/online-addiction-therapy-medicaid-pa-mi" }
        ]
      }
    ]
  },
  toc: [
    { id: 'toc-access-problem', label: 'The Access Problem in Addiction Care', level: 2 },
    { id: 'toc-telehealth-evidence', label: 'Telehealth Evidence (JAMA)', level: 2 },
    { id: 'toc-insurance-checker', label: 'Verify Your Medicaid Plan', level: 2 },
    { id: 'toc-care-team', label: 'Your Licensed Care Team', level: 2 },
    { id: 'toc-pricing', label: 'Coverage & Transparent Pricing', level: 2 }
  ]
};

// ─── Article 3: Sinclair Method / TSM ─────────────────────────────────────────
export const META_ARTICLE_3 = {
  slug: '/medications/naltrexone/sinclair-method-telehealth-guide',
  title: 'The Sinclair Method (TSM) vs Daily Naltrexone: 2026 Clinical Guide | Sunflower Clinic',
  description: "Complete clinical comparison of The Sinclair Method (TSM) vs daily Naltrexone. 78% extinction rate. Board-certified telehealth prescriptions same day. Medicaid accepted.",
  keywords: [
    'sinclair method naltrexone',
    'TSM alcohol treatment',
    'targeted sinclair method',
    'naltrexone before drinking',
    'pharmacological extinction alcohol',
    'sinclair method telehealth',
    'daily naltrexone vs TSM',
    'naltrexone 60 minutes before drinking',
    'Dr John David Sinclair',
    'harm reduction naltrexone',
    'sinclair method online prescription',
    'TSM protocol online',
    'alcohol extinction therapy',
    'sinclair method results',
    'pharmacotherapy alcohol use disorder'
  ],
  author: 'Dr. Raphael Golebiowski, MD & Dr. Glen Rebman, DO',
  datePublished: '2026-10-01',
  dateModified: '2026-10-24',
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://sunflowerclinic.com/medications/naltrexone/sinclair-method-telehealth-guide",
        "url": "https://sunflowerclinic.com/medications/naltrexone/sinclair-method-telehealth-guide",
        "name": "The Sinclair Method (TSM) vs. Daily Naltrexone: Clinical Comparison",
        "description": "Clinical comparison of The Sinclair Method and daily Naltrexone for alcohol use disorder. Evidence-based pharmacotherapy guide.",
        "datePublished": "2026-10-01",
        "dateModified": "2026-10-24",
        "inLanguage": "en-US",
        "lastReviewed": "2026-10-24",
        "reviewedBy": [REVIEWER_1, REVIEWER_2],
        "publisher": CLINIC_ORG,
        "about": {
          "@type": "MedicalTherapy",
          "name": "The Sinclair Method (TSM)",
          "alternateName": "Targeted Naltrexone Therapy",
          "description": "A pharmacological extinction protocol in which 50mg Naltrexone is taken exactly 60 minutes before alcohol consumption to systematically unlearn alcohol dependence through Pavlovian extinction.",
          "study": {
            "@type": "MedicalStudy",
            "name": "Sinclair Extinction Trials",
            "description": "78% extinction rate across international patient cohorts over 3–6 months of targeted protocol adherence.",
            "citation": "Sinclair, J.D. Alcohol and Alcoholism. 2001;36(1):2-11."
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunflowerclinic.com" },
          { "@type": "ListItem", "position": 2, "name": "Medications", "item": "https://sunflowerclinic.com/medications" },
          { "@type": "ListItem", "position": 3, "name": "Naltrexone", "item": "https://sunflowerclinic.com/medications/naltrexone" },
          { "@type": "ListItem", "position": 4, "name": "Sinclair Method Guide", "item": "https://sunflowerclinic.com/medications/naltrexone/sinclair-method-telehealth-guide" }
        ]
      }
    ]
  },
  toc: [
    { id: 'toc-how-extinction-works', label: 'How Pharmacological Extinction Works', level: 2 },
    { id: 'toc-sinclair-study', label: 'Sinclair Trial Evidence', level: 2 },
    { id: 'toc-comparison-table', label: 'Daily vs TSM Comparison', level: 2 },
    { id: 'toc-protocol-matcher', label: 'Protocol Matcher', level: 2 },
    { id: 'toc-treatment-stack', label: 'Full Treatment Stack', level: 2 }
  ]
};

// ─── Article 4: Community / Reddit Hub ───────────────────────────────────────
export const META_ARTICLE_4 = {
  slug: '/community/clinical-publications',
  title: 'Clinical Community Publications: Evidence-Based Recovery on Reddit | Sunflower Clinic',
  description: "Sunflower Clinic's evidence-based educational posts on r/Alcoholism_Medication, r/stopdrinking, and r/dryalcoholics. Clinical citations, JAMA evidence, and harm reduction guidance.",
  keywords: [
    'naltrexone reddit',
    'r/alcoholism_medication naltrexone',
    'r/stopdrinking naltrexone',
    'sinclair method reddit',
    'alcohol harm reduction reddit',
    'relapse neurochemistry',
    'reddit alcohol use disorder',
    'telehealth naltrexone community',
    'dryalcoholics harm reduction',
    'pharmacological extinction reddit',
    'sunflower clinic reddit',
    'JAMA COMBINE reddit',
    'delta-FosB addiction',
    'AUD treatment gap',
    'naltrexone experience reddit'
  ],
  author: 'Sunflower Clinic Behavioral Health Team',
  datePublished: '2026-10-01',
  dateModified: '2026-10-24',
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sunflowerclinic.com/community/clinical-publications",
        "url": "https://sunflowerclinic.com/community/clinical-publications",
        "name": "Clinical Community Publications: Evidence-Based Recovery on Reddit",
        "description": "Educational outreach from Sunflower Clinic published across peer recovery communities.",
        "publisher": CLINIC_ORG,
        "dateModified": "2026-10-24",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunflowerclinic.com" },
          { "@type": "ListItem", "position": 2, "name": "Community", "item": "https://sunflowerclinic.com/community" },
          { "@type": "ListItem", "position": 3, "name": "Clinical Publications", "item": "https://sunflowerclinic.com/community/clinical-publications" }
        ]
      }
    ]
  },
  toc: [
    { id: 'toc-why-reddit', label: 'Why Peer Forums Matter', level: 2 },
    { id: 'toc-post-1', label: 'Post 1: JAMA COMBINE Data Breakdown', level: 2 },
    { id: 'toc-post-2', label: 'Post 2: Reframing Relapse', level: 2 },
    { id: 'toc-post-3', label: 'Post 3: The 90% Treatment Gap', level: 2 }
  ]
};
