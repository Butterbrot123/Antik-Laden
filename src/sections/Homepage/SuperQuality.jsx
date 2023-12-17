import { Link } from 'react-router-dom';
import foto from "../../assets/images/bild2.jpg";

const SuperQuality = () => {
  return (
    <section className="padding bg-amber-50">
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

        <div className="flex flex-1 flex-col animate-slide-in">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Möchtest du uns
            <span className="text-coral-red"> Kennenlernen</span>?
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Unser großes Interesse an antiken Gegenständen war schon immer unser Hobby. Diese Leidenschaft haben wir schließlich zu unserem Beruf gemacht. Jeder Gegenstand hat seine eigene Geschichte, und das macht den besonderen Reiz für uns aus.
          </p>
          <div className='mt-6 flex max-sm:justify-center items-center max-sm:w-full'>
            <Link to="/about">
              <button className="secondary-button mt-6 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red transform transition-transform hover:scale-105 hover:bg-yellow-600 rounded-full">
                Mehr Erfahren
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
