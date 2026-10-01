import { Certification } from '../types/portfolio';

export const certificationsData: Certification[] = [
  {
    id: "cert-java-fullstack",
    title: "Java Full Stack Development",
    issuer: "Professional Certification Institute",
    date: "2026",
    skills: ["Java", "Spring Boot", "Hibernate", "REST API", "React.js", "MySQL"],
    icon: "Code"
  },
  {
    id: "cert-aws-cloud",
    title: "AWS Cloud Fundamentals",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    skills: ["AWS EC2", "S3", "IAM", "VPC", "Cloud Architecture", "RDS"],
    icon: "Cloud"
  },
  {
    id: "cert-ai-fundamentals",
    title: "AI Fundamentals & Generative AI",
    issuer: "AI Academy",
    date: "2026",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI API Integration"],
    icon: "Sparkles"
  },
  {
    id: "cert-tally",
    title: "Tally ERP 9 Professional",
    issuer: "National Educational Council",
    date: "2025",
    skills: ["Financial Accounting", "Inventory Management", "ERP Workflows"],
    icon: "BookOpen"
  },
  {
    id: "cert-m365",
    title: "Microsoft 365 Certified",
    issuer: "Microsoft Training Partner",
    date: "2025",
    skills: ["Cloud Tools", "Enterprise Applications", "Office 365 Suite"],
    icon: "Monitor"
  },
  {
    id: "cert-typewriting",
    title: "Typewriting Certification",
    issuer: "Department of Technical Education",
    date: "2024",
    skills: ["High-speed Typing", "Accuracy", "Document Formatting"],
    icon: "Keyboard"
  }
];
