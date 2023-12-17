import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Nav from "./components/navbar.jsx";
import Footer from "../src/sections/Homepage/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";

const Dienste = lazy(() => import("./pages/Dienste.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Ankauf = lazy(() => import("./pages/Ankauf"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const PopularProducts = lazy(() =>
  import("./sections/Homepage/PopularProducts")
);
const Services = lazy(() => import("./sections/Homepage/Services"));
const SpecialOffer = lazy(() => import("./sections/Homepage/SpecialOffer"));
const SuperQuality = lazy(() => import("./sections/Homepage/SuperQuality"));
const Hero = lazy(() => import("../src/sections/Homepage/Hero2.jsx"));

const App = () => {
  const renderRoutes = () => (
    <>
      <Route path="/dienste" element={<Dienste />} />
      <Route path="/about" element={<About />} />
      <Route path="/ankauf" element={<Ankauf />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <>
            <section>
              <Hero />{" "}
            </section>
            <section className="">
              <SuperQuality />
            </section>
            <section className="">
              <PopularProducts />
            </section>
            <section className="padding padding-x py-10">
              <Services />
            </section>
            <section className="">
              <SpecialOffer />
            </section>
            <section className="bg-gradient-to-r from-cyan-950 to-cyan-900 padding-x padding-t pb-8">
              <Footer />
            </section>
          </>
        }
      />
    </>
  );

  return (
    <Router>
      <main className="relative">
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>{renderRoutes()}</Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
