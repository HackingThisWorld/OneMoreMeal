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
    shortText: ' kg',
    longText:
      'With the help of our enthsiastic and active team, we are able to save more than 2500 Kgs of food which wouldve been wasted due to the inability of food businesses to sell stale food because of health issues.',
  },
  {
    id: 2,
    title: 'Stomachs Fed',
    duration: 1.2,
    icon: GiStomach,
    start: 0,
    end: 20,
    shortText: 'k+',
    longText:
      'Through thoughtful individuals that create our donor support, One More Meal, has provided over 20 thousand plus means. That number continues to increase daily as we continue to feed hungry underprivileged people and animals!',
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
      'Our aim i.e to help the hungry does not only restricts to the people, we also extend our hand to those poor animals who are unable to speak for their hunger and go to sleep everyday with an empty stomach and dont say a thing. ',
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
      'We are also trying to raise donation for our cause so that we can work in other ways too to acheive our target. We utilize the fundraised for promoting the youth for the cause and donate surplus to NGOs so they can also work for cause in their own way.',
  },
];

const CountWrapper = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center">
            {counterDetails.map((counter) => (
              <div className="p-4" key={counter.id}>
                <div className="px-4 hover:shadow-2xl min-h-[450px] rounded-3xl py-6">
                  <div className="px-5 ">
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
                  </div>
                  <p className="leading-relaxed p-5">{counter.longText}</p>
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
