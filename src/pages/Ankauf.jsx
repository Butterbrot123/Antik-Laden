
import AnkaufPhoto from '../sections/Ankauf/Ankauffoto';
import AnkaufDescription from '../sections/Ankauf/AnkaufDescription';
import ProductList from '../sections/Ankauf/ProductList';
import Meta from "../components/meta";
import { Footer } from '../sections';




const Ankauf = () => {
  return (
    <div>
      <section>
      <AnkaufPhoto />
      </section>
      <Meta
        description="Wir sind auf der Suche nach interessanten Antiquitäten: Postkarten, Briefmarken, Orden, Fotoalben, Postkartenalben, Bestecke, Alte Geldscheine, Schmuck und Uhren, sowie komplette Nachlässe."
        title="Ankauf - Schatzinsel"
        keywords="Ankauf Postkarten, Ankauf Briefmarken, Ankauf Orden, Ankauf Fotoalben, Ankauf Postkartenalben, Ankauf Bestecke, Ankauf Geldscheine, Ankauf Schmuck und Uhren, Ankauf Nachlässe."
      />
      
      <section>
        <AnkaufDescription />
      </section>
      <section>
        <ProductList />
      </section>
      <section className="bg-gradient-to-r from-cyan-950 to-cyan-900 padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default Ankauf;
