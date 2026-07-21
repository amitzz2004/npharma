import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import PharmaDistribution from "./pages/PharmaDistribution";
import SurgicalSupplies from "./pages/SurgicalSupplies";
import HospitalSupplyDivision from "./pages/HospitalSupplyDivision";
import BrandsWeDealIn from "./pages/BrandsWeDealIn";
import WhyChooseUs from "./pages/WhyChooseUs";
import RequestQuotation from "./pages/RequestQuotation";
import ContactUs from "./pages/ContactUs";
import LicenseDetails from "./pages/LicenseDetails";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/pharma-distribution" element={<PharmaDistribution />} />
        <Route path="/surgical-supplies" element={<SurgicalSupplies />} />
        <Route path="/hospital-supply-division" element={<HospitalSupplyDivision />} />
        <Route path="/brands-we-deal-in" element={<BrandsWeDealIn />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/request-quotation" element={<RequestQuotation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/license-details" element={<LicenseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
