import Logo from "../Assets/logo.png";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-orange-600 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-[62px]">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden  h-28 w-auto text-black"
                    src={Logo.src}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block  h-24 w-auto"
                    src={Logo.src}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href={`/`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        router.pathname === "/"
                          ? "border-b-2 border-black"
                          : "hover-underline-animation"
                      }`}
                    >
                      HOME
                    </a>
                  </Link>
                  <Link href={`/about`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        router.pathname === "/about"
                          ? "border-b-2 border-black"
                          : "hover-underline-animation"
                      }`}
                    >
                      ABOUT
                    </a>
                  </Link>
                  <Link href={`/contact`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium ${
                        router.pathname === "/contact"
                          ? "border-b-2 border-black"
                          : "hover-underline-animation"
                      }`}
                    >
                      CONTACT US
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" flex-col pt-2 pb-3 space-y-1 ">
              {/* Current: "bg-orange-50 border-orange-500 text-orange-700", Default: "border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
              className={`border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium ${
                router.pathname === "/"
                  ? "border-b-2 border-black"
                  : "hover-underline-animation"
              }`}
               >
                <Link href={`/`}>
                  <a
                    href="#"
                    
                  >
                    HOME
                  </a>
                </Link>
              </Disclosure.Button>
              <Disclosure.Button
              className={`border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium ${
                router.pathname === "/about"
                  ? "border-b-2 border-black"
                  : "hover-underline-animation"
              }`}
              >
                <Link href={`/about`}>
                  <a
                    href="#"
                    
                  >
                    ABOUT
                  </a>
                </Link>
              </Disclosure.Button>
              <Disclosure.Button>
                <Link href={`/contact`}>
                  <a
                    href="#"
                    className={`border-transparent text-white hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium ${
                      router.pathname === "/contact"
                        ? "border-b-2 border-black"
                        : "hover-underline-animation"
                    }`}
                  >
                    CONTACT US
                  </a>
                </Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
