"use client";

import React, { useEffect, useState } from "react";
import { Search, Bell, Calendar } from "lucide-react";

export const TopBar = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }));
    }, []);

    return (
        <div className="glass mb-8 flex items-center justify-between rounded-[20px] bg-fire-dark p-4 border border-fire-border backdrop-blur-md">
            <div className="page-title">
                <h1 className="text-h2">Dashboard</h1>
                <p className="text-small text-fire-text-secondary">Manage your API keys and integrations</p>
            </div>
            <div className="user-badge flex items-center gap-5">
                <div className="relative cursor-pointer transition-colors duration-300 hover:text-fire-primary">
                    <Bell size={20} className="text-fire-text-secondary" />
                    <span className="text-small absolute -right-1.25 -top-1.25 flex h-4 w-4 items-center justify-center rounded-full bg-fire-primary font-bold text-white">
                        3
                    </span>
                </div>

                <span className="text-body font-medium text-fire-primary">Pro Plan</span>
            </div>
        </div>
    );
};
