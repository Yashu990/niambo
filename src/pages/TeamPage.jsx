import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, Linkedin, Twitter, ArrowRight, GraduationCap, Award, Briefcase, Globe, Target } from 'lucide-react'

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
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-5 leading-tight">
                            Meet the <span className="gradient-text">Team</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
                            Driven by a passion for precision and a commitment to advancing life sciences innovation globally.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-grey overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                        className="sticky top-32"
                    >
                        <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-white/5">
                                <img
                                    src="/ceo-amit-jain.jpg"
                                    alt="Amit K. Jain – Founder & President, NIAMBIO"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="text-white font-bold text-3xl font-heading mb-1">Amit K. Jain, MBA</div>
                                    <div className="text-teal text-base font-semibold tracking-widest uppercase">Founder & President</div>
                                    <div className="text-white/50 text-xs mt-2 uppercase tracking-widest font-bold">Boston, USA</div>
                                </div>
                            </div>
                            
                            <motion.div
                                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 bg-white rounded-3xl p-6 shadow-2xl border border-navy/5 hidden md:block"
                            >
                                <div className="text-navy font-bold text-3xl font-heading mb-1">25+</div>
                                <div className="text-navy/40 text-xs font-bold uppercase tracking-wider">Years of Global<br/>Experience</div>
                            </motion.div>
                        </div>

                        <div className="mt-20 grid grid-cols-2 gap-6 max-w-[440px] mx-auto lg:mx-0">
                            <div className="p-6 bg-white/50 rounded-2xl border border-navy/5">
                                <GraduationCap className="text-teal mb-3" size={24} />
                                <div className="text-navy font-bold text-sm mb-1">MBA</div>
                                <div className="text-navy/50 text-[10px] leading-tight">Babson College,<br/>Massachusetts</div>
                            </div>
                            <div className="p-6 bg-white/50 rounded-2xl border border-navy/5">
                                <Award className="text-teal mb-3" size={24} />
                                <div className="text-navy font-bold text-sm mb-1">M.Sc. Genetics</div>
                                <div className="text-navy/50 text-[10px] leading-tight">Haryana Agricultural<br/>University</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <div className="flex items-start gap-3 mb-8">
                                <Quote size={48} color="#00C2A8" className="shrink-0 rotate-180 opacity-60" />
                            </div>
                            <blockquote className="text-2xl md:text-3xl font-bold font-heading text-navy leading-tight mb-10">
                                At NIAMBIO, our mission is “Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access”
                            </blockquote>
                        </div>

                        <div className="text-navy/70 space-y-6 text-lg leading-relaxed">
                            <p>
                                Amit K. Jain brings over <strong>25+ years of global experience</strong> in in vitro diagnostic (IVD) development and commercialization, with a strong track record across oncology, infectious diseases, general medicine, and digital health.
                            </p>
                            <p>
                                His career spans leadership roles in R&D, program management, business and corporate development, and strategic consulting. Most recently, Amit served as a senior leader in the Precision Medicine Practice at <strong>Veranex</strong>, where he supported biopharma, diagnostics, and digital health clients in market research and Rx/Dx strategy development.
                            </p>
                            <p>
                                Prior to Veranex, Amit was Managing Director at <strong>Diaceutics</strong>, and held leadership positions at <strong>Leica Biosystems</strong> and <strong>Immunetics</strong>, where he led companion diagnostics (CDx) development and global regulatory submission strategies.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-navy/5">
                            <h3 className="text-xs font-bold text-navy/30 uppercase tracking-[0.2em] mb-8">Career Highlights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { label: 'Precision Medicine', sub: 'Veranex Practice Lead', icon: Target },
                                    { label: 'Corporate Dev', sub: 'Diaceutics MD', icon: Briefcase },
                                    { label: 'CDx Development', sub: 'Leica Biosystems', icon: Award },
                                    { label: 'Global Strategy', sub: 'Regulatory Submission', icon: Globe },
                                ].map((h, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-teal/5 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                                            <h.icon size={18} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-navy">{h.label}</div>
                                            <div className="text-[11px] text-navy/40 font-medium">{h.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-6">
                            <Link to="/contact" className="btn-primary flex items-center gap-2">
                                Connect with Amit <ArrowRight size={18} />
                            </Link>
                            <div className="flex items-center gap-3">
                                <a href="#" className="w-12 h-12 rounded-xl bg-white border border-navy/5 flex items-center justify-center hover:shadow-lg transition-all" aria-label="LinkedIn">
                                    <Linkedin size={20} color="#0B1F3A" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-xl bg-white border border-navy/5 flex items-center justify-center hover:shadow-lg transition-all" aria-label="Twitter">
                                    <Twitter size={20} color="#0B1F3A" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <span className="text-teal font-bold text-xs uppercase tracking-widest mb-4 inline-block">Collaborate</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-navy mb-6">Join Our Expert Network</h2>
                    <p className="text-navy/60 text-lg mb-10 max-w-2xl mx-auto">
                        Are you a subject matter expert in life sciences, diagnostics, or biotech? We're always
                        looking to grow our network of exceptional professionals.
                    </p>
                    <Link to="/contact" className="btn-primary py-4 px-12 text-lg inline-flex items-center gap-2">
                        Get In Touch <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
