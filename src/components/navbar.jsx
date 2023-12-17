import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  let Links = [
    { name: "Startseite", link: "/" },
    { name: "Über Uns", link: "/about" },
    { name: "Dienste", link: "/dienste" },
    { name: "Ankauf", link: "/ankauf" },
    { name: "Kontakt", link: "/kontakt" },
  ];
  let [open, setOpen] = useState(false);

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className=' items-center justify-between bg-cyan-950 px-7 mx-auto  py-3 md:py-5 md:flex md:px-8'>
        <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center font-[montserrat] text-white'>
          <span className='text-3xl text-coral-red mr-1 pt-2'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Schatzinsel
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon
            name={open ? 'close' : 'menu'}
            style={{ color: 'white' }}
          ></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-cyan-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-coral-red hover:text-white duration-500' onClick={closeNavbar}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
