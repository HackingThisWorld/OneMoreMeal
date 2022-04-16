import React from 'react';
import CountTextUp from './CountUp';
import {
  GiOpenedFoodCan,
  GiStomach,
  GiSittingDog,
  GiReceiveMoney,
} from 'react-icons/gi';

const counterDetails = [
  {
    id: 1,
    title: 'Food Value Saved',
    duration: 1.2,
    icon: GiOpenedFoodCan,
    start: 0,
    end: 2500,
    shortText: '$',
    longText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at arcu urna. Vestibulum et felis eu dolor tristique eleifend. Duis vel magna eget justo vestibulum facilisis quis id justo',
  },
  {
    id: 2,
    title: 'Stomachs Fed',
    duration: 1.2,
    icon: GiStomach,
    start: 0,
    end: 120,
    shortText: '+',
    longText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at arcu urna. Vestibulum et felis eu dolor tristique eleifend. Duis vel magna eget justo vestibulum facilisis quis id justo',
  },
  {
    id: 3,
    title: 'Animals Helped',
    duration: 1.2,
    icon: GiSittingDog,
    start: 0,
    end: 500,
    shortText: '+',
    longText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at arcu urna. Vestibulum et felis eu dolor tristique eleifend. Duis vel magna eget justo vestibulum facilisis quis id justo',
  },
  {
    id: 4,
    title: 'Donation Raised',
    duration: 1.2,
    icon: GiReceiveMoney,
    start: 0,
    end: 250,
    shortText: '$',
    longText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at arcu urna. Vestibulum et felis eu dolor tristique eleifend. Duis vel magna eget justo vestibulum facilisis quis id justo',
  },
];

const CountWrapper = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {counterDetails.map((counter) => (
              <div key={counter.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div>
                  <div className="px-4 hover:shadow-2xl rounded-3xl py-6">
                    <counter.icon className="text-orange-500 w-12 h-12 mb-3 inline-block" />
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      <CountTextUp
                        duration={counter.duration}
                        start={counter.start}
                        end={counter.end}
                      />
                      {counter.shortText}
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                      {counter.title}
                    </p>
                    <p className="leading-relaxed mt-5 p-5">
                      {counter.longText}
                    </p>
                  </div>
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
