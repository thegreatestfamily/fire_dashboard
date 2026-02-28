"use client";

import React from "react";
import { Copy, Edit2, Trash2, PlusCircle, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const keys = [
    { name: "Production", value: "fstudio_live_8a7d3f9e2b5c1k4m", status: "Active" },
    { name: "Development", value: "fstudio_test_3b6c8d1e4f7g2h9j", status: "Active" },
    { name: "Staging", value: "fstudio_stage_5d8e9f2a3b4c6h1k", status: "Inactive" },
];

export const ApiKeys = () => {
    return (
        <div className="glass mb-8 p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-h2">🔑 Your API Keys</h2>
                <span className="text-label flex cursor-pointer items-center gap-1 text-fire-primary transition-opacity hover:opacity-80">
                    View all <ArrowRight size={14} />
                </span>
            </div>

            <div className="space-y-4">
                {keys.map((key) => (
                    <div key={key.name} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-5 sm:gap-10">
                            <span className="min-w-[80px] text-body font-semibold">{key.name}</span>
                            <span className="text-api-key hidden rounded-lg bg-black/30 px-3 py-1.5 text-fire-text-secondary sm:block">
                                {key.value}
                            </span>
                            <span className={cn(
                                "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs",
                                key.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                            )}>
                                ● {key.status}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-fire-text-secondary">
                            <span title="Copy"><Copy size={16} className="cursor-pointer transition-colors hover:text-fire-primary" /></span>
                            <span title="Edit"><Edit2 size={16} className="cursor-pointer transition-colors hover:text-fire-primary" /></span>
                            <span title="Delete"><Trash2 size={16} className="cursor-pointer transition-colors hover:text-fire-primary" /></span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="fire-gradient mt-6 flex items-center gap-2 rounded-[40px] px-6 py-3 text-body font-semibold text-white shadow-lg shadow-fire-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-fire-primary/50">
                <PlusCircle size={18} />
                Generate New API Key
            </button>
        </div>
    );
};
