import React, { useState } from 'react'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoanForm from '../../components/LoanForm';
import './Loans.css';

const PersonalLoan = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "What is the maximum loan amount I can get?", a: "You can avail a personal loan up to ₹40 Lakhs depending on your monthly income, credit score, and repayment capacity." },
        { q: "How long does the approval process take?", a: "With our 100% digital process, initial approval is instant, and funds are usually disbursed within 24 hours after verification." },
        { q: "Are there any hidden charges?", a: "We maintain complete transparency. All processing fees and interest rates are communicated upfront before you sign the agreement." },
        { q: "Can I prepay my loan early?", a: "Yes, you can make part-payments or full foreclosure of your loan after the initial 6-12 month period, subject to nominal charges." }
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
                        <h1>Personal Loan</h1>
                        <p>Get instant funds for your personal needs with competitive interest rates and a completely digital process.</p>
                    </div>
                    <div className="pl-hero-right">
                        <img src="/images/personal-loan-hero.png" alt="Personal Loan" className="pl-hero-bottom-img" />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT & FORM */}
            <section className="pl-main-section">
                <div className="pl-container pl-content-grid">
                    <div className="pl-info-column">
                        <span className="pl-section-pill">Fast Approval</span>
                        <h2 className="pl-main-heading">Flexible loans for all your needs</h2>
                        <div className="pl-value-props">
                            {['Paperless Process', 'Fast Disbursal', 'No Collateral', 'Attractive Rates'].map((item, i) => (
                                <div className="pl-prop-item" key={i}>
                                    <div className="pl-prop-dot"></div>
                                    <div><strong>{item}</strong><p>Digital journey with instant verification.</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-form-column"><LoanForm defaultLoanType="Personal Loan" /></div>
                </div>
            </section>

            {/* ELIGIBILITY SECTION */}
            <section className="pl-eligibility-section">
                <div className="pl-container pl-elig-grid">
                    <div className="pl-elig-text">
                        <span className="pl-section-pill">Check Criteria</span>
                        <h2 className="pl-main-heading">Eligibility Criteria</h2>
                        <div className="pl-value-props">
                            {['Age: 21 - 60 years', 'Income: Min. ₹25,000 monthly', 'Employment: Salaried/Self-Employed', 'CIBIL Score: 750+ preferred'].map((text, i) => (
                                <div className="pl-prop-item" key={i}><div className="pl-prop-dot"></div><div>{text}</div></div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-elig-image">
                        <img src="/images/eligibility-criteria.png" alt="Eligibility" />
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
                        {['Identity Proof', 'Address Proof', 'Income Proof', 'Bank Statements'].map((title, i) => (
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

export default PersonalLoan;