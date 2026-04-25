import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Play, BookOpen, Coffee, HelpCircle, Lock, Clock } from 'lucide-react'

const resources = [
    {
        title: "2026 Global MedTech Outlook",
        type: "Whitepaper",
        icon: FileText,
        color: "bg-teal/10 text-teal",
        desc: "A comprehensive analysis of the next decade of medical technology innovation.",
        locked: false
    },
    {
        title: "Market Entry Toolkit (APAC)",
        type: "Guide",
        icon: BookOpen,
        color: "bg-blue-500/10 text-blue-500",
        desc: "Step-by-step regulatory and commercial roadmap for entering Southeast Asian markets.",
        locked: true
    },
    {
        title: "Navigational Excellence Training",
        type: "Video Series",
        icon: Play,
        color: "bg-purple-500/10 text-purple-500",
        desc: "Mastering the complexities of global supply chain management for life sciences.",
        locked: true
    },
    {
        title: "IVD Regulatory Framework",
        type: "Checklist",
        icon: HelpCircle,
        color: "bg-orange-500/10 text-orange-500",
        desc: "Essential compliance requirements for In-Vitro Diagnostics across major jurisdictions.",
        locked: false
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function ResourcesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative min-h-[50vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Expert Knowledge
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight max-w-4xl mx-auto">
                            KNOWLEDGE <span className="gradient-text">RESOURCES</span> & TOOLKITS
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                            Access our curated collection of whitepapers, tactical guides, and regulatory toolkits designed for life sciences leaders.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-white text-sm font-bold animate-pulse">
                            <Clock size={16} /> RESOURCES COMING SOON
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="section-padding bg-grey">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resources.map((res, i) => (
                            <motion.div 
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm group hover:shadow-xl transition-all relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${res.color}`}>
                                    <res.icon size={26} strokeWidth={1.5} />
                                </div>
                                <div className="text-xs font-bold text-navy/30 uppercase tracking-widest mb-3">{res.type}</div>
                                <h3 className="text-xl font-bold font-heading text-navy mb-4 leading-tight group-hover:text-teal transition-colors">
                                    {res.title}
                                </h3>
                                <p className="text-navy/60 text-sm leading-relaxed mb-8 flex-1">
                                    {res.desc}
                                </p>
                                <button className={`w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                                    res.locked ? 'bg-navy/5 text-navy/30 cursor-not-allowed' : 'bg-teal text-white hover:bg-navy'
                                }`}>
                                    {res.locked ? <><Lock size={16} /> Member Only</> : <><Download size={16} /> Download</>}
                                </button>

                                {res.locked && (
                                    <div className="absolute top-4 right-4 text-navy/10 pointer-events-none">
                                        <Lock size={40} strokeWidth={1} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Member Banner */}
                    <div className="mt-20 lg:mt-32 bg-navy rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-bold font-heading text-white mb-6">
                                    Unlock Full <span className="gradient-text">Member Access</span>
                                </h2>
                                <p className="text-white/60 text-lg mb-10 leading-loose">
                                    Join our network to unlock our full library of proprietary market research, 
                                    regulatory toolkits, and on-demand expert training sessions.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="btn-primary">Become a Member</button>
                                    <button className="flex items-center gap-2 text-white font-bold hover:text-teal transition-colors py-3 px-4">
                                        <Coffee size={20} className="text-teal" /> Learn about Benefits
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: 'Proprietary Research', count: '120+' },
                                    { label: 'Expert Training', count: '45h+' },
                                    { label: 'Compliance Toolkits', count: '15' },
                                    { label: 'Global Network', count: '500+' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="text-3xl font-bold gradient-text mb-1">{item.count}</div>
                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
