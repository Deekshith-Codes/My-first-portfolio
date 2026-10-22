"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ExternalLink, 
  AlertCircle, 
  Terminal, 
  Clock
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Projects & Technical Builds
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Real-world project pipeline reflecting stated interests in Python, Machine Learning, and Full Stack Development.
          </p>
        </div>

        {/* Informative Notice & Transparency Policy */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 flex items-start gap-3 backdrop-blur-md">
          <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Strict Transparency Protocol:</strong> In accordance with verified records from <code>Profilee.pdf</code>, no completed repositories were listed. Rather than inventing fictitious projects, this section provides structured, production-ready placeholders corresponding to Deekshith&apos;s active learning roadmap.
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {PORTFOLIO_DATA.projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-[#0b111e]/90 border border-dashed border-white/15 p-6 flex flex-col justify-between hover:border-sky-500/40 hover:bg-[#0f172a]/90 transition-all duration-300 group"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-full border border-yellow-400/20">
                    <Clock className="w-3 h-3" />
                    <span>{proj.status}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Upcoming Build
                  </span>
                </div>

                {/* Title & Headline */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {proj.title}
                </h3>
                <div className="text-xs font-medium text-sky-400 mb-3">
                  {proj.headline}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.targetStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Placeholder Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-500">
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>Repo: Coming Soon</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Guide Box: How to Add Real Projects */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#06090e] border border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3 text-sm font-mono text-sky-400">
            <Terminal className="w-4 h-4" />
            <span>Developer Guide: How to Add New Projects</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            Adding verified projects with GitHub links and live demos takes just seconds:
          </p>
          <div className="p-4 rounded-xl bg-[#0b111e] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
            <p className="text-slate-500">&#47;&#47; Edit src/data/portfolioData.ts</p>
            <p>
              <span className="text-indigo-400">&#123;</span>
            </p>
            <p className="pl-4">
              <span className="text-slate-400">title:</span>{" "}
              <span className="text-emerald-300">&quot;Stock Price Predictor with LSTM&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-slate-400">githubUrl:</span>{" "}
              <span className="text-emerald-300">&quot;https://github.com/deekshith-p/project-repo&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-slate-400">liveUrl:</span>{" "}
              <span className="text-emerald-300">&quot;https://project-demo.vercel.app&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-slate-400">stack:</span> [<span className="text-yellow-300">&quot;Python&quot;</span>, <span className="text-yellow-300">&quot;TensorFlow&quot;</span>, <span className="text-yellow-300">&quot;FastAPI&quot;</span>]
            </p>
            <p>
              <span className="text-indigo-400">&#125;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
