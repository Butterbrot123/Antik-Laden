import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center padding h-screen">
      <h2 className="text-4xl font-bold mb-4 ">Seite nicht gefunden</h2>
      <p className="text-gray-600 mb-8 text-3xl ">Die angeforderte Seite konnte nicht gefunden werden. Bitte überprüfen Sie die URL oder kehren Sie zur Homepage zurück.</p>
      <Link to="/">
  <button className="secondary-button mt-6 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red transform transition-transform hover:scale-105 hover:bg-yellow-600 rounded-full">
   Gehen sie zur homepage
  </button>
</Link>
    </div>
    
  );
}
