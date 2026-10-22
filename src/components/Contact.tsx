"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  ExternalLink, 
  MessageSquare, 
  Clock
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Real submission mechanism:
    // Format full email body and launch mailto to verified recipient
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Deekshith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n(Sent via portfolio website)`
    );

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Also copy message to clipboard for convenience
    navigator.clipboard.writeText(
      `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`
    );

    // Open mail client
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Reach out regarding AI/ML collaborations, student initiatives, or technical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Verified Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl bg-[#0b111e]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Verified Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Direct communication channels confirmed from Deekshith&apos;s verified profile document.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Verified Email</div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-sm font-medium text-white hover:text-sky-300 transition-colors break-all"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 border border-white/5 transition-all"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Network</div>
                      <div className="text-sm font-medium text-white">Deekshith P</div>
                    </div>
                  </div>

                  <a
                    href={PORTFOLIO_DATA.personal.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-xs text-indigo-300 flex items-center gap-1.5 border border-indigo-500/30 transition-all"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location Base</div>
                    <div className="text-sm font-medium text-white">
                      {PORTFOLIO_DATA.personal.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="rounded-2xl bg-gradient-to-br from-sky-950/20 to-indigo-950/20 border border-white/10 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                <Clock className="w-4 h-4" />
                <span>Academic & Collaboration Inquiries</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently open to academic machine learning research, data analytics discussions, 
                and peer development projects.
              </p>
            </div>
          </div>

          {/* Right Column: Genuine, Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b111e]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400">
                    Validated form with automatic mail client dispatcher
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been pre-formatted for <strong>{PORTFOLIO_DATA.personal.email}</strong>, 
                    copied to your clipboard, and dispatched to your email client.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#06090e] border ${
                          errors.name ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#06090e] border ${
                          errors.email ? "border-rose-500" : "border-white/10"
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI/ML Collaboration or Student Project Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#06090e] border ${
                        errors.subject ? "border-rose-500" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#06090e] border ${
                        errors.message ? "border-rose-500" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Deekshith</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    Directly triggers prefilled draft to verified address: {PORTFOLIO_DATA.personal.email}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
