import AboutSection from "../sections/About/aboutsection";
import Herofoto from "../sections/About/Herofoto";
import Footer from "../sections/Homepage/Footer";
import AboutSection2 from "./../sections/About/aboutsection2";
import Meta from "../components/meta";

const About = () => {
  return (
    <div>
      <Meta
        description="Ihr Experte für antike Schätze! Besuchen Sie uns in Glücksburg oder lassen Sie sich vor Ort beraten. Vertrauen Sie uns – Ihre Erbstücke sind bei uns in besten Händen."
        title="Über Uns - Schatzinsel"
        keywords="kennenlernen, über uns, antik, flensburg, schatzinsel, Glückburg, ankauf"
      />
      <section>
        <section>
          <Herofoto />
        </section>
        <section>
          <AboutSection />
        </section>
        <section>
          <AboutSection2 />
        </section>
        <section className="bg-gradient-to-r from-cyan-950 to-cyan-900 padding-x padding-t pb-8">
          <Footer />
        </section>
      </section>
    </div>
  );
};

export default About;
