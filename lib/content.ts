export const SITE = {
  name: "Rhythm Talent Partners",
  shortName: "Rhythm Talent",
  email: "jason@rhythmtalent.com",
  linkedin: "https://www.linkedin.com/in/jason2garrett",
  location: "Based in the San Francisco Bay Area · Serving clients nationally",
  tagline:
    "Premium boutique search firm specialized in high-impact executive and technical recruitment for growth-stage MedTech companies.",
};

export const HERO = {
  eyebrow: "MedTech Executive & Technical Search",
  titleLead: "The Right People.",
  titleHighlight: "The Right Time.",
  subtitle:
    "Boutique talent partner for early- and growth-stage medical device, IVD, digital health, and SaMD companies, from concept through commercialization.",
  primaryCta: "Start a Conversation",
  secondaryCta: "Explore Expertise",
};

export const ABOUT = {
  eyebrow: "About",
  name: "Jason Garrett",
  role: "Founder & Principal, Rhythm Talent Partners",
  photo: "/images/jason-garrett.jpg",
  bio: "Inspired by a family history in cardiology, RHYTHM was built around a simple idea: just as the heart relies on the right rhythm to function, great companies rely on the right people working in sync to innovate, grow, and bring meaningful technologies to market.",
  story: [
    "Cardiology runs in my family. My father is a preventive cardiologist, and my mother, a cardiovascular nurse, was the first woman to serve on the board of the American College of Cardiology (ACC). I grew up around conversations about patient care and the technology that improves it, and that's where my passion for healthcare began.",
    "At San Jose State University, I studied Communication Studies and took part in campus dialogues on culture and diversity, which taught me to listen to and connect with people from all walks of life. I've put that to work for nearly a decade in MedTech recruiting. Founders, C-suite executives, VPs, and HR leaders have trusted me with 100+ placements across 50+ MedTech companies, covering every product type and function from concept to commercial launch.",
  ],
  highlights: [
    "Executive, technical, and hard-to-fill specialist searches",
    "Curated slates, not stacks of resumes",
    "An advocate for clients and candidates alike",
    "Based in the San Francisco Bay Area",
  ],
};

export type Service = {
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    title: "Executive & C-Suite",
    description:
      "C-suite, VP, and director-level placements that set the strategic direction for your product and engineering organizations.",
  },
  {
    title: "R&D Engineering & Product Development",
    description:
      "Hardware, software, embedded/firmware engineers, and engineering program managers who drive product development from prototype to production.",
  },
  {
    title: "Commercialization & Go-to-Market",
    description:
      "Commercial leaders who translate clinical value into market success, from launch strategy through scaled growth.",
  },
  {
    title: "Quality, Regulatory, Clinical & Reimbursement",
    description:
      "Specialists who navigate the complex regulatory landscape, ensuring compliance, clearance, and market access for Class II and III devices.",
  },
  {
    title: "AI/ML, Data Science & Cybersecurity",
    description:
      "Technical talent at the intersection of healthcare and technology, building intelligent, secure software that meets rigorous industry standards.",
  },
];

// Device & technology categories, each correlated with a therapeutic area,
// deliberately NOT functions/departments (those belong with the roles we fill).
export const FOCUS_AREAS: string[] = [
  "Surgical Robotics",
  "Cardiac Rhythm Management & Electrophysiology",
  "Structural Heart & Interventional",
  "Neuromodulation & Neurostimulation",
  "Neurovascular & Stroke",
  "Orthopedics & Spine",
  "In-Vitro Diagnostics (IVD)",
  "Molecular & Genomic Diagnostics",
  "Diagnostic Imaging",
  "Continuous Glucose Monitoring & Diabetes",
  "Wearables & Remote Patient Monitoring",
  "Digital Health / SaMD",
  "Combination Products & Drug Delivery",
];

