import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import BannerImage from "../Assets/HeroBanner.jpg";
import { Modal, useMantineTheme } from "@mantine/core";
import Form from "./NotifyUs";
import Donate from "./Donate";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
function Hero() {
  const [notify, setNofify] = useState(false);
  const [donate, setDonate] = useState(false);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                        <span className="sr-only">Open main menu</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </Popover.Button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </Popover>

          <Modal
            opened={donate}
            transition="pop"
            transitionDuration={400}
            transitionTimingFunction="ease"
            onClose={() => setDonate(false)}
            title="Donate a Meal"
          >
            <Donate />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Modal>
          <Modal
            opened={notify}
            transition="pop"
            transitionDuration={400}
            transitionTimingFunction="ease"
            onClose={() => setNofify(false)}
            title="One More Meal"
          >
            <Form setNotify={setNofify} />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
          </Modal>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="text-4xl flex flex-col tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <div className="block xl:inline font-mw">
                  Feed the hungry, Save humanity.
                </div>
                <div className="block text-orange-600 xl:inline">
                  One More Meal
                </div>
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                There is more than enough food produced in the world to feed
                everyone on the planet. But still as many as 811 million people
                worldwide go to bed hungry each night.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:justify-center sm:flex-row lg:justify-start">
                <button
                  onClick={() => setNofify(true)}
                  className="rounded-md shadow"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
                  >
                    Notify Us
                  </a>
                </button>
                <button
                  onClick={() => setDonate(true)}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10"
                  >
                    Donate Meal
                  </a>
                </button>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={BannerImage.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
