import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import {
    ArrowRight, ChevronDown, Database, TrendingUp, Globe,
} from 'lucide-react'

/* ─── Shared animation variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.13 } }),
}

/* ─── Ecosystem cards data ─── */
const ecosystemCards = [
    {
        image: '/ecosystem-expert.png',
        title: 'Expert Marketplace',
        description:
            'A dynamic platform connecting life science experts with innovators and manufacturers to accelerate product development and commercialization.',
        color: '#00C2A8',
        glow: 'rgba(0,194,168,0.18)',
        link: '/consulting',
    },
    {
        image: '/ecosystem-podcast.png',
        title: 'Precision Pulse Podcast',
        description:
            'Exploring precision health, meditation science, diagnostics innovation and lifestyle transformation.',
        color: '#4FC3F7',
        glow: 'rgba(79,195,247,0.18)',
        link: '/podcast',
    },
    {
        image: '/ecosystem-bio.png',
        title: 'Bio-Product Development',
        description:
            'Supporting development and global commercial launch of cutting-edge diagnostic and therapeutic innovations.',
        color: '#6C63FF',
        glow: 'rgba(108,99,255,0.18)',
        link: '/innovation',
    },
]

/* ─── Innovation blocks ─── */
const innovationBlocks = [
    {
        icon: Database,
        title: 'Innovation Repository',
        description: 'Curated database of cutting-edge life sciences innovations and technologies.',
        accent: '#00C2A8',
    },
    {
        icon: TrendingUp,
        title: 'Venture Fund Access',
        description: 'Dedicated venture capital resources to accelerate diagnostics and therapeutic breakthroughs.',
        accent: '#4FC3F7',
    },
    {
        icon: Globe,
        title: 'Global Expert Network',
        description: 'Collaborative ecosystem of scientists, clinicians, and biotech leaders.',
        accent: '#6C63FF',
    },
]

export default function Home() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setInit(true))
    }, [])

    return (
        <>
            {/* ══════════════════ HERO ══════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
                {init && (
                    <Particles
                        id="tsparticles"
                        options={{
                            background: { color: { value: 'transparent' } },
                            fpsLimit: 60,
                            particles: {
                                color: { value: ['#00C2A8', '#4FC3F7', '#6C63FF'] },
                                links: { color: '#00C2A8', distance: 150, enable: true, opacity: 0.22, width: 1 },
                                move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.8 },
                                number: { density: { enable: true, area: 900 }, value: 60 },
                                opacity: { value: 0.5 },
                                shape: { type: 'circle' },
                                size: { value: { min: 1, max: 3 } },
                            },
                            detectRetina: true,
                        }}
                        className="absolute inset-0 z-0"
                    />
                )}

                {/* Decorative glow orbs */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-10 w-64 h-64 bg-lightblue/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6"
                        >
                            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                            <span className="text-teal text-sm font-medium">Life Sciences Innovation</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold font-heading text-white leading-tight mb-6"
                        >
                            Empowering{' '}
                            <span className="gradient-text">Life Sciences</span>{' '}
                            Innovation Through Precision
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
                        >
                            Connecting experts, innovation, and venture capital to accelerate
                            breakthrough diagnostics and therapeutics.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/consulting" id="hero-consulting" className="btn-primary flex items-center gap-2">
                                Get Consulting <ArrowRight size={18} />
                            </Link>
                            <Link to="/podcast" id="hero-podcast" className="btn-outline">
                                Explore Podcast
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }}
                            className="flex flex-wrap gap-8 mt-14"
                        >
                            {[
                                { num: '200+', label: 'Experts Connected' },
                                { num: '50+', label: 'Projects Launched' },
                                { num: '30+', label: 'Global Markets' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl font-bold font-heading text-teal">{s.num}</div>
                                    <div className="text-white/50 text-sm mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: animated orbital visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative w-[420px] h-[420px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                    className="w-72 h-72 rounded-full border border-teal/30"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className="w-52 h-52 rounded-full border border-lightblue/40 border-dashed"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full shadow-2xl flex items-center justify-center bg-white overflow-hidden border border-teal/20">
                                    <img src="/ecosystem-podcast.png" alt="Precision Pulse Logo" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 rounded-full"
                                    style={{
                                        background: i % 2 === 0 ? '#00C2A8' : '#4FC3F7',
                                        top: `${50 - 44 * Math.cos((deg * Math.PI) / 180)}%`,
                                        left: `${50 + 44 * Math.sin((deg * Math.PI) / 180)}%`,
                                        transform: 'translate(-50%,-50%)',
                                    }}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs font-medium">Scroll</span>
                    <ChevronDown size={18} />
                </motion.div>
            </section>

            {/* ══════════════════ OUR OFFERINGS ══════════════════ */}
            <section className="section-padding bg-grey relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp} custom={0} className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-4xl font-bold font-heading text-navy mb-4">Our Offerings</h2>
                        <p className="text-navy/60 text-lg max-w-2xl mx-auto">
                            A fully integrated platform built to accelerate life sciences innovation at every stage.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ecosystemCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                custom={i + 1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-white rounded-2xl overflow-hidden border border-navy/5 cursor-default group shadow-lg"
                                style={{ boxShadow: `0 10px 40px ${card.glow}` }}
                            >
                                <div className="w-full h-56 overflow-hidden bg-white">
                                    <img 
                                        src={card.image} 
                                        alt={card.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold font-heading text-navy mb-3">{card.title}</h3>
                                    <p className="text-navy/60 leading-relaxed text-sm mb-6">{card.description}</p>
                                    <Link
                                        to={card.link}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold"
                                        style={{ color: card.color }}
                                    >
                                        Learn more <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════ INNOVATION STRIP ══════════════════ */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#00C2A8 1px,transparent 1px),linear-gradient(90deg,#00C2A8 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold font-heading text-white mb-3">
                            Accelerating Breakthrough{' '}
                            <span className="gradient-text">Bio-Technologies</span>
                        </h2>
                        <p className="text-white/55 text-lg max-w-xl mx-auto">
                            Infrastructure and connections to transform ideas into market-ready solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {innovationBlocks.map((b, i) => (
                            <motion.div
                                key={b.title}
                                custom={i + 1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                            >
                                <div className="w-14 h-14 rounded-xl glassmorphism flex items-center justify-center mb-6">
                                    <b.icon size={26} color={b.accent} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-white mb-3">{b.title}</h3>
                                <p className="text-white/55 text-sm leading-relaxed">{b.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                        className="text-center mt-12"
                    >
                        <Link to="/innovation" className="btn-primary inline-flex items-center gap-2">
                            Explore Innovation <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ CTA BANNER ══════════════════ */}
            <section className="py-20 px-6 bg-grey">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                    className="max-w-4xl mx-auto text-center gradient-bg rounded-3xl p-14 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-52 h-52 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 relative z-10">
                        Ready to Accelerate Your Innovation?
                    </h2>
                    <p className="text-white/70 text-lg mb-8 relative z-10">
                        Talk to our team of subject matter experts today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Link to="/contact" id="home-cta-contact" className="btn-primary">
                            Get In Touch
                        </Link>
                        <Link to="/consulting" id="home-cta-consulting" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                            View Services
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
