import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import { HelmetProvider } from "react-helmet-async";
import { Footer, Navbar, Loading } from "./components";
import {
  Hero,
  Pricing,
  Quotes,
  Features,
  WhoCanUseRushd,
  Contact,
  FAQ,
} from "./pages";
// import { Partners } from "./pages/Partners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <HelmetProvider>
      <div className="max-w-[1920px] relative overflow-x-hidden scroll-smooth transition-all *:w-full 2xl:*:mx-auto ">
        <Toaster />
        <div className="w-full h-24 fixed z-30 md:px-12 xl:px-20 2xl:px-30 ">
          <div
            id="navbar_top_space"
            className="hidden md:block w-full h-5 backdrop-blur-[1px] transition-all"
          />
          <Navbar />
        </div>

        <section id="home">
          <Hero />
        </section>

        <section className="scroll-mt-20 sm:scroll-mt-24">
          <Features />
        </section>

        <section>
          <WhoCanUseRushd />
        </section>

        <section id="pricing" className="scroll-mt-20 sm:scroll-mt-24">
          <Pricing />
        </section>

        <section id="quotes" className="scroll-mt-20 sm:scroll-mt-24">
          <Quotes />
        </section>

        <section>{/* <Partners /> */}</section>

        <section>
          <FAQ />
        </section>

        <section id="contact" className=" scroll-mt-20 sm:scroll-mt-24">
          <Contact />
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
