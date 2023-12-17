import foto from "../../assets/images/car3.jpg";

const AboutSection = () => {
  return (
    <div className="bg-light-yellow padding  ">
      <div
        id="about-us"
        className="flex justify-between items-center overflow-x-hidden max-lg:flex-col gap-10 w-full"
        style={{ margin: 0 }}
      >
        <div className="flex flex-1 flex-col ">
          <h2 className="font-palanquin text-4xl text-dark-blue capitalize font-bold lg:max-w-lg">
          Hilfe bei 
            <span className="text-coral-red"> Erhaltung </span>
            und 
            <span className="text-coral-red"> Pflege</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-dark-blue">
          Erfahren Sie, wie Sie Ihre Antiquitäten pflegen und erhalten können, um ihre Schönheit und Geschichte für kommende Generationen zu bewahren. Unsere Experten geben Ihnen wertvolle Tipps zur richtigen Pflege Ihrer Schätze.
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

