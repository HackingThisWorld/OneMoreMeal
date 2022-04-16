import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

const Navbar: FC = () => {
  const router = useRouter();

  return (
    <>
      <nav className="max-w-full py-5 flex w-screen justify-around items-center text-white bg-black px-6">
        <div className="items flex gap-8">
          <Link href={`/`}>
            <a
              className={`${
                router.pathname === '/'
                  ? 'border-b-2'
                  : 'hover-underline-animation'
              }`}
            >
              HOME
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`${
                router.pathname === '/about'
                  ? 'border-b-2'
                  : 'hover-underline-animation'
              }`}
            >
              ABOUT
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`${
                router.pathname === '/contact'
                  ? 'border-b-2'
                  : 'hover-underline-animation'
              }`}
            >
              CONTACT
            </a>
          </Link>
        </div>

        <div className="w-36">{/* <img alt="AOD logo" src={AOD.src} /> */}</div>

        <div className="flex text-2xl gap-4">
          <div className="cursor-pointer">
            <FiTwitter />
          </div>
          <div className="cursor-pointer">
            <a href="#" target="_blank" rel="noreferrer">
              <FiYoutube />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="#" target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
