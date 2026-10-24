import { 
  UserCheck, 
  MapPin, 
  Code, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Compass,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const interestAreas = [
    {
      title: "Python Programming",
      status: "Verified Top Skill",
      description: "Confirmed primary programming language used for computational thinking, algorithmic logic, and data analysis.",
      icon: Code,
      accent: "from-sky-500/20 to-sky-500/5",
      border: "border-sky-500/30",
      iconColor: "text-sky-400",
    },
    {
      title: "Machine Learning",
      status: "Headline Focus Area",
      description: "Core specialization of engineering degree; studying model training, predictive systems, and real-world ML workflows.",
      icon: Cpu,
      accent: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/30",
      iconColor: "text-indigo-400",
    },
    {
      title: "Data Science & Analytics",
      status: "Job Simulation Certified",
      description: "Applied problem solving through the Deloitte Data Analytics simulation, extracting actionable insights from data sets.",
      icon: Sparkles,
      accent: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/30",
      iconColor: "text-cyan-400",
    },
    {
      title: "Full Stack Development",
      status: "Active Exploration Area",
      description: "Building responsive web interfaces and connecting modern frontends with intelligent backend services.",
      icon: Layers,
      accent: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Profile Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              About Deekshith P
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              A transparent overview of academic background, core focus disciplines, 
              and technical aspirations based directly on confirmed credentials.
            </p>
          </div>
        </ScrollReveal>

        {/* Narrative & Profile Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Biography Narrative Card */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200} direction="up" className="h-full">
              <div className="h-full rounded-2xl bg-[#0b111e]/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Candidate Context</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Aspiring Data Scientist with an Engineering Foundation
                  </h3>
                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      I am an undergraduate student currently pursuing a{" "}
                      <strong className="text-white font-medium">
                        Bachelor of Engineering in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning
                      </strong>{" "}
                      at AJ Institute of Engineering and Technology, Mangaluru (2024–2028).
                    </p>
                    <p>
                      Based in <strong className="text-white font-medium">Kasaragod, Kerala, India</strong>, 
                      my academic journey is centered around developing solid mathematical intuition, algorithmic proficiency, 
                      and hands-on code development in <strong className="text-sky-300 font-medium">Python</strong>.
                    </p>
                    <p>
                      My goal is to bridge the gap between theoretical machine learning research and functional real-world applications. 
                      Having completed the <strong className="text-yellow-300 font-medium">Deloitte Data Analytics Job Simulation</strong>, 
                      I am continuously refining my skills to turn raw data into informed, high-impact decisions.
                    </p>
                  </div>
                </div>

                {/* Geographic & Academic Anchor */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-sky-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Location</div>
                      <div className="text-sm font-semibold text-white">Kasaragod, Kerala, India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Current Phase</div>
                      <div className="text-sm font-semibold text-white">B.E. Student (AI & ML)</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Pillars Panel */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <ScrollReveal delay={300} direction="up">
              <div className="rounded-2xl bg-gradient-to-br from-sky-950/40 via-[#0b111e]/80 to-indigo-950/40 border border-white/10 p-6 backdrop-blur-md hover:border-sky-500/30 transition-all duration-300">
                <h4 className="text-sm font-mono text-sky-400 uppercase tracking-wider mb-2">
                  Core Philosophy
                </h4>
                <p className="text-lg font-semibold text-white mb-2">
                  &ldquo;Building Real-World Projects&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Rather than claiming unverified expertise, my focus is disciplined execution: 
                  writing clean Python code, understanding data distributions, and engineering systems that solve tangible problems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="up" className="flex-1">
              <div className="rounded-2xl bg-[#0b111e]/80 border border-white/10 p-6 h-full flex flex-col justify-between backdrop-blur-md hover:border-white/20 transition-all duration-300">
                <div>
                  <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Verified Credentials Overview
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span><strong>Institution:</strong> AJIET, Mangaluru</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span><strong>Degree:</strong> B.E. CSE (AI & ML), 2024–2028</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span><strong>Primary Language:</strong> Python (Verified)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span><strong>Certification:</strong> Deloitte Data Analytics</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-500 font-mono">
                  Source Document: Profilee.pdf • Fully Verified
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Pillars from Headline */}
        <div>
          <ScrollReveal delay={200} direction="up">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span>Specialization & Focus Areas</span>
              <span className="text-xs font-mono font-normal text-slate-400">(Extracted from Headline)</span>
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interestAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <ScrollReveal key={area.title} delay={150 * (index + 1)} direction="up">
                  <div
                    className={`h-full rounded-xl bg-gradient-to-b ${area.accent} border ${area.border} p-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-sky-500/10 cursor-default`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg bg-black/40 ${area.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {area.status}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white mb-1.5">{area.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{area.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
