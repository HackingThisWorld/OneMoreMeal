import React, { FC } from 'react';

const Workflow: FC = () => {
  return (
    <div className="px-4 md:px-44 py-20">
      <div className="goal">
        <div className="text-6xl mb-8 text-center font-mw font-bold pb-2 border-orange-700 border-b-4">
          It&apos;s Not What You Think
        </div>
        <p className="text-3xl flex flex-col gap-4 text-center lg:px-32 first-letter:text-4xl text-gray-700 mt-2 mb-20">
          Ending hunger isn’t about supply. The world produces enough food to
          feed everyone on the planet. The problem is access and availability,
          both of which are disrupted by things like extreme weather, food
          waste, one’s gender and – worst of all – conflict.{' '}
          <span>
            Today, the world’s hungriest people are facing the coronavirus
            pandemic on top of all this.
          </span>{' '}
          Ending hunger is the greatest challenge of our time, but
          <span className="uppercase font-mw text-orange-500">
            together it’s solvable.
          </span>
        </p>
        <div className="md:text-5xl text-4xl pb-2 font-mw border-b-4 my-6 border-b-orange-500 text-center capitalize ">
          How the plateform works
        </div>
        <p className="text-3xl leading-normal first-letter:text-4xl text-gray-700 mt-3 mb-20">
          To help with our goal and keep the plateform as simple as possible, we
          have not included any sort of sign up/sign in hassle for the users and
          contributors so its easy to use for everyone. The contributors are
          able to notify us with a simple form and the pickup time and all the
          details are messaged to the volunteers with the help of twilio
          service. We also notify the contributors with seamless automated
          messages set up by us with twilio to notify them about successful
          pickup and even that we have distributed the food to the needy.
        </p>
      </div>
    </div>
  );
};

export default Workflow;
