import heroImage from '../../assets/images/hero-ankauf.jpg';


const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-36 w-full h-[860px] flex flex-col sm:flex-row justify-center min-h-screen items-center bg-cover" style={{ backgroundImage: `url(${heroImage})`, margin: 0, padding: 0, backgroundPosition: 'top' }}>
      <div className="w-full sm:w-1/2 lg:px-16 text-center animate-slide-in">
        <h1 className="mt-2 font-palanquin  max-sm:text-[45px] text-8xl max-sm:leading-10 font-bold text-white">
          <span className="text-coral-red ">Wir kaufen ihre Antiquitäten</span>
        </h1>
        <p className="primary-text text-2xl max-sm:text-[20px] lg:text-1xl mt-6 white-400 text-white">
          Kein Weg ist uns zu weit.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
