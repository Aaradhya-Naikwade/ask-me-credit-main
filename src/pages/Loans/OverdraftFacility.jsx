import React, { useState } from 'react'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoanForm from '../../components/LoanForm';
import './Loans.css';

const OverdraftFacility = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "How does an Overdraft Facility work?", a: "An Overdraft is a credit line linked to your current or savings account. You can withdraw funds up to a pre-approved limit, and interest is only charged on the amount you actually use, for the duration you use it." },
        { q: "Is interest charged on the entire limit?", a: "No. Unlike a term loan, interest is calculated daily only on the utilized amount. If you don't use the facility, you pay zero interest." },
        { q: "What can I pledge as security for OD?", a: "We offer Overdrafts against Property (ODAP), Fixed Deposits (ODFD), or even unsecured Business Overdrafts based on your financial turnover." },
        { q: "What is the renewal process?", a: "Overdraft limits are usually sanctioned for 12 months and are renewed annually based on a review of your account conduct and latest financials." }
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
                        <h1>Overdraft Facility</h1>
                        <p>Enjoy the freedom of an on-demand credit line. Pay interest only on what you use and manage your cash flow like a pro.</p>
                    </div>
                    <div className="pl-hero-right">
                        <img src="/images/personal-loan-hero.avif" alt="Overdraft Facility" className="pl-hero-bottom-img" />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT & FORM */}
            <section className="pl-main-section">
                <div className="pl-container pl-content-grid">
                    <div className="pl-info-column">
                        <span className="pl-section-pill">Smart Liquidity</span>
                        <h2 className="pl-main-heading">Credit when you need it</h2>
                        <div className="pl-value-props">
                            {['Interest on Utilization', 'Flexible Withdrawals', 'No EMI Pressure', 'Reusable Credit Limit'].map((item, i) => (
                                <div className="pl-prop-item" key={i}>
                                    <div className="pl-prop-dot"></div>
                                    <div><strong>{item}</strong><p>Optimized for managing short-term financial mismatches.</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-form-column"><LoanForm /></div>
                </div>
            </section>

            {/* ELIGIBILITY SECTION */}
            <section className="pl-eligibility-section">
                <div className="pl-container pl-elig-grid">
                    <div className="pl-elig-text">
                        <span className="pl-section-pill">Check Criteria</span>
                        <h2 className="pl-main-heading">Eligibility Criteria</h2>
                        <div className="pl-value-props">
                            {['Entity: Individual, Firm, or Company', 'Account: Active current/savings account', 'Financials: Healthy cash flow history', 'Security: Optional (Secured/Unsecured)'].map((text, i) => (
                                <div className="pl-prop-item" key={i}><div className="pl-prop-dot"></div><div>{text}</div></div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-elig-image">
                        {/* Image of cash flow management */}
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
                        {['6-12 Months Bank Statements', 'KYC of Business & Partners', 'Latest ITR & Computation', 'Audit Report (if applicable)'].map((title, i) => (
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

export default OverdraftFacility;