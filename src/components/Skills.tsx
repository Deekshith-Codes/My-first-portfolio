"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Code2, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  PlusCircle, 
  HelpCircle,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"verified" | "roadmap">("verified");

  const pythonCapabilities = [
    {
      title: "Algorithmic Logic & Data Structures",
      detail: "Clean code structure, list/dict comprehensions, time complexity optimization, and problem-solving patterns.",
    },
    {
      title: "Data Manipulation & Analytics Foundation",
      detail: "Applied during data job simulations; processing structured sets and calculating quantitative metrics.",
    },
    {
      title: "Machine Learning Model Prototyping",
      detail: "Foundational scripting for training pipelines, tensor operations, and evaluating predictive accuracy.",
    },
    {
      title: "Automation & Scripting",
      detail: "Automating repetitive computational routines, file processing, and pipeline scripting.",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Skills & Technical Stack
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Strictly distinguishing verified proficiencies from planned academic roadmaps.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={200} direction="up">
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#0b111e] border border-white/10 shadow-lg">
              <button
                onClick={() => setActiveTab("verified")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
                  activeTab === "verified"
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Verified Top Skill (1)</span>
              </button>

              <button
                onClick={() => setActiveTab("roadmap")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
                  activeTab === "roadmap"
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Skills to Add / Roadmap ({PORTFOLIO_DATA.skills.roadmap.length})</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Verified Tab Content */}
        {activeTab === "verified" && (
          <ScrollReveal delay={250} direction="up">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Python Featured Card wrapped in 3D Tilt */}
              <TiltCard maxTilt={5} scaleOnHover={1.01} glare={true}>
                <div className="rounded-2xl bg-[#0b111e]/90 border border-emerald-500/30 p-6 sm:p-8 shadow-xl backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <Code2 className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Profile Verified • Top Skill</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          Python (Programming Language)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Primary Language for AI/ML, Data Processing, and Automation
                        </p>
                      </div>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                      Official PDF Top Skill
                    </div>
                  </div>

                  {/* Python Breakdown Grid */}
                  <div className="py-6 border-b border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Applied Python Competency Areas</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pythonCapabilities.map((cap) => (
                        <div
                          key={cap.title}
                          className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300"
                        >
                          <div className="text-sm font-semibold text-white mb-1">
                            {cap.title}
                          </div>
                          <div className="text-xs text-slate-400 leading-relaxed">
                            {cap.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Code Viewer */}
                  <div className="pt-6">
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-sky-400" />
                        <span>python_data_pipeline.py</span>
                      </div>
                      <span className="text-emerald-400"># Valid Python 3 Syntax</span>
                    </div>
                    <div className="rounded-xl bg-[#06090e] border border-white/10 p-4 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto">
                      <p className="text-slate-500"># Deekshith P - AI/ML Data Analytics Pattern</p>
                      <p>
                        <span className="text-indigo-400">def</span>{" "}
                        <span className="text-sky-300">analyze_ai_dataset</span>
                        (data_stream: <span className="text-yellow-300">list</span>):
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">cleaned</span> = [x{" "}
                        <span className="text-indigo-400">for</span> x{" "}
                        <span className="text-indigo-400">in</span> data_stream{" "}
                        <span className="text-indigo-400">if</span> x{" "}
                        <span className="text-indigo-400">is not</span>{" "}
                        <span className="text-amber-300">None</span>]
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-400">return</span> &#123;
                      </p>
                      <p className="pl-8">
                        <span className="text-emerald-300">&quot;total_samples&quot;</span>:{" "}
                        <span className="text-sky-300">len</span>(cleaned),
                      </p>
                      <p className="pl-8">
                        <span className="text-emerald-300">&quot;status&quot;</span>:{" "}
                        <span className="text-emerald-300">&quot;Pipeline Ready for ML&quot;</span>,
                      </p>
                      <p className="pl-4">&#125;</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        )}

        {/* Roadmap Tab Content */}
        {activeTab === "roadmap" && (
          <ScrollReveal delay={250} direction="up">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white">Transparency Policy:</strong> These skills are derived from Deekshith&apos;s professional headline or upcoming AI/ML curriculum. 
                  They are preserved here as placeholders until formal coursework projects or repositories are verified.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.skills.roadmap.map((skill, index) => (
                  <ScrollReveal key={skill.name} delay={100 * (index + 1)} direction="up">
                    <div className="h-full rounded-xl bg-[#0b111e]/80 border border-dashed border-white/15 p-5 flex flex-col justify-between hover:border-sky-500/40 hover:bg-[#0f172a]/90 transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full border border-yellow-400/20">
                            Pending Verification
                          </span>
                          <span className="text-xs text-slate-500">{skill.category}</span>
                        </div>
                        <h4 className="text-base font-semibold text-white mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-500">
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>To be confirmed via project / assessment</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
