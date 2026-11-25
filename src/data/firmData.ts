export interface Associate {
  id: string;
  name: string;
  title: string;
  court: string;
  experience?: string;
  specialty?: string;
  summary: string;
  practiceAreas: string[];
  publicRoles?: string[];
  reportedCases?: boolean;
  office?: string;
  featured?: boolean;
}

export interface PracticeArea {
  id: string;
  name: string;
  category: "Constitutional & Administrative" | "Land & Revenue" | "Corporate & Commercial" | "Intellectual Property" | "Litigation & Dispute Resolution" | "Energy & Infrastructure";
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  icon: string;
}

export interface Sector {
  title: string;
  description: string;
  entities: string;
  icon: string;
}

export const FIRM_DETAILS = {
  name: "Mian Mohammad Hanif Law Associates",
  shortName: "Hanif Law Associates",
  establishedYear: 1996,
  experienceYears: "28+",
  motto: "Fighting for our Clients is our greatest reward.",
  tagline: "Combined Legal, Financial and Technical Advocacy",
  intro: `Mian Mohammad Hanif Law Associates has its traces in 1996. We provide services, through our multidisciplinary team, from general litigation to regulatory issues and dispute resolutions; solicitation to counseling and consultancies; and drafting of contracts and laws to our valued clients comprising of individuals, companies, associations, and innovative sectors like revenue, energy, power, financial, banking, corporate, commercial, labour, service, media, telecommunication, tax and procurements.`,
  mission: `Our resolve is to be amongst the top professional legal organizations in Pakistan which have combined legal, financial, and technical credentials. We continue to strive for excellence, developing long-lasting relationships with our clients based on trust, mutual respect, and a protective team of advocates.`,
  stats: [
    { label: "Established", value: "1996" },
    { label: "Years of Excellence", value: "28+" },
    { label: "Reported Judgments", value: "Law Journals" },
    { label: "Core Practice Areas", value: "22+" },
    { label: "Advocates & Counsel", value: "8 Senior Team Members" },
  ],
  contacts: {
    phone: "+92 42 37350000",
    phoneSecondary: "+92 300 0000000",
    email: "contact@haniflawassociates.com",
    consultationEmail: "counsel@haniflawassociates.com",
    whatsapp: "+923000000000",
    principalOffice: "Principal Chambers, Lahore, Punjab, Pakistan",
    sheikhupuraOffice: "District Courts Complex, Sheikhupura, Punjab, Pakistan",
    timing: "Monday – Saturday: 9:00 AM – 7:00 PM (PKT)",
  },
};

