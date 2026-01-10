import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoanForm from '../../components/LoanForm';
import './Loans.css';

const GoldLoan = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "How is the loan amount determined?", a: "The loan amount is based on the purity and weight of the gold in your ornaments. We offer the maximum per-gram rate as per current market prices." },
        { q: "Is my gold safe with you?", a: "Your gold is stored in highly secure, fire-proof electronic vaults under 24/7 surveillance and is fully insured for your peace of mind." },
        { q: "What happens if gold prices fluctuate?", a: "Once your loan is disbursed, the terms remain fixed. However, the loan-to-value (LTV) ratio is calculated at the time of application based on that day's market rate." },
        { q: "Can I release a part of my jewelry?", a: "Yes, you can make partial repayments and release specific items of jewelry, provided the remaining gold value covers the outstanding loan amount." }
    ];

    const DocIcon = () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
    );

    return (
        <div className="pl-page-wrapper">
            <Navbar />

            {/* HEADER SECTION */}
            <header className="pl-hero-header">
                <div className="pl-container pl-hero-grid">
                    <div className="pl-hero-left">
                        <h1>Gold Loan</h1>
                        <p>Unlock the value of your gold instantly. Get quick cash with minimal documentation and the lowest interest rates in the market.</p>
                    </div>
                    <div className="pl-hero-right">
                        <img src="/images/personal-loan-hero.avif" alt="Gold Loan" className="pl-hero-bottom-img" />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT & FORM */}
            <section className="pl-main-section">
                <div className="pl-container pl-content-grid">
                    <div className="pl-info-column">
                        <span className="pl-section-pill">Instant Cash</span>
                        <h2 className="pl-main-heading">Get a loan against your gold in minutes</h2>
                        <div className="pl-value-props">
                            {['Highest Per Gram Rate', 'Instant Disbursal', 'Minimal Paperwork', 'Flexible Repayment'].map((item, i) => (
                                <div className="pl-prop-item" key={i}>
                                    <div className="pl-prop-dot"></div>
                                    <div><strong>{item}</strong><p>Walk in with gold, walk out with cash in under 30 minutes.</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-form-column"><LoanForm defaultLoanType="Gold Loan" /></div>
                </div>
            </section>

            {/* ELIGIBILITY SECTION */}
            <section className="pl-eligibility-section">
                <div className="pl-container pl-elig-grid">
                    <div className="pl-elig-text">
                        <span className="pl-section-pill">Simple Requirements</span>
                        <h2 className="pl-main-heading">Eligibility Criteria</h2>
                        <div className="pl-value-props">
                            {['Age: 18 - 75 years', 'Gold Purity: 18 to 24 Carats', 'Identity: Valid Govt. Photo ID', 'No CIBIL Score required'].map((text, i) => (
                                <div className="pl-prop-item" key={i}><div className="pl-prop-dot"></div><div>{text}</div></div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-elig-image">
                        {/* Space for Illustration */}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS SECTION */}
            <section className="pl-docs-section">
                <div className="pl-container">
                    <div className="pl-section-header">
                        <h2 className="pl-main-heading">Documents Required</h2>
                    </div>
                    <div className="pl-docs-grid">
                        {['Aadhaar Card', 'PAN Card', 'Passport Size Photo', 'Proof of Address'].map((title, i) => (
                            <div className="pl-doc-card" key={i}>
                                <div className="pl-doc-icon"><DocIcon /></div>
                                <h3>{title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="pl-faq-section">
                <div className="pl-container">
                    <div className="pl-section-header">
                        <span className="pl-section-pill">Questions?</span>
                        <h2 className="pl-main-heading">Frequently Asked Questions</h2>
                    </div>
                    <div className="pl-faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`pl-faq-item ${activeIndex === index ? 'active' : ''}`}>
                                <button className="pl-faq-question" onClick={() => toggleFAQ(index)}>
                                    {faq.q}
                                    <span className="pl-faq-icon">{activeIndex === index ? '-' : '+'}</span>
                                </button>
                                <div className="pl-faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GoldLoan;