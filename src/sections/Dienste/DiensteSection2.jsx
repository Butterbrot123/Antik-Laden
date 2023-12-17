import foto from "../../assets/images/123.jpg";

const SuperQuality = () => {
  return (
    <section className="padding bg-cyan-950">
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={foto}
            alt="Schatzinsel Über Uns - Kennenlernen"
            width={570}
            height={522}
            className="object-contain duration-700 transition-transform transform-gpu hover:scale-110"
            itemProp="image"  
          />
        </div>

        <div className="flex flex-1 flex-col text-light-yellow">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-dark-red"> An- </span>
           und 
            <span className="text-dark-red"> Verkauf</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
          Entdecken Sie in unserem Sortiment eine sorgfältig kuratierte Auswahl an Antiquitäten zum Verkauf. Wir kaufen auch gerne Ihre hochwertigen Stücke an – lassen Sie sich von unserem Team faire Angebote unterbreiten.
          </p>
          <div className='mt-6 flex max-sm:justify-center items-center max-sm:w-full'>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
