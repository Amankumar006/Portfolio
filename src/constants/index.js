// Personal Information
export const personalInfo = {
  name: "Aman Kumar",
  title: "AI & ML Engineering Student",
  location: "Bangalore, India",
  email: "006amanraj@gmail.com",
  phone: "+91 7856808896",
};

// Social Links
export const socials = [
  { name: "MEETING", href: "https://cal.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aman-kumar-8102bb279/" },
  { name: "GitHub", href: "https://github.com/Amankumar006" },
];

// Services Data
export const servicesData = [
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI",
    items: [
      { title: "AI-powered applications", description: "" },
      { title: "Machine Learning models", description: "" },
      { title: "TensorFlow.js integration", description: "" },
      { title: "Natural Language Processing", description: "" },
    ],
  },
  {
    title: "Web Development",
    description: "Modern, responsive web applications",
    items: [
      { title: "React & TypeScript apps", description: "" },
      { title: "Full-stack development", description: "" },
      { title: "Tailwind CSS styling", description: "" },
      { title: "API development", description: "" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Robust server-side development",
    items: [
      { title: "Node.js backend", description: "" },
      { title: "Python Flask/FastAPI", description: "" },
      { title: "Database management", description: "" },
      { title: "RESTful APIs", description: "" },
    ],
  },
  {
    title: "Technical Consulting",
    description: "Strategic tech guidance for your projects",
    items: [
      { title: "Architecture planning", description: "" },
      { title: "Code review", description: "" },
      { title: "Performance optimization", description: "" },
      { title: "Team leadership", description: "" },
    ],
  },
];

// Projects Data
export const projects = [
  {
    id: 1,
    name: "Campus Connector",
    description:
      "A modern platform for campus event discovery, management, and community engagement with QR check-ins, digital certificates, and AI-assisted workflows.",
    longDescription:
      "Campus Connector brings students, organizers, and administrators together with features like QR check-ins, digital certificates, a gamified coin system, and AI-assisted event creation. It supports role-based experiences for Attendees, Organizers, Admins, and Super Admins, making campus event management seamless and engaging.",
    image: "/assets/projects/campus-connector.png",
    bgImage: "/assets/backgrounds/campus.png",
    github: "",
    liveDemo: "https://campusconnector.me/",
    frameworks: [
      { id: 1, name: "Next.js 15" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Firebase" },
      { id: 4, name: "AI" },
    ],
    features: [
      "QR code-based event check-ins",
      "Digital certificate generation",
      "Gamified coin reward system",
      "AI-assisted event creation",
      "Role-based access control (Attendee, Organizer, Admin, Super Admin)",
    ],
    challenges:
      "Building a scalable multi-role system with real-time QR verification required careful architecture planning. Implemented Firebase for real-time updates and designed a flexible permission system to handle different user types.",
  },
  {
    id: 2,
    name: "MachinoAI",
    description:
      "A platform to democratize access to professional-grade tools and insights. Powerful technology that's accessible, accurate, and user-centric.",
    longDescription:
      "MachinoAI exists to democratize access to professional-grade tools and insights. Every tool is meticulously engineered with precision, thoroughly tested for edge cases, and optimized for performance. We don't just build tools – we craft solutions that professionals can rely on.",
    image: "/assets/projects/machinoai.png",
    bgImage: "/assets/backgrounds/machinoai.png",
    github: "",
    liveDemo: "https://machinoai.in/",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "HTML" },
      { id: 3, name: "PHP" },
      { id: 4, name: "CSS" },
    ],
    features: [
      "Professional-grade calculation tools",
      "Edge-case tested algorithms",
      "Performance optimized interfaces",
      "User-centric design approach",
    ],
    challenges:
      "Ensuring accuracy across all tools required extensive testing and validation. Built a modular architecture to easily add new tools while maintaining consistent quality standards.",
  },
  {
    id: 3,
    name: "AdaptEd-AI",
    description:
      "A conversational AI learning companion that generates content in real-time, adapts to individual learning styles, and feels like learning with a patient, genius friend.",
    longDescription:
      "AdaptEd-AI is a truly different learning platform. It's a conversational AI learning companion that generates content in real-time based on student needs, adapts to individual learning styles and goals, and feels like learning with a patient, genius friend. Features 4 distinct onboarding paths: Goal-Based, School, College, and Free-Style learners.",
    image: "/assets/projects/AdaptED.png",
    bgImage: "/assets/backgrounds/adapted.png",
    github: "",
    liveDemo: "https://adapted-personilized-leaning-app.netlify.app/",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "AI/ML" },
      { id: 4, name: "React" },
    ],
    features: [
      "Real-time AI content generation",
      "Adaptive learning styles detection",
      "4 onboarding paths for different learner types",
      "Conversational learning interface",
      "Progress tracking and recommendations",
    ],
    challenges:
      "Creating a truly adaptive learning experience required building sophisticated AI models that understand context and learning patterns. Implemented behavior tracking to personalize recommendations without explicit user input.",
  },
  {
    id: 4,
    name: "Edu-Law",
    description:
      "A mobile app designed to simplify learning about Indian law and fundamental rights for law students, professionals, and citizens.",
    longDescription:
      "Edu-Law is a mobile app designed to simplify learning about Indian law and fundamental rights. Whether you're a law student, professional, or just someone keen on understanding your rights, Edu-Law offers a structured platform to build your legal knowledge with organized content and intuitive navigation.",
    image: "/assets/projects/Edulaw.png",
    bgImage: "/assets/backgrounds/edulaw.png",
    github: "https://github.com/Amankumar006/Edulaw",
    liveDemo: "",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Mobile" },
      { id: 4, name: "React Native" },
    ],
    features: [
      "Comprehensive Indian law database",
      "Fundamental rights education",
      "Structured learning paths",
      "Search and bookmark functionality",
      "Mobile-first design",
    ],
    challenges:
      "Organizing complex legal information into digestible content required careful information architecture. Used PostgreSQL for efficient querying of legal documents and React Native for cross-platform mobile support.",
  },
  {
    id: 5,
    name: "Article Publishing Platform",
    description:
      "A feature-rich, modern publishing platform inspired by Medium, built for writers and content creators.",
    longDescription:
      "A feature-rich, modern publishing platform inspired by Medium, built with React, TypeScript, PHP, and MySQL. Designed for writers and content creators who want a clean, distraction-free writing experience with powerful publishing tools.",
    image: "/assets/projects/blog.png",
    bgImage: "/assets/backgrounds/blog.png",
    github: "https://github.com/Amankumar006/blog",
    liveDemo: "",
    frameworks: [
      { id: 1, name: "PHP" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "React" },
    ],
    features: [
      "Rich text editor with formatting",
      "Article publishing workflow",
      "User authentication system",
      "Category and tag management",
      "Responsive reading experience",
    ],
    challenges:
      "Building a smooth editing experience required implementing a custom rich text editor. Combined PHP backend with React frontend for optimal performance and SEO.",
  },
  {
    id: 6,
    name: "Buddy AI",
    description:
      "An intelligent student assistant chatbot for smart note organization, schedule management, and personalized recommendations with document intelligence.",
    longDescription:
      "Buddy AI is an intelligent student assistant chatbot designed to help students manage their academic life through smart note organization, schedule management, and personalized recommendations. The system integrates document intelligence, scheduling capabilities, and natural language processing to create a seamless learning experience.",
    image: "/assets/projects/BuddyAI.png",
    bgImage: "/assets/backgrounds/buddyai.png",
    github: "https://github.com/Amankumar006/BuddyAi",
    liveDemo: "",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "Kotlin" },
      { id: 4, name: "NLP" },
    ],
    features: [
      "Smart note organization",
      "Schedule management",
      "Personalized recommendations",
      "Document intelligence",
      "Natural language interface",
    ],
    challenges:
      "Integrating document intelligence with NLP required building custom parsers and ML models. Used Kotlin for Android-specific features and PostgreSQL for reliable data storage.",
  },
  {
    id: 7,
    name: "Shopify Commerce Demo",
    description:
      "A demo project showcasing a Shopify-powered e-commerce storefront built with modern web technologies.",
    longDescription:
      "This is a demo project showcasing a Shopify-powered e-commerce storefront built with Next.js and TypeScript. It demonstrates modern e-commerce patterns including dynamic product pages, cart functionality, and seamless Shopify integration.",
    image: "/assets/projects/shopify-comm.png",
    bgImage: "/assets/backgrounds/shopify.png",
    github: "https://github.com/Amankumar006/shopify-next-commerce-demo",
    liveDemo: "",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Shopify" },
      { id: 4, name: "React" },
    ],
    features: [
      "Shopify storefront integration",
      "Dynamic product pages",
      "Shopping cart functionality",
      "Responsive design",
      "Modern e-commerce UX",
    ],
    challenges:
      "Integrating Shopify's Storefront API with Next.js required careful handling of server-side rendering and client-side state. Implemented optimistic updates for a smooth cart experience.",
  },
  {
    id: 8,
    name: "Railways Coach Inspection",
    description:
      "A mobile application for Indian Railways coach inspection management with authentication and database operations.",
    longDescription:
      "A mobile application built with React Native/Expo and TypeScript for Indian Railways coach inspection management. The application uses Supabase for authentication and database operations, enabling inspectors to efficiently track and report coach conditions.",
    image: "/assets/projects/railways-inspection.png",
    bgImage: "/assets/backgrounds/railways.png",
    github: "https://github.com/Amankumar006/Railways",
    liveDemo: "",
    frameworks: [
      { id: 1, name: "React Native" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Supabase" },
      { id: 4, name: "Python" },
    ],
    features: [
      "Coach inspection tracking",
      "Real-time data synchronization",
      "Offline support",
      "Authentication system",
      "Report generation",
    ],
    challenges:
      "Building reliable offline support for field inspectors was crucial. Implemented local SQLite storage with Supabase sync to ensure data integrity even in low-connectivity areas.",
  },
];

// Stats
export const stats = {
  yearsExperience: 2,
  projectsCompleted: 15,
  technologiesUsed: 10,
  hackathonWins: 1,
  hackathonsOrganized: 3,
};
