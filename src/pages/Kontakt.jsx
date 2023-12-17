import { Footer } from "../sections";
import ContactForm from "../sections/Contact/contactform";
import ContactHero from "../sections/Contact/contacthero2";
import ContactSection from "../sections/Contact/contactsection";
import Meta from "../components/meta";

const Kontakt = () => {
  return (
    <section>
        <Meta
        description="Wir sind ständig auf der suche nach hochwertigen Antiquitäten. Hier können Sie mit uns in Kontakt treten."
        title="Kontakt - Schatzinsel"
        keywords="Beratung, kontakt, Andreas Brix, Antik Glücksburg Ankauf, Dienste, An- und Verkauf, Antik Flensburg Ankauf, Haushaltauflösungen, Antikladen  "
      />
        <section>
        <ContactHero/>
      </section>
      <section >
        <ContactSection/>
      </section>
      <section>
        <ContactForm />
      </section>
      <section className="bg-gradient-to-r from-cyan-950 to-cyan-900 padding-x padding-t pb-8">
        <Footer />
      </section>
    </section>
  );
};

export default Kontakt;
