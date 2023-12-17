import foto from "../../assets/images/foto1.jpg";

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
            Wer
            <span className="text-coral-red"> Wir </span>
            sind!
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-white">
            Unser großes Interesse an antiken Gegenständen war schon immer unser
            Hobby. Diese Leidenschaft haben wir schließlich zu unserem Beruf
            gemacht. Antike Schätze sind mehr als nur Gegenstände. Die Besitzer
            hängen mit viele Erinnerungen an ihnen und verbinden viele Emotionen
            damit. Daher liegt es uns sehr am Herzen Ihnen auf eine mitfühlende
            und respektvolle Art zu begegnen und Ihre Wünsche zu berücksichtigen.
            Wenn wir bei Ihnen vorbei kommen, schauen wir uns alles genau an, um
            Ihnen eine Beratung über den Wert dieses Gegenstandes zukommen zu
            lassen.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center transition-transform transform-gpu duration-700 hover:scale-90">
          <img
            src={foto}
            alt="About"
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

