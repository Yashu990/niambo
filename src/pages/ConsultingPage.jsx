import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, FlaskConical, Mail, Target, Briefcase, Zap, Globe, Activity } from 'lucide-react'

const therapeuticsCapabilities = [
    {
        title: 'Early-Stage Discovery & Clinical Development Strategy',
        icon: FlaskConical,
        items: [
            'Biomarker research to support translational sciences and clinical development teams: Biomarker landscape, prevalence & epidemiology assessment across disease stages',
            'Clinical Trial Assay development and implementation Strategy (CTA)',
            'Dx Partnership Strategy & Support: Technology Evaluation, CTA/CDx development vendors selection, CTA/CDx contract negotiation',
            'Patient identification & clinical site selection',
            'Global Regulatory Filing Strategy (US/EU/ROW)',
            'Dx Development & Commercial Evaluation',
            'Real World Data, Real World Evidence & Tools',
            'Dx Capability Building: Dx organization structure, skills needed, resource requirement'
        ]
    },
    {
        title: 'Commercial Readiness Roadmap',
        icon: Target,
        items: [
            'Testing Universe Assessment: Stakeholders, Technology, Methodology, Availability',
            'Patient Testing Journey',
            'Market Access Assessment: Reimbursement & Technology Assessment stakeholders, Coding, Coverage, Pricing, Payer preferences and Evidence requirements',
            'Regulatory Assessment: Stakeholders, Process, Timeline, LDT/IVD, Validation requirements, Test Quality Assurance',
            'Advisory Boards / Stakeholder Insights',
            'Primary Market Research (Quantitative/Qualitative)',
            'Dx Adopters Segmentation',
            'Drivers & Barriers for Test Availability & Adoption',
            'Evidence based Strategy',
            'Dx Commercial Readiness Playbook'
        ]
    },
    {
        title: 'Implementation Support',
        icon: Briefcase,
        items: [
            'Value Communication Tools: Value Dossier, Value Story, Training Decks, Workshops',
            'Dx Partnership Evaluation & Advisory: Technology Platform, Testing Lab Capabilities',
            'Test Sponsorship Strategy',
            'Awareness, Attitude, Usage Studies (AAU)',
            'Salesforce enablement',
            'Real World Data & Adoption Tracking',
            'Dx Policy Monitoring'
        ]
    }
]

const diagnosticsCapabilities = [
    {
        title: 'Market Assessment & Strategy',
        icon: Globe,
        items: [
            'Market & Opportunity Assessment: Market Sizing & Segment Analysis, Competitor Landscape & Analysis, Stakeholder segmentation, Unmet Needs Analysis & validation',
            'Technology assessment & roadmap, Opportunity Mapping, Use Cases prioritization',
            'Demand & Adoption Forecast, Regulatory & Reimbursement Analysis',
            'Awareness, Attitude, Usage Study (AAU)',
            'Clinical Development & evidence generation',
            'Business Development & Portfolio Management: Partner Search, Acquisition & Investment Targets',
            'Pricing and Business Model Strategies'
        ]
    },
    {
        title: 'Commercial Launch Strategy',
        icon: Zap,
        items: [
            'Market Access Strategy: Reimbursement Assessment, Regulatory Assessment',
            'Clinical & Economical Evidence Strategy',
            'Cost Effectiveness & Budget Impact Analysis',
            'Value Communication: Global Value Dossier, Internal / External stakeholder engagement and awareness materials',
            'Partnership(s) Assessment & Advisory',
            'Commercial Readiness Roadmap',
            'Primary Market Research (Quantitative, Qualitative)',
            'Advisory Boards and conference support'
        ]
    },
    {
        title: 'Global Expansion Support',
        icon: Activity,
        items: [
            'Market Entry Strategies: Competitive Analysis, Regulatory & Market Access barriers, Stakeholder preference & segmentation',
            'Clinical & economical evidence needs',
            'New market potential, Market competition, Incumbent displacement strategies',
            'Awareness, Attitude, Usage Study (AAU)',
            'Strategic Decision-Making Support: Build / Buy / Partner, People, Process, Resources, and Planning strategy'
        ]
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.05 } }),
}

