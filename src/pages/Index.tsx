import { useState, useEffect, useCallback } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Moon, 
  BookOpen, 
  Users, 
  GraduationCap,
  Globe,
  MessageSquare,
  Database,
  Code,
  Layout,
  UserCircle,
  Settings,
  Layers,
  Server,
  Heart,
  Sparkles,
  Image,
  Check,
  Zap,
  Target,
  Shield,
  Cpu,
  Terminal,
  GitBranch,
  HardDrive
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  icon: React.ReactNode;
  accent?: "primary" | "secondary" | "accent";
  features?: string[];
  stats?: { label: string; value: string }[];
  cardStyle?: "hero" | "split" | "centered" | "timeline" | "grid" | "minimal" | "tech" | "showcase";
  hasScreenshot?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "SilayLearn",
    subtitle: "CC 201 - Final Project | Group 10",
    content: "A learning website all about Iloilo — discover the heart of Ilonggo heritage through interactive courses, cultural lessons, and community-driven learning.",
    icon: <BookOpen className="w-12 h-12" />,
    accent: "secondary",
    cardStyle: "hero",
  },
  {
    id: 2,
    title: "Introduction",
    content: "SilayLearn is a modern, user-friendly learning platform that shares and explores Iloilo's rich culture. It offers interactive lessons on tourism, cooking, agriculture, and craftsmanship, designed for students, teachers, parents, and anyone curious about Iloilo. With an AI learning assistant, the platform makes cultural education engaging, accessible, and enjoyable.",
    icon: <Heart className="w-12 h-12" />,
    accent: "primary",
    features: ["Interactive Lessons", "AI Learning Assistant", "Cultural Education"],
    cardStyle: "split",
  },
  {
    id: 3,
    title: "Project Description",
    content: "The MOOC web app is a modern, easy-to-use platform focused on teaching Iloilo's culture, heritage, and identity. It offers courses on local traditions, food, history, festivals, and cultural practices. Users can enroll in lessons, track progress, and learn interactively with an AI assistant to guide them.",
    icon: <Layers className="w-12 h-12" />,
    accent: "accent",
    features: ["Course Enrollment", "Progress Tracking", "Interactive Learning"],
    cardStyle: "centered",
  },
  {
    id: 4,
    title: "Cultural Relevance",
    content: "The website promotes localized online learning by focusing specifically on Iloilo's cultural identity. It offers courses about Iloilo cuisine, tourist spots, crafts, agriculture, and traditions. The AI Course Assistant explains lessons using Filipino or Hiligaynon with localized examples.",
    icon: <Globe className="w-12 h-12" />,
    accent: "secondary",
    features: ["Iloilo Cuisine", "Tourist Spots", "Traditional Crafts", "Local Agriculture"],
    cardStyle: "grid",
  },
  {
    id: 5,
    title: "Technical Implementation",
    subtitle: "Features Overview",
    content: "Built with modern technologies including React.js, Vite, and Tailwind CSS. The platform features secure authentication, course management, progress tracking, and an AI-powered learning assistant for enhanced user experience.",
    icon: <Code className="w-12 h-12" />,
    accent: "primary",
    features: ["React.js & Vite", "Secure Authentication", "AI Assistant", "Real-time Progress"],
    cardStyle: "tech",
  },
  {
    id: 6,
    title: "Home Page",
    subtitle: "Gateway to Learning",
    content: "The Home Page gives users an overview of the platform, featuring highlighted courses and clear buttons like 'Start Learning' and 'Browse Courses.' It helps users quickly explore lessons or create an account.",
    icon: <Layout className="w-12 h-12" />,
    accent: "accent",
    stats: [
      { label: "Local Courses", value: "50+" },
      { label: "Learners", value: "2,000+" },
      { label: "Expert Instructors", value: "20+" },
    ],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 7,
    title: "Course Page",
    subtitle: "Explore & Discover",
    content: "The Courses Page allows users to browse all available courses filtered by categories such as Iloilo tourism, cooking, agriculture, or craftsmanship. A search bar helps users quickly find specific lessons.",
    icon: <BookOpen className="w-12 h-12" />,
    accent: "primary",
    features: ["Tourism", "Cooking", "Language", "History"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 8,
    title: "Course Preview",
    subtitle: "Detailed Information",
    content: "The Course Details Page shows the course's objectives, available modules, and key information before enrollment. It includes an 'Enroll Now' button for easy registration, helping users understand what the course offers.",
    icon: <GraduationCap className="w-12 h-12" />,
    accent: "secondary",
    features: ["Course Objectives", "Module Overview", "Easy Enrollment", "Money-back Guarantee"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 9,
    title: "Learning Module",
    subtitle: "Interactive Study Area",
    content: "The Learning Module Page is the main study area where users access video lessons, text content, downloads, and interactive tools. It presents Iloilo-focused topics in a clear, organized format.",
    icon: <Sparkles className="w-12 h-12" />,
    accent: "accent",
    features: ["Video Lessons", "Text Content", "Downloads", "Interactive Tools"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 10,
    title: "About Page",
    subtitle: "Our Purpose & Mission",
    content: "The About Page outlines the platform's purpose, mission, vision, values, and advocacy. It emphasizes accessible lessons centered on Iloilo culture, supporting all types of learners while celebrating Iloilo heritage.",
    icon: <Heart className="w-12 h-12" />,
    accent: "primary",
    features: ["Rooted in Iloilo", "Community-driven", "Quality-first"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 11,
    title: "Authentication",
    subtitle: "Login & Registration",
    content: "The Login and Registration Pages let users securely sign in or create accounts, providing a personalized experience. They enable access to course enrollment and interactive features for all learners.",
    icon: <UserCircle className="w-12 h-12" />,
    accent: "secondary",
    features: ["Secure Sign In", "Easy Registration", "Personalized Experience"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 12,
    title: "AI Assistant",
    subtitle: "Meet Roxy",
    content: "The AI Assistant, available on lesson pages, helps users by answering questions, providing summaries, and translating content into Filipino or Hiligaynon. It ensures all users can understand lessons fully.",
    icon: <MessageSquare className="w-12 h-12" />,
    accent: "accent",
    features: ["Answer Questions", "Provide Summaries", "Translate Content", "Cultural Context"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 13,
    title: "User Profile",
    subtitle: "Account Settings",
    content: "The User Profile Page lets users manage their account information, including name, email, profile picture, password, and biography. Users can personalize their experience and toggle appearance settings.",
    icon: <Settings className="w-12 h-12" />,
    accent: "primary",
    features: ["Personal Information", "Avatar Customization", "Dark Mode Toggle"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 14,
    title: "User Dashboard",
    subtitle: "Track Your Progress",
    content: "The User Dashboard shows enrolled courses with progress bars, completion badges, and 'Continue Learning' shortcuts. Users can filter courses, view summary stats, and explore recommended Iloilo-focused lessons.",
    icon: <Users className="w-12 h-12" />,
    accent: "secondary",
    features: ["Progress Tracking", "Completion Badges", "Course Recommendations"],
    cardStyle: "showcase",
    hasScreenshot: true,
  },
  {
    id: 15,
    title: "CRUD Operations",
    subtitle: "Data Management",
    content: "The system's CRUD functionality connects user actions to a MySQL database via PHP. Create, Read, Update, and Delete operations ensure smooth course delivery and effective data management.",
    icon: <Database className="w-12 h-12" />,
    accent: "accent",
    features: ["Create Accounts", "Read Content", "Update Progress", "Delete Data"],
    cardStyle: "timeline",
  },
  {
    id: 16,
    title: "Technical Stack",
    subtitle: "Technologies Used",
    content: "Built with React.js, Vite, Tailwind CSS for the frontend. Backend powered by PHP and Python Flask. MySQL handles data storage. Git and GitHub for version control.",
    icon: <Code className="w-12 h-12" />,
    accent: "primary",
    features: ["React.js & Vite", "Tailwind CSS", "PHP & Python Flask", "MySQL Database"],
    cardStyle: "tech",
  },
  {
    id: 17,
    title: "Technologies",
    subtitle: "Development Tools",
    content: "Frontend: React.js, Vite, Tailwind CSS. Programming: JavaScript (ES6), JSX, TypeScript. Backend: PHP, Python Flask. Database: MySQL. AI Feature: Python Flask API-based assistant.",
    icon: <Server className="w-12 h-12" />,
    accent: "secondary",
    features: ["VS Code", "phpMyAdmin", "XAMPP", "GitHub"],
    cardStyle: "grid",
  },
  {
    id: 18,
    title: "Database Integration",
    subtitle: "MySQL Architecture",
    content: "MySQL is the primary relational database keeping all course, user, and progress data. Organized tables enable all essential MOOC features. Backend API routes handle CRUD operations interacting with these tables.",
    icon: <Database className="w-12 h-12" />,
    accent: "accent",
    features: ["User Management", "Course Storage", "Progress Tracking", "API Integration"],
    cardStyle: "minimal",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const goToSlide = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    goToSlide(next, "right");
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(prev, "left");
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];
  const accentColors = {
    primary: "from-primary to-primary-light",
    secondary: "from-secondary to-secondary-light",
    accent: "from-accent to-accent-light",
  };

  const accentBg = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/10",
    accent: "bg-accent/10",
  };

  const renderCardContent = () => {
    const accent = slide.accent || "primary";

    switch (slide.cardStyle) {
      case "hero":
        return (
          <div className="relative min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-xl" />
            
            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow mb-8 relative z-10`}>
              <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4 relative z-10">
              {slide.title}
            </h1>
            
            <p className={`font-body text-xl md:text-2xl bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-semibold mb-6 relative z-10`}>
              {slide.subtitle}
            </p>
            
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed relative z-10">
              {slide.content}
            </p>
            
            <div className="flex gap-4 mt-8 relative z-10">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-light text-primary-foreground font-body font-medium">
                Start Learning
              </div>
              <div className="px-6 py-3 rounded-full border-2 border-border text-foreground font-body font-medium hover:bg-muted transition-colors">
                Explore
              </div>
            </div>
          </div>
        );

      case "split":
        return (
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow mb-6`}>
                {slide.icon}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {slide.title}
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {slide.content}
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {slide.features?.map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl ${accentBg[accent]} border border-border/50 hover:border-primary/30 transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-body text-lg font-medium text-foreground">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "centered":
        return (
          <div className="flex flex-col items-center text-center p-8 md:p-12">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow mb-6`}>
              {slide.icon}
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
              {slide.title}
            </h1>
            
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              {slide.content}
            </p>
            
            <div className="relative w-full max-w-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[accent]} blur-3xl opacity-20 rounded-full`} />
              <div className="relative grid grid-cols-3 gap-4">
                {slide.features?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-card border border-border text-center hover:shadow-medium transition-all duration-300"
                  >
                    <Zap className={`w-6 h-6 mx-auto mb-2 text-${accent === 'primary' ? 'primary' : accent === 'secondary' ? 'secondary' : 'accent'}`} />
                    <span className="font-body text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "grid":
        return (
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow`}>
                {slide.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={`font-body text-lg bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-medium`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {slide.content}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {slide.features?.map((feature, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-muted/30 border border-border p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${accentColors[accent]} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
                  <Target className={`w-8 h-8 mb-3 text-${accent === 'primary' ? 'primary' : accent === 'secondary' ? 'secondary' : 'accent'}`} />
                  <span className="font-body text-base font-semibold text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "tech":
        return (
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow relative`}>
                {slide.icon}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={`font-body text-lg bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-medium`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {slide.content}
            </p>
            
            {/* Code-style feature display */}
            <div className="rounded-2xl bg-foreground/5 dark:bg-background/50 border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">tech-stack.config</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                {slide.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-primary">const</span>
                    <span className="text-secondary">{feature.replace(/\s+/g, '_').toLowerCase()}</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-accent">"{feature}"</span>
                    <span className="text-muted-foreground">;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "timeline":
        return (
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow`}>
                {slide.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={`font-body text-lg bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-medium`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {slide.content}
            </p>
            
            {/* Timeline-style CRUD display */}
            <div className="relative">
              <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${accentColors[accent]}`} />
              <div className="space-y-6">
                {slide.features?.map((feature, idx) => (
                  <div key={idx} className="relative flex items-center gap-4 pl-12">
                    <div className={`absolute left-4 w-5 h-5 rounded-full bg-gradient-to-br ${accentColors[accent]} border-4 border-card shadow-soft`} />
                    <div className="flex-1 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all">
                      <span className="font-body font-semibold text-foreground">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "showcase":
        return (
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow`}>
                {slide.icon}
              </div>
              <div className="flex-1">
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={`font-body text-lg md:text-xl bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-medium`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {slide.content}
            </p>

            {/* Screenshot Placeholder */}
            {slide.hasScreenshot && (
              <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/30 border-2 border-dashed border-border aspect-video flex items-center justify-center relative group hover:border-primary/40 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="text-center z-10 p-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity shadow-medium`}>
                    <Image className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <p className="text-base font-body font-medium text-muted-foreground">
                    {slide.title} Screenshot
                  </p>
                  <p className="text-sm text-muted-foreground/60 mt-1">
                    Replace with actual screenshot
                  </p>
                </div>
              </div>
            )}

            {/* Stats */}
            {slide.stats && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                {slide.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`text-center p-4 rounded-xl ${accentBg[accent]} border border-border/50`}
                  >
                    <p className={`font-display text-2xl md:text-3xl font-bold bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Features */}
            {slide.features && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {slide.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 rounded-xl bg-muted/50 border border-border text-center hover:border-primary/30 hover:bg-muted transition-all duration-300"
                  >
                    <span className="font-body text-sm font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "minimal":
        return (
          <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <div className="max-w-2xl mx-auto text-center">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow mb-6`}>
                {slide.icon}
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {slide.title}
              </h1>
              
              {slide.subtitle && (
                <p className={`font-body text-lg bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-medium mb-6`}>
                  {slide.subtitle}
                </p>
              )}
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                {slide.content}
              </p>
              
              {slide.features && (
                <div className="flex flex-wrap justify-center gap-3">
                  {slide.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full ${accentBg[accent]} border border-border/50 text-sm font-body font-medium text-foreground`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accentColors[accent]} flex items-center justify-center shadow-glow`}>
                {slide.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className={`font-body text-lg bg-gradient-to-r ${accentColors[accent]} bg-clip-text text-transparent font-medium`}>
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {slide.content}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background woven-pattern overflow-hidden relative">
      {/* Ambient gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-50 transition-opacity duration-700"
        style={{ background: "var(--gradient-radial)" }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-medium">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground hidden sm:block">
              SilayLearn
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground font-body hidden sm:block">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-muted transition-all duration-300 shadow-soft"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Card Container */}
      <main className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24">
        <div className="w-full max-w-4xl relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all duration-300 shadow-medium group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all duration-300 shadow-medium group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Card */}
          <div
            key={currentSlide}
            className={`
              relative rounded-2xl md:rounded-3xl overflow-hidden
              bg-card border border-border
              shadow-card
              transition-all duration-500
              ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}
            `}
          >
            {/* Card Header Gradient */}
            <div className={`h-2 bg-gradient-to-r ${accentColors[slide.accent || "primary"]}`} />
            
            {renderCardContent()}

            {/* Card Footer */}
            <div className="px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-body text-xs text-muted-foreground">
                  CC 201 - Final Project
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  Group 10
                </span>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8 flex-wrap px-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx, idx > currentSlide ? "right" : "left")}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${idx === currentSlide 
                    ? "w-8 bg-gradient-to-r from-primary to-secondary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer hint */}
      <footer className="fixed bottom-4 left-0 right-0 text-center">
        <p className="font-body text-xs text-muted-foreground/60">
          Use arrow keys or swipe to navigate
        </p>
      </footer>
    </div>
  );
};

export default Index;
