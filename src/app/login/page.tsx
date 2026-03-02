"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Mail, Lock, LogIn, Github, Globe, CircleAlert } from "@/components/auth/AuthIcons";

const BACKEND_URL = process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL || "http://localhost:5000";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                // Save session & user
                localStorage.setItem("dashboard_session", JSON.stringify(data.session));
                localStorage.setItem("dashboard_user", JSON.stringify(data.user));

                // Redirect to dashboard
                router.push("/");
            } else {
                setError(data.message || "Invalid credentials");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Could not connect to the server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] font-sans text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,140,90,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative z-10 w-full max-w-[440px] px-8">
                {/* Logo */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] text-3xl font-bold shadow-[0_10px_30px_rgba(255,107,53,0.3)]">
                        🔥
                    </div>
                    <h1 className="mb-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] bg-clip-text text-2xl font-bold text-transparent">
                        Fire Studio
                    </h1>
                    <p className="text-sm text-gray-500">Sign in to your account</p>
                </div>

                {/* Login Card */}
                <div className="rounded-[24px] border border-[#FF6B35]/20 bg-[#0F0F0F]/95 p-8 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    {error && (
                        <div className="mb-4 flex items-center rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500">
                            <CircleAlert size={16} className="mr-2" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">Email Address</label>
                            <div className="relative flex items-center">
                                <Mail size={16} className="absolute left-4 text-[#FF6B35]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">Password</label>
                            <div className="relative flex items-center">
                                <Lock size={16} className="absolute left-4 text-[#FF6B35]" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <Link href="#" className="text-xs text-gray-500 transition-colors hover:text-[#FF6B35]">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] py-4 text-base font-semibold text-white transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(255,107,53,0.3)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader2 size={20} className="mr-2 animate-spin" />
                            ) : (
                                <LogIn size={20} className="mr-2" />
                            )}
                            {isLoading ? "Signing In..." : "Sign In"}
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="h-[1px] flex-1 bg-white/10" />
                            <span className="text-[12px] text-gray-500">or continue with</span>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 text-sm font-medium text-white transition-all hover:border-[#FF6B35] hover:bg-[#FF6B35]/10"
                            >
                                <Globe size={18} className="text-[#FF6B35]" />
                                Google
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 text-sm font-medium text-white transition-all hover:border-[#FF6B35] hover:bg-[#FF6B35]/10"
                            >
                                <Github size={18} className="text-[#FF6B35]" />
                                GitHub
                            </button>
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            Don't have an account?
                            <Link href="/register" className="ml-1 font-semibold text-[#FF6B35] hover:underline">
                                Create one
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
