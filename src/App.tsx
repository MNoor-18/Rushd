import { HelmetProvider } from 'react-helmet-async';
import { Footer, Navbar } from "./components"
import { Hero, Pricing, Quotes, Features, WhoCanUseRushd, Contact, FAQ, } from "./pages";
// import { Partners } from "./pages/Partners";

function App() {

  return (
    <HelmetProvider>
        <div className="max-w-[1920px] relative overflow-x-hidden *:w-full 2xl:*:mx-auto ">
          <div className="w-full h-24 fixed z-40 md:px-12 xl:px-20 2xl:px-30 ">
            <div id="navbar_top_space" className="hidden md:block w-full h-5 transition-all"/>
            <Navbar />
          </div>

          <section id="home">
            <Hero />
          </section>

          <section id="features">
            <Features />
          </section>

          <section>
            <WhoCanUseRushd />
          </section>

          <section id="pricing">
            <Pricing />
          </section>

          <section id="quotes">
            <Quotes />
          </section>

          <section >
            {/* <Partners /> */}
          </section>

          <section>
            <FAQ />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Footer />
        </div>
    </HelmetProvider>
  )
}

export default App;