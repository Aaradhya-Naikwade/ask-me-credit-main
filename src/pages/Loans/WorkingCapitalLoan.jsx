import React, { useState } from 'react'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoanForm from '../../components/LoanForm';
import './Loans.css';

const WorkingCapitalLoan = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "What is a Working Capital Loan?", a: "It is a loan designed to finance the everyday operations of a company, such as accounts payable, wages, and inventory, rather than long-term assets." },
        { q: "Do I need to provide collateral?", a: "We offer both secured and unsecured working capital options. Many of our small business limits are approved without collateral based on business vintage and turnover." },
        { q: "How is the limit determined?", a: "The loan amount is primarily determined by your business's annual turnover, cash flow patterns, and your current debt-to-income ratio." },
        { q: "Can I use this for seasonal inventory?", a: "Absolutely. These loans are ideal for managing seasonal fluctuations, allowing you to stock up on inventory before peak sales periods." }
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
                        <h1>Working Capital Loan</h1>
                        <p>Fuel your business growth and manage daily operations smoothly with our tailored working capital solutions and flexible repayment terms.</p>
                    </div>
                    <div className="pl-hero-right">
                        <img src="/images/personal-loan-hero.avif" alt="Working Capital" className="pl-hero-bottom-img" />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT & FORM */}
            <section className="pl-main-section">
                <div className="pl-container pl-content-grid">
                    <div className="pl-info-column">
                        <span className="pl-section-pill">Business Growth</span>
                        <h2 className="pl-main-heading">Boost your cash flow instantly</h2>
                        <div className="pl-value-props">
                            {['Quick Fund Infusion', 'Customized Credit Limits', 'Minimal Paperwork', 'Operational Flexibility'].map((item, i) => (
                                <div className="pl-prop-item" key={i}>
                                    <div className="pl-prop-dot"></div>
                                    <div><strong>{item}</strong><p>Optimized for SMEs and growing enterprises.</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-form-column"><LoanForm defaultLoanType="Working Capital Loan" /></div>
                </div>
            </section>

            {/* ELIGIBILITY SECTION */}
            <section className="pl-eligibility-section">
                <div className="pl-container pl-elig-grid">
                    <div className="pl-elig-text">
                        <span className="pl-section-pill">Check Criteria</span>
                        <h2 className="pl-main-heading">Eligibility Criteria</h2>
                        <div className="pl-value-props">
                            {['Vintage: Min. 2 years in business', 'Turnover: Positive growth trends', 'Business Type: MSME, Pvt Ltd, or Partnership', 'Credit: Clean repayment history'].map((text, i) => (
                                <div className="pl-prop-item" key={i}><div className="pl-prop-dot"></div><div>{text}</div></div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-elig-image">
                        {/* Image placeholder for business eligibility */}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS SECTION */}
            <section className="pl-docs-section">
                <div className="pl-container">
                    <div className="pl-section-header">
                        <h2 className="pl-main-heading">Business Documents Required</h2>
                    </div>
                    <div className="pl-docs-grid">
                        {['GST Returns (12 Months)', 'Business Registration', 'Income Tax Returns', '6 Months Bank Statement'].map((title, i) => (
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

export default WorkingCapitalLoan;