export const PROCESS: { title: string; description: string }[] = [
  {
    title: "Role Definition & Alignment",
    description:
      "Collaborating with executives, hiring managers, and internal teams to define what great looks like for each role.",
  },
  {
    title: "Market Mapping & Targeting Top Talent",
    description:
      "Mapping the competitive landscape to pinpoint and engage the top performers in your space, including those not actively looking.",
  },
  {
    title: "In-Depth Screening & Qualification",
    description:
      "Rigorously vetting every candidate for technical depth and cultural fit, so you only meet people ready to make an impact.",
  },
  {
    title: "Delivering & Presenting Candidates",
    description:
      "Presenting a curated shortlist with in-depth insight on each candidate, so every interview starts with clarity.",
  },
  {
    title: "Interview Process & Two-Way Feedback",
    description:
      "Running an efficient interview process with continuous feedback in both directions and a best-in-class candidate experience.",
  },
  {
    title: "Offer, Close & Onboarding",
    description:
      "Guiding offer negotiations to a confident yes, then staying engaged through onboarding to ensure long-term success.",
  },
];

export type Testimonial = {
  name: string;
  title: string;
  date: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Dornfest",
    title: "Senior R&D Engineer",
    date: "October 2026",
    quote:
      "Jason helped me land my dream job at a startup. He took the time to understand my situation and truly advocated for me during negotiations. He was honest, quick to respond, and made the process feel easy with great advice. He's friendly, well-connected, and experienced. If you're looking for a role in medtech, talk to Jason. You'll be grateful you did.",
  },
  {
    name: "Elaine Zhang",
    title: "Quality Specialist | ISO 13485 SME",
    date: "July 2026",
    quote:
      "Jason was quick to communicate, kept me updated at every step, and was proactive about following up. I never had to wonder where things stood, which made the whole process much less stressful. He genuinely took the time to understand what I was looking for and offered guidance along the way. If you want a recruiter who is communicative, reliable, and truly cares, I wouldn't hesitate to recommend Jason!",
  },
  {
    name: "Arvita Tripati, MBA",
    title: "Healthcare AI Value Creation & Diligence Advisor",
    date: "May 2026",
    quote:
      "Jason found the needle in the haystack on one of the hardest searches I've run: a PhD-level Design Quality leader for a lateral flow assay program in the early days of the pandemic. He understood the role beyond keywords, brought a curated slate instead of a pile of resumes, and showed up as a true partner, not a vendor. He went on to place senior leaders across functions reporting to our CTO.",
  },
  {
    name: "Rebecca Crane",
    title: "CEO & Managing Partner, Crane Medtech Partners",
    date: "March 2026",
    quote:
      "I had a great experience working with Jason when he introduced me to one of his clients. He stayed persistent through the process, maintained a solid relationship with the client, and was adaptive to my leadership model, which not every recruiter knows how to navigate. To top it off, he's easy to work with. I'd gladly work with him again!",
  },
  {
    name: "David He",
    title: "VP R&D at Eight Sleep",
    date: "May 2025",
    quote:
      "Jason is able to find high-quality candidates for niche roles, keep them engaged, and provide continuous metrics of the search process. He is equally comfortable with junior-level roles as with executive searches. From having worked with a variety of recruiters, Jason is one of the best, and I continue to rely on his expertise for my open roles.",
  },
  {
    name: "Nicolas Soichet",
    title: "Healthcare Venture Partner | MedTech GTM Specialist",
    date: "April 2025",
    quote:
      "I had a great experience working with Jason. He was consistently responsive, well-informed, and proactive throughout the process. He made sure I was well prepared for each step (there were lots!) and was a strong advocate for my candidacy. His professionalism and support made a real difference.",
  },
  {
    name: "Vidur Sahney",
    title: "CEO & Cofounder, Contour Medical",
    date: "March 2025",
    quote:
      "Jason is wonderful and very easy to communicate and work with. I can't recommend him enough! He listens to your needs and reacts quickly. With the ability to deliver exactly what you want and need. I only wish we had known each other earlier, he would have saved me years of frustration in recruitment efforts.",
  },
  {
    name: "Sean Coyer, Ph.D.",
    title: "Growth Strategy and Business Development",
    date: "March 2025",
    quote:
      "Jason was great to work with as a candidate for an executive medical device role. He consistently provided valuable insights that drove clarity on fit for myself and the hiring company. He was very responsive, provided visibility throughout, and helped ensure a smooth process. I highly recommend Jason for his professionalism, willingness to go above and beyond, and commitment to a great hiring experience.",
  },
  {
    name: "Namrata Kadambi",
    title: "Manufacturing Leader | ASQ SSGB Certified",
    date: "October 2024",
    quote:
      "I am pleased to recommend Jason for his outstanding recruitment services. He took the time to understand my skillset, experiences, and my career goals. Jason was super communicative throughout my recruiting process and was always patient with answering all my concerns. He advocated for me and got me the best offer that aligned with my interests.",
  },
  {
    name: "Michael Akiyama",
    title: "Engineering Program Manager at Cutera",
    date: "August 2022",
    quote:
      "Jason is friendly, easy to work with, and very quick to respond. When discussing the position, Jason was transparent, and he worked hard to find the answers to my questions. Having Jason on my side alleviated this pressure and helped me feel prepared for interview questions and salary negotiations. I highly recommend Jason to any candidate seeking a position in the future.",
  },
  {
    name: "Bill Woodland",
    title: "Experienced Program Manager and Team Leader",
    date: "March 2021",
    quote:
      "Jason recently helped me find and secure a new position, which was in line with my skillset and passions. He was an incredible advocate for me throughout the entire process, keeping me regularly informed of updates and the status of things. He mediated the offer, and helped drive a favorable outcome. I highly recommend Jason to any life sciences professionals seeking a new opportunity.",
  },
  {
    name: "Irma Gaillard",
    title: "Senior Director Regulatory",
    date: "September 2020",
    quote:
      "It is a real pleasure to work with someone like Jason. He follows up to process through the end. He found the candidate after I explained who we were looking for. Communicates effectively and he is always kind and listens. I recommend working with Jason in your search of new talents.",
  },
  {
    name: "Anita Dalrymple, RAPS RAC, ASQ CRE CQE CQA",
    title: "Principal Consultant, Medical Device Regulatory",
    date: "April 2020",
    quote:
      "In consulting, relationship building is mission-critical. Jason does a great job of it and is one of my favorite recruiters. He provides accurate information in a timely manner, facilitates negotiations, works fairly for the consultant and client, and demonstrates professionalism in every situation.",
  },
  {
    name: "Erick Lu",
    title: "Director, Inflammation Research at Gilead Sciences",
    date: "February 2019",
    quote:
      "Jason reached out to me and invited me to apply for a job opportunity. Throughout the application process, he was respectful, organized, and always addressed my questions and concerns. I had a great experience working with Jason, and particularly appreciated how he checked in with me at each step to see how things were going and offer advice.",
  },
];

