"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { X, CheckCircle2, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/services-data";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const [activeTab, setActiveTab] = useState<"services" | "projects">(
    "services",
  );
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsClosing(false);
      setActiveTab("services");
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  if (!service || !isOpen) return null;

  const Icon = service.icon;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* MODAL */}
      <div
        className={`absolute inset-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-4xl sm:max-h-[85vh]
        bg-[#0a0a12] sm:bg-[#12121a] sm:rounded-3xl border border-white/10 shadow-2xl
        flex flex-col transition-transform duration-200
        ${isClosing ? "translate-y-full sm:scale-95" : "translate-y-0 sm:scale-100"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex-shrink-0 px-4 sm:px-8 py-5 border-b border-white/10">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-4 pr-14">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4a9eff]/30 to-[#8b5cf6]/20 flex items-center justify-center shadow-lg">
              <Icon className="w-7 h-7 text-[#4a9eff]" />
            </div>

            <div>
              <h2 className="text-xl sm:text-3xl font-bold text-white">
                {service.title}
              </h2>
              <p className="text-gray-400 mt-1">{service.description}</p>
            </div>
          </div>

          {/* MOBILE TABS */}
          <div className="flex gap-2 mt-4 sm:hidden">
            <button
              onClick={() => setActiveTab("services")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === "services"
                  ? "bg-[#4a9eff] text-white"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              Sub-Services
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                activeTab === "projects"
                  ? "bg-[#8b5cf6] text-white"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* CONTENT (ONLY THIS SCROLLS) */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 pb-32"
        >
          {/* DESKTOP */}
          <div className="hidden sm:grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Sub-Services
              </h3>

              <ul className="space-y-2">
                {service.subServices.map((s, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Example Projects
              </h3>

              <div className="space-y-3">
                {service.exampleProjects.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gradient-to-br from-[#8b5cf6]/10 to-transparent border border-[#8b5cf6]/20 text-gray-300"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="sm:hidden space-y-3">
            {activeTab === "services" &&
              service.subServices.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-gray-200"
                >
                  {s}
                </div>
              ))}

            {activeTab === "projects" &&
              service.exampleProjects.map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gradient-to-br from-[#8b5cf6]/10 to-[#4a9eff]/5 border border-white/10 text-gray-200"
                >
                  {p}
                </div>
              ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex-shrink-0 border-t border-white/10 px-4 sm:px-8 py-4 bg-[#0a0a12]">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-[#4a9eff] to-[#06b6d4]"
              onClick={() => {
                handleClose();
                setTimeout(() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 250);
              }}
            >
              Get Started with {service.title}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-gray-400 hover:text-white"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
