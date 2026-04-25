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
    { name: 'Amazon Music', href: '#', color: '#FF9900' },
    { name: 'Apple Podcasts', href: '#', color: '#B150E2' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Precision_Pulse_with_Amit', color: '#FF0000' },
]

const shorts = [
    { id: 'rlg2I6eO0vo', title: 'Precision Health Insights', num: 'S1' },
    { id: '5le3ubNNd4M', title: 'Energy & Meditation', num: 'S2' },
    { id: 'kTjYfR2PoU8', title: 'Diagnostics Future', num: 'S3' },
    { id: '74f6Xnx36ts', title: 'Lab Innovation', num: 'S4' },
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
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-navy/5"
                    >
                        <h2 className="text-3xl font-bold font-heading text-navy mb-8 text-center">About the Show</h2>
                        <div className="space-y-6 text-navy/70 text-lg leading-relaxed">
                            <p className="text-xl font-medium text-navy">
                                The Precision Pulse Podcast: Where science, technology, and everyday living converge through the lens of precision.
                            </p>
                            
                            <p>
                                Hosted by <strong className="text-navy">Amit K. Jain (AJ)</strong>, The Precision Pulse explores how precision-driven thinking is reshaping healthcare, human performance, and the way we live. Each episode bridges cutting edge innovation with practical, real world impact—making complex ideas accessible, relevant, and actionable.
                            </p>

                            <p>
                                Through conversations with global experts, innovators, clinicians, and thought leaders, the podcast dives into:
                            </p>
                            
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Breakthroughs in precision medicine, diagnostics, and AI enabled healthcare',
                                    'Emerging technologies transforming disease detection, treatment, and prevention',
                                    'The expanding role of data, real world evidence, and personalized care',
                                    'Practical strategies for mindset, physical health, and intentional living'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-grey/50 p-4 rounded-xl border border-navy/5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0" />
                                        <span className="text-base font-medium leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p>
                                What sets The Precision Pulse apart is its holistic perspective. It doesn’t just decode scientific advances—it connects them to the small, precise habits that shape long term well being. Whether unpacking the future of diagnostics or exploring how micro behaviors influence performance, the podcast brings clarity to what truly matters.
                            </p>
                            
                            <p>
                                At its core, The Precision Pulse is about empowerment through precision—helping listeners make smarter decisions, adopt meaningful practices, and stay ahead in a rapidly evolving health and technology landscape.
                            </p>
                        </div>
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
                        <h2 className="text-3xl font-bold font-heading text-navy mb-3">Full Episodes</h2>
                        <p className="text-navy/55">In-depth conversations with industry leaders</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {episodes.map((ep, i) => (
                            <EpisodeCard key={ep.id} ep={ep} index={i} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl font-bold font-heading text-navy mb-3">Marketing Shorts</h2>
                        <p className="text-navy/55">Quick insights and highlights from the show</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {shorts.map((short, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-navy rounded-2xl overflow-hidden aspect-[9/16] relative group"
                            >
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${short.id}?modestbranding=1&rel=0`}
                                    title={short.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="text-white text-xs font-bold">{short.num}</div>
                                    <div className="text-white text-sm font-medium truncate">{short.title}</div>
                                </div>
                            </motion.div>
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
