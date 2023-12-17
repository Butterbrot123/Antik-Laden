import heroImage from '../../assets/images/dienste-hero.jpg';


const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-36 w-full h-[860px] flex flex-col sm:flex-row justify-center min-h-screen items-center bg-cover" style={{ backgroundImage: `url(${heroImage})`, margin: 0, padding: 0, backgroundPosition: 'top' }}>
      <div className="w-full sm:w-1/2 lg:px-16 text-center animate-slide-in">
        <h1 className="mt-2 font-palanquin text-8xl md:text-6xl max-sm:text-[45px] max-sm:leading-[34px] font-bold text-white">
          <span className="text-coral-red">Unsere Dienste</span>
        </h1>
        <p className="primary-text text-lg lg:text-xl max-sm:text-[25px] mt-6 white-400 text-white">
          Wir kümmern uns um alles.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

