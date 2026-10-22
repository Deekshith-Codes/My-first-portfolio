import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle,
  Binary,
  Cpu,
  Brain
} from "lucide-react";

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

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Formal Education
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Academic degree and specialized curriculum in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-[#0b111e]/90 border border-white/10 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
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
                    <span>Enrolled Candidate</span>
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
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Specialized Coursework Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academicTracks.map((track) => {
                  const Icon = track.icon;
                  return (
                    <div
                      key={track.title}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
