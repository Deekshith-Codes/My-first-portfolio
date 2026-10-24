import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle,
  Binary,
  Cpu,
  Brain,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Education() {
  const edu = PORTFOLIO_DATA.education[0];

  const academicTracks = [
    {
      title: "Artificial Intelligence Foundations",
      desc: "Heuristic search, probabilistic reasoning, knowledge representation, and computational problem solving.",
      icon: Brain,
    },
    {
      title: "Machine Learning & Data Science",
      desc: "Supervised and unsupervised learning, statistical inference, feature engineering, and predictive pipelines.",
      icon: Cpu,
    },
    {
      title: "Core Computer Science",
      desc: "Data Structures & Algorithms, Object-Oriented Programming in Python, Database Architecture, and System Design.",
      icon: Binary,
    },
    {
      title: "Mathematics & Optimization",
      desc: "Linear Algebra, Multivariate Calculus, Discrete Mathematics, and Probability Theory for AI models.",
      icon: BookOpen,
    },
  ];

  const timelineMilestones = [
    {
      phase: "2024 – Present",
      title: "B.E. in CSE (AI & ML) Enrollment",
      institution: "AJ Institute of Engineering and Technology, Mangaluru",
      status: "In Progress (Current Student)",
      description: "Dedicated curriculum in artificial intelligence, mathematical fundamentals, and Python software engineering.",
      isCurrent: true,
    },
    {
      phase: "Academic Capstone (2024–2028)",
      title: "Applied Machine Learning & Project Pipeline",
      institution: "Department of Computer Science & Engineering",
      status: "Active Engineering Roadmap",
      description: "Progressive development of real-world intelligent systems, data exploration models, and full-stack integration.",
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Formal Education & Timeline
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Academic progression and specialized curriculum in Artificial Intelligence and Machine Learning.
            </p>
          </div>
        </ScrollReveal>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto space-y-10">
          <ScrollReveal delay={200} direction="up">
            <div className="relative rounded-2xl bg-[#0b111e]/90 border border-white/10 p-6 sm:p-10 shadow-xl backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 rounded-t-2xl" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Enrolled Candidate • 2024–2028</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-base sm:text-lg font-medium text-sky-400 mb-2">
                      {edu.specialization}
                    </div>
                    <div className="text-sm font-semibold text-slate-300">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-row md:flex-col items-start md:items-end gap-2.5 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights from Source */}
              <div className="py-6 border-b border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                  Academic Program Overview
                </h4>
                <ul className="space-y-3">
                  {edu.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum Focus Modules */}
              <div className="pt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Specialized Coursework Pillars</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {academicTracks.map((track) => {
                    const Icon = track.icon;
                    return (
                      <div
                        key={track.title}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-500/25 hover:bg-white/[0.04] transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                          <Icon className="w-4 h-4 text-sky-400" />
                          <span>{track.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {track.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer Verification Note */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">AJIET Mangaluru • Artificial Intelligence & Machine Learning</span>
                <span className="text-emerald-400/80 font-mono">Source Verified</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Chronological Academic Timeline */}
          <div className="relative pl-6 sm:pl-8 ml-3 sm:ml-6 border-l-2 border-indigo-500/25 space-y-8">
            {timelineMilestones.map((item, idx) => (
              <ScrollReveal key={item.title} delay={150 * (idx + 1)} direction="left">
                <div className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#06090e] border-2 border-indigo-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                    {item.isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>

                  <div className="p-5 rounded-xl bg-[#0b111e]/70 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                        {item.phase}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
