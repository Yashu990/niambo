import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

/* ── 6 real YouTube video IDs ── */
const episodes = [
    {
        id: 'rlg2I6eO0vo',
        num: '01',
        title: 'Precision Health Revolution',
        desc: 'Exploring how precision medicine is transforming healthcare outcomes worldwide.',
        color: '#00C2A8',
    },
    {
        id: '5le3ubNNd4M',
        num: '02',
        title: 'Meditation & Energy Flow',
        desc: 'The science behind meditation, biohacking, and optimizing your biological energy.',
        color: '#4FC3F7',
    },
    {
        id: 'kTjYfR2PoU8',
        num: '03',
        title: 'Diagnostics Innovation',
        desc: 'Next-generation diagnostic tools accelerating early detection and personalized treatment.',
        color: '#6C63FF',
    },
    {
        id: '74f6Xnx36ts',
        num: '04',
        title: 'Life Sciences Precision',
        desc: 'How precision principles are reshaping lab workflows and accelerating R&D timelines.',
        color: '#00C2A8',
    },
    {
        id: 'kg6YuCbNbn4',
        num: '05',
        title: 'Biotech Breakthroughs',
        desc: 'The latest cutting-edge biotech innovations that are changing the global health landscape.',
        color: '#4FC3F7',
    },
    {
        id: 'UB1EUH_2sMg',
        num: '06',
        title: 'Healthy Lifestyle Science',
        desc: 'Actionable strategies for a balanced lifestyle backed by the latest health science research.',
        color: '#6C63FF',
    },
]

const platformLinks = [
    { name: 'Spotify', href: '#', color: '#1DB954' },
    { name: 'Apple Podcasts', href: '#', color: '#B150E2' },
    { name: 'YouTube', href: 'https://www.youtube.com', color: '#FF0000' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

function EpisodeCard({ ep, index }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id={`podcast-ep-${ep.num}`}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl transition-shadow duration-300"
        >
            {/* YouTube embed */}
            <div className="relative w-full aspect-video bg-navy">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${ep.id}`}
                    title={`Precision Pulse – Episode ${ep.num}: ${ep.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            {/* Card body */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: `${ep.color}18`, color: ep.color }}
                    >
                        EP. {ep.num}
                    </span>
                    <a
                        href={`https://youtu.be/${ep.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy/40 hover:text-navy transition-colors"
                        aria-label="Open on YouTube"
                    >
                        <ExternalLink size={14} />
                    </a>
                </div>
                <h3 className="text-base font-bold font-heading text-navy mb-2 leading-snug">{ep.title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{ep.desc}</p>
            </div>
        </motion.div>
    )
}

export default function PodcastPage() {
    return (
        <>
            {/* ── Page Hero ── */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                {/* Concentric ring decoration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="absolute rounded-full border border-white"
                            style={{ width: 200 + i * 100, height: 200 + i * 100 }} />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Listen & Learn
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-5 leading-tight">
                            Precision Pulse Podcast
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                            Redefining Precision for a Healthier Life
                        </p>

                        {/* Platform links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {platformLinks.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.href}
                                    id={`podcast-platform-${p.name.toLowerCase().replace(' ', '-')}`}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glassmorphism text-white text-sm font-medium hover:scale-105 transition-transform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={14} color={p.color} />
                                    {p.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── About the Podcast ── */}
            <section className="section-padding bg-grey">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold font-heading text-navy mb-6">About the Show</h2>
                        <p className="text-navy/65 text-lg leading-relaxed">
                            <strong className="text-navy">Precision Pulse</strong> is a podcast that delves into the profound impact of
                            precision in shaping everyday experiences. By exploring topics such as precision health,
                            the intricate connection between meditation and energy flow, effective personal hygiene
                            practices, and actionable strategies for maintaining a balanced lifestyle, the podcast
                            provides a comprehensive guide to living with intention and clarity.
                        </p>
                        <p className="text-navy/65 text-lg leading-relaxed mt-4">
                            Each episode is designed to empower listeners with cutting-edge insights, fostering a
                            deeper understanding of how precision can transform personal well-being and elevate the
                            quality of life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Episodes Grid ── */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl font-bold font-heading text-navy mb-3">All Episodes</h2>
                        <p className="text-navy/55">Watch our latest episodes on YouTube</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {episodes.map((ep, i) => (
                            <EpisodeCard key={ep.id} ep={ep} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Appear on Podcast CTA ── */}
            <section className="py-20 px-6 bg-grey">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center gradient-bg rounded-3xl p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center mx-auto mb-4">
                        <Mail size={22} color="#00C2A8" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-white mb-3 relative z-10">
                        GET IN TOUCH FOR PODCAST
                    </h2>
                    <p className="text-white/70 mb-6 relative z-10">
                        Are you a Subject Matter Expert in a specific area of interest or would you like to
                        appear on our podcast? We'd love to hear from you.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2 relative z-10">
                        Contact Us <Mail size={16} />
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
