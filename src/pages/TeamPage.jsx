import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, Linkedin, Twitter, ArrowRight, User } from 'lucide-react'

export default function TeamPage() {
    return (
        <>
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                <div className="absolute top-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Leadership
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-5 leading-tight">
                            Meet the Team
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
                            Driven by a passion for precision and a commitment to advancing life sciences innovation globally.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-grey overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-[340px] h-[420px]">
                            <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl">
                                <img
                                    src="/ceo-amit-jain.jpg"
                                    alt="Amit K. Jain – Founder & CEO, NIAMBIO"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                                <div className="absolute bottom-6 left-0 right-0 text-center">
                                    <div className="text-white font-bold text-2xl font-heading mb-1">Amit K. Jain</div>
                                    <div className="text-teal text-sm font-semibold tracking-wide uppercase">Founder & CEO</div>
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                            >
                                <div className="text-navy font-bold text-lg font-heading">25+ yrs</div>
                                <div className="text-navy/50 text-xs">Industry Experience</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="flex items-start gap-3 mb-6">
                            <Quote size={40} color="#00C2A8" className="shrink-0 rotate-180 opacity-60" />
                        </div>
                        <blockquote className="text-2xl font-semibold font-heading text-navy leading-relaxed mb-6">
                            At NIAMBIO, our vision is Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access.
                        </blockquote>
                        <div className="text-navy/65 space-y-4 mb-8 text-base leading-relaxed">
                            <p>
                                Amit K. Jain brings over <strong className="text-navy">25 years of expertise</strong> in
                                life sciences, diagnostics, and biotech consulting. As the founder and CEO of NIAMBIO,
                                he is dedicated to bridging the gap between cutting-edge research and global market success.
                            </p>
                            <p>
                                With deep domain knowledge spanning R&amp;D strategy, regulatory navigation, market access,
                                and commercial launch, Amit has guided numerous Dx innovators and manufacturers to achieve
                                their full commercial potential.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link to="/contact" className="btn-primary flex items-center gap-2">
                                Connect <ArrowRight size={18} />
                            </Link>
                            <div className="flex items-center gap-3">
                                <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-teal/10 transition-colors" aria-label="LinkedIn">
                                    <Linkedin size={18} color="#0B1F3A" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-teal/10 transition-colors" aria-label="Twitter">
                                    <Twitter size={18} color="#0B1F3A" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-6 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold font-heading text-navy mb-4">Join Our Expert Network</h2>
                    <p className="text-navy/60 text-lg mb-8">
                        Are you a subject matter expert in life sciences, diagnostics, or biotech? We're always
                        looking to grow our network of exceptional professionals.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                        Get In Touch <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
