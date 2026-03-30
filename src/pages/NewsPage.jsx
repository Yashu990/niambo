import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Globe, ArrowRight, Rss, Bell } from 'lucide-react'

const marketUpdates = [
    {
        title: "European Biotech Index Rises 12%",
        date: "March 29, 2026",
        source: "Market Watch",
        summary: "The European biotech sector shows strong quarterly growth behind several key approval milestones.",
        tags: ["Markets", "Europe"],
        type: "update"
    },
    {
        title: "Breakthrough Therapy Designation for Orphan Drugs",
        date: "March 27, 2026",
        source: "FDA News",
        summary: "The FDA has granted breakthrough status to two new therapies targeting rare genetic conditions in pediatrics.",
        tags: ["Regulatory", "FDA"],
        type: "news"
    },
    {
        title: "Major Diagnostics Merger Announced in SEA",
        date: "March 25, 2026",
        source: "Asian Business Review",
        summary: "A $2.4B merger aims to consolidate the molecular diagnostics landscape across Southeast Asian markets.",
        tags: ["M&A", "APAC"],
        type: "news"
    },
    {
        title: "Next-Gen Sequencing Costs Hit New Record Lows",
        date: "March 22, 2026",
        source: "Tech Insights",
        summary: "New sequencing technologies are making personalized genomics more accessible than ever before.",
        tags: ["Tech", "Genetics"],
        type: "update"
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function NewsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative min-h-[50vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5 flex items-center gap-2 w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" /> Live Market Feed
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            News & Market <span className="gradient-text">Updates</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
                            Stay informed with the latest breakthroughs, regulatory shifts, and commercial trends across the global life sciences sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main News Flow */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Feed Column */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="flex items-center justify-between pb-6 border-b border-navy/5">
                            <h2 className="text-2xl font-bold font-heading text-navy flex items-center gap-3">
                                <Rss size={24} className="text-teal" /> Latest Feed
                            </h2>
                            <div className="flex items-center gap-2 text-sm font-semibold text-navy/40">
                                <span className="p-1.5 bg-green-500 rounded-full h-2 w-2 mr-1" /> Updated Just Now
                            </div>
                        </div>

                        {marketUpdates.map((item, i) => (
                            <motion.div 
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="group flex flex-col md:flex-row gap-8 pb-10 border-b border-navy/5 last:border-0"
                            >
                                <div className="w-full md:w-32 flex-shrink-0 pt-1">
                                    <div className="text-xs font-bold text-navy/30 uppercase tracking-widest mb-1">{item.date}</div>
                                    <div className="text-teal font-black text-sm uppercase tracking-tighter">{item.source}</div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-0.5 rounded-md bg-navy/5 text-navy/60 text-[10px] font-bold uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-navy mb-4 group-hover:text-teal transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-navy/60 leading-relaxed mb-6">
                                        {item.summary}
                                    </p>
                                    <button className="text-navy/80 hover:text-teal font-bold flex items-center gap-2 text-sm group-hover:gap-4 transition-all">
                                        Full Story <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                        
                        <div className="pt-6">
                            <button className="w-full py-4 rounded-xl bg-grey font-bold text-navy/60 hover:text-navy hover:bg-teal/10 transition-all border border-navy/5">
                                View Archive
                            </button>
                        </div>
                    </div>

                    {/* Sidebar / Trending */}
                    <aside className="space-y-12">
                        <div className="bg-navy rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                            <TrendingUp className="text-teal mb-6" size={32} />
                            <h3 className="text-xl font-bold font-heading text-white mb-4">Market Watch 2026</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'APAC Growth', val: '+4.2%', color: 'text-green-400' },
                                    { label: 'Global MedTech', val: '+2.8%', color: 'text-green-400' },
                                    { label: 'EU Regulatory Gap', val: '-1.4%', color: 'text-rose-400' },
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                        <span className="text-white/60 text-sm font-semibold">{stat.label}</span>
                                        <span className={`${stat.color} font-bold`}>{stat.val}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 btn-primary text-sm py-4">Download Q1 Forecast</button>
                        </div>

                        <div className="bg-grey rounded-3xl p-8 border border-navy/5">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-teal/20 p-2 rounded-lg"><Bell size={20} className="text-teal" /></span>
                                <h3 className="text-xl font-bold font-heading text-navy">Alert Me</h3>
                            </div>
                            <p className="text-navy/50 text-sm mb-6 leading-loose">
                                Receive customized market alerts based on your specialized interests.
                            </p>
                            <div className="space-y-4">
                                <input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="w-full px-5 py-3 rounded-xl bg-white border border-navy/10 outline-none focus:border-teal" 
                                />
                                <button className="w-full btn-outline text-sm">Create Alert</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    )
}
