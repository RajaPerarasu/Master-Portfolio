import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "nova-ai",
    slug: "nova-ai",
    title: "NOVA AI — Intelligent Conversational Workspace",
    tagline: "Next-gen AI assistant engine powered by LLMs, real-time context processing, and scalable cloud APIs.",
    description: "Full-stack AI workspace platform offering multi-modal prompt management, real-time streamed completions, code generation, and custom agent workflows.",
    overview: "NOVA AI is a flagship full-stack artificial intelligence application engineered to demonstrate advanced AI integration, responsive state management, and cloud backend performance. Built with a Java/Spring Boot API orchestrator, React frontend, and LLM provider interfaces, NOVA AI delivers near-zero latency streaming responses, intelligent prompt history, and multi-session contextual memory.",
    category: "AI",
    featured: true,
    gridSize: "large",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://nova-ai-beta-olive.vercel.app/",
    githubUrl: "https://github.com/rajaperarasu/nova-ai",
    technologies: ["React.js", "Java", "Spring Boot", "Generative AI", "LLM API", "Tailwind CSS", "AWS EC2", "REST API"],
    features: [
      { title: "Real-time SSE Streaming", description: "Streams tokens asynchronously from Large Language Model APIs for responsive user interactions." },
      { title: "Intelligent Context Memory", description: "Maintains conversation state and dynamic session history across complex multi-turn dialogues." },
      { title: "Code Syntax Highlighter", description: "Built-in code sandbox and markdown renderer with language syntax highlighting and quick-copy snippets." },
      { title: "Custom Agent Templates", description: "Pre-configured specialized personas for full-stack debugging, system design, and prompt engineering." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Designed clean microservice-ready backend with Java Spring Boot and REST API endpoints.",
      "Optimized frontend render cycles using React hooks and custom WebSocket / SSE event listeners.",
      "Secured API key storage and user session management with AWS Cloud IAM and environment secret rotation."
    ],
    challenges: [
      {
        challenge: "Managing token limit constraints and high latency during heavy LLM response generation.",
        solution: "Implemented asynchronous streaming HTTP response handlers (Server-Sent Events) and caching frequent query embeddings."
      },
      {
        challenge: "Maintaining smooth fluid UI rendering while parsing markdown and code blocks in real time.",
        solution: "Utilized memoized virtual DOM rendering and deferred parser updates to prevent thread blocking."
      }
    ]
  },
  {
    id: "lakshana-beauty-care",
    slug: "lakshana-beauty-care",
    title: "Lakshana Beauty Care — Premier Booking Platform",
    tagline: "Elegant beauty salon & wellness booking portal featuring automated scheduling and service catalog.",
    description: "A full-featured web solution for salon appointments, service customization, dynamic pricing catalog, and customer inquiry management.",
    overview: "Lakshana Beauty Care provides a polished digital experience for customers to browse wellness services, select specialist appointments, and manage booking confirmations. Designed with an ultra-responsive UI, smooth Framer Motion transitions, and a structured backend data store.",
    category: "Web Development",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://lakshana-beauty-care.vercel.app/",
    githubUrl: "https://github.com/rajaperarasu/lakshana-beauty-care",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "MySQL", "PHP"],
    features: [
      { title: "Service Booking System", description: "Interactive date & time slot picker with automated service cost calculator." },
      { title: "Visual Service Gallery", description: "Categorized treatments catalog with pricing, duration, and practitioner highlights." },
      { title: "Mobile-first Responsive Design", description: "Fully accessible touch-friendly navigation optimized for smartphones and tablets." },
      { title: "Client Inquiry Portal", description: "Direct contact form linked with instant email notifications and backend audit log." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Created fluid layout with modern CSS grid & flexbox aesthetics.",
      "Implemented client-side input validation and error feedback states.",
      "Optimized page load speed under 1.2s through asset compression and lazy loading."
    ],
    challenges: [
      {
        challenge: "Preventing double-booking of time slots across simultaneous web sessions.",
        solution: "Enforced atomic transaction updates and database constraint locks on booking slots."
      }
    ]
  },
  {
    id: "xulp-dream-home",
    slug: "xulp-dream-home",
    title: "Xulp Dream Home — Luxury Property Portal",
    tagline: "High-end real estate showcase with interactive property filtering, floor plans, and virtual walkthroughs.",
    description: "Interactive luxury real estate web app featuring detailed property specs, neighborhood maps, photo galleries, and inquiry management.",
    overview: "Xulp Dream Home is designed for premium real estate buyers and agents. It features dynamic filtering by location, price, property type, and bedroom count, complemented by high-resolution image galleries and property detail viewports.",
    category: "Real Estate",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://xulp-dream-home.vercel.app/properties/2",
    githubUrl: "https://github.com/rajaperarasu/xulp-dream-home",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "AWS S3"],
    features: [
      { title: "Dynamic Property Filters", description: "Filter properties instantaneously by price range, square footage, amenities, and status." },
      { title: "High-Res Image Lightbox", description: "Full-screen media lightbox gallery for exploring interior & architectural details." },
      { title: "Property Specs Grid", description: "Clear key metric badges for bed/bath count, lot size, HOA fees, and year built." },
      { title: "Agent Contact Form", description: "Direct inquiry form linking prospective buyers to property leads." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Structured reusable UI component architecture for property cards and filter bars.",
      "Hosted high-resolution property imagery on AWS S3 with CloudFront CDN distribution."
    ],
    challenges: [
      {
        challenge: "Maintaining fast image gallery loading when displaying high-res architectural renders.",
        solution: "Implemented progressive webp image compression and lazy loading with Blur-up placeholders."
      }
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate Management Platform",
    tagline: "Comprehensive property management and listing system built for agents and tenant administration.",
    description: "Enterprise property portal managing listings, client inquiries, agent dashboards, and database search queries.",
    overview: "Real Estate Management Platform simplifies property administration by providing unified control over residential and commercial real estate assets. Features CRUD capabilities, search index optimization, and structured database relational mapping.",
    category: "Real Estate",
    featured: false,
    gridSize: "compact",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://real-estate-azure-xi.vercel.app/",
    githubUrl: "https://github.com/rajaperarasu/real-estate-management",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Tailwind CSS"],
    features: [
      { title: "Listing CRUD Management", description: "Complete database operations for creating, updating, archiving, and deleting listings." },
      { title: "Multi-parameter Search", description: "Query listings by keyword, zip code, price threshold, and available dates." },
      { title: "Role-based Dashboards", description: "Tailored views for public visitors, real estate agents, and site administrators." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Built Spring Boot REST backend with Hibernate JPA data models.",
      "Integrated SQL indexed queries for rapid search filtering."
    ],
    challenges: [
      {
        challenge: "Handling complex SQL join queries across agents, properties, and inquiry tables efficiently.",
        solution: "Refactored queries using JPA Criteria API and indexed frequent foreign key fields."
      }
    ]
  },
  {
    id: "auroramob",
    slug: "auroramob",
    title: "AuroraMob — Modern Mobile Tech Showcase",
    tagline: "Futuristic mobile technology landing page with 3D product previews and interactive specification sheets.",
    description: "A visually striking product launch platform for next-gen smart devices featuring interactive dark UI components and particle backdrops.",
    overview: "AuroraMob delivers an immersive product landing page experience. It showcases high-tech mobile devices with smooth animations, spec comparative tables, interactive feature cards, and pre-order workflow integration.",
    category: "Web Development",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://auroramob-mcv55afh.manus.space/",
    githubUrl: "https://github.com/rajaperarasu/auroramob",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    features: [
      { title: "Interactive 3D Product View", description: "Embedded canvas viewport allowing 360-degree rotation of mobile hardware models." },
      { title: "Dynamic Specs Comparison", description: "Side-by-side technical specification matrix for processor, camera, display, and battery metrics." },
      { title: "Pre-order Reservation Modal", description: "Smooth modal workflow for reserving launch devices with instant feedback." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Implemented hardware-accelerated Framer Motion scroll triggers.",
      "Crafted glowing neon dark mode styling adhering to SaaS aesthetic design principles."
    ],
    challenges: [
      {
        challenge: "Balancing high-performance 3D visual assets with fast page initial load times.",
        solution: "Utilized asynchronous R3F model loading with fallback 2D graphic placeholders."
      }
    ]
  },
  {
    id: "allizz-shop",
    slug: "allizz-shop",
    title: "Allizz Shop — E-Commerce Storefront",
    tagline: "Modern online shopping portal with dynamic product filter, cart state management, and checkout interface.",
    description: "A full-scale e-commerce web application with product categorizations, persistent shopping cart, product review system, and order summary.",
    overview: "Allizz Shop provides a complete digital storefront for retail goods. Users can browse products, apply multi-attribute filters, inspect product details, add items to a persistent cart, and simulate streamlined checkout procedures.",
    category: "E-Commerce",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://allizzashop-s36ohmjp.manus.space",
    githubUrl: "https://github.com/rajaperarasu/allizz-shop",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "MySQL"],
    features: [
      { title: "Persistent Shopping Cart", description: "Cart state synced across browser storage with real-time tax and shipping calculations." },
      { title: "Category & Price Filtering", description: "Instant product filtering by category, rating, price slider, and availability." },
      { title: "Responsive Product Cards", description: "Hover quick-view, badge status (Sale, New), and direct add-to-cart controls." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Managed global state clean architecture for shopping cart item management.",
      "Built clean responsive UI supporting desktop multi-column and mobile single-column grids."
    ],
    challenges: [
      {
        challenge: "Maintaining shopping cart synchronization across tab reloads without state loss.",
        solution: "Implemented local storage persistence layer with schema validation fallback."
      }
    ]
  },
  {
    id: "allizz-3d",
    slug: "allizz-3d",
    title: "Allizz 3D IT Company — Interactive Tech Portal",
    tagline: "Creative IT enterprise portal featuring interactive WebGL 3D graphics, service nodes, and digital workspace.",
    description: "Futuristic corporate website for an IT services firm incorporating WebGL 3D objects, service showcases, and interactive team nodes.",
    overview: "Allizz 3D IT Company demonstrates advanced creative frontend engineering. By merging Three.js 3D elements with clean corporate UI sections, the portal presents software development, cloud solution architectures, and cyber consulting services in a memorable visual format.",
    category: "3D / Creative",
    featured: false,
    gridSize: "large",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://allizz-3-d-it-company.vercel.app/",
    githubUrl: "https://github.com/rajaperarasu/allizz-3d-it-company",
    technologies: ["Three.js", "React.js", "Tailwind CSS", "Framer Motion", "WebGL"],
    features: [
      { title: "3D Interactive Hero Globe", description: "Custom Three.js WebGL canvas featuring interactive particle sphere and mouse tilt effect." },
      { title: "Service Matrix Node", description: "Interactive card layout detailing enterprise cloud, AI development, and DevOps services." },
      { title: "Dynamic Project Calculator", description: "Interactive cost estimator for prospective client project inquiries." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Engineered custom Three.js shaders and particle animation loops.",
      "Ensured 60 FPS smooth rendering through geometry buffer reuse and frame request throttling."
    ],
    challenges: [
      {
        challenge: "Optimizing 3D rendering on mobile GPUs without causing battery drain or frame drops.",
        solution: "Added dynamic resolution scaling and pixel ratio cap detection based on device capability."
      }
    ]
  },
  {
    id: "nova-prosthetics",
    slug: "nova-prosthetics",
    title: "Nova Prosthetics — MedTech Innovation Portal",
    tagline: "Next-gen bionic limb technology portal highlighting AI-driven prosthetic engineering and patient care.",
    description: "Medical technology web platform showcasing intelligent prosthetic devices, patient rehabilitation stories, and clinical trial request portals.",
    overview: "Nova Prosthetics combines medical engineering presentation with patient-centric digital design. Features interactive product exploration, sensor tech breakdowns, patient testimonials, and secure inquiry intake.",
    category: "Full Stack",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://nova-prosthetics.vercel.app/",
    githubUrl: "https://github.com/rajaperarasu/nova-prosthetics",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Generative AI", "REST API"],
    features: [
      { title: "Bionic Tech Spec Viewer", description: "Deconstructed view of neural sensors, motor controllers, and lightweight carbon fiber frame." },
      { title: "AI Fitting Assistance Guide", description: "Interactive guide helping patients identify optimal device configurations." },
      { title: "Clinical Trial Request", description: "Accessible request form for patient evaluation appointments." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Designed clean medical-grade UI adhering to high contrast accessibility guidelines.",
      "Integrated secure web form processing with validation."
    ],
    challenges: [
      {
        challenge: "Presenting complex medical hardware metrics in an intuitive visual structure.",
        solution: "Created interactive tabbed specification cards with visual icon indicators."
      }
    ]
  },
  {
    id: "netvanity",
    slug: "netvanity",
    title: "NetVanity — Digital Agency Showcase",
    tagline: "Sleek agency portfolio showcasing digital design, brand engineering, and custom web development services.",
    description: "Full-service digital design studio portal highlighting branding projects, web design case studies, and client testimonial grids.",
    overview: "NetVanity delivers a clean, minimalist agency web presence designed to highlight creative digital projects, service packages, and client collaboration workflows with sleek typography and smooth page transitions.",
    category: "Web Development",
    featured: false,
    gridSize: "compact",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://netvanity-z34ohmgp.manus.space",
    githubUrl: "https://github.com/rajaperarasu/netvanity",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    features: [
      { title: "Filterable Portfolio Grid", description: "Categorized showcase of brand strategy, web design, and UI development projects." },
      { title: "Interactive Service Pricing", description: "Transparent package tiers with custom request quote calculator." },
      { title: "Client Testimonial Slider", description: "Animated quote carousel featuring client reviews and impact metrics." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Crafted custom micro-interactions and hover glow effects.",
      "Optimized SEO performance score to 98% on Google Lighthouse."
    ],
    challenges: [
      {
        challenge: "Ensuring cross-browser animation parity across Chrome, Firefox, and Safari.",
        solution: "Used standardized Framer Motion transform primitives and vendor-prefixed CSS."
      }
    ]
  },
  {
    id: "shark-shop",
    slug: "shark-shop",
    title: "Shark Shop — Marine Equipment & Gear",
    tagline: "High-performance diving gear and marine equipment online store with inventory tracking.",
    description: "Specialized e-commerce storefront for ocean sports, diving equipment, and marine safety gear.",
    overview: "Shark Shop caters to aquatic sports enthusiasts with a robust product taxonomy, technical gear specification tables, stock status indicators, and streamlined checkout UX.",
    category: "E-Commerce",
    featured: false,
    gridSize: "compact",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://sharkshop-ywjg5r5v.manus.space",
    githubUrl: "https://github.com/rajaperarasu/shark-shop",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    features: [
      { title: "Technical Gear Selector", description: "Filter diving gear by depth rating, material certification, and size." },
      { title: "Inventory Alert System", description: "Dynamic badge tags highlighting low stock, pre-order, and flash sale items." },
      { title: "Quick-add Shopping Drawer", description: "Slide-out cart panel allowing rapid item modifications without navigating away." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Implemented responsive side-drawer cart UI component.",
      "Optimized mobile checkout click path reducing touch steps."
    ],
    challenges: [
      {
        challenge: "Managing multi-variant options (size, color, depth rating) on single product pages.",
        solution: "Constructed dynamic variant state hook with automated price adjustments."
      }
    ]
  },
  {
    id: "cyberstrike",
    slug: "cyberstrike",
    title: "CyberStrike — Esports & Gaming Hub",
    tagline: "High-octane esports tournament platform with live match scores, team brackets, and player profiles.",
    description: "Esports gaming ecosystem platform featuring tournament management, match schedules, leaderboard rankings, and streaming integration.",
    overview: "CyberStrike is built for competitive gaming communities. It features live tournament bracket trees, real-time match status updates, team rosters, and embedded video stream viewports with dark futuristic aesthetics.",
    category: "3D / Creative",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://cyberstrike-brjhnswk.manus.space",
    githubUrl: "https://github.com/rajaperarasu/cyberstrike",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Framer Motion"],
    features: [
      { title: "Live Tournament Brackets", description: "Interactive single/double elimination bracket visualizer with match progress." },
      { title: "Player & Team Stats Leaderboard", description: "Dynamic statistical rankings with win/loss ratios and tournament earnings." },
      { title: "Twitch/YouTube Stream Embed", description: "Seamless live stream player with chat overlay integration." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Designed dark cyber-themed visual interface with neon glowing accents.",
      "Built custom tournament bracket renderer."
    ],
    challenges: [
      {
        challenge: "Rendering large complex elimination brackets on small smartphone screens.",
        solution: "Designed touch-draggable scrollable bracket container with zoom controls."
      }
    ]
  },
  {
    id: "bookstore",
    slug: "bookstore",
    title: "Bookstore V2 — Full Stack Reader Portal",
    tagline: "End-to-end digital library and bookstore application with Java backend and order fulfillment.",
    description: "Full-stack web application for browsing, searching, reviewing, and purchasing physical and digital books.",
    overview: "Bookstore V2 demonstrates robust Java Spring Boot backend engineering paired with a modern React frontend. Features user authentication, book catalog management, search indexing, shopping cart, and order history tracking.",
    category: "Full Stack",
    featured: false,
    gridSize: "medium",
    image: "https://images.unsplash.com/photo-1507842229565-8a402b00f28e?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://bookstorev2-fhblkgld.manus.space/",
    githubUrl: "https://github.com/rajaperarasu/bookstore-v2",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Hibernate", "REST API", "Tailwind CSS"],
    features: [
      { title: "Full Stack CRUD Architecture", description: "Spring Boot REST controllers managing persistent MySQL book entities and orders." },
      { title: "Category & Author Indexing", description: "Fast filtering by genre, author, publish date, ratings, and price." },
      { title: "User Order Management", description: "Order creation, status updates (Pending, Shipped, Delivered), and receipt history." }
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1507842229565-8a402b00f28e?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Designed relational schema in MySQL with foreign key constraints.",
      "Implemented Spring Security and JWT authentication for protected routes."
    ],
    challenges: [
      {
        challenge: "Handling concurrent order checkout stock deductions reliably.",
        solution: "Implemented transactional isolation levels and database atomic update queries."
      }
    ]
  }
];
