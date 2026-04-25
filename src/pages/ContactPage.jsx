import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, MapPin, Send, Paperclip, Calendar } from 'lucide-react'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@niambio.com' },
    { icon: Clock, label: 'Office Hours', value: '9:00 AM – 5:00 PM (Mon–Fri)' },
    { icon: MapPin, label: 'Location', value: 'United States' },
]

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '', file: null })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <>
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                <div className="absolute top-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Get In Touch
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-5 leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-white/70 text-xl max-w-xl leading-relaxed">
                            Ready to accelerate your life sciences innovation? Our team is here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.65 }}
                    >
                        <div className="gradient-bg rounded-3xl p-10 h-full flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                            <div>
                                <h3 className="text-2xl font-bold font-heading text-white mb-2">Contact Information</h3>
                                <p className="text-white/50 mb-10 text-sm">Fill in the form and our team will be in touch within 24 hours.</p>
                                <div className="space-y-7">
                                    {contactInfo.map(({ icon: Icon, label, value }) => (
                                        <div key={label} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl glassmorphism flex items-center justify-center shrink-0">
                                                <Icon size={18} color="#00C2A8" />
                                            </div>
                                            <div>
                                                <div className="text-white/50 text-xs mb-0.5">{label}</div>
                                                <div className="text-white font-medium">{value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 mt-10">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full"
                                        style={{ background: i < 3 ? '#00C2A8' : 'rgba(255,255,255,0.2)' }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
                    >
                        {sent ? (
                            <div className="h-full flex items-center justify-center flex-col text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                                    <Send size={28} color="#00C2A8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-navy">Message Sent!</h3>
                                <p className="text-navy/60">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                <button onClick={() => setSent(false)} className="btn-outline mt-4">Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-navy/70 mb-2" htmlFor="contact-name">Full Name</label>
                                    <input id="contact-name" type="text" required placeholder="Your name"
                                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-navy/10 outline-none focus:border-teal transition-colors text-navy bg-grey placeholder:text-navy/30 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy/70 mb-2" htmlFor="contact-email">Email Address</label>
                                    <input id="contact-email" type="email" required placeholder="your@email.com"
                                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-navy/10 outline-none focus:border-teal transition-colors text-navy bg-grey placeholder:text-navy/30 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy/70 mb-2" htmlFor="contact-message">Message</label>
                                    <textarea id="contact-message" required rows={5} placeholder="Tell us about your project or inquiry..."
                                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-navy/10 outline-none focus:border-teal transition-colors text-navy bg-grey placeholder:text-navy/30 text-sm resize-none" />
                                </div>
                                <div>
                                    <label className="flex items-center gap-3 cursor-pointer group" htmlFor="contact-file">
                                        <div className="w-10 h-10 rounded-xl border-2 border-dashed border-navy/20 group-hover:border-teal flex items-center justify-center transition-colors">
                                            <Paperclip size={16} color="#00C2A8" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-navy/70">Attach File</div>
                                            <div className="text-xs text-navy/40">{form.file ? form.file.name : 'PDF, DOC, PNG (max 10MB)'}</div>
                                        </div>
                                    </label>
                                    <input id="contact-file" type="file" className="hidden"
                                        onChange={(e) => setForm({ ...form, file: e.target.files[0] })} />
                                </div>
                                <button id="contact-submit" type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                                    Send Message <Send size={16} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
            
            <section className="pb-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-grey rounded-[3rem] p-8 md:p-16 border border-navy/5 flex flex-col lg:flex-row items-center gap-12"
                    >
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-bold mb-6">
                                <Calendar size={16} /> SCHEDULE A MEETING
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-6">
                                Let's Discuss Your <span className="gradient-text">Project</span>
                            </h2>
                            <p className="text-navy/60 text-lg mb-10 max-w-xl">
                                Skip the form and book a direct consultation with our leadership team. 
                                We're ready to explore how NIAMBIO can accelerate your bio-innovation journey.
                            </p>
                            <a href="https://cal.com/akjain" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                                Book a Meeting <Calendar size={18} />
                            </a>
                        </div>
                        
                        <div className="w-full lg:w-auto flex flex-col items-center gap-4 bg-white p-8 rounded-3xl shadow-xl border border-navy/5">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-grey flex items-center justify-center p-2">
                                <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://cal.com/akjain" 
                                    alt="Scan to schedule a meeting" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-navy font-bold text-sm">Scan to Book</div>
                                <a href="https://cal.com/akjain" target="_blank" rel="noopener noreferrer" className="text-teal text-xs mt-1 font-bold block hover:underline">cal.com/akjain</a>
                                <div className="text-navy/40 text-xs mt-1 font-medium">Open with your camera app</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
