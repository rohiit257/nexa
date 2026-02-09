"use client";

import { useState } from "react";

export default function Home2Page() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <html className={`scroll-smooth ${isDarkMode ? "dark" : ""}`} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>Nexa Agency | Automation &amp; AI Solved</title>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Space+Grotesk:wght@300;500;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
                <style>{`
                    .custom-wave {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        overflow: hidden;
                        line-height: 0;
                        transform: rotate(180deg);
                    }
                    .custom-wave svg {
                        position: relative;
                        display: block;
                        width: calc(154% + 1.3px);
                        height: 100px;
                    }
                    .custom-wave .shape-fill {
                        fill: #fecf4b;
                    }
                    .isometric-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0px); }
                    }
                    .card-shadow {
                        box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
                    }
                    .dark .card-shadow {
                        box-shadow: 6px 6px 0px 0px rgba(255,255,255,0.1);
                    }
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    }
                    .chrome-logo {
                        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
                    }
                `}</style>
            </head>
            <body className="font-body bg-background-light dark:bg-background-dark text-brand-black dark:text-white transition-colors duration-300">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center">
                            <img
                                alt="NEXA AGENCY"
                                className="h-8 sm:h-10 w-auto chrome-logo"
                                src="/ChatGPT_Image_Feb_7__2026__08_37_39_PM-removebg-preview (1).png"
                            />
                        </div>
                        <div className="hidden md:flex items-center space-x-8 text-white/90 font-medium text-sm tracking-wide">
                            <a className="hover:text-primary transition-colors" href="#services">
                                Services
                            </a>
                            <a className="hover:text-primary transition-colors" href="#work">
                                Work
                            </a>
                            <a className="hover:text-primary transition-colors" href="#how-it-works">
                                How it works
                            </a>
                            <a className="hover:text-primary transition-colors" href="#pricing">
                                Pricing
                            </a>
                            <a className="hover:text-primary transition-colors" href="#shop">
                                Shop
                            </a>
                            <button className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
                                Log in
                            </button>
                        </div>
                        <button className="md:hidden text-white flex items-center">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </nav>

                {/* Header Hero Section */}
                <header className="relative bg-brand-pink pt-20 sm:pt-28 md:pt-32 pb-32 sm:pb-40 md:pb-48 px-4 sm:px-6 overflow-hidden">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div className="relative z-10">
                            <h1 className="font-display font-black text-white text-5xl sm:text-7xl md:text-8xl lg:text-[140px] leading-none mb-4 sm:mb-6 tracking-tighter">
                                nexa
                                <br />
                                agency
                            </h1>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-black mb-3 sm:mb-4">
                                Automation &amp; AI... solved.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-brand-black/80 font-medium mb-6 sm:mb-10 max-w-lg leading-relaxed">
                                Streamline your business with AI workflows. Unlimited scalability and a flat monthly
                                fee.
                            </p>
                            <a
                                className="inline-block bg-primary border-3 sm:border-4 border-black text-black px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl md:text-2xl card-shadow hover:translate-y-[-4px] active:translate-y-[2px] transition-all"
                                href="#services"
                            >
                                View Services
                            </a>
                        </div>
                        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] isometric-float">
                                <img
                                    alt="Isometric AI Robot Illustration"
                                    className="rounded-2xl sm:rounded-3xl border-4 sm:border-6 md:border-8 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] sm:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNCuXaLsrsndKGCfTto_oJAqKlt5lV8dcAzItJJaAGBPvutcLPG0qY344trs-2Nx0tbxv46BHDN5D1SPPYZIWDVxp7bjDKI0N6Q47cVOcVXIxwy1i2YasMUgIln7-mWRk8f2W0I1EQEvyyWBej0g-Rxnb_zuauNvMM6PHLMgI7C0FoUEL1tAMqNBAiKAMJpI7PIoNwvLS9xXIw7udP3sp6jZPsRwE-deZgZOzchDuROhCisVhTT1sCiW6BGeqTQ8lMBn7yXWr18Se2"
                                />
                                <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary border-3 sm:border-4 border-black rounded-lg sm:rounded-xl -rotate-12 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl text-black">bolt</span>
                                </div>
                                <div className="absolute -bottom-4 sm:-bottom-6 right-6 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-brand-yellow border-3 sm:border-4 border-black rounded-full rotate-12 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl text-black">psychology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-wave">
                        <svg
                            data-name="Layer 1"
                            preserveAspectRatio="none"
                            viewBox="0 0 1200 120"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="shape-fill"
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2.03,1200,34.75V0Z"
                            ></path>
                        </svg>
                    </div>
                </header>

                {/* Services Section */}
                <section className="bg-brand-yellow pt-20 sm:pt-28 md:pt-32 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6" id="services">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                        <div className="order-2 lg:order-1 flex justify-center">
                            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                                <img
                                    alt="Isometric Workflows Art"
                                    className="rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-black card-shadow"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUAciHKVS5xcKrMLSp47i0qty8MPDW9CMU191Ter0JF3PIzLFLSzJMwPw-bLxX_OcBhrb-pLedFJejOzyaLAdQywTdsiR08O5sGExJP2upm7A_jkgCVDMHUf_CnKzzseTONh5CEeJH3jbY6CDftchSrhWzPInRHvgv7Rh0cGU3FFudDlXbUIvNICOWiFCmfs4KdbAnywrRMHDC5m0dU7PCS6hGSebVWlo6l2PpNCskoNBpOXSwjbywdmmtmtaTGVFfakw4vL8kLVTx"
                                />
                                <div className="absolute -top-8 sm:-top-12 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48">
                                    <img
                                        alt="AI Icon bubble"
                                        className="rounded-full border-3 sm:border-4 border-black animate-pulse"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgXs3lxSlHHsXFiAC0t92IOqYVdYA5qeBs-qY_h-GCeexnhHZnbswb4g1dgYUmjMTA6gvMzy6mB-UwDhvA61GbZ9du1mzZk7C1w3jdIAmRh0i6tcST82un3m8au1PCWF7GzaVvPWTT9DvaUnlVnso9YE-JK_uMx_wo_95zci_AzpmxcGh4AtDBeYY4G6XL6lc-uiDlAuBjUWzS7au3dOEr29x_1z-stjOO6MiAw-kXcQsWkR8pm08mjE__ctUJq0dcaJYb4qxroX6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
                            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight text-brand-black">
                                The future of automation services
                            </h2>
                            <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl text-brand-black/80 font-medium leading-relaxed max-w-xl">
                                <p>
                                    Need custom GPTs, intelligent automations, or scalable AI data pipelines? Welcome
                                    home.
                                </p>
                                <p>
                                    We're Nexa Agency, your innovation partner for a flat monthly fee. No overhead,
                                    just pure execution in a new way.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-white dark:bg-slate-900 transition-colors" id="how-it-works">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-12 sm:mb-16 md:mb-24 dark:text-white">
                            How it works
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                            {/* Strategize Card */}
                            <div className="group bg-white dark:bg-slate-800 border-3 sm:border-4 border-black p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl card-shadow flex flex-col items-center text-center hover:translate-y-[-8px] transition-all">
                                <div className="w-full h-48 sm:h-56 md:h-64 bg-brand-pink/30 rounded-xl sm:rounded-2xl border-2 border-black/10 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden">
                                    <div className="bg-brand-pink w-3/4 h-3/4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                                        <span className="material-symbols-outlined text-5xl sm:text-6xl md:text-7xl text-white">
                                            architecture
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-display font-black text-2xl sm:text-3xl mb-3 sm:mb-4 dark:text-white">Strategize</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
                                    Kickstart your AI journey by mapping your workflows. For one fixed fee, you get
                                    unlimited access to our strategy team.
                                </p>
                            </div>

                            {/* Automate Card */}
                            <div className="group bg-white dark:bg-slate-800 border-3 sm:border-4 border-black p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl card-shadow flex flex-col items-center text-center hover:translate-y-[-8px] transition-all">
                                <div className="w-full h-48 sm:h-56 md:h-64 bg-brand-yellow/30 rounded-xl sm:rounded-2xl border-2 border-black/10 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden">
                                    <div className="bg-brand-yellow w-3/4 h-3/4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform">
                                        <span className="material-symbols-outlined text-5xl sm:text-6xl md:text-7xl text-black">
                                            rocket_launch
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-display font-black text-2xl sm:text-3xl mb-3 sm:mb-4 dark:text-white">Automate</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
                                    Once defined, we build. From Make.com scenarios to custom LLM integrations, we
                                    build your requests one by one.
                                </p>
                            </div>

                            {/* Scale Card */}
                            <div className="group bg-white dark:bg-slate-800 border-3 sm:border-4 border-black p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl card-shadow flex flex-col items-center text-center hover:translate-y-[-8px] transition-all">
                                <div className="w-full h-48 sm:h-56 md:h-64 bg-slate-200 dark:bg-slate-700 rounded-xl sm:rounded-2xl border-2 border-black/10 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden">
                                    <div className="bg-brand-black w-3/4 h-3/4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform">
                                        <span className="material-symbols-outlined text-5xl sm:text-6xl md:text-7xl text-white">
                                            trending_up
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-display font-black text-2xl sm:text-3xl mb-3 sm:mb-4 dark:text-white">Scale</h3>
                                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
                                    Review, refine, and scale. We don't stop until your workflows are humming
                                    perfectly. Unlimited revisions included.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-brand-yellow py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t-4 sm:border-t-6 md:border-t-8 border-black">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-8 sm:mb-10 md:mb-12 text-brand-black leading-tight">
                            We've got you... Branding, Apps
                            <br className="hidden sm:block" /> and AI Workflows.
                        </h2>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
                            <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:bg-slate-800 transition-all card-shadow">
                                See Membership Plans
                            </button>
                            <button className="bg-white text-black border-3 sm:border-4 border-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:bg-slate-100 transition-all card-shadow">
                                Book a Call
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                        <div className="flex items-center">
                            <img
                                alt="NEXA AGENCY"
                                className="h-10 sm:h-12 w-auto chrome-logo"
                                src="/ChatGPT_Image_Feb_7__2026__08_37_39_PM-removebg-preview (1).png"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium opacity-70">
                            <a className="hover:opacity-100 transition-opacity" href="#">
                                Privacy Policy
                            </a>
                            <a className="hover:opacity-100 transition-opacity" href="#">
                                Terms of Service
                            </a>
                            <a className="hover:opacity-100 transition-opacity" href="#">
                                Cookie Policy
                            </a>
                        </div>
                        <div className="flex gap-3 sm:gap-4">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-lg sm:text-xl">share</span>
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-lg sm:text-xl">camera</span>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Floating Dark Mode Toggle */}
                <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
                    <button
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 border-3 sm:border-4 border-black rounded-full flex items-center justify-center card-shadow active:translate-y-1 transition-all"
                        onClick={toggleDarkMode}
                    >
                        <span
                            className={`material-symbols-outlined text-black ${isDarkMode ? "hidden" : ""}`}
                        >
                            dark_mode
                        </span>
                        <span
                            className={`material-symbols-outlined text-white ${isDarkMode ? "" : "hidden"}`}
                        >
                            light_mode
                        </span>
                    </button>
                </div>
            </body>
        </html>
    );
}
