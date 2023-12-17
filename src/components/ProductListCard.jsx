import { useState } from 'react';

const ProductListCard = ({ imgURL, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full padding-1 mb-9"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imgURL}
        alt={name}
        className={`w-[280px] h-[280px] hover:scale-105 transition duration-500 cursor-pointer object-cover mx-auto text-center ${
          isHovered ? 'filter-none' : 'filter-grayscale'
        }`}
      />

      <div className="mt-8 flex justify-start gap-2.5 text-center">
        {/* Additional information can be added here if needed */}
      </div>

      <h3 className="mt-2 text-2xl leading-normal text-coral-red font-semibold font-palanquin text-center">
        {name}
      </h3>

      <p className="mt-2 text-sm text-light-yellow text-center">{description}</p>
    </div>
  );
};

export default ProductListCard;
