import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const footerLinks = {
    Company: [
        { label: 'Home', path: '/' },
        { label: 'Team', path: '/team' },
        { label: 'Contact', path: '/contact' },
    ],
    Services: [
        { label: 'Strategic Consulting', path: '/consulting' },
        { label: 'Podcast', path: '/podcast' },
        { label: 'Innovation', path: '/innovation' },
    ],
    Media: [
        { label: 'Podcast Episodes', path: '/podcast' },
        { label: 'Contact', path: '/contact' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-8">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center mb-4 w-fit">
                            <div className="bg-white rounded-lg px-3 py-1 flex items-center">
                                <img
                                    src="/niambio-logo.jpg"
                                    alt="NIAMBIO Logo"
                                    className="h-7 w-auto object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
                            Life Sciences Innovation Platform connecting experts, innovation, and venture capital
                            to accelerate breakthrough diagnostics and therapeutics.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { s: 'LI', href: '#' },
                                { s: 'TW', href: '#' },
                                { s: 'YT', href: 'https://www.youtube.com/@Precision_Pulse_with_Amit' },
                            ].map(({ s, href }) => (
                                <a
                                    key={s}
                                    href={href}
                                    id={`footer-social-${s.toLowerCase()}`}
                                    className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center text-xs font-bold hover:bg-teal/30 transition-colors"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold font-heading mb-4 text-white/80 uppercase tracking-wider">
                                {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <NavLink
                                            to={link.path}
                                            id={`footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                                            className={({ isActive }) =>
                                                `text-sm transition-colors ${isActive ? 'text-teal' : 'text-white/40 hover:text-teal'}`
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
                    <p>© 2025 NIAMBIO LLC – All Rights Reserved</p>
                    <p className="gradient-text font-medium text-sm">Life Sciences Innovation Platform</p>
                </div>
            </div>
        </footer>
    )
}
