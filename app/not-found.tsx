'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import "./globals.css";
import {
  PlayCircle,
  Layers,
  Activity,
  BarChart3,
  Move3d,
  CheckCircle2
} from 'lucide-react';

import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function RootNotFound() {
  const pathname = usePathname();

  return (
    <div className="not-found-root">
        <div className={`${inter.className} antialiased`}>
          <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-[#1A80C3]/20 selection:text-[#1A80C3]">
            {/* Background Soft Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#1A80C3]/5 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10s]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#08949E]/5 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8s] delay-2000"></div>

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A80C3 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-5xl w-full text-center relative z-10 space-y-12 py-10">
              {/* Virtual Viewport Simulated Icon */}
              <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-1000">
                <div className="relative p-8 rounded-3xl bg-linear-to-br from-white to-slate-50 shadow-2xl border border-slate-200 group transition-all hover:border-[#1A80C3]/30">
                  <div className="absolute inset-0 bg-[#1A80C3]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Layers size={64} className="text-[#1A80C3] relative z-10" strokeWidth={1.5} />

                </div>
              </div>

              {/* 3D Preview Content */}
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
                <div className="flex flex-col items-center space-y-8">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A80C3]/5 text-[#1A80C3] text-[10px] font-bold uppercase tracking-[0.3em] shadow-xs border border-[#1A80C3]/10">
                    <Activity size={14} className="animate-pulse" />
                    3D Visual Experience Preview
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-tight text-slate-900">
                      Immersive <br />Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1A80C3] to-[#08949E]">Showcases</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                      Experience products in high-fidelity interactive environments. Bridging the physical and digital worlds through precise 3D engineering and cinematic rendering.
                    </p>
                  </div>

                  {/* Simulated Configurator Controls */}
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {[
                      { icon: <Move3d size={16} />, label: "Rotate" },
                      { icon: <BarChart3 size={16} />, label: "Specs" },
                      { icon: <PlayCircle size={16} />, label: "Animate" }
                    ].map((tool, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-white hover:text-[#1A80C3] transition-all cursor-crosshair">
                        {tool.icon}
                        {tool.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <footer className="absolute bottom-10 left-0 right-0 space-y-6">
              {/* Internal Navigation (Repurposed for Proposal Context) */}
              <div className="px-6 flex justify-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-50/50 backdrop-blur-md border border-slate-200 text-[9px] font-bold tracking-[0.3em] transition-all">
                  <CheckCircle2 size={14} className="text-[#08949E]" />
                  <span className="opacity-50 uppercase">Current Environment:</span>
                  <span className="text-slate-900">{pathname}</span>
                </div>
              </div>
              <div className="h-px w-24 bg-linear-to-r from-transparent via-slate-300 to-transparent mx-auto"></div>
              <div className="flex flex-col items-center gap-4 text-[9px] font-bold tracking-[0.5em] uppercase text-slate-900 opacity-30">
                <span>Interactive Rendering Engine v4.2</span>
              </div>
            </footer>
          </div>
        </div>
    </div>
  );
}
