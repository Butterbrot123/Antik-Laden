import { services } from "../../constants";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  return (
    <div className="bg-white  ">
      <section id="products" className="max-container max-sm:mt-12 padding overflow-x-hidden">
        <div className="flex flex-col justify-start padding gap-5">
          <h1 className="text-4xl text-black font-palanquin font-bold">
            Woran sind wir
            <span className="text-coral-red"> Interessiert </span> ?
          </h1>

          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-grey">
            Unsere Leidenschaft gilt vor allem dem Ankauf von Postkarten, Orden,
            alten Fotos und weiteren bezaubernden Schätzen. Darüber hinaus sind
            wir stets auf der Suche nach anderen einzigartigen Fundstücken von
            ästhetischem Wert.
          </p>
        </div>
        <section className="max-container flex justify-center flex-wrap gap-9">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Services;
