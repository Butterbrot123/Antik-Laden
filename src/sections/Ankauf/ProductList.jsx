import { products } from "../../constants";
import ProductListCard from "../../components/ProductListCard";

const PopularProducts = () => {
  return (
    <div className=" bg-dark-red" >
    <section id="products" className="max-container max-sm:mt-12 bg-dark-red min-h-screen padding overflow-x-hidden">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin text-light-yellow font-bold">
          Was
          <span className="text-coral-red"> Kaufen</span> wir gerne ein?
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-light-yellow">
        Unsere Leidenschaft liegt vor allem im Ankauf von Postkarten, Orden, alten Fotos und anderen bezaubernden Schätzen. 
        Zudem sind wir kontinuierlich auf der Suche nach weiteren einzigartigen Fundstücken von ästhetischem Wert.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 test-white sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <ProductListCard key={product.name} {...product} />
        ))}
      </div>
    </section>

    </div>
   
   
  );
};

export default PopularProducts;

