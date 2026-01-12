import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoanForm from '../../components/LoanForm';
import './Loans.css';

const EducationLoan = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "What expenses are covered under the education loan?", a: "The loan covers tuition fees, hostel charges, examination fees, library/laboratory fees, and even travel expenses or laptop costs for overseas studies." },
        { q: "Is there a moratorium period?", a: "Yes, we offer a grace period (moratorium) which typically includes the duration of the course plus 6–12 months before you need to start repayment." },
        { q: "Can I get a loan for studies abroad?", a: "Absolutely. We provide comprehensive funding for premier institutes globally, covering both entrance requirements and living expenses." },
        { q: "Do I need to provide collateral?", a: "For loans up to a certain limit (typically ₹7.5 Lakhs), no collateral is required. Higher amounts may require tangible collateral security." }
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
                        <h1>Education Loan</h1>
                        <p>Invest in your future. Get the financial support you need to pursue higher education in India or abroad with student-friendly repayment terms.</p>
                    </div>
                    <div className="pl-hero-right">
                        <img src="/images/loans-hero/education-loan-hero.png" alt="Education Loan" className="pl-hero-bottom-img" />
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT & FORM */}
            <section className="pl-main-section">
                <div className="pl-container pl-content-grid">
                    <div className="pl-info-column">
                        <span className="pl-section-pill">Empower Your Career</span>
                        <h2 className="pl-main-heading">Funding for your academic excellence</h2>
                        <div className="pl-value-props">
                            {['Up to 100% Funding', 'Grace Repayment Period', 'Tax Benefits (Sec 80E)', 'Multi-currency support'].map((item, i) => (
                                <div className="pl-prop-item" key={i}>
                                    <div className="pl-prop-dot"></div>
                                    <div><strong>{item}</strong><p>Focus on your studies while we take care of the finances.</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pl-form-column"><LoanForm defaultLoanType="Education Loan" /></div>
                </div>
            </section>

            {/* ELIGIBILITY SECTION */}
            <section className="pl-eligibility-section">
                <div className="pl-container pl-elig-grid">
                    <div className="pl-elig-text">
                        <span className="pl-section-pill">Check Criteria</span>
                        <h2 className="pl-main-heading">Eligibility Criteria</h2>
                        <div className="pl-value-props">
                            {['Age: 18 - 35 years', 'Confirmed Admission in recognized institute', 'Co-applicant (Parent/Guardian) required', 'Academic Record: Consistent performance'].map((text, i) => (
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
                        {['Admission Letter', 'Fee Structure', 'Academic Marksheets', 'KYC of Student & Parent'].map((title, i) => (
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

export default EducationLoan;