import { Link } from 'react-router-dom';
import BannerImage from '../../assets/images/compass.png';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  useEffect(() => {
    const textSection = document.querySelector('.home-text-section');
    textSection.classList.add('animate-slide-in');
  }, []);

  return (
    <div className="home-container bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-950 xl:px-l xl:py-l px-4 py-4 min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-x-hidden sm:min-h-screen">
      <Helmet>
        <title>Willkommen zur Schatzinsel - Antike Schätze kaufen</title>
        <meta
          name="description"
          content="Entdecken Sie antike Schätze und verkaufen Sie Ihre eigenen. Die Schatzinsel ist Ihr Experte für antike Objekte und Sammlerstücke."
        />
      </Helmet>
      <div className="home-banner-container  lg:w-1/2 text-center lg:text-left mt-40 mb-20 md:text-2xl max-w-full">
        <div className="home-text-section p-8 animate-slide-in">
          <h1 className="mt-2 font-palanquin text-8xl md:text-6xl max-sm:text-[48px] max-sm:leading-[62px] font-bold text-dark-yellow md:mt-8 md:mb-4">
            <span className="md:pl-2 md:pr-2 block bg-gradient-to-r from-coral-red to-dark-red text-transparent bg-clip-text">
              Wilkommen zur Schatzinsel
            </span>
          </h1>
          <p className="primary-text text-lg text-light-yellow lg:text-xl mt-6 info-text">
            Wir kaufen Ihre antiken Schätze und sind immer auf der Suche nach Objekten!
          </p>
          <div className="mt-6 flex max-sm:justify-center items-center max-sm:w-ful">
            <Link to="/kontakt">
              <button className="secondary-button mt-6 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-dark-red text-white border-dark-red transform transition-transform hover:scale-105 hover:bg-yellow-600 hover:border-yellow-600 rounded-full">
                Kontaktiere uns
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-image-section lg:w-1/2 mt-40 hidden md:block">
        <img
          src={BannerImage}
          alt="Schatzinsel Home Banner - Antique Compass"
          className="w-90 h-auto max-w-md mx-auto  transition-transform transform-gpu duration-700 hover:scale-110"
          width="800"
          height="533"
        />
      </div>
    </div>
  );
};

export default Home;
