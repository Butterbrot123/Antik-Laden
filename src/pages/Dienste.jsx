import HeroDienste from "../sections/Dienste/HeroDienste";
import { Footer } from "../sections";
import DiensteSection from "../sections/Dienste/DiensteSection";
import DiensteSection2 from "../sections/Dienste/DiensteSection2";
import DiensteSection3 from "../sections/Dienste/DiensteSection3";
import Meta from "../components/meta";

const Dienste = () => {
  return (
    <section>
     <Meta
        description="Wir sind bundesweit für Sie als kompetenter Ansprechpartner da. Informieren Sie sich hier über uns oder lassen Sie sich von uns beraten."
        title="Dienste - Schatzinsel"
        keywords="Beratung, Ankauf, Dienste, Ankauf Orden, Ankauf Fotoalben, Ankauf Postkartenalben, Ankauf Bestecke, Ankauf Geldscheine, Ankauf Schmuck und Uhren, Ankauf Nachlässe, An- und Verkauf, Antikberatung "
      />
      <section>
        <HeroDienste />
      </section>
      <section>
        <DiensteSection />
      </section>
      <section >
        <DiensteSection2 />
      </section>
      <section >
        <DiensteSection3 />
      </section>
      <section className="bg-gradient-to-r from-cyan-950 to-cyan-900 padding-x padding-t pb-8">
        <Footer />
      </section>
    </section>
  );
};

export default Dienste;
