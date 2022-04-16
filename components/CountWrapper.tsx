import React from "react";
import CountTextUp from "./CountUp";
import { FiPause, FiBook, FiCloudLightning, FiFile } from "react-icons/fi";

const counterDetails = [
  {
    id: 1,
    title: "Total Users",
    duration: 1.2,
    icon: FiPause,
    start: 0,
    end: 2500,
  },
  {
    id: 2,
    title: "Total Projects",
    duration: 1.2,
    icon: FiBook,
    start: 0,
    end: 120,
  },
  {
    id: 3,
    title: "Total Tasks",
    duration: 1.2,
    icon: FiCloudLightning,
    start: 0,
    end: 500,
  },
  {
    id: 4,
    title: "Total Completed Tasks",
    duration: 1.2,
    icon: FiFile,
    start: 0,
    end: 250,
  },
];

const CountWrapper = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {counterDetails.map((counter) => (
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <counter.icon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountTextUp
                      duration={counter.duration}
                      start={counter.start}
                      end={counter.end}
                    />
                  </h2>
                  <p className="leading-relaxed">{counter.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CountWrapper;
