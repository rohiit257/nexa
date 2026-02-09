"use client";

import { useState } from "react";

export default function ServicesPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <html className={`scroll-smooth ${isDarkMode ? "dark" : ""}`} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Nexa Services | Automation Experts</title>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&family=Space+Grotesk:wght@500;700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <style>{`
                    .neo-brutalism {
                        box-shadow: 8px 8px 0px 0px #000;
                        border: 3px solid #000;
                    }
                    .neo-brutalism-sm {
                        box-shadow: 4px 4px 0px 0px #000;
                        border: 2px solid #000;
                    }
                    .dark .neo-brutalism, .dark .neo-brutalism-sm {
                        box-shadow: 8px 8px 0px 0px #334155;
                        border-color: #334155;
                    }
                    .wavy-bottom {
                        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
                        mask-size: cover;
                        mask-repeat: no-repeat;
                        mask-position: bottom;
                    }
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                `}</style>
            </head>
            <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-body">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b-2 border-black dark:border-slate-700">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-primary border-2 border-black flex items-center justify-center font-bold text-xl">
                                N
                            </div>
                            <span className="font-display font-extrabold text-2xl tracking-tighter uppercase">
                                Nexa Agency
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8 font-medium">
                            <a className="hover:text-accent transition-colors" href="#">
                                Services
                            </a>
                            <a className="hover:text-accent transition-colors" href="#">
                                Case Studies
                            </a>
                            <a className="hover:text-accent transition-colors" href="#">
                                Process
                            </a>
                            <a className="hover:text-accent transition-colors" href="#">
                                Pricing
                            </a>
                            <button className="bg-primary hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-bold border-2 border-black neo-brutalism-sm transition-transform active:translate-y-1">
                                Log in
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-accent text-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] mb-8">
                                Nexa
                                <br />
                                <span className="text-primary italic">Services</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 max-w-lg opacity-90 leading-relaxed">
                                Scaling your operations shouldn't be a nightmare. We build the robots so you don't
                                have to.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    className="bg-primary text-black px-8 py-4 rounded-xl font-bold text-xl neo-brutalism hover:-translate-y-1 transition-all"
                                    href="#services"
                                >
                                    See What We Do
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative z-10 neo-brutalism bg-white p-4 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    alt="Futuristic Robot Illustration"
                                    className="rounded-xl w-full h-auto"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAar_Geck_57E62tLbnb1Q9o8p-YSWJW4z-3J-K-4_KfCoxmvtLD4UsckxsD0HxKFg2F6f7zlVbBapGs-WvOkMhUlf0zcLf6GVJMUfeQd0GSNq4elxV16mkln5AHKQkdaR4xop_J01AJOFk-mZ_w7Ao28D3iYmt6FWn88ekPnhuGrFEgH4hbjBKSFxE_eH6Bi_oyZVEe7BSf9Cdn1S9fFKgKdgD4eAmSBBDYxPVC5wpJEIH8cZ2dJwH0HpFxG8scOSRtOqhzBOtKgbg"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full border-4 border-black -z-0"></div>
                            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/20 rounded-lg border-2 border-white/50 -z-0 backdrop-blur-sm"></div>
                        </div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 w-full h-16 bg-background-light dark:bg-background-dark"
                        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
                    ></div>
                </section>

                {/* Services Section */}
                <section className="py-24 px-6" id="services">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-bold border-2 border-black uppercase tracking-widest">
                                The Toolkit
                            </span>
                            <h2 className="text-4xl md:text-6xl font-display font-extrabold mt-6">
                                Next-Gen Automation
                            </h2>
                            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                We specialize in three core pillars that transform chaotic workflows into streamlined
                                revenue engines.
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-10">
                            {/* AI Integration Card */}
                            <div className="neo-brutalism bg-white dark:bg-slate-800 p-8 flex flex-col items-center text-center group">
                                <div className="w-full aspect-square mb-8 bg-primary/10 rounded-2xl border-2 border-black dark:border-slate-600 flex items-center justify-center overflow-hidden">
                                    <img
                                        alt="AI Integration Illustration"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtwNyLiEVzE7C7s2PBgr-E04-l72DYwrjAmN-lNCs56C73ts4iVpiol9_9CDHun8yvHKdrbpL2SkyKf8myTAp7AIBJ7_kafyQJa_TBS_iEJ13QgrKCuS4DQXrcU8AaGrILDWt8Nz5ieGM7WhnA5i2T-gI12lLh_wN9VU_OBcnUAVwEMk8VOr64k3-rjnOeY09b0MSyBXV6cypEp03aOfdK2liZkuo8v_2kwUlrqVW3mRXGwW2w8AQlrpHV-sFO6ojy8D9uRNATVWZ7"
                                    />
                                </div>
                                <h3 className="text-3xl font-display font-extrabold mb-4">AI Integration</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    Infuse your existing stack with custom LLMs and computer vision models. From
                                    automated content moderation to intelligent support agents.
                                </p>
                                <ul className="text-left w-full space-y-3 mt-auto">
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-accent text-sm">bolt</span> Custom GPT
                                        Trainings
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-accent text-sm">bolt</span> Intelligent
                                        Chatbots
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-accent text-sm">bolt</span> Data Extraction
                                        Pipelines
                                    </li>
                                </ul>
                            </div>

                            {/* Workflow Automation Card */}
                            <div className="neo-brutalism bg-accent text-white p-8 flex flex-col items-center text-center transform lg:-translate-y-8 group">
                                <div className="w-full aspect-square mb-8 bg-white/20 rounded-2xl border-2 border-white flex items-center justify-center overflow-hidden">
                                    <img
                                        alt="Workflow Automation Illustration"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSM2CXPeFOZzHxjSihqnxSTegRMoQMEQLY4NbmG3kaW1nnubYO4yACywtFrjUJX2J-zD7m9dMtYuK3L0cKB5PYDHzVDfw-qj3pWnqZazq_W2jR4YwwkfgjV-p5yKHv5eVPPvOwOxkfa0HrTskaiVicrNin5xd2h7VkTdySkzTHrIspG3KCKdwW6lc9qocyB-hbZ1IVn3xYqperrIo9-qjv5DBBnwYXmKL4HZ9Ghvk_Cm8NITBF5V3h6gdN6Mn6fYpF7_ulM26KlXdF"
                                    />
                                </div>
                                <h3 className="text-3xl font-display font-extrabold mb-4">Workflow Automation</h3>
                                <p className="text-white/80 mb-6 leading-relaxed">
                                    Eliminate the "busy work" that kills productivity. We build seamless connections
                                    between 1000+ apps to keep your business moving 24/7.
                                </p>
                                <ul className="text-left w-full space-y-3 mt-auto">
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-primary text-sm">check_circle</span> Zapier
                                        &amp; Make.com Experts
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-primary text-sm">check_circle</span> CRM
                                        Data Syncing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-primary text-sm">check_circle</span>{" "}
                                        Auto-Invoicing Systems
                                    </li>
                                </ul>
                            </div>

                            {/* Lead Generation Card */}
                            <div className="neo-brutalism bg-white dark:bg-slate-800 p-8 flex flex-col items-center text-center group">
                                <div className="w-full aspect-square mb-8 bg-slate-200 rounded-2xl border-2 border-black dark:border-slate-600 flex items-center justify-center overflow-hidden">
                                    <img
                                        alt="Lead Generation Illustration"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYzcBivVEO9ihGfAkcvvfQiARwQaxVxdb77Iw7Lg39_xIOygf0juepe8DdkS2aoFEydlLWeggKL-19JGXBg6-9zQv0LyUANiVTqqBljDJGqD1fowK8UcCQ1dBzYHD3aRs-flLhKmF16wDs0e8K4NmyWwf5gFBVUvFzC6NagGRoFyi_IErZaTxoQnm3W5N0ezWHA0U5WWMjJ93gonfBggPDq_FcauibSFXH6pyFMIAs_jQuz4p8yiyXDM_ZN9Anqu2HDzEqxdn8L62v"
                                    />
                                </div>
                                <h3 className="text-3xl font-display font-extrabold mb-4">Lead Generation</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    Data-driven outreach that actually converts. We automate the prospecting,
                                    personalization, and follow-up so your sales team only takes the calls.
                                </p>
                                <ul className="text-left w-full space-y-3 mt-auto">
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-accent text-sm">rocket_launch</span>{" "}
                                        Automated Cold Email
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-accent text-sm">rocket_launch</span>{" "}
                                        LinkedIn Scraping
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="material-icons text-accent text-sm">rocket_launch</span> Lead
                                        Scoring Engines
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-24 bg-primary border-y-4 border-black overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl md:text-6xl font-display font-extrabold text-center mb-20">
                            How it works
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-900 neo-brutalism p-8 rounded-2xl relative">
                                <div className="absolute -top-6 -left-4 w-12 h-12 bg-accent text-white flex items-center justify-center font-bold text-2xl neo-brutalism-sm rotate-12">
                                    1
                                </div>
                                <div className="w-full h-40 bg-pink-100 dark:bg-pink-900/30 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-black dark:border-slate-500">
                                    <span className="material-icons text-6xl text-accent">touch_app</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-3">Subscribe</h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Choose a plan that fits your pace. No contracts, no hidden fees. Just pure
                                    automation power at your fingertips.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 neo-brutalism p-8 rounded-2xl relative">
                                <div className="absolute -top-6 -left-4 w-12 h-12 bg-accent text-white flex items-center justify-center font-bold text-2xl neo-brutalism-sm -rotate-6">
                                    2
                                </div>
                                <div className="w-full h-40 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-black dark:border-slate-500">
                                    <span className="material-icons text-6xl text-blue-500">assignment</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-3">Request</h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Submit your automation tasks via our dashboard. AI integrations, Zapier flows, or
                                    custom scripts—we handle it all.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 neo-brutalism p-8 rounded-2xl relative">
                                <div className="absolute -top-6 -left-4 w-12 h-12 bg-accent text-white flex items-center justify-center font-bold text-2xl neo-brutalism-sm rotate-3">
                                    3
                                </div>
                                <div className="w-full h-40 bg-green-100 dark:bg-green-900/30 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-black dark:border-slate-500">
                                    <span className="material-icons text-6xl text-green-500">visibility</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-3">Review</h4>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Get your automation delivered in 48-72 hours. We refine and polish until it works
                                    perfectly for your team.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marquee Section */}
                <section className="py-16 bg-background-light dark:bg-background-dark border-b-2 border-black">
                    <div className="whitespace-nowrap overflow-hidden flex select-none">
                        <div className="flex animate-marquee space-x-12 items-center py-4">
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                WE SCALE <span className="material-icons text-accent">bolt</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                WORKFLOWS <span className="material-icons text-primary">auto_fix_high</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                BUSINESSES <span className="material-icons text-accent">trending_up</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                LEADS <span className="material-icons text-primary">groups</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                REVENUE <span className="material-icons text-accent">payments</span>
                            </span>
                        </div>
                        <div aria-hidden="true" className="flex animate-marquee space-x-12 items-center py-4 ml-12">
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                WE SCALE <span className="material-icons text-accent">bolt</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                WORKFLOWS <span className="material-icons text-primary">auto_fix_high</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                BUSINESSES <span className="material-icons text-accent">trending_up</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                LEADS <span className="material-icons text-primary">groups</span>
                            </span>
                            <span className="text-4xl font-display font-extrabold flex items-center gap-4">
                                REVENUE <span className="material-icons text-accent">payments</span>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-20 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                        <div className="col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-12 h-12 bg-primary border-2 border-white flex items-center justify-center font-bold text-2xl text-black">
                                    N
                                </div>
                                <span className="font-display font-extrabold text-3xl tracking-tighter uppercase">
                                    Nexa Agency
                                </span>
                            </div>
                            <p className="text-slate-400 text-lg max-w-sm mb-8">
                                Modern automation for modern companies. We help you work smarter, not harder.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-lg hover:bg-white hover:text-black transition-colors"
                                    href="#"
                                >
                                    <span className="material-icons text-xl">facebook</span>
                                </a>
                                <a
                                    className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-lg hover:bg-white hover:text-black transition-colors"
                                    href="#"
                                >
                                    <span className="material-icons text-xl">alternate_email</span>
                                </a>
                                <a
                                    className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded-lg hover:bg-white hover:text-black transition-colors"
                                    href="#"
                                >
                                    <span className="material-icons text-xl">link</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-6">Explore</h5>
                            <ul className="space-y-4 text-slate-400">
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        Recent Work
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        How it works
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-white transition-colors" href="#">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-6">Get in touch</h5>
                            <p className="text-slate-400 mb-4">Ready to automate your world?</p>
                            <a className="text-primary font-bold text-lg hover:underline" href="mailto:hello@nexa.agency">
                                hello@nexa.agency
                            </a>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
                        © 2024 Nexa Automation Agency. All rights reserved.
                    </div>
                </footer>

                {/* Floating CTA Button */}
                <div className="fixed bottom-8 right-8 z-50">
                    <button className="bg-primary text-black font-extrabold py-4 px-8 rounded-2xl neo-brutalism flex items-center gap-3 hover:-translate-y-2 transition-transform group">
                        <span className="material-icons">calendar_today</span>
                        Book a Call
                        <span className="bg-black text-white px-2 py-0.5 rounded text-xs group-hover:bg-accent transition-colors">
                            3 slots left
                        </span>
                    </button>
                </div>
            </body>
        </html>
    );
}