export const COMPANY_STAGES = [
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "Growth / Late Stage",
];

export const DEVICE_CATEGORIES = [
  "Class II Medical Device",
  "Class III Medical Device",
  "In-Vitro Diagnostics (IVD)",
  "Digital Health / SaMD",
  "Surgical Robotics",
  "Wearables / Remote Monitoring",
  "Combination Products",
  "AI / ML & Data Science",
  "Cybersecurity",
  "Other",
];

export const ENGAGEMENT_TYPES = [
  {
    value: "engaged_search",
    label: "Engaged Search",
    desc: "Fee upon successful placement",
    detail:
      "A dedicated, partner-led search where I run the full process, from market mapping through offer, and you pay a fee only when the right candidate is hired.",
  },
  {
    value: "part_time_contractors",
    label: "Part-Time Contractors",
    desc: "Project-based work, billed monthly by hours worked",
    detail:
      "Experienced MedTech professionals engaged on a part-time, project basis to fill a specific need, billed monthly for the hours worked with no long-term commitment.",
  },
  {
    value: "talent_advisory",
    label: "Talent Advisory",
    desc: "Market insights, salary benchmarking, targeted competitors",
    detail:
      "Strategic guidance before or during a hire: talent market insights, compensation benchmarking to keep your offers competitive, and a targeted map of the competitors where your next hire likely works today.",
  },
];

export const HIRING_TIMELINES = [
  "Immediate (0-1 month)",
  "Near-term (1-3 months)",
  "This quarter (3-6 months)",
  "Exploratory / Planning ahead",
];
