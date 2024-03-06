import foto from "../../assets/images/Ankauf-Beschreibung2.jpg";

const SuperQuality = () => {
  return (
    <section className="padding bg-light-yellow">
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={foto}
            alt="Schatzinsel Ankauf - Ankauf Beschreibung"
            width={570}
            height={522}
            className="object-contain duration-700 transition-transform transform-gpu hover:scale-110"
            itemProp="image"  
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Antiquitäten
            <span className="text-dark-red"> Ankauf</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
          Unsere Leidenschaft liegt in der ständigen Entdeckung faszinierender Antiquitäten. 
          Wir erwerben eine vielfältige Auswahl an Schätzen, darunter Gemälde, Möbel, Glas, Kristall, Keramik, Skulpturen, Schmuck und Uhren. 
          Vollständige Nachlässe und Sammlungen nehmen wir ebenso gerne in unseren Bestand auf. Wir sind von Kunstgegenständen und Werken sämtlicher Epochen begeistert, von der Gotik bis zur Moderne.
          </p>
          <div className='mt-6 flex max-sm:justify-center items-center max-sm:w-full'>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
