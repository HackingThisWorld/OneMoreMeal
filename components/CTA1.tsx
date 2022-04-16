import React from 'react';

const CTA1 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-12 mt-8 mx-auto flex flex-wrap">
          <div className="flex flex-wrap justify-center items-center -m-4">
            <div className="lg:w-1/3 md:w-full">
              <div className="flex rounded-lg p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 first-letter:text-4xl first-letter:text-orange-500 text-3xl title-font font-medium">
                    It&apos;s Not What You Think
                  </h2>
                  <p className="leading-relaxed mt-5 text-lg">
                    Ending hunger isn’t about supply. The world produces enough
                    food to feed everyone on the planet. The problem is access
                    and availability, both of which are disrupted by things like
                    extreme weather, food waste, one’s gender and – worst of all
                    – conflict. Today, the world’s hungriest people are facing
                    the coronavirus pandemic on top of all this. Ending hunger
                    is the greatest challenge of our time, but together it’s
                    solvable.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-full">
              <div className="flex rounded-lg p-4 sm:flex-row flex-col">
                <div className="flex-grow">
                  <img src="https://cdn.discordapp.com/attachments/941636283208458250/964884175406661682/unknown.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA1;
