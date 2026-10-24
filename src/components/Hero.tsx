"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  ArrowRight, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Award, 
  Terminal, 
  BrainCircuit, 
  FileCheck2, 
  Copy, 
  Check,
  Sparkles
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeSpecializationIndex, setActiveSpecializationIndex] = useState(0);

  const specializations = [
    "Artificial Intelligence & ML",
    "Python Algorithmic Pipelines",
    "Data Science & Analytics",
    "Full Stack Development",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpecializationIndex((prev) => (prev + 1) % specializations.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [specializations.length]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Ambient Radial Gradients with subtle floating animation */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-500/15 via-indigo-600/10 to-transparent blur-[130px] pointer-events-none -z-10 animate-pulse-subtle"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-float-subtle"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <ScrollReveal delay={100} direction="up">
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wide mb-6 shadow-sm hover:border-sky-400/50 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Verified AI/ML Profile • 2024–2028</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            {/* Name Display with Shimmer Gradient */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300} direction="up">
            {/* Dynamic Rotating Headline Focus Area */}
            <div className="flex items-center gap-2 mb-4 text-base sm:text-lg font-medium text-sky-400/95 font-mono">
              <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Specializing in:</span>
              <span className="text-white px-2 py-0.5 rounded-md bg-white/5 border border-white/10 transition-all duration-500">
                {specializations[activeSpecializationIndex]}
              </span>
            </div>

            {/* Official Headline from source */}
            <p className="text-sm sm:text-base font-normal text-slate-300/90 leading-relaxed mb-5 max-w-2xl">
              {PORTFOLIO_DATA.personal.headline}
            </p>

            {/* Concise Introduction strictly based on provided info */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-6">
              Undergraduate engineering student at{" "}
              <strong className="text-white font-semibold">
                AJ Institute of Engineering and Technology, Mangaluru
              </strong>
              , dedicated to mastering Artificial Intelligence, Data Science, and Machine Learning. 
              Focused on Python, real-world algorithmic implementations, and full-stack engineering.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="up">
            {/* Verified Quick Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>AJIET (2024 – 2028)</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Top Skill: Python</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500} direction="up">
            {/* Action Buttons with active states and tactile feedback */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 active:scale-[0.98] text-white font-medium text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b111e] hover:bg-slate-800/80 active:scale-[0.98] text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-sky-500/30 transition-all duration-200"
                aria-label="View LinkedIn Profile of Deekshith P"
              >
                <LinkedInIcon className="w-4 h-4 text-sky-400" />
                <span>View LinkedIn Profile</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-300 hover:text-white font-mono text-xs border border-white/5 hover:border-white/20 transition-all"
                title="Copy verified email to clipboard"
                aria-label="Copy verified email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Interactive 3D Tilt Console */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <ScrollReveal delay={300} direction="up" className="w-full max-w-md">
            <TiltCard maxTilt={8} scaleOnHover={1.02} glare={true} className="w-full">
              {/* Ambient Aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-cyan-500/20 blur-xl opacity-70" />

              {/* Futuristic Tech Console Card */}
              <div className="relative rounded-2xl bg-[#0a0f1d]/90 border border-white/10 p-5 shadow-2xl backdrop-blur-xl">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      deekshith_profile.py
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <FileCheck2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Code Demonstration Snippet */}
                <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-1.5 mb-5 p-3.5 rounded-xl bg-[#05070d]/85 border border-white/5">
                  <p className="text-slate-500"># Source: Profilee.pdf (Verified Data)</p>
                  <p>
                    <span className="text-indigo-400">class</span>{" "}
                    <span className="text-yellow-300">Candidate</span>:
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name</span> ={" "}
                    <span className="text-emerald-300">&quot;Deekshith P&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">education</span> ={" "}
                    <span className="text-emerald-300">&quot;B.E. CSE (AI & ML)&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">college</span> ={" "}
                    <span className="text-emerald-300">&quot;AJIET, Mangaluru&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">duration</span> ={" "}
                    <span className="text-sky-300">&quot;2024 - 2028&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">primary_skill</span> ={" "}
                    <span className="text-emerald-300">&quot;Python&quot;</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">certification</span> ={" "}
                    <span className="text-yellow-300">&quot;Deloitte Analytics&quot;</span>
                  </p>
                </div>

                {/* Visual Metrics from Verified Source */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-sky-500/20 transition-colors">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <BrainCircuit className="w-3.5 h-3.5 text-sky-400" />
                      <span>Specialization</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">AI & Machine Learning</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-colors">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                      <Award className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Job Simulation</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Deloitte Data Analytics</div>
                  </div>
                </div>

                {/* Status footer inside console */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Kasaragod, Kerala
                  </span>
                  <span className="font-mono text-slate-500">Interactive 3D • Verified</span>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
