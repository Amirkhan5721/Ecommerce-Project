import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonals from "./components/Testimonials/Testimonals";
import Footer from "./components/Footer/Footer";

function App() {

  const [orderPopop, setOrderPopop] = useState(false);

  const handleOrderPopop = () => {
    setOrderPopop(!orderPopop);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  
  return (
    <>
      <div
        className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopop={handleOrderPopop} />
        <Hero handleOrderPopop={handleOrderPopop} />
        <Products />
        <TopProducts handleOrderPopop={handleOrderPopop} />
        <Banner />
        <Subscribe />
        <Testimonals />
        <Footer />
      </div>
    </>
  )
}

export default App
