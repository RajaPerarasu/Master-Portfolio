import { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Java", badge: "Core & Advanced" },
      { name: "Spring Boot", badge: "REST Framework" },
      { name: "Spring MVC", badge: "Architecture" },
      { name: "Hibernate", badge: "ORM" },
      { name: "JPA & JDBC", badge: "Persistence" },
      { name: "PHP", badge: "Web Engine" },
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Code2",
    skills: [
      { name: "React.js", badge: "UI Library" },
      { name: "JavaScript", badge: "ES6+" },
      { name: "HTML5", badge: "Markup" },
      { name: "CSS3 / Tailwind", badge: "Styling" },
      { name: "Bootstrap", badge: "Framework" },
    ]
  },
  {
    title: "Cloud & DevOps",
    iconName: "Cloud",
    skills: [
      { name: "AWS EC2", badge: "Compute" },
      { name: "AWS S3", badge: "Storage" },
      { name: "AWS IAM", badge: "Security" },
      { name: "AWS VPC", badge: "Networking" },
      { name: "AWS RDS", badge: "Database" },
      { name: "AWS Lambda & CloudWatch", badge: "Serverless & Logs" },
      { name: "ELB & Auto Scaling", badge: "Infrastructure" },
      { name: "AWS CLI", badge: "Tooling" },
      { name: "Git & GitHub", badge: "Version Control" },
    ]
  },
  {
    title: "Artificial Intelligence",
    iconName: "Cpu",
    skills: [
      { name: "Generative AI", badge: "Core Tech" },
      { name: "AI API Integration", badge: "OpenAI / Claude" },
      { name: "LLM Integration", badge: "Workflows" },
      { name: "Prompt Engineering", badge: "Optimization" },
    ]
  },
  {
    title: "Database Systems",
    iconName: "Database",
    skills: [
      { name: "MySQL", badge: "RDBMS" },
      { name: "SQL", badge: "Queries & Indexing" },
    ]
  },
  {
    title: "Testing & Engineering Tools",
    iconName: "Wrench",
    skills: [
      { name: "Selenium", badge: "Automation" },
      { name: "Manual & API Testing", badge: "QA" },
      { name: "Postman", badge: "API Testing" },
      { name: "Maven", badge: "Build Tool" },
      { name: "IntelliJ IDEA & VS Code", badge: "IDEs" },
    ]
  }
];
