import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { productsHomepage } from "../../constants";
import PopularProductCard from "../../components/PopularProductCard";


const PopularProducts = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Optional: If you want to scroll to top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className=" bg-dark-red" >
    <section id="products" className="max-container max-sm:mt-12 bg-dark-red  padding overflow-x-hidden">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl text-white font-palanquin font-bold">
          Woran sind wir
          <span className="text-coral-red"> Interessiert </span> ?
        </h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-orange-50">
          Unsere Leidenschaft gilt vor allem dem Ankauf von Postkarten, Orden,
          alten Fotos und weiteren bezaubernden Schätzen. Darüber hinaus sind
          wir stets auf der Suche nach anderen einzigartigen Fundstücken von
          ästhetischem Wert.
        </p>
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
        <Link to="/Ankauf">
  <button className="secondary-button mt-6 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red transform transition-transform hover:scale-105 hover:bg-yellow-600 rounded-full">
    Erfahren Sie mehr 
  </button>
</Link>
          </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 test-white sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      {productsHomepage.map((product) => (
  <PopularProductCard key={product.name} {...product} alt={`Bild von ${product.name}`} />
))}

      </div>
    </section>
    </div>
  );
};

export default PopularProducts;
