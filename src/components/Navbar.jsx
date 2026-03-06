import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Consulting', path: '/consulting' },
    { label: 'Podcast', path: '/podcast' },
    { label: 'Innovation', path: '/innovation' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    /* Always show bg on inner pages; on Home only show on scroll */
    const isHome = location.pathname === '/'
    const hasBg = !isHome || scrolled

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* Close mobile menu on route change */
    useEffect(() => { setMobileOpen(false) }, [location.pathname])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${hasBg
                    ? 'bg-navy/90 backdrop-blur-md shadow-lg border-b border-white/10'
                    : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center flex-shrink-0">
                    <div className="bg-white rounded-lg px-3 py-1 flex items-center">
                        <img
                            src="/niambio-logo.jpg"
                            alt="NIAMBIO Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-7">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <NavLink
                                to={item.path}
                                end={item.path === '/'}
                                id={`nav-${item.label.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 relative group pb-0.5 ${isActive ? 'text-teal' : 'text-white/75 hover:text-white'
                                    }`
                                }
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full rounded-full" />
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden lg:block">
                    <button
                        id="nav-cta"
                        onClick={() => navigate('/contact')}
                        className="btn-primary text-sm"
                    >
                        Get Consulting
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    id="mobile-menu-toggle"
                    className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10"
                    >
                        <ul className="flex flex-col px-6 py-5 gap-4">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <NavLink
                                        to={item.path}
                                        end={item.path === '/'}
                                        onClick={() => setMobileOpen(false)}
                                        className={({ isActive }) =>
                                            `font-medium text-base block py-1 transition-colors ${isActive ? 'text-teal' : 'text-white/80 hover:text-white'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-white/10">
                                <button
                                    onClick={() => { navigate('/contact'); setMobileOpen(false) }}
                                    className="btn-primary text-sm w-full"
                                >
                                    Get Consulting
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
