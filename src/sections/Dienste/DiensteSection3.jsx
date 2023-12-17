import foto from "../../assets/images/haushalt.jpg";

const AboutSection = () => {
  return (
    <div className="bg-dark-red padding ">
      <div
        id="about-us"
        className="flex justify-between items-center overflow-x-hidden max-lg:flex-col gap-10 w-full"
        style={{ margin: 0 }}
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl text-white capitalize font-bold lg:max-w-lg">
        
            <span className="text-coral-red"> Antikberatung</span>
           
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-white">
          Entdecken Sie die Welt der Antiquitäten mit unserer fachkundigen Beratung. Ob Sie auf der Suche nach einem bestimmten Stück sind oder einfach mehr über historische Epochen erfahren möchten – wir teilen gerne unser Wissen und unsere Leidenschaft mit Ihnen.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center transition-transform transform-gpu duration-700 hover:scale-90">
          <img
            src={foto}
            alt="Dienste"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

