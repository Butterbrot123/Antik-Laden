import { copyrightSign } from "../../assets/icons";
import { Link } from "react-router-dom";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex s items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
        <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center font-[montserrat] text-white'>
          <span className='text-3xl text-coral-red mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Schatzinsel
        </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Wir kaufen ihre antiken Schätze und sich immer auf der Suche nach Objekte!
          </p>
         
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-10 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={link.name}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 m-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