export const ASSOCIATES: Associate[] = [
  {
    id: "mian-mohammad-hanif",
    name: "Mian Mohammad Hanif",
    title: "Senior Associate & Founder",
    court: "Senior Advocate",
    experience: "28+ Years",
    specialty: "Civil Laws & High-Stakes Litigation",
    summary:
      "Being senior associate and founder of this association, Mian Mohammad Hanif brings over 28 years of distinguished courtroom experience. Specializing in Civil Laws, he has represented leading entities across semi-government, government, and private sectors including major commercial banks, industry associations, and multinational corporations. Several milestone cases conducted by him have been reported in leading Law Journals upon judicial directions.",
    practiceAreas: ["Civil Laws", "Property & Real Estate", "Contract Law", "Corporate & Commercial", "Banking"],
    reportedCases: true,
    featured: true,
  },
  {
    id: "zubair-afzal-rana",
    name: "Zubair Afzal Rana",
    title: "Advocate Supreme Court",
    court: "Supreme Court of Pakistan",
    experience: "Senior Counsel",
    specialty: "Criminal, Banking, Labour & Constitutional Law",
    summary:
      "Advocate Supreme Court of Pakistan handling a wide range of complex Criminal, Banking, Labour, Tax, and Constitutional cases before the apex court and High Courts. He holds extensive expertise in drafting sophisticated cross-border agreements, master contracts, and rendering high-level legal opinions as in-house and advisory counsel. Multiple landmark cases argued by him have been officially reported in Pakistan's Law Journals.",
    practiceAreas: ["Constitutional Law", "Criminal Law", "Banking", "Labour & Service", "Taxation", "Agreements & Contracts"],
    reportedCases: true,
    featured: true,
  },
  {
    id: "aqsa-hanif-mian",
    name: "Aqsa Hanif Mian",
    title: "Advocate High Court",
    court: "High Court of Pakistan",
    specialty: "IP, Competition, Regulatory & Telecom",
    summary:
      "Advocate High Court conducting high-impact legal proceedings and regulatory counsel related to Insurance, Trademarks, Copyrights, Competition Law, Commercial Contracts & Disputes, Labour & Service Laws, Local Government, Regulatory bodies, Power Sector, and Telecommunications.",
    practiceAreas: ["Trademark", "Copyright", "Insurance", "Competition Law", "Contracts & Disputes", "Regulatory Law", "Telecommunication", "Labour & Service"],
  },
  {
    id: "mian-mohammad-osama-hanif",
    name: "Mian Mohammad Osama Hanif",
    title: "Advocate High Court",
    court: "High Court of Pakistan",
    specialty: "Settlement, Revenue, Power & Corporate Counsel",
    publicRoles: [
      "Legal Counsel for Settlement & Rehabilitation, Board of Revenue Punjab (BOR)",
      "Legal Counsel for Lahore Electric Supply Company (LESCO)",
    ],
    summary:
      "Advocate High Court serving as standing Legal Counsel for the Settlement & Rehabilitation Wing, Board of Revenue Punjab (BOR) and Lahore Electric Supply Company (LESCO). He regularly represents BOR and LESCO before various judicial, tribunal, and regulatory forums on strategic matters. Earned deep experience across General Civil, Advertisement & Media, Banking, Corporate & Commercial Tax, Consumer Protection, Competition, Contracts, Labour, Local Government, Regulatory, Power, and Telecommunications.",
    practiceAreas: ["Land Revenue Laws", "Settlement & Rehabilitation", "Power Sector", "Corporate & Commercial", "Banking & Tax", "Consumer Protection", "Media & Telecom"],
    featured: true,
  },
  {
    id: "rana-mohsin-rabbani",
    name: "Rana Mohsin Rabbani",
    title: "Advocate High Court & Legal Advisor to Govt of Pakistan",
    court: "High Court of Pakistan",
    specialty: "Govt Advisory, IP, Regulatory & Corporate",
    publicRoles: [
      "Legal Advisor to the Government of Pakistan (Ministry of Law, Justice & Human Rights)",
      "Legal Counsel for Punjab Small Industries Corporation (PSIC)",
    ],
    summary:
      "Advocate High Court with notable government appointments including Legal Advisor of the Government of Pakistan duly appointed by the Ministry of Law, Justice and Human Rights, and Legal Counsel for Punjab Small Industries Corporation. He represents corporate and state clients in Insurance, Trademarks, Copyright, Competition, Contractual Disputes, Labour & Service, Local Government, Power Sector, and Telecommunications.",
    practiceAreas: ["Government Advisory", "Trademark & Copyright", "Competition Law", "Regulatory", "Power Sector", "Labour & Service", "Telecommunication"],
    featured: true,
  },
  {
    id: "mian-swad-hanif",
    name: "Mian Swad Hanif",
    title: "Advocate High Court",
    court: "High Court of Pakistan",
    specialty: "Land Revenue, Housing Authorities, Power & Commercial",
    publicRoles: [
      "Legal Counsel for Settlement & Rehabilitation, Board of Revenue Punjab (BOR)",
      "Legal Counsel for Federal Government Employees Housing Authority (FGEHA)",
      "Legal Counsel for Lahore Electric Supply Company (LESCO)",
    ],
    summary:
      "Advocate High Court with specialized focus on state regulatory bodies and statutory authorities. Serving as Legal Counsel for the Settlement & Rehabilitation Wing of the Board of Revenue Punjab (BOR), the Federal Government Employees Housing Authority (FGEHA - Government of Pakistan), and LESCO. Earned distinguished exposure in General Civil, Media, Commercial & Corporate Tax, Competition, Labour, Power, and Local Government affairs.",
    practiceAreas: ["Land Revenue & Colonization", "Settlement & Rehabilitation", "Housing Authorities (FGEHA)", "Power Sector (LESCO)", "Corporate Tax", "Consumer Protection"],
    featured: true,
  },
  {
    id: "zunnurain-ahmad",
    name: "Zunnurain Ahmad",
    title: "Advocate High Court",
    court: "High Court of Pakistan",
    office: "Sheikhupura Office",
    specialty: "Conveyancing, Drafting, Pleading & Legal Research",
    summary:
      "Advocate High Court holding office at Sheikhupura. Recognized expertise in conveyancing, pleading, and meticulous drafting of commercial agreements and complex contracts. Has wide experience in rendering comprehensive legal opinions, structuring transactions, preparing case studies, and conducting high-level legal research.",
    practiceAreas: ["Legal Agreements & Contracts", "Conveyancing & Deeds", "Property & Real Estate", "Civil Pleading", "Legal Research & Opinions"],
  },
  {
    id: "syed-samir-sohail",
    name: "Syed Samir Sohail",
    title: "Advocate High Court",
    court: "High Court of Pakistan",
    specialty: "Banking, Labour, Tax & Constitutional Cases",
    summary:
      "Advocate High Court actively handling Banking, Labour, Taxation, and Constitutional litigation. Possesses deep transactional and advisory experience in drafting bespoke agreements, joint venture contracts, and serving as in-house and corporate counsel for institutional clients.",
    practiceAreas: ["Banking Laws", "Taxation Laws", "Constitutional Law", "Labour & Service Laws", "Corporate Drafting & Agreements"],
  },
];

