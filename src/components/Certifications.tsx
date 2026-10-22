"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  FileText, 
  Info, 
  X, 
  ShieldCheck, 
  BarChart3, 
  FileCheck
} from "lucide-react";

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const cert = PORTFOLIO_DATA.certifications[0];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Certifications & Simulations
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Verified simulation and credential completions extracted from source documents.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-[#0b111e]/90 border border-white/10 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-sky-400 rounded-t-2xl" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-yellow-400/90 font-medium">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono shrink-0">
                Job Simulation
              </div>
            </div>

            {/* Core Competencies Trained */}
            <div className="py-6 border-b border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
                <span>Simulated Professional Focus</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Completed hands-on practical tasks evaluating client datasets, formulating analytical hypotheses, 
                and translating complex statistical findings into strategic business outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cert.skillsPracticed.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action & Verification Note */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Document verification placeholder active</span>
              </div>

              {/* View Certificate Placeholder Trigger */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 hover:border-yellow-500/40 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-yellow-400" />
                <span>Certificate View & Verification</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal for Certificate Verification Details */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0b111e] border border-white/15 p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-white font-semibold text-base">
                  <FileCheck className="w-5 h-5 text-yellow-400" />
                  <span>Credential Verification Status</span>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="p-3.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 flex items-start gap-2.5">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>Verification Policy Notice:</strong> The Deloitte Data Analytics Job Simulation is confirmed from <code>Profilee.pdf</code>. A direct certificate URL or scanned PDF was not included in the original document.
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">To Link Official Certificate Document:</h4>
                  <ol className="list-decimal pl-5 space-y-1.5 text-slate-400">
                    <li>Place your official certificate PDF or image in the <code>public/certificates/</code> folder.</li>
                    <li>Update the <code>credentialUrl</code> property in <code>src/data/portfolioData.ts</code>.</li>
                    <li>The button will automatically link to your verifiable Forage/Deloitte certificate URL or embedded PDF.</li>
                  </ol>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] text-slate-400">
                  Candidate: Deekshith P<br />
                  Issuer: Deloitte (Virtual Experience)<br />
                  Status: Confirmed Profile Record
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
