"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export const BillingCard = () => {
    return (
        <div className="glass overflow-hidden rounded-3xl bg-gradient-to-br from-fire-primary/10 to-fire-secondary/5 p-8 border border-fire-primary/30">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex-1">
                    <div className="mb-2 text-h1 text-fire-primary">Pro Plan</div>
                    <div className="mb-6 flex items-baseline gap-2">
                        <span className="text-stat">$99</span>
                        <span className="text-body text-fire-text-secondary">/month</span>
                    </div>

                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[
                            "Up to 10,000 API calls",
                            "Commercial usage license",
                            "Priority dev support",
                            "Advanced analytics",
                            "Custom domain mapping",
                            "Dedicated clusters",
                        ].map((feature) => (
                            <li key={feature} className="text-body flex items-center gap-2 text-fire-text-secondary">
                                <CheckCircle size={14} className="text-green-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex w-full flex-col gap-4 text-right sm:w-auto">
                    <p className="text-small text-fire-text-secondary">Next billing: April 1, 2024</p>
                    <button className="rounded-[40px] border-2 border-fire-primary bg-transparent px-8 py-3 text-body font-semibold text-fire-primary transition-all duration-300 hover:bg-fire-primary hover:text-white">
                        Upgrade Plan
                    </button>
                </div>
            </div>
        </div>
    );
};
