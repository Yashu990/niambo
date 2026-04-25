import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
    {
        id: 1,
        slug: "future-of-diagnostics-2026",
        title: "The Future of Diagnostics in 2026",
        excerpt: "Exploring how AI and nanotechnology are reshaping the diagnostic landscape for early disease detection.",
        author: "Dr. Sarah Chen",
        date: "March 28, 2026",
        category: "Diagnostics",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        slug: "supply-chain-resilience-life-sciences",
        title: "Global Supply Chain Resilience in Life Sciences",
        excerpt: "Strategies for building more robust and agile supply chains in an increasingly complex global environment.",
        author: "Marcus Thorne",
        date: "March 15, 2026",
        category: "Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        slug: "digital-transformation-biotech",
        title: "Digital Transformation: A New Era for Biotech",
        excerpt: "How digital-first approaches are accelerating the drug discovery process and reducing time-to-market.",
        author: "Elena Rodriguez",
        date: "March 10, 2026",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, delay: i * 0.1 } 
    }),
}

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[45vh] flex flex-col justify-center">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Insights & Thinking
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            NIAMBIO <span className="gradient-text">BLOG</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
                            Deep dives into the latest trends, breakthroughs, and strategies in the global life sciences industry.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-white text-sm font-bold animate-pulse">
                            <Clock size={16} /> BLOG COMING SOON
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter & Search Area */}
            <section className="bg-white py-12 border-b border-navy/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search articles..." 
                            className="w-full pl-12 pr-6 py-3 bg-grey rounded-full border-none focus:ring-2 focus:ring-teal/20 transition-all outline-none"
                        />
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                        {["All", "Diagnostics", "Supply Chain", "Market Access", "Digital"].map((cat) => (
                            <button key={cat} className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border border-navy/10 hover:border-teal hover:text-teal">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-grey">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, i) => (
                            <motion.article 
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl transition-all group flex flex-col h-full"
                            >
                                <Link to={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 rounded-full bg-navy/80 backdrop-blur-md text-teal text-xs font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    />
                                </Link>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 mb-4 text-xs text-navy/40 font-semibold">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`}>
                                        <h3 className="text-2xl font-bold font-heading text-navy mb-4 group-hover:text-teal transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-navy/60 leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link to={`/blog/${post.slug}`} className="text-navy font-bold flex items-center gap-2 group/btn w-fit">
                                        Read More <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-2 transition-transform text-teal" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="btn-outline">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        Stay Ahead of the <span className="gradient-text">Curve</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Subscribe to our newsletter to receive the latest industry insights and market updates directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white flex-1 outline-none focus:ring-2 focus:ring-teal"
                        />
                        <button className="btn-primary">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
