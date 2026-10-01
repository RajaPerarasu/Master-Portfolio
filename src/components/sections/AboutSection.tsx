import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Server, Cloud, Cpu, Database, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { developerInfo } from '../../data/developerInfo';

const coreTechs = [
  { name: 'Java & Spring Boot', icon: Server, color: 'text-amber-400' },
  { name: 'React.js & JS', icon: Code2, color: 'text-cyan-400' },
  { name: 'AWS Cloud Services', icon: Cloud, color: 'text-orange-400' },
  { name: 'Generative AI & LLMs', icon: Cpu, color: 'text-purple-400' },
  { name: 'MySQL & Relational SQL', icon: Database, color: 'text-emerald-400' },
  { name: 'REST APIs & Microservices', icon: Terminal, color: 'text-blue-400' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Modern Cloud & AI Web Solutions
          </h2>
          <p className="text-slate-400 text-base">
            Bridging robust backend engineering with responsive frontend interfaces and cloud computing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed"
          >
            <p className="text-lg text-slate-200 font-medium">
              I am <span className="text-cyan-400 font-semibold">{developerInfo.name}</span>, a dedicated Java Full Stack Developer with hands-on expertise in building resilient backend microservices, modern single-page frontend applications, and deploying scalable workloads on AWS.
            </p>

            <p>
              My engineering stack centers on enterprise-grade <span className="text-amber-300 font-mono">Java</span> and <span className="text-emerald-400 font-mono">Spring Boot</span> for REST API development, ORM database persistence with <span className="text-cyan-300 font-mono">Hibernate & JPA</span>, and dynamic frontend web clients with <span className="text-cyan-400 font-mono">React.js</span> and <span className="text-sky-300 font-mono">JavaScript</span>. I also have development experience with <span className="text-indigo-400 font-mono">PHP</span> and relational data management in <span className="text-emerald-300 font-mono">MySQL</span>.
            </p>

            <p>
              With recent hands-on internship experience at CS Infotech, I actively integrate <span className="text-purple-400 font-mono font-semibold">Generative AI</span> capabilities into web platforms—enabling intelligent conversational features, automated workflows, and LLM API integrations on cloud infrastructure like <span className="text-orange-400 font-mono font-semibold">AWS (EC2, S3, IAM, Lambda)</span>.
            </p>

            {/* Core Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {coreTechs.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="p-3 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-2.5 hover:border-cyan-500/30 transition-colors"
                  >
                    <IconComponent className={`w-4 h-4 ${tech.color} shrink-0`} />
                    <span className="text-xs font-semibold text-slate-200">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Code Environment Visual Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">DeveloperProfile.java</span>
              </div>

              {/* Code Snippet Display */}
              <div className="pt-4 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                <p className="text-purple-400">package <span className="text-slate-200">com.rajaperarasu.portfolio;</span></p>
                <p className="text-slate-500">// Full Stack Engineer & Cloud Developer</p>
                <p><span className="text-amber-400">public class</span> <span className="text-cyan-300">Developer</span> &#123;</p>
                
                <div className="pl-4 space-y-1">
                  <p><span className="text-amber-400">private String</span> name = <span className="text-emerald-300">"Raja Perarasu R"</span>;</p>
                  <p><span className="text-amber-400">private String[]</span> stack = &#123;</p>
                  <p className="pl-4 text-cyan-300">"Java", "Spring Boot", "React.js",</p>
                  <p className="pl-4 text-cyan-300">"AWS Cloud", "Generative AI", "MySQL"</p>
                  <p>&#125;;</p>
                  
                  <p className="pt-2"><span className="text-amber-400">public boolean</span> <span className="text-blue-400">isReadyToBuild</span>() &#123;</p>
                  <p className="pl-4 text-amber-400">return <span className="text-purple-400">true</span>;</p>
                  <p>&#125;</p>
                </div>
                <p>&#125;</p>
              </div>

              {/* Bottom Feature Badges */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> Clean Architecture
                </span>
                <span className="font-mono text-cyan-400">Java 21 • Spring Boot 3</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
