"use client";

import React from "react";
import { BarChart3, Zap } from "lucide-react";

export const UsageCard = () => {
    return (
        <div className="glass p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-h2 flex items-center gap-2">
                    <BarChart3 size={20} className="text-fire-primary" />
                    Usage
                </h2>
                <span className="text-label rounded-full bg-fire-primary/10 px-3 py-1 text-fire-primary">
                    78% of limit
                </span>
            </div>

            <div className="mb-6">
                <div className="mb-2 flex items-end justify-between">
                    <div className="text-stat">7,890</div>
                    <div className="text-body text-fire-text-secondary">/ 10,000 API calls</div>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                        className="h-full bg-fire-primary transition-all duration-1000"
                        style={{ width: "78%" }}
                    />
                </div>
            </div>

            <div className="rounded-xl bg-fire-primary/5 p-4 border border-fire-primary/10">
                <p className="text-small text-fire-text-secondary flex items-center gap-2">
                    <Zap size={14} className="text-fire-primary" />
                    Resetting in 12 days. Consider upgrading if you need more capacity.
                </p>
            </div>
        </div>
    );
};

