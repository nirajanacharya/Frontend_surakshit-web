import Navbar from "../src/components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Faq from "./pages/Faq";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./components/footer/Contact";
import LicensingPage from "./components/footer/LicensingPage";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/faq" element={<Faq />} />
          <Route path ='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path='/licensing' element={<LicensingPage/>}/>
          <Route path='/policy' element={<PrivacyPolicy/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