export default function ConsultingPage() {
    const [activeOption, setActiveOption] = useState('a')
    const [expandedCategory, setExpandedCategory] = useState(0)

    const activeData = activeOption === 'a' ? therapeuticsCapabilities : diagnosticsCapabilities

    return (
        <div className="bg-white">
            {/* ── Page Hero ── */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Expert Guidance
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            Strategic Consulting
                        </h1>
                        <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
                            Empowering life sciences innovators with expert guidance across every stage — from R&D through global commercial launch.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Interactive Process Strip ── */}
            <section className="py-12 bg-navy border-y border-white/10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    {[
                        { label: 'Development', color: '#00C2A8' },
                        { label: 'Dx / Rx Strategy', color: '#4FC3F7' },
                        { label: 'Global Launch', color: '#6C63FF' }
                    ].map((step, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm" style={{ borderColor: step.color, color: step.color }}>
                                {i + 1}
                            </div>
                            <span className="text-white/80 font-bold tracking-wide uppercase text-sm group-hover:text-white transition-colors">
                                {step.label}
                            </span>
                            {i < 2 && <ArrowRight className="hidden md:block text-white/20 ml-8" size={20} />}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Strategy Selection ── */}
            <section className="section-padding bg-grey">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4">Our Capabilities</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 justify-center mb-16">
                        <button 
                            onClick={() => { setActiveOption('a'); setExpandedCategory(0); }}
                            className={`flex-1 text-left p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 ${activeOption === 'a' ? 'bg-white border-teal shadow-xl ring-1 ring-teal/20' : 'bg-white/50 border-navy/5 hover:bg-white hover:border-teal/30'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeOption === 'a' ? 'bg-teal text-white' : 'bg-navy/5 text-navy/40'}`}>
                                <FlaskConical size={20} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg mb-1 ${activeOption === 'a' ? 'text-navy' : 'text-navy/60'}`}>Pharmaceuticals & Biotech</h3>
                                <p className="text-navy/40 text-xs">Companies Developing and Launching Life Savings Therapeutics (Pharmaceuticals/Biotech)</p>
                            </div>
                        </button>

                        <button 
                            onClick={() => { setActiveOption('b'); setExpandedCategory(0); }}
                            className={`flex-1 text-left p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 ${activeOption === 'b' ? 'bg-white border-teal shadow-xl ring-1 ring-teal/20' : 'bg-white/50 border-navy/5 hover:bg-white hover:border-teal/30'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeOption === 'b' ? 'bg-teal text-white' : 'bg-navy/5 text-navy/40'}`}>
                                <Activity size={20} />
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg mb-1 ${activeOption === 'b' ? 'text-navy' : 'text-navy/60'}`}>IVD & Digital Health</h3>
                                <p className="text-navy/40 text-xs">In Vitro Diagnostics Innovators / Digital Health Companies / CLIA laboratories</p>
                            </div>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="wait">
                            {activeData.map((category, idx) => (
                                <motion.div
                                    key={`${activeOption}-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="bg-white rounded-[2rem] p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                                        <category.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold font-heading text-navy mb-6 leading-tight min-h-[3.5rem]">
                                        {category.title}
                                    </h4>
                                    <ul className="space-y-4 flex-1">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-navy/70 leading-relaxed">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ── What We Do ── */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-navy rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">
                                What We Do
                            </h2>
                            <div className="space-y-6 text-white/60 text-lg">
                                <p>
                                    Our team comprises Subject Matter Experts in R&D, market access, and commercial launch strategies in global markets.
                                </p>
                                <p>
                                    We work with our clients on defined scope of work to support their product development and commercial launch efforts — from early-stage regulatory navigation through to full market entry and beyond.
                                </p>
                                <p>
                                    Our team also supports IVD innovators and manufacturers as full time or fractional senior executives and advisors.
                                </p>
                                <p className="text-white/40 text-base">
                                    Schedule your consultation with our team of subject matter experts today to explore pioneering solutions tailored to your needs. Our commitment to innovation ensures you receive the highest level of care and insight throughout every phase of your bio-product development and launch journey.
                                </p>
                            </div>
                            <Link to="/contact" className="mt-10 btn-primary inline-flex items-center gap-2">
                                Start Your Journey <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="w-full lg:w-[400px] h-[400px] rounded-2xl overflow-hidden glassmorphism p-8 flex items-center justify-center">
                            <div className="text-center">
                                <Activity size={60} className="text-teal mx-auto mb-6 animate-pulse" />
                                <div className="text-white font-bold text-2xl mb-2">Subject Matter Expertise</div>
                                <p className="text-white/40 text-sm">Pioneering solutions tailored to your unique clinical and commercial needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="py-24 px-6 bg-grey text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-xs font-bold mb-6 tracking-widest uppercase">Take the Next Step</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-navy mb-8">
                        Ready to accelerate your <span className="gradient-text">Life Sciences</span> journey?
                    </h2>
                    <p className="text-navy/60 text-xl mb-12 max-w-2xl mx-auto">
                        Schedule your consultation with our team of subject matter experts today to explore pioneering solutions.
                    </p>
                    <Link to="/contact" className="btn-primary py-4 px-10 text-lg">
                        Book Your Consultation
                    </Link>
                </div>
            </section>
        </div>
    )
}
