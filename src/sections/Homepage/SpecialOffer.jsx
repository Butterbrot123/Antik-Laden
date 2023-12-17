import bild2 from "../../assets/images/car.png";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <div className="home-container bg-dark-red xl:padding-l wide:padding-r padding-b  flex flex-col lg:flex-row items-center ">
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container padding">
        <div className="flex-1">
          <img
            src={bild2}
            alt="Schatzinsel Kontakt - Antikes Auto "
            width={600}
            height={400}
            className="object-contain w-full duration-700 transition-transform transform-gpu hover:scale-110"
            itemProp="image"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize text-white font-bold lg:max-w-lg">
            Kein <span className="text-coral-red">Weg</span> ist zu{" "}
            <span className="text-coral-red">Weit</span> für uns
          </h2>

          <p className="mt-4 lg:max-w-lg info-text text-white">
            Wir sind ständig weit über die Grenzen unseres Einzugsgebiets
            Schleswig-Holstein unterwegs. Entweder auf Auktionen in 
            Hamburg, Kiel, Eckernförde und Kiel oder auf der Suche nach
            hochwertigen antiken Schätzen für unsere Kundschaft.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <div className="flex max-sm:justify-center items-center max-sm:w-full">
              <Link to="/kontakt">
                <button className="secondary-button mt-6 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red transform transition-transform hover:scale-105 hover:bg-yellow-600 rounded-full">
                  Mehr Erfahren
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialOffer;
