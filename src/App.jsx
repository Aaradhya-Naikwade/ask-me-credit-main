import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loans from "./pages/Loans"
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Calculators from "./pages/Calculators"


import EmiCalculator from "./pages/Calculators/EmiCalculator";
import PersonalCalculator from "./pages/Calculators/PersonalCalculator"
import HomeLoanCalculator from "./pages/Calculators/HomeLoanCalculator"
import BusinessLoanCalculator from "./pages/Calculators/BusinessLoanCalculator"
import CarLoanCalculator from "./pages/Calculators/CarLoanCalculator"
import TwoWheelerLoanCalculator from "./pages/Calculators/TwoWheelerLoanCalculator"
import CommercialVehicleLoanCalculator from "./pages/Calculators/CommercialVehicleLoanCalculator"
import GSTCalculator from "./pages/Calculators/GSTCalculator"


import PersonalLoan from "./pages/Loans/PersonalLoan";
import HomeLoan from "./pages/Loans/HomeLoan"
import GoldLoan from "./pages/Loans/GoldLoan";
import EducationLoan from "./pages/Loans/EducationLoan";
import BusinessLoan from "./pages/Loans/BusinessLoan";

const Placeholder = ({ title }) => (
  <div className="container" style={{ paddingTop: "140px" }}>
    <h1>{title}</h1>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* NAVBAR NAV-LINKS */}
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Placeholder title="Apply for Loan" />} />


        {/* CALCULATORS */}
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/personal-loan-calculator" element={<PersonalCalculator />} />
        <Route path="/home-loan-calculator" element={<HomeLoanCalculator />} />
        <Route path="/business-loan-calculator" element={<BusinessLoanCalculator />} />
        <Route path="/car-loan-calculator" element={<CarLoanCalculator />} />
        <Route path="/two-wheeler-loan-calculator" element={<TwoWheelerLoanCalculator />} />
        <Route path="/commercial-vehicle-loan-calculator" element={<CommercialVehicleLoanCalculator />} />
        <Route path="/gst-calculator" element={<GSTCalculator />} />


        {/* TYPES OF LOANS */}
        <Route path="/loans/personal" element={<PersonalLoan />} />
        <Route path="/loans/home" element={<HomeLoan />} />
        <Route path="/loans/gold" element={<GoldLoan/>} />
        <Route path="/loans/business" element={<BusinessLoan/>} />
        <Route path="/loans/education" element={<EducationLoan/>} />
        <Route path="/loans/vehicle" element={<Placeholder title="Vehicle Loan" />} />
      </Routes>
    </>
  );
}

export default App;
