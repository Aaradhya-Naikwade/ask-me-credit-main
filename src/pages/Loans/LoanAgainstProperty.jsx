import React, { useState } from 'react'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoanForm from '../../components/LoanForm';
import './Loans.css';

const LoanAgainstProperty = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "What is a Loan Against Property?", a: "It is a secured loan where you pledge your residential or commercial property as collateral to get funds for business or personal use." },
        { q: "Can I still use the property after taking the loan?", a: "Yes, you retain full ownership and usage of the property. The bank only keeps the original documents as security until the loan is repaid." },
        { q: "What is the maximum tenure for LAP?", a: "Loan Against Property usually offers a longer repayment tenure of up to 15 years, making the EMIs more affordable compared to personal loans." },
        { q: "How much loan can I get against my property?", a: "Generally, you can get 50% to 70% of the current market value of the property, subject to your income eligibility and property type." }
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
                        <h1>Loan Against Property</h1>
                        <p>Unlock the hidden value of your property. Get high-value financing with lower interest rates for your business expansion or personal needs.</p>
                    </div>
                    <div className="pl-hero-right">
                        <img src="/images/loans-hero/loan-against-property-hero.png" alt="Loan Against Property" className="pl-hero-bottom-img" />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT & FORM */}
            <section className="pl-main-section">
                <div className="pl-container pl-content-grid">
                    <div className="pl-info-column">
                        <span className="pl-section-pill">High Value Funding</span>
                        <h2 className="pl-main-heading">Maximum value for your real estate</h2>
                        <div className="pl-value-props">
                            {['Lower Interest Rates', 'High Loan Quantums', 'Longer Repayment Tenure', 'Flexible End-use'].map((item, i) => (
                                <div className="pl-prop-item" key={i}>
                                    <div className="pl-prop-dot"></div>
                                    <div><strong>{item}</strong><p>Leverage your assets for better financial growth.</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-form-column"><LoanForm defaultLoanType="Loan Against Property" /></div>
                </div>
            </section>

            {/* ELIGIBILITY SECTION */}
            <section className="pl-eligibility-section">
                <div className="pl-container pl-elig-grid">
                    <div className="pl-elig-text">
                        <span className="pl-section-pill">Check Criteria</span>
                        <h2 className="pl-main-heading">Eligibility Criteria</h2>
                        <div className="pl-value-props">
                            {['Property: Commercial or Residential', 'Age: 21 - 65 years', 'Employment: Salaried or Self-Employed', 'Market Value: Clear & marketable title'].map((text, i) => (
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
                        {['Property Sale Deed', 'Latest Tax Receipts', 'Approved Building Plan', 'Last 3 Years ITR'].map((title, i) => (
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

export default LoanAgainstProperty;