import { FaEnvelope, FaPhoneAlt, FaAddressCard } from 'react-icons/fa';
import foto from "../../assets/images/kontakt.png";

const AboutSection = () => {
  return (
    <div className="bg-dark-red padding">
      <div
        id="about-us"
        className="flex justify-between items-center overflow-x-hidden max-lg:flex-col gap-10 w-full"
        style={{ margin: 0 }}
      >
        <div className="flex flex-1 flex-col text-white">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Wie Sie uns
            <span className="text-coral-red"> Erreichen</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Für weitere Informationen oder Fragen erreichen Sie uns über:
          </p>

          {/* Email */}
          <div className="flex items-center mt-4">
            <FaEnvelope className="mr-2" />
            <span>andreasbrix@t-online.de</span>
          </div>

          {/* Telefonnumre */}
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>0162-1003000</span>
          </div>
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>04631-444955</span>
          </div>

          {/* Adresse */}
          <div className="flex items-center mt-2">
            <FaAddressCard className="mr-2" />
            <span>Rathausstraße 3, 24960 Glücksburg, <br /> Deutschland</span>
          </div>

          {/* Åbningstider */}
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>Montag: 9:00-20:00  <br /> Donnerstag: 9:00-20:00 <br /> Samstag: 9:00-15:00</span>
          </div>
        </div>

        {/* Billede */}
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
