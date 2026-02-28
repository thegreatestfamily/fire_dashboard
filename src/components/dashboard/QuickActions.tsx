"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface QuickActionProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const QuickAction = ({ icon: Icon, title, description }: QuickActionProps) => {
    return (
        <div className="glass group cursor-pointer p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-fire-hover">
            <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-fire-primary/10 transition-all duration-300 group-hover:bg-fire-primary group-hover:text-white">
                <Icon size={24} />
            </div>
            <div className="text-body font-semibold">{title}</div>
            <div className="text-small text-fire-text-secondary">{description}</div>
        </div>
    );
};
