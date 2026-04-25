import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, FlaskConical, Mail } from 'lucide-react'

const slide1 = [
    'R&D strategy & execution',
    'Global market strategy',
    'Regulatory guidance',
    'Commercial strategy',
    'Clinical trial support',
    'Supply chain optimization',
]

const slide2 = [
    'Diagnostic product launch',
    'IVD regulatory navigation',
    'Fractional leadership support',
    'Laboratory operations strategy',
    'Digital health integration',
    'CLIA laboratory certification support',
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
}

export default function ConsultingPage() {
    const [activeOption, setActiveOption] = useState('a')
    return (
        <>
            {/* ── Page Hero ── */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Our Services
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-5 leading-tight">
                            Strategic Consulting
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
                            Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: visual card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="sticky top-28"
                    >
                        <div className="rounded-3xl overflow-hidden gradient-bg flex items-center justify-center relative aspect-square">
                            <div className="absolute inset-0 flex items-center justify-center opacity-15">
                                {[1, 2, 3, 4].map((r) => (
                                    <div key={r} className="absolute rounded-full border border-white"
                                        style={{ width: r * 100, height: r * 100 }} />
                                ))}
                            </div>
                            <div className="relative z-10 p-12 flex flex-col items-center gap-6 text-center">
                                <div className="w-20 h-20 rounded-2xl glassmorphism flex items-center justify-center">
                                    <FlaskConical size={36} color="#00C2A8" />
                                </div>
                                <p className="text-white/80 font-medium text-lg leading-relaxed">
                                    "Precision consulting to drive your biotech vision from concept to global market."
                                </p>
                            </div>

                            <div className="absolute top-8 right-8 glassmorphism rounded-xl px-4 py-3">
                                <div className="text-white font-bold text-xl font-heading">95%</div>
                                <div className="text-white/60 text-xs">Success Rate</div>
                            </div>
                            <div className="absolute bottom-8 left-8 glassmorphism rounded-xl px-4 py-3">
                                <div className="text-white font-bold text-xl font-heading">30+</div>
                                <div className="text-white/60 text-xs">Markets Served</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <h2 className="text-3xl font-bold font-heading text-navy mb-6">What We Do</h2>
                        <div className="text-navy/70 leading-relaxed space-y-5 mb-10 text-base">
                            <p>
                                We work with our clients on defined scope of work to support their product development and commercial launch efforts — from early-stage regulatory navigation through to full market entry and beyond.
                            </p>
                            <p>
                                Our team also supports IVD innovators and manufacturers as full time or fractional senior executives and advisors.
                            </p>
                            <p>
                                Schedule your consultation with our team of subject matter experts today to explore
                                pioneering solutions tailored to your needs. Our commitment to innovation ensures
                                you receive the highest level of care and insight throughout every phase of your
                                bio-product development and launch journey.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-navy mb-6">Our Capabilities</h3>
                        
                        {/* Capability Options */}
                        <div className="flex flex-col gap-3 mb-10">
                            <button 
                                onClick={() => setActiveOption('a')}
                                className={`text-left p-4 rounded-xl border transition-all duration-300 ${activeOption === 'a' ? 'bg-teal/5 border-teal border-2' : 'bg-grey border-navy/5 hover:border-teal/30'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${activeOption === 'a' ? 'border-teal' : 'border-navy/20'}`}>
                                        {activeOption === 'a' && <div className="w-2.5 h-2.5 bg-teal rounded-full" />}
                                    </div>
                                    <span className={`font-bold text-sm ${activeOption === 'a' ? 'text-navy' : 'text-navy/60'}`}>
                                        Companies Developing and Launching Life Savings Therapeutics (Pharmaceuticals/Biotech)
                                    </span>
                                </div>
                            </button>

                            <button 
                                onClick={() => setActiveOption('b')}
                                className={`text-left p-4 rounded-xl border transition-all duration-300 ${activeOption === 'b' ? 'bg-teal/5 border-teal border-2' : 'bg-grey border-navy/5 hover:border-teal/30'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${activeOption === 'b' ? 'border-teal' : 'border-navy/20'}`}>
                                        {activeOption === 'b' && <div className="w-2.5 h-2.5 bg-teal rounded-full" />}
                                    </div>
                                    <span className={`font-bold text-sm ${activeOption === 'b' ? 'text-navy' : 'text-navy/60'}`}>
                                        In Vitro Diagnostics Innovators / Digital Health Companies / CLIA laboratories
                                    </span>
                                </div>
                            </button>
                        </div>

                        <motion.ul 
                            key={activeOption}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-4 mb-10"
                        >
                            {(activeOption === 'a' ? slide1 : slide2).map((b, i) => (
                                <motion.li
                                    key={b}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="flex items-center gap-3 text-navy/80 font-medium"
                                >
                                    <CheckCircle2 size={20} color="#00C2A8" className="shrink-0" />
                                    {b}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <Link to="/contact" id="consulting-cta" className="btn-primary inline-flex items-center gap-2">
                            Book Consultation <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA strip ── */}
            <section className="py-16 px-6 bg-grey">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center glassmorphism-light rounded-3xl p-12 border border-teal/20"
                >
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                        <Mail size={22} color="#00C2A8" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-navy mb-3">
                        GET IN TOUCH FOR CONSULTING
                    </h2>
                    <p className="text-navy/60 mb-6">
                        Ready to accelerate your life sciences journey? Reach out and let's build something
                        extraordinary together.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                        Contact Us <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
