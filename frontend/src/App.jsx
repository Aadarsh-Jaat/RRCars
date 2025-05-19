import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/Home";
import CarListing from "./pages/CarListing";
import CarDetails from "./components/CarDetails";
import SearchResults from "./pages/SearchResults";
import Footer from "./pages/Home/Footer";
import RentalDeals from "./pages/Home/RentalDeals";
import Features from "./pages/Home/Features";
import TestimonialsSection from "./pages/Home/TestimonialsSection";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HelpCenter from "./pages/HelpCenter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<CarListing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/rental-deals" element={<RentalDeals />} />
            <Route path="/why-choose-us" element={<Features />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
