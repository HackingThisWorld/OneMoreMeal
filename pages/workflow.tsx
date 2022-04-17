import React, { FC } from 'react';

const Workflow: FC = () => {
  return (
    <div className="px-4 md:px-44 py-20">
      <div className="goal">
        <div className="text-6xl mb-8 text-center font-mw font-bold pb-2 border-orange-700 border-b-4">
          It&apos;s Not What You Think
        </div>
        <p className="text-3xl flex flex-col gap-4 text-center px-32 first-letter:text-4xl text-gray-700 mt-2 mb-8">
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
        <div className="text-3xl border-b-4 my-6 border-b-slate-500 inline ">
          How the plateform works
        </div>
        <p className="text-2xl first-letter:text-4xl text-gray-700 mt-2">
          Is getting outside and physically planting a tree not an option for
          you? Do you still want to do something? OneMoreTree has some great and
          easy steps for you to follow. You just have to go about and select a
          tree and get your saplings into the earth. This initiative works with
          people whose business deals with trees and plantations. Contributors
          can pick the type of tree they want, from Neem to Eucalyptus,we have a
          long list of distributors listed with us and place an order. Following
          that , those orders will be forwarded to the other trees selling
          businesses and other small scale planters who acts like a distributor
          for us. But thats not only it, we also give a plateform to the young
          climate enthusiasts to lend their hand in saving the Earth, promote
          them by providing a leaderboard and prizes for the top saviours and
          also contribute to other initiatives working towards saving the world
          with the help of a bit of margin we are keeping in the model.
        </p>
      </div>
    </div>
  );
};

export default Workflow;
