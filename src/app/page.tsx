"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickAction } from "@/components/dashboard/QuickActions";
import { ApiKeys } from "@/components/dashboard/ApiKeys";
import { IntegrationGuide } from "@/components/dashboard/IntegrationGuide";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { BillingCard } from "@/components/dashboard/BillingCard";
import { UsageCard } from "@/components/dashboard/BrandingPreview";
import { BarChart3, Key, Rocket, Zap, Plus, FileCode, CreditCard, Headset } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for active session
    const sessionStr = localStorage.getItem("dashboard_session");
    const userStr = localStorage.getItem("dashboard_user");

    if (!sessionStr || !userStr) {
      // Redirect to register if not authenticated
      router.replace("/register");
      return;
    }

    try {
      const user = JSON.parse(userStr);
      setUserName(user.firstName || "Developer");
    } catch (e) {
      console.error("Error parsing user data", e);
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-[#0A0A0A] items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="text-fire-primary text-3xl font-bold tracking-tighter">🔥 FIRE</div>
          <div className="text-gray-500 text-xs uppercase tracking-widest font-mono border border-fire-border px-3 py-1 rounded-full">Securing Connection...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white selection:bg-fire-primary selection:text-white">
      {/* Sidebar - Desktop Only */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 md:ml-[280px]">
        {/* Top Bar */}
        <TopBar />

        {/* Welcome Section */}
        <section className="relative mb-8 overflow-hidden rounded-[24px] border border-fire-border bg-gradient-to-br from-fire-primary/10 to-fire-secondary/5 p-8 sm:p-12">
          {/* Animated background element */}
          <div className="animate-rotate-slow absolute -right-1/4 -top-1/2 h-[200%] w-[200%] bg-[radial-gradient(circle,_rgba(255,107,53,0.1)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-1">
            <h1 className="text-h1 mb-3 tracking-tight">
              Welcome back, <span className="fire-text-gradient">{userName}!</span>
            </h1>
            <p className="text-body max-w-2xl text-fire-text-secondary">
              Your integrations are live. Your API is healthy. Your developers are building.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            icon={Zap}
            label="API Calls Today"
            value="12,456"
            trend="+12%"
          />
          <StatsCard
            icon={Key}
            label="Active Keys"
            value="3"
            trend="+8%"
          />
          <StatsCard
            icon={Rocket}
            label="Active Projects"
            value="8"
            trend="+23%"
          />
          <StatsCard
            icon={BarChart3}
            label="Usage (78%)"
            value="7,890"
            trend="/ 10k"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAction
            icon={Plus}
            title="Create Integration"
            description="Generate new API credentials"
          />
          <QuickAction
            icon={FileCode}
            title="API Documentation"
            description="Implementation guide"
          />
          <QuickAction
            icon={CreditCard}
            title="Billing Portal"
            description="Manage your subscription"
          />
          <QuickAction
            icon={Headset}
            title="Support Center"
            description="24/7 technical chat"
          />
        </div>

        {/* API Keys Section */}
        <ApiKeys />

        {/* Integration Guide */}
        <IntegrationGuide />

        {/* Two Column Layout for Activity and Branding */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ActivityList />
          <UsageCard />
        </div>

        {/* Billing Section */}
        <BillingCard />

        {/* Footer */}
        <footer className="mt-12 border-t border-white/5 py-8 text-center text-xs text-[#888]">
          <p>Fire Studio Dashboard v1.0.0 | &copy; 2024 THE GREATEST. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="hover:text-fire-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-fire-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fire-primary transition-colors">Security</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
