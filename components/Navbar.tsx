import React, { FC } from 'react';
import Image from 'next/image';
// import AOD from '../Assets/Images/AOD3 LOGO.svg';
import { FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

const Navbar: FC = () => {
  return (
    <>
      <nav className="max-w-full py-5 flex w-screen justify-around items-center text-white bg-black px-6">
        <div className="items flex gap-8">
          <a href="#">
            <div className="hover-underline-animation">HOME</div>
          </a>
          <a href="#">
            <div className="hover-underline-animation">ABOUT</div>
          </a>
          <a href="#">
            <div className="hover-underline-animation">CONTACT</div>
          </a>
        </div>

        <div className="w-36">{/* <img alt="AOD logo" src={AOD.src} /> */}</div>

        <div className="flex text-2xl gap-4">
          <div className="cursor-pointer">
            <FiTwitter />
          </div>
          <div className="cursor-pointer">
            <a
              href="https://www.youtube.com/channel/UCGy2UZIpMkT_halxshGv8iA"
              target="_blank"
              rel="noreferrer"
            >
              <FiYoutube />
            </a>
          </div>
          <div className="cursor-pointer">
            <a
              href="https://www.instagram.com/aodgotitpoppin/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