export const PRACTICE_CATEGORIES = [
  "All Practices",
  "Land & Revenue",
  "Corporate & Commercial",
  "Constitutional & Administrative",
  "Intellectual Property",
  "Litigation & Dispute Resolution",
  "Energy & Infrastructure",
] as const;

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "constitutional-law",
    name: "Constitutional Law of Pakistan",
    category: "Constitutional & Administrative",
    icon: "Landmark",
    shortDescription: "Writ petitions, fundamental rights enforcement, vires of statutes, and constitutional remedies before the High Courts and Supreme Court.",
    fullDescription: "Our senior advocates represent clients in high-stakes constitutional litigation under Article 199 and Article 184 of the Constitution of Pakistan. We advise on challenges to legislative enactments, executive actions, regulatory orders, civil liberties, and statutory interpretations.",
    highlights: ["Article 199 Writ Petitions", "Judicial Review of Administrative Actions", "Enforcement of Fundamental Rights", "Vires of Rules and Ordinances"],
  },
  {
    id: "land-revenue-laws",
    name: "Land Revenue Laws",
    category: "Land & Revenue",
    icon: "MapPin",
    shortDescription: "Comprehensive counsel on Punjab Land Revenue Act, mutations (Intiqal), record-of-rights (Jamabandi), demarcations, and Board of Revenue forums.",
    fullDescription: "With direct counsel appointments before the Board of Revenue Punjab (BOR), our team possesses unparalleled mastery over Pakistani land revenue administration, revenue appeals, revisions before Commissioners, and High Court writ remedies.",
    highlights: ["Board of Revenue (BOR) Litigation", "Record-of-Rights (Jamabandi & Fard)", "Mutations, Demarcations & Partition", "Appeals Before District Collectors & Commissioners"],
  },
  {
    id: "settlement-rehabilitation-laws",
    name: "Settlement & Rehabilitation Laws",
    category: "Land & Revenue",
    icon: "FileCheck",
    shortDescription: "Evacuee property claims, allotment verifications, residual settlement issues, and representation before Settlement & Rehabilitation authorities.",
    fullDescription: "We serve as designated Legal Counsel for the Settlement & Rehabilitation Wing of the Board of Revenue Punjab. We represent institutions and claimants in complex historical land titles, evacuee trust property questions, and rehabilitation schemes.",
    highlights: ["Displaced Persons Allotment Verification", "Evacuee Property Disputes", "Representation before Settlement Commissioners", "High Court Writ Petitions on Evacuee Titles"],
  },
  {
    id: "colonization-laws",
    name: "Colonization Laws",
    category: "Land & Revenue",
    icon: "Home",
    shortDescription: "Colonization of Government Lands (Punjab) Act 1912, state land leases, proprietary rights grants, and resumption defense.",
    fullDescription: "Deep expertise in state-owned land management, agricultural and residential colony tenancies, condition fulfillments for acquiring proprietary titles, and challenging unlawful land resumptions by the District Administration.",
    highlights: ["State Land Allotment Schemes", "Proprietary Rights Grant Claims", "Defense Against Land Resumption Orders", "Board of Revenue & Civil Court Litigation"],
  },
  {
    id: "power-sector",
    name: "Power Sector & Energy Laws",
    category: "Energy & Infrastructure",
    icon: "Zap",
    shortDescription: "Representation for electric supply distribution companies (LESCO), NEPRA regulatory compliance, tariff disputes, and power contracts.",
    fullDescription: "Serving as official legal counsel for Lahore Electric Supply Company (LESCO), we provide robust representation before judicial forums, NEPRA, appellate tribunals, and commercial arbitrations regarding electricity disputes, billing, and regulatory mandates.",
    highlights: ["LESCO Legal Counsel & Court Representation", "NEPRA Regulatory Compliance", "Tariff & Billing Disputes", "Power Purchase & Infrastructure Agreements"],
  },
  {
    id: "administrative-law",
    name: "Administrative Law of Pakistan",
    category: "Constitutional & Administrative",
    icon: "Scale",
    shortDescription: "Challenging ultra vires administrative decisions, regulatory sanctions, public procurement determinations, and discretionary misuse.",
    fullDescription: "We advocate against capricious or arbitrary actions taken by administrative departments, public statutory bodies, and federal/provincial agencies, ensuring due process and procedural fairness under Pakistan's administrative jurisprudence.",
    highlights: ["Quashing Unlawful Statutory Notices", "Natural Justice Violations Remedies", "Public Service Commission Contests", "Administrative Inquiries & Tribunals"],
  },
  {
    id: "taxation-laws",
    name: "Taxation Laws of Pakistan",
    category: "Corporate & Commercial",
    icon: "Receipt",
    shortDescription: "Direct and indirect taxation: Income Tax Ordinance, Sales Tax Act, PRA/FBR assessments, appeals, and High Court tax references.",
    fullDescription: "Our tax practice provides corporate and high-net-worth clients with strategic tax planning, assessment defenses, appeals before Commissioners (Appeals), Appellate Tribunal Inland Revenue (ATIR), and Constitutional Tax References before High Courts.",
    highlights: ["FBR & Punjab Revenue Authority (PRA) Matters", "Appellate Tribunal Inland Revenue (ATIR)", "High Court Tax Reference Applications", "Corporate Tax Structuring & Advisory"],
  },
  {
    id: "environmental-law",
    name: "Environmental Law of Pakistan",
    category: "Energy & Infrastructure",
    icon: "Leaf",
    shortDescription: "Pakistan Environmental Protection Act (PEPA), Environmental Protection Tribunals, EPA approvals, IEE/EIA clearances, and industrial compliance.",
    fullDescription: "Navigating environmental compliance for industrial, power, and real estate projects. We defend corporations in Environmental Protection Tribunals and assist with Initial Environmental Examination (IEE) and Environmental Impact Assessment (EIA) approvals.",
    highlights: ["Environmental Protection Tribunal (EPT) Defense", "IEE & EIA Clearances", "Industrial Pollution Control Compliance", "Public Interest Environmental Litigation"],
  },
  {
    id: "international-law",
    name: "International Law",
    category: "Corporate & Commercial",
    icon: "Globe",
    shortDescription: "Cross-border commercial transactions, conflict of laws, international treaties, foreign investment protections, and extraterritorial enforcement.",
    fullDescription: "Advising domestic and overseas clients on cross-border commercial ventures, bilateral investment treaty considerations, enforcement of foreign judgments in Pakistan, and international commercial arbitration protocols.",
    highlights: ["Cross-Border Commercial Transactions", "Foreign Judgment Enforcement", "Bilateral Investment Treaties (BIT)", "Private International Law & Choice of Law"],
  },
  {
    id: "trademark",
    name: "Trademark Laws",
    category: "Intellectual Property",
    icon: "Award",
    shortDescription: "Trademark registration, opposition proceedings, infringement litigation, passing-off actions, and brand protection strategies.",
    fullDescription: "We safeguard our clients' brand identity and goodwill through comprehensive trademark searches, filing, opposition proceedings before the Registrar of Trade Marks, and aggressive infringement and passing-off injunctions in District & High Courts.",
    highlights: ["IPO Pakistan Trademark Filing", "Opposition & Rectification Proceedings", "Passing-off & Infringement Suits", "Licensing & Brand Protection"],
  },
  {
    id: "legal-agreements",
    name: "Legal Agreements & Drafting",
    category: "Corporate & Commercial",
    icon: "FileText",
    shortDescription: "Bespoke drafting and vetting of commercial contracts, joint ventures, shareholder covenants, SLAs, employment, and partnership deeds.",
    fullDescription: "With decades of experience drafting complex agreements, our attorneys craft airtight, future-proof legal instruments that protect corporate interests, minimize dispute vulnerability, and reflect precise commercial terms.",
    highlights: ["Joint Venture & Consortium Agreements", "Shareholders & Partnership Deeds", "EPC & Infrastructure Contracts", "Commercial Leases & SLAs"],
  },
  {
    id: "arbitration-laws",
    name: "Arbitration Laws of Pakistan",
    category: "Litigation & Dispute Resolution",
    icon: "Gavel",
    shortDescription: "Domestic and international commercial arbitration under the Arbitration Act 1940 and the Recognition and Enforcement Act 2011.",
    fullDescription: "Providing aggressive representation in arbitral proceedings, selection of arbitrators, enforcing arbitral awards, and resisting improper award challenges or court interventions.",
    highlights: ["Arbitration Act 1940 Proceedings", "Enforcement of Arbitral Awards", "Interim Relief Under Section 20/41", "Commercial Dispute Settlements"],
  },
  {
    id: "aviation-laws",
    name: "Aviation Laws of Pakistan",
    category: "Corporate & Commercial",
    icon: "Plane",
    shortDescription: "Civil Aviation Authority (CAA) regulatory matters, airline licensing, aircraft leasing agreements, passenger carrier liabilities, and cargo claims.",
    fullDescription: "Assisting airlines, charter operators, and aviation service providers on CAA regulatory compliance, aircraft dry/wet lease arrangements, carrier liability claims, and airport authority disputes.",
    highlights: ["CAA Pakistan Compliance & Licensing", "Aircraft Lease Agreements", "Warsaw & Montreal Convention Claims", "Airport Authority Procurement & Tenders"],
  },
  {
    id: "contempt-law",
    name: "Contempt Law of Pakistan",
    category: "Litigation & Dispute Resolution",
    icon: "AlertOctagon",
    shortDescription: "Initiation and defense of Contempt of Court petitions under the Contempt of Court Ordinance 2003 and Constitutional provisions.",
    fullDescription: "Ensuring effective compliance with court judgments, stay orders, and statutory directions through contempt proceedings, as well as providing stalwart defense for clients against contempt allegations.",
    highlights: ["Contempt of Court Ordinance 2003", "Enforcement of High Court Interim Orders", "Contempt Petitions for Non-Compliance", "Supreme Court Contempt Procedures"],
  },
  {
    id: "contract-law",
    name: "Contract Law of Pakistan",
    category: "Corporate & Commercial",
    icon: "Briefcase",
    shortDescription: "Contract Act 1872 interpretation, breach of contract claims, specific performance suits, damages recovery, and voidable agreements.",
    fullDescription: "Complete civil litigation and advisory on contracts. We represent plaintiffs and defendants in suits for specific performance of contract, damages for breach, rescission, and restitution before civil courts and High Courts.",
    highlights: ["Suits for Specific Performance", "Breach of Contract & Damages Recovery", "Force Majeure & Frustration Defense", "Contract Act 1872 Litigation"],
  },
  {
    id: "copyright-law",
    name: "Copyright Law of Pakistan",
    category: "Intellectual Property",
    icon: "ShieldCheck",
    shortDescription: "Protection of software, literature, audiovisual works, digital content, licensing agreements, and anti-piracy injunctions.",
    fullDescription: "Advising creative enterprises, media houses, software companies, and artists on copyright registration under the Copyright Ordinance 1962, anti-piracy actions, copyright board proceedings, and digital media licensing.",
    highlights: ["Copyright Ordinance 1962 Registration", "Anti-Piracy Civil Injunctions", "Digital Content & Software Licensing", "Media & Entertainment Royalties"],
  },
  {
    id: "corporate-laws",
    name: "Corporate Laws of Pakistan",
    category: "Corporate & Commercial",
    icon: "Building2",
    shortDescription: "Companies Act 2017, SECP corporate governance, mergers & acquisitions, winding-up petitions, and statutory secretarial compliance.",
    fullDescription: "End-to-end corporate services for public and private limited companies. Our counsel handles SECP regulatory filings, corporate structuring, minority shareholder petitions under Section 286, and board advisory.",
    highlights: ["Companies Act 2017 Compliance", "SECP Investigations & Petitions", "Mergers, Acquisitions & Due Diligence", "Shareholder Oppression & Winding Up"],
  },
  {
    id: "criminal-law",
    name: "Criminal Law of Pakistan",
    category: "Litigation & Dispute Resolution",
    icon: "ShieldAlert",
    shortDescription: "Pre-arrest / post-arrest bail, white-collar crime defense (NAB & FIA), criminal trials, appeals, and revision before High Court & Supreme Court.",
    fullDescription: "Our senior advocates represent clients in complex criminal proceedings, financial embezzlement, NAB/FIA inquiries, private criminal complaints, and trial advocacy under the Code of Criminal Procedure and Pakistan Penal Code.",
    highlights: ["Pre-Arrest & Post-Arrest Bail Applications", "White-Collar Crime & FIA / NAB Defense", "Criminal Appeals Before High Court & Supreme Court", "Private Complaints & Quashment of FIRs"],
  },
  {
    id: "partnership-laws",
    name: "Partnership Laws of Pakistan",
    category: "Corporate & Commercial",
    icon: "Users",
    shortDescription: "Partnership Act 1932, drafting deeds of partnership, registration with Registrar of Firms, dissolution, and rendition of accounts.",
    fullDescription: "Guiding business partners through creation, restructuring, and dissolution of partnership firms. We represent partners in suits for dissolution and rendition of accounts, safeguarding capital shares and profits.",
    highlights: ["Registration with Registrar of Firms", "Partnership Deed Structuring", "Dissolution & Rendition of Accounts", "Dispute Resolution Between Partners"],
  },
  {
    id: "patents-law",
    name: "Patents Law of Pakistan",
    category: "Intellectual Property",
    icon: "Cpu",
    shortDescription: "Patents Ordinance 2000, patent drafting, prosecution before the Patent Office, opposition proceedings, and patent infringement actions.",
    fullDescription: "Assisting inventors, technical corporations, and research institutions with filing and defending patent rights in Pakistan, handling specification drafting, and challenging patent infringements in High Courts.",
    highlights: ["Patent Prosecution & Filing", "Patent Infringement Litigation", "Compulsory Licensing Defense", "Technology Transfer Agreements"],
  },
  {
    id: "property-laws",
    name: "Property Laws of Pakistan",
    category: "Land & Revenue",
    icon: "Key",
    shortDescription: "Transfer of Property Act 1882, title investigations, suits for declaration, possession, injunction, partition, and benami transactions.",
    fullDescription: "With over 28 years of core specialization in property and civil law led by Mian Mohammad Hanif, we handle high-value property disputes, partition suits between co-owners, injunctive reliefs, and title quietance.",
    highlights: ["Suits for Declaration & Possession", "Permanent & Mandatory Injunctions", "Partition of Joint Property", "Title Searches & Legal Due Diligence"],
  },
  {
    id: "real-estate-laws",
    name: "Real Estate Laws of Pakistan",
    category: "Land & Revenue",
    icon: "Building",
    shortDescription: "Private housing schemes regulatory approvals (LDA, CDA, RDA), FGEHA representation, builder-buyer disputes, and master developments.",
    fullDescription: "Representing government housing authorities like FGEHA and premier private developers. We assist with development approvals, master layout plans, consumer protection disputes, and real estate litigation across Pakistan.",
    highlights: ["FGEHA & State Housing Representation", "LDA & RDA Regulatory Approvals", "Real Estate Developer Joint Ventures", "Consumer Protection & Investor Claims"],
  },
];

