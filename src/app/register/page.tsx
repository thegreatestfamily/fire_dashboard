"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { User, Mail, Lock, Building2, UserPlus, Github, Globe, CircleAlert, CircleCheck } from "@/components/auth/AuthIcons";

const BACKEND_URL = process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL || "http://localhost:5000";

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
        terms: false
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [strength, setStrength] = useState(0);

    useEffect(() => {
        let s = 0;
        const { password } = formData;
        if (password.length >= 8) s += 25;
        if (/[a-z]/.test(password)) s += 25;
        if (/[A-Z]/.test(password)) s += 25;
        if (/[0-9]/.test(password)) s += 25;
        setStrength(s);
    }, [formData.password]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const { firstName, lastName, email, company, password, confirmPassword, terms } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError("Please fill in all required fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if (!terms) {
            setError("You must agree to the Terms of Service");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`${BACKEND_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    company
                })
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
            setError("Could not connect to the server. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] font-sans text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,140,90,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative z-10 w-full max-w-[480px] px-8 py-12">
                {/* Logo */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] text-3xl font-bold shadow-[0_10px_30px_rgba(255,107,53,0.3)]">
                        🔥
                    </div>
                    <h1 className="mb-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] bg-clip-text text-2xl font-bold text-transparent">
                        Fire Studio
                    </h1>
                    <p className="text-sm text-gray-500">Create your developer account</p>
                </div>

                {/* Register Card */}
                <div className="rounded-[24px] border border-[#FF6B35]/20 bg-[#0F0F0F]/95 p-8 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    {error && (
                        <div className="mb-4 flex items-center rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500">
                            <CircleAlert size={16} className="mr-2" />
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 flex items-center rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-500" >
                            <CircleCheck size={16} className="mr-2" />
                            Account created! Redirecting to login...
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400">First Name</label>
                                <div className="relative flex items-center">
                                    <User size={16} className="absolute left-4 text-[#FF6B35]" />
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400">Last Name</label>
                                <div className="relative flex items-center">
                                    <User size={16} className="absolute left-4 text-[#FF6B35]" />
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                        placeholder="Developer"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">Company / Organization</label>
                            <div className="relative flex items-center">
                                <Building2 size={16} className="absolute left-4 text-[#FF6B35]" />
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                    placeholder="DevWorks Inc."
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">Email Address</label>
                            <div className="relative flex items-center">
                                <Mail size={16} className="absolute left-4 text-[#FF6B35]" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            {/* Strength Meter */}
                            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
                                <div
                                    className={`h-full transition-all duration-300 ${strength < 50 ? "bg-red-500" : strength < 75 ? "bg-orange-500" : "bg-green-500"
                                        }`}
                                    style={{ width: `${strength}%` }}
                                />
                            </div>
                            <p className="text-right text-[10px] text-gray-500">
                                {strength === 0 ? "Enter password" : strength < 50 ? "Weak" : strength < 75 ? "Good" : "Strong"}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400">Confirm Password</label>
                            <div className="relative flex items-center">
                                <Lock size={16} className="absolute left-4 text-[#FF6B35]" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 pl-11 pr-4 text-sm text-white transition-all placeholder:text-gray-700 focus:border-[#FF6B35] focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/10"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-[#FF6B35]/20 bg-[#1A1A1A] text-[#FF6B35] focus:ring-[#FF6B35]/30"
                                required
                            />
                            <label htmlFor="terms" className="text-xs text-gray-500">
                                I agree to the <Link href="#" className="text-[#FF6B35] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#FF6B35] hover:underline">Privacy Policy</Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] py-4 text-base font-semibold text-white transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(255,107,53,0.3)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader2 size={20} className="mr-2 animate-spin" />
                            ) : (
                                <UserPlus size={20} className="mr-2" />
                            )}
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="h-[1px] flex-1 bg-white/10" />
                            <span className="text-[12px] text-gray-500">or sign up with</span>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-xl border border-[#FF6B35]/20 bg-[#1A1A1A] py-3.5 text-sm font-medium text-white transition-all hover:border-[#FF6B35] hover:bg-[#FF6B35]/10"
                            >
                                <Github size={18} className="text-[#FF6B35]" />
                                GitHub
                            </button>
                        </div>

                        <div className="text-center text-sm text-gray-500">
                            Already have an account?
                            <Link href="/login" className="ml-1 font-semibold text-[#FF6B35] hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
