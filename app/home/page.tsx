"use client";

import { useState } from "react";

export default function HomePage() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <html className={isDarkMode ? "dark" : ""} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Nexa Agency | Scale Your Business with AI</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <style>{`
                    body {
                        font-family: 'Inter', sans-serif;
                    }
                    .glass {
                        background: rgba(255, 255, 255, 0.03);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    .dark .glass {
                        background: rgba(255, 255, 255, 0.03);
                        border-color: rgba(255, 255, 255, 0.1);
                    }
                    .light-mode .glass {
                        background: rgba(0, 0, 0, 0.03);
                        border-color: rgba(0, 0, 0, 0.1);
                    }
                    .neon-glow {
                        box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
                    }
                    .bg-blob {
                        filter: blur(80px);
                        z-index: -1;
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0px); }
                    }
                `}</style>
            </head>
            <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
                {/* Background Blobs */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full bg-blob"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full bg-blob"></div>
                    <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-pink-500/10 rounded-full bg-blob"></div>
                </div>

                {/* Navigation */}
                <nav className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/10">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">N</span>
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">NEXA</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <a className="hover:text-primary transition-colors" href="#">
                            Services
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Case Studies
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Process
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                            onClick={toggleDarkMode}
                        >
                            <span className={`material-icons text-xl ${isDarkMode ? "hidden" : ""}`}>dark_mode</span>
                            <span className={`material-icons text-xl ${isDarkMode ? "" : "hidden"}`}>light_mode</span>
                        </button>
                        <a
                            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg neon-glow"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative pt-20 pb-32 px-6 overflow-hidden">
                    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                            Next-Gen Automation Agency
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter">
                            Nexa: Scale Your <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-accent">
                                Business with AI
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed">
                            We empower startups and SMBs to automate workflows, optimize operations, and unlock
                            hyper-growth using custom AI-driven software solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl neon-glow">
                                Book a Consultation
                            </button>
                            <button className="glass border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                                View Our Work
                            </button>
                        </div>
                        <div className="mt-20 relative w-full max-w-4xl mx-auto animate-float">
                            <div className="aspect-video glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                                <div className="p-8 flex flex-col h-full justify-between">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-grow flex items-center justify-center">
                                        <div className="text-left w-full max-w-lg space-y-6">
                                            <div className="h-2 w-3/4 bg-slate-400/20 rounded"></div>
                                            <div className="h-2 w-1/2 bg-slate-400/20 rounded"></div>
                                            <div className="h-2 w-full bg-slate-400/20 rounded"></div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-20 glass rounded-xl"></div>
                                                <div className="h-20 glass rounded-xl bg-primary/20"></div>
                                                <div className="h-20 glass rounded-xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent rounded-full opacity-40 blur-2xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500 rounded-full opacity-40 blur-2xl"></div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-white/5 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16">
                            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Our Core Capabilities</h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="group glass p-8 rounded-[2rem] hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons text-primary text-3xl">psychology</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">AI Automations</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Automate repetitive tasks and complex decision-making processes with tailored LLM
                                    integrations and custom agents.
                                </p>
                                <a className="inline-flex items-center text-primary font-bold hover:underline" href="#">
                                    Learn more <span className="material-icons ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div className="group glass p-8 rounded-[2rem] hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons text-accent text-3xl">code</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Software Dev</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Custom-built web apps and mobile solutions designed for scalability and performance
                                    in the modern digital era.
                                </p>
                                <a className="inline-flex items-center text-accent font-bold hover:underline" href="#">
                                    Learn more <span className="material-icons ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div className="group glass p-8 rounded-[2rem] hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons text-pink-500 text-3xl">trending_up</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Scalability Consulting</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    Strategic guidance to help you transition from startup to scale-up with optimized
                                    infrastructure and growth roadmaps.
                                </p>
                                <a className="inline-flex items-center text-pink-500 font-bold hover:underline" href="#">
                                    Learn more <span className="material-icons ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto glass p-12 rounded-[3rem] border border-white/5 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
                            <div>
                                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">99%</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                    Efficiency Boost
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">250+</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                    Automations Built
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-2">15M+</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                    Revenue Generated
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-2">24/7</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                    Smart Support
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6 relative">
                    <div className="max-w-4xl mx-auto text-center glass p-16 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30"></div>
                        <div className="relative z-10">
                            <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                                Ready to build the future?
                            </h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
                                Join forward-thinking companies already using Nexa to automate their way to the top.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <button className="bg-white text-background-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-xl">
                                    Schedule a Demo
                                </button>
                                <a
                                    className="font-bold text-lg hover:text-primary transition-colors"
                                    href="mailto:hello@nexa.agency"
                                >
                                    Contact Sales →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-6 border-t border-white/5 bg-slate-100 dark:bg-black/40">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-6 md:mb-0">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">N</span>
                            </div>
                            <span className="font-display font-bold text-lg tracking-tight">NEXA AGENCY</span>
                        </div>
                        <div className="flex space-x-8 text-sm text-slate-500 mb-6 md:mb-0">
                            <a className="hover:text-primary" href="#">
                                Twitter
                            </a>
                            <a className="hover:text-primary" href="#">
                                LinkedIn
                            </a>
                            <a className="hover:text-primary" href="#">
                                GitHub
                            </a>
                            <a className="hover:text-primary" href="#">
                                Instagram
                            </a>
                        </div>
                        <div className="text-xs text-slate-500">© 2024 Nexa Agency. All rights reserved.</div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
