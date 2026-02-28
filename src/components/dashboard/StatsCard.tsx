"use client";

import React from "react";
import { ArrowUp, ArrowDown, LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface StatsCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    trend: string;
    trendDown?: boolean;
}

export const StatsCard = ({ icon: Icon, label, value, trend, trendDown }: StatsCardProps) => {
    return (
        <div className="glass group cursor-pointer p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fire-primary hover:shadow-2xl hover:shadow-fire-primary/20">
            <div className="mb-4 flex items-center justify-between">
                <div className="fire-gradient flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shadow-fire-primary/20">
                    <Icon size={20} />
                </div>
                <span className={cn(
                    "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                    trendDown
                        ? "bg-red-500/10 text-red-500"
                        : "bg-green-500/10 text-green-500"
                )}>
                    {trendDown ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
                    {trend}
                </span>
            </div>
            <div className="text-stat">{value}</div>
            <div className="flex items-center gap-2 mt-1">
                <div className="text-label text-fire-text-secondary">{label}</div>
            </div>
        </div>
    );
};