export const CLIENT_SECTORS: Sector[] = [
  {
    title: "Energy & Power Distribution",
    description: "Dedicated representation for power distribution entities like LESCO, regulatory tariff advocacy, and transmission infrastructure contracts.",
    entities: "LESCO, Power Regulators, Grid Infrastructure",
    icon: "Zap",
  },
  {
    title: "Land Revenue & Settlement",
    description: "Legal standing before the Board of Revenue Punjab (BOR) for land management, title regularizations, and settlement claims.",
    entities: "Board of Revenue Punjab (BOR), District Collectorates",
    icon: "MapPin",
  },
  {
    title: "Government & Statutory Authorities",
    description: "Official legal advisor representation to the Government of Pakistan (Ministry of Law, Justice & Human Rights) and FGEHA.",
    entities: "Ministry of Law, FGEHA, Public Service Bodies",
    icon: "Landmark",
  },
  {
    title: "Banking & Financial Services",
    description: "Advising domestic commercial banks, non-banking financial institutions, recovery litigation, and compliance with State Bank directives.",
    entities: "Commercial Banks, Corporate Lenders, DFIs",
    icon: "Banknote",
  },
  {
    title: "Industry & Small Enterprise",
    description: "Counsel for Punjab Small Industries Corporation (PSIC), industrial estate plots, manufacturing licensing, and labour relations.",
    entities: "PSIC, Industrial Estate Developers, SMEs",
    icon: "Factory",
  },
  {
    title: "Telecommunications & Media",
    description: "Regulatory representation for telecom providers, advertising agencies, broadcasting networks, and copyright syndication.",
    entities: "PTA Regulated Entities, Media Groups, Tech Vendors",
    icon: "Radio",
  },
];
