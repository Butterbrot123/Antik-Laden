import foto from "../../assets/images/foto1.jpg";

const AboutSection2 = () => {
  return (
    <div className="bg-light-yellow padding ">
    <section
      id="about-us"
      className="flex justify-between items-center padding max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex justify-center items-center  duration-700 transition-transform transform-gpu hover:scale-90">
        <img
          src={foto}
          alt="Bild von Personal"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize text-dark-blue font-bold lg:max-w-lg">
          Wir haben auch einen 
          <span className="text-coral-red"> Laden!</span>  
        </h2>
        <p className="mt-4 lg:max-w-lg text-dark-blue info-text">
        Bei uns können Sie in unserem Geschäft in der straße in Glücksburg stöbern. 
        Kommen Sie doch vorbei, wenn sie in der Nähe sind und machen Sie sich unverbindlich ein Bild von uns! 
        Somit können Sie uns vorab einmal kennen lernen und sich vergewissern, dass Sie uns Ihre Antiquitäten mit gutem Gewissen überlassen können. 
        Gerne können Sie auch Ihre Antiquitäten zu uns ins Geschäft bringen und sich vor Ort beraten lassen.
        </p>
      </div>
    </section>
     </div>
  );
};

export default AboutSection2;
