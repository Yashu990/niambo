import React from 'react'
import { motion } from 'framer-motion'

const cards = [
    {
        image: '/ecosystem-expert.png',
        title: 'Expert Marketplace',
        description:
            'A dynamic platform connecting life science experts with innovators and manufacturers to accelerate product development and commercialization.',
        color: '#00C2A8',
        glow: 'rgba(0,194,168,0.2)',
    },
    {
        image: '/ecosystem-podcast.png',
        title: 'Precision Pulse Podcast',
        description:
            'Exploring precision health, meditation science, diagnostics innovation and lifestyle transformation.',
        color: '#4FC3F7',
        glow: 'rgba(79,195,247,0.2)',
    },
    {
        image: '/ecosystem-bio.png',
        title: 'Bio-Product Development',
        description:
            'Supporting development and global commercial launch of cutting-edge diagnostic and therapeutic innovations.',
        color: '#6C63FF',
        glow: 'rgba(108,99,255,0.2)',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15 },
    }),
}

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="section-padding bg-grey relative overflow-hidden">
            {/* Bg decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-lightblue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-4">
                        What We Do
                    </span>
                    <h2 className="text-4xl font-bold font-heading text-navy mb-4">Our Ecosystem</h2>
                    <p className="text-navy/60 text-lg max-w-2xl mx-auto">
                        A fully integrated platform built to accelerate life sciences innovation at every stage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            custom={i + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            id={`ecosystem-card-${i}`}
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
                                <p className="text-navy/60 leading-relaxed text-sm">{card.description}</p>
                                <div className="mt-6 h-0.5 w-12 rounded-full" style={{ background: card.color }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
