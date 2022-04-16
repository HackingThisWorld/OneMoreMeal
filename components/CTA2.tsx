import React from 'react';

const CTA2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap justify-center items-center -m-4">
            <div className="p-4 lg:w-1/3 md:w-full">
              <div className="flex rounded-lg p-2 sm:flex-row flex-col">
                <div className="flex-grow">
                  <img src="https://cdn.discordapp.com/attachments/941636283208458250/964907817414824018/unknown.png" />
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-full">
              <div className="flex rounded-lg sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 first-letter:text-4xl first-letter:text-orange-500 text-3xl title-font font-medium">
                    Sustainize the food resource.
                  </h2>
                  <p className="leading-relaxed mt-5 text-lg">
                    As also mentioned above, the problem is not that we dont
                    have enough food resource for everyone, we just lack the
                    proper management of it because of which many people are
                    facing the hunger crisis. And with all of this happening
                    right in front of our eyes, we cannot just stand and watch,
                    we cannot be bystandars but stand up and take the initiative
                    to make our Earth a place where no one goes to sleep with an
                    empty stomach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA2;
