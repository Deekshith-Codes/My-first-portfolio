"use client";

import { useSyncExternalStore } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Mail, ArrowUp, CheckCircle2 } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

const subscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function Footer() {
  const currentYear = useSyncExternalStore(subscribe, getClientYear, getServerYear);

  return (
    <footer className="border-t border-white/10 bg-[#04060a] text-slate-400 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#06090e] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-sky-400">DP</span>
                </div>
              </div>
              <span className="text-base font-bold text-white">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              AI/ML Student at AJ Institute of Engineering and Technology, Mangaluru. 
              Dedicated to building real-world machine learning and data science projects.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/90 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Source: Profilee.pdf</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-sky-400 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Verified Profiles
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={PORTFOLIO_DATA.personal.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-500">
              Kasaragod, Kerala, India • AJIET (2024–2028)
            </span>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
