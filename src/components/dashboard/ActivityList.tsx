"use client";

import React from "react";
import { Key, Zap, Code, CreditCard } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const activities = [
    { icon: Key, title: "New API Key generated", time: "5 minutes ago", status: "Success" },
    { icon: Zap, title: "12,456 API calls today", time: "1 hour ago", status: "Healthy" },
    { icon: Code, title: "Integration test passed", time: "3 hours ago", status: "✅" },
    { icon: CreditCard, title: "Invoice paid - $99.00", time: "Yesterday", status: "Paid" },
];

// Assuming 'code' is a variable that would be passed as a prop or defined elsewhere for the 'Quick Integration' section.
// For the purpose of this edit, I'll define a placeholder 'code' variable.
const code = `
<script
  src="https://cdn.firestudio.dev/embed.js"
  data-project-id="your-project-id"
  data-api-key="your-api-key"
></script>
`;

export const ActivityList = () => {
    return (
        <div className="glass p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-h2">🕒 Recent Activity</h2>
                <span className="text-label cursor-pointer text-fire-primary transition-opacity hover:opacity-80">
                    View all
                </span>
            </div>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 rounded-xl border border-white/5 p-3 transition-colors hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fire-primary/10 text-fire-primary">
                            <activity.icon size={18} />
                        </div>
                        <div className="flex-1">
                            <div className="text-body font-semibold">{activity.title}</div>
                            <div className="text-small text-fire-text-secondary">{activity.time}</div>
                        </div>
                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                            {activity.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
