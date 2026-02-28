"use client";

import React from "react";
import {
    Home,
    Key,
    Code,
    BarChart3,
    Palette,
    Users,
    CreditCard,
    Settings,
    HelpCircle,
    FileText,
    ChevronDown
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Key, label: "API Keys" },
    { icon: Code, label: "Integration" },
    { icon: BarChart3, label: "Analytics" },
    { icon: CreditCard, label: "Billing" },
    { icon: Settings, label: "Settings" },
];

const secondaryNavItems = [
    { icon: FileText, label: "Docs" },
    { icon: HelpCircle, label: "Support" },
];

export const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-0 z-[100] flex h-screen w-[280px] flex-col border-r border-fire-border bg-fire-dark p-8 max-md:hidden">
            <div className="mb-8 flex items-center gap-3 border-b border-fire-border pb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fire-primary to-fire-secondary text-2xl font-bold text-white">
                    🔥
                </div>
                <div>
                    <h2 className="fire-text-gradient text-h2 font-bold">
                        Fire Studio
                    </h2>
                    <p className="text-label text-fire-text-secondary">Developer Dashboard</p>
                </div>
            </div>

            <nav className="flex-1 space-y-1">
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300",
                            item.active
                                ? "bg-gradient-to-br from-fire-primary to-fire-secondary text-white shadow-lg shadow-fire-primary/30"
                                : "text-[#888] hover:bg-fire-primary/10 hover:text-fire-primary"
                        )}
                    >
                        <item.icon size={18} />
                        <span className="text-body font-medium">{item.label}</span>
                    </div>
                ))}

                <div className="my-5 h-px bg-fire-border" />

                {secondaryNavItems.map((item) => (
                    <div
                        key={item.label}
                        className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-fire-text-secondary transition-all duration-300 hover:bg-fire-hover hover:text-fire-primary"
                    >
                        <item.icon size={18} />
                        <span className="text-body font-medium">{item.label}</span>
                    </div>
                ))}
            </nav>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fire-primary to-fire-secondary text-lg font-bold text-white">
                    JD
                </div>
                <div className="flex-1 overflow-hidden">
                    <h4 className="truncate text-sm font-semibold">John Developer</h4>
                    <p className="truncate text-xs text-fire-text-secondary">john@devworks.io</p>
                </div>
                <ChevronDown size={12} className="text-[#888]" />
            </div>
        </aside>
    );
};
