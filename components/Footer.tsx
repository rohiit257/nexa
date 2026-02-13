'use client'
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-cream/10">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-cream tracking-tight">Nexa</div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Automate your business with AI systems and custom workflows. 
              Efficiency redefined through intelligence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-cream mb-6 uppercase text-xs tracking-widest">Product</h3>
            <div className="space-y-3">
              <Link href="/shop" className="block text-cream/40 hover:text-cream text-sm transition-colors duration-300">
                Workflows
              </Link>
              <Link href="/#pricing" className="block text-cream/40 hover:text-cream text-sm transition-colors duration-300">
                Pricing
              </Link>
              <Link href="/#how-it-works" className="block text-cream/40 hover:text-cream text-sm transition-colors duration-300">
                How It Works
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-cream mb-6 uppercase text-xs tracking-widest">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-cream/40 hover:text-cream text-sm transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="block text-cream/40 hover:text-cream text-sm transition-colors duration-300">
                Contact
              </Link>
              <Link href="/admin" className="block text-cream/40 hover:text-cream text-sm transition-colors duration-300">
                Admin
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-cream mb-6 uppercase text-xs tracking-widest">Connect</h3>
            <div className="flex space-x-5">
              <a href="#" className="p-2 rounded-full border border-cream/10 text-cream/40 hover:text-cream hover:border-cream/30 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-cream/10 text-cream/40 hover:text-cream hover:border-cream/30 transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-cream/10 text-cream/40 hover:text-cream hover:border-cream/30 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/30 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} Nexa Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
