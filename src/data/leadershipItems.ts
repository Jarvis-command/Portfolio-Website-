import {
  Award,
  BookOpen,
  Building2,
  FileText,
  Mic,
  PlayCircle,
  UserCircle,
  Users,
  type LucideIcon
} from 'lucide-react';

export interface LeadershipItem {
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
}

export const leadershipItems: LeadershipItem[] = [
  {
    icon: Mic,
    title: 'CyberBay 2025 Podcast Feature',
    category: 'Podcast Feature',
    description: 'Featured on CyberBay Podcast discussing cybersecurity, technology, and innovation through an engaging conversation at CyberBay 2025.',
    link: 'https://www.youtube.com/watch?v=Q7RpAgVaGl0&t=1378s',
    image: '/CyberBay2.png',
  },
  {
    icon: PlayCircle,
    title: 'Turning AI Investments into Measurable Business Outcomes',
    category: 'HCLTech Feature',
    description: 'Featured in an HCLTech conversation on moving AI from pilots to enterprise deployment, selecting high-value use cases, and turning AI investments into measurable business outcomes.',
    link: 'https://www.hcltech.com/en-us/videos/turning-ai-investments-measurable-business-outcomes',
    image: '/HCL.png'
  },
  {
    icon: Mic,
    title: 'AI Talent Strategy at Scale',
    category: 'Closing Keynote Panel',
    description: 'Joined leaders from Razorfish and Dell Technologies to discuss AI talent strategy, capability building, and operating models for enterprise AI success at the VISIONS Data Strategy & Analytics Forum.',
    link: 'YOUR_LINK_HERE',
    image: '/quartz.png'
  },
  {
    icon: FileText,
    title: 'Enterprise AI Systems & Real-Time Analytics',
    category: 'CXO Dispatch Feature',
    description: 'Featured by CXO Dispatch on building enterprise AI systems, leveraging real-time analytics, and enabling autonomous decision-making at scale.',
    link: 'https://www.cxodispatch.com/strategy/gowtham-chilakapati-enterprise-ai-systems-real-time-analytics-for-autonomous-decisioning/',
    image: '/cxo.png'
  },
  {
    icon: Mic,
    title: 'AI That Moves the Needle',
    category: 'Conference Session',
    description: 'Shared practical strategies for prioritizing AI investments and measuring enterprise ROI to maximize business impact.',
    link: 'https://www.ssonetwork.com/#/workshops',
    image: '/sson-1.jpg'
  },
  {
    icon: Mic,
    title: 'Workshop B: Data Readiness & Pitfall Prevention for Agentic AI',
    category: 'Conference Workshop',
    description: 'Co-led an enterprise workshop with Vipin Kataria (Picarro) on preparing trusted data foundations, AI governance, and mitigating data pitfalls for successful agentic AI deployment.',
    link: 'https://www.ssonetwork.com/events-agentic-applied-ai-enterprise/agenda-page/full-agenda#/workshops',
    image: '/sson-2.jpg'
  },
  {
    icon: Mic,
    title: 'Workshop B: Data Readiness for Agentic AI',
    category: 'Conference Workshop',
    description: 'Led a workshop on enterprise data readiness, AI governance, and practical strategies for building trustworthy agentic AI systems at scale.',
    link: 'https://www.ssonetwork.com/events-agentic-applied-ai-enterprise/agenda-page/full-agenda#/workshops',
    image: '/sson.png'
  },
  {
    icon: UserCircle,
    title: 'Bold Journey Feature on Enterprise AI Leadership',
    category: 'Article',
    description: 'Featured on Bold Journey highlighting my journey in building AI-driven systems, scaling enterprise platforms, and delivering measurable business impact.',
    link: 'https://boldjourney.com/meet-gowtham-chilakapati/',
    image: '/bold.png'
  },
  {
    icon: FileText,
    title: 'Why Innovation Fails Without Structure: ',
    category: 'Article',
    description: 'The Art of Operationalizing AI with Gowtham Chilakapati',
    link: 'https://www.thedailypulse.net/post/why-innovation-fails-without-structure-the-art-of-operationalizing-ai-with-gowtham-chilakapati',
    image: '/Innovation.jpg'
  },
  {
    icon: Mic,
    title: 'Agentic AI in Regulated Enterprises',
    category: 'Podcast Feature',
    description: 'Deep dive into measuring real AI ROI, enterprise AI investment, and deploying LLMs safely in regulated industries.',
    link: 'https://lnkd.in/gGGjCfaR',
    image: '/HealthcareAI.png'
  },
  {
    icon: Award,
    title: 'IEEE Human Behind the Engineer Feature',
    category: 'IEEE Recognition',
    description: 'Featured by IEEE Florida West Coast Section for leadership in enterprise data, AI systems, and platform modernization.',
    link: 'https://www.linkedin.com/posts/ieee-florida-west-coast-section_ieee-ieeefwc-artificialintelligence-activity-7441120873908105216-xkBc/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHGP1AB77y5-BbnO_wJko7LB-cxqINKnKs',
    image: '/IEEEWF.png'
  },
  {
    icon: FileText,
    title: 'Real-Time Data Catalyst',
    category: 'Forbes Article',
    description: 'Enterprise nervous system',
    link: 'https://www.forbes.com/councils/forbestechcouncil/2025/06/13/rewiring-the-digital-nervous-system-real-time-data-as-the-catalyst-for-enterprise-intelligence/',
    image: '/data%20catalyst.webp'
  },
  {
    icon: FileText,
    title: 'Synthetic Minds',
    category: 'Forbes Article',
    description: 'AI creates reality',
    link: 'https://www.forbes.com/councils/forbestechcouncil/2025/04/25/synthetic-minds-how-ai-is-creating-its-own-reality-without-consciousness/?utm_content=331154061&utm_medium=social&utm_source=linkedin&hss_channel=lcp-11075183',
    image: '/Synthetic%20minds.webp'
  },
  {
    icon: Mic,
    title: 'SSOW 2026 Panel Moderator',
    category: 'Speaking Engagement',
    description: 'Moderated a panel on streamlining as a value creation mechanism, discussing enterprise AI, decision intelligence, and operational excellence.',
    link: 'https://www.linkedin.com/posts/gchil_ssow2026-operationalexcellence-enterpriseai-activity-7439474732493619200-xDK7?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHGP1AB77y5-BbnO_wJko7LB-cxqINKnKs',
    image: '/SSOW.jpg'
  },
  {
    icon: FileText,
    title: 'Strategic Portfolio Mgmt',
    category: 'Forbes Article',
    description: 'Kula Ring leadership',
    link: 'https://www.forbes.com/councils/forbestechcouncil/2025/02/12/strategic-portfolio-management-for-technology-leaders-mastering-the-tribal-dynamics-of-modern-organizations/',
    image: '/Strategic.webp'
  },
  {
    icon: Users,
    title: 'Forbes Tech Council Member',
    category: 'Forbes Council',
    description: 'Published author + expert',
    link: 'https://www.forbes.com/councils/forbestechcouncil/people/gowthamchilakapati/',
    image: '/forbes.png'
  },
  {
    icon: BookOpen,
    title: 'The New Arteries of Business Intelligence (Kindle Edition)',
    category: 'Book',
    description: 'Real-time enterprise blueprint',
    link: 'https://www.amazon.com/dp/B0F89MCCFF',
    image: '/Business%20Intelligence.jpg'
  },
  {
    icon: BookOpen,
    title: "Swara The Word Fairy: Where Words Learn to Dance (AI For Kids)",
    category: 'Book',
    description: "Author of AI children's book",
    link: 'https://www.amazon.com/dp/B0FFZ8C9HV?ref=cm_sw_r_ffobk_cp_ud_dp_MQ1WSB6JCKY13VP3ZRJG&ref_=cm_sw_r_ffobk_cp_ud_dp_MQ1WSB6JCKY13VP3ZRJG&social_share=cm_sw_r_ffobk_cp_ud_dp_MQ1WSB6JCKY13VP3ZRJG&bestFormat=true&previewDohEventScheduleTesting=C&csmig=1',
    image: '/Swara.png'
  },
  {
    icon: Mic,
    title: 'CyberBay 2025 Podcast',
    category: 'Podcast',
    description: 'AI + cybersecurity leadership',
    link: 'https://www.linkedin.com/posts/gchil_community-like-this-is-what-the-cyberbay-activity-7389801734203924481-Zirn?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHGP1AB77y5-BbnO_wJko7LB-cxqINKnKs',
    image: '/Cyber bay.jpg'
  },
  {
    icon: Award,
    title: 'P-RAG Patent #19/088,037',
    category: 'Patent',
    description: 'Perception-Augmented RAG',
    link: 'https://www.linkedin.com/pulse/from-reactive-responsive-ushering-era-ai-gowtham-chilakapati-44zue/?trackingId=5d7%2F2N%2BdQOHFfrvtNwYm1w%3D%3D',
    image: '/PRAG.jpg'
  },
  {
    icon: Award,
    title: 'IEEE Senior Member',
    category: 'IEEE Award',
    description: 'Florida West Coast Coordinator',
    link: 'https://www.linkedin.com/posts/gchil_whyieee-ieeeregion3-engineeringleadership-activity-7392516752615845888-lx_B?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHGP1AB77y5-BbnO_wJko7LB-cxqINKnKs',
    image: '/IEEE.jpg'
  },
  {
    icon: Building2,
    title: 'Gen AI Meet',
    category: 'Conference',
    description: 'Generative AI leadership',
    link: 'https://www.linkedin.com/posts/gchil_some-of-the-best-ai-use-cases-are-kind-of-activity-7406528654358515713-fJAZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABHGP1AB77y5-BbnO_wJko7LB-cxqINKnKs',
    image: '/Genai.jpg'
  },
  {
    icon: FileText,
    title: 'Rise of AI in Financial Fraud',
    category: 'Article',
    description: 'Dynamic fraud detection',
    link: 'https://www.ibtimes.co.in/smarter-shields-rise-ai-financial-fraud-detection-882739',
    image: '/smarter%20sheilds.png'
  },
  {
    icon: FileText,
    title: 'AI in Health Insurance',
    category: 'Article',
    description: '25% cost reduction vision',
    link: 'https://techbullion.com/unlocking-the-power-of-ai-in-health-insurance-personalized-efficient-transformed/',
    image: '/Power%20of%20AI%20In%20Health%20insurance.jpg'
  },
  {
    icon: UserCircle,
    title: 'Gowtham Chilakapati: Driving Innovation',
    category: 'Profile',
    description: 'Visionary landing profile',
    link: 'https://goodmenproject.com/business-ethics-2/gowtham-chilakapati-leading-with-vision-driving-innovation/',
    image: '/Leading%20with%20Vision.webp'
  }
];
