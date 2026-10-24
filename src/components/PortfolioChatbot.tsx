"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { 
  Bot, 
  X, 
  Send, 
  RotateCcw, 
  Sparkles, 
  User, 
  AlertCircle, 
  RefreshCw,
  MessageSquare
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isError?: boolean;
}

const SUGGESTED_PROMPTS = [
  "Tell me about this developer.",
  "What projects has he built?",
  "What are his technical skills?",
  "Tell me about his internships.",
  "How can I contact him?",
];

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: `Hello! 👋 I'm **Deekshith's AI Portfolio Assistant**, grounded in verified information from his academic and professional records.\n\nAsk me anything about his studies at **AJIET Mangaluru**, his top skill in **Python**, his **Deloitte Data Analytics** simulation, or upcoming project roadmap!`,
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const chatPanelRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  // Focus textarea when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setLastFailedMessage(null);

    // Format history for backend
    const historyPayload = messages
      .filter((m) => !m.isError)
      .slice(-6)
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to generate AI response.");
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: unknown) {
      const errorText = err instanceof Error ? err.message : "Service momentarily unavailable.";
      setLastFailedMessage(text);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: `⚠️ ${errorText}`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: `Chat history cleared. How can I assist you with **${PORTFOLIO_DATA.personal.name}'s** portfolio?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setLastFailedMessage(null);
  };

  const handleRetry = () => {
    if (lastFailedMessage) {
      handleSendMessage(lastFailedMessage);
    }
  };

  // Simple, secure text renderer that supports markdown bold, code, bullets and links
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Bullet point detection
      const isBullet = line.trim().startsWith("* ") || line.trim().startsWith("- ");
      const content = isBullet ? line.trim().substring(2) : line;

      // Inline formatting: bold **text**, inline `code`
      const parts = content.split(/(\*\*.*?\*\*|`.*?`)/g);

      const parsedLine = parts.map((part, partIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={partIdx} className="font-semibold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={partIdx}
              className="px-1.5 py-0.5 rounded bg-black/40 text-sky-300 font-mono text-[11px]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={lineIdx} className="flex items-start gap-2 my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
            <span>{parsedLine}</span>
          </li>
        );
      }

      return (
        <p key={lineIdx} className={line.trim() === "" ? "h-2" : "my-1"}>
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b111e]/90 border border-sky-500/30 text-xs text-sky-200 shadow-xl shadow-black/50 backdrop-blur-md animate-pulse-subtle pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Ask AI Assistant</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI Assistant" : "Open AI Portfolio Assistant"}
          aria-expanded={isOpen}
          className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-cyan-400 text-white shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#06090e]"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-200 rotate-90 sm:rotate-0" />
          ) : (
            <>
              <Bot className="w-6 h-6" />
              {/* Pulsing indicator badge */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#06090e]"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div
          ref={chatPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Deekshith's AI Portfolio Assistant"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[640px] h-[82vh] rounded-2xl bg-[#0b111e]/95 border border-sky-500/30 shadow-2xl shadow-black/80 backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
        >
          {/* Top Panel Header */}
          <div className="p-4 border-b border-white/10 bg-[#06090e]/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1.5px] shadow-sm shadow-sky-500/30">
                <div className="w-full h-full bg-[#06090e] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">Portfolio AI Assistant</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    OpenRouter Free
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Verified Data • AJIET AI/ML
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Clear conversation"
                aria-label="Clear conversation history"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm selection:bg-sky-500/30"
            aria-live="polite"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-br-xs shadow-md shadow-sky-500/20"
                      : msg.isError
                      ? "bg-rose-950/40 border border-rose-500/30 text-rose-200 rounded-bl-xs"
                      : "bg-[#111a2d] border border-white/10 text-slate-200 rounded-bl-xs shadow-sm"
                  }`}
                >
                  <div>{renderFormattedText(msg.content)}</div>
                  <div
                    className={`mt-1.5 text-[10px] font-mono text-right ${
                      msg.role === "user" ? "text-sky-200/80" : "text-slate-500"
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Loader */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-bl-xs bg-[#111a2d] border border-white/10 p-3.5 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Retry Button if last message failed */}
            {lastFailedMessage && !isLoading && (
              <div className="flex justify-center pt-1">
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Last Query</span>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Pills */}
          <div className="px-4 py-2 bg-[#06090e]/60 border-t border-white/5">
            <div className="text-[10px] font-mono text-slate-400 mb-1.5 flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-sky-400" />
              <span>Suggested Inquiries</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 hover:bg-sky-500/15 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-sky-300 text-[11px] transition-all disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-white/10 bg-[#06090e]/90">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about studies, skills, projects... (Enter to send)"
                rows={1}
                maxLength={600}
                disabled={isLoading}
                className="flex-1 max-h-24 min-h-[40px] resize-none px-3.5 py-2.5 rounded-xl bg-[#0b111e] border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition-colors"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-sky-500/20 transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between pt-1.5 px-1 text-[10px] text-slate-500">
              <span className="flex items-center gap-1">
                <AlertCircle className="w-2.5 h-2.5" />
                <span>Strictly grounded in verified profile</span>
              </span>
              <span>Shift + Enter for new line</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
