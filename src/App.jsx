import "./App.css";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "./components/AppCarousel";
import Home from "./pages/Home";
import Features from "./components/Features";

import About from "./pages/About"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import { Routes , Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Login from "./pages/Login";
import CreateAccount from "./CreateAccount";
import JobCompnent from "./pages/job/JobCompnent";
import ImmobilienComponent from "./pages/immobilien/ImmobilienComponent";
import ProductsCompnent from "./pages/products/ProductsCompnent";
import MobileComponent from "./pages/mobile/MobileComponent";
function App() {
  return (
    <>
      <AppNavbar />
      <SearchBar/>
      <ControlledCarousel />
      <Routes>
         <Route exct path="/" element={<Home />} />
        <Route path ="/jobs" element ={<JobCompnent/>} />
        <Route path ="/immobilien" element ={<ImmobilienComponent/>} />
        <Route path ="/products" element ={<ProductsCompnent/>} />
        <Route path ="/mobile" element ={<MobileComponent/>} />

        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/register" element ={<CreateAccount/>} />

      </Routes>
      <Features />
      <Footer/>
    </>
  );
}

export default App;
