import React from 'react';

const Text = () => {
  return (
    <>
      <section className="text-gray-600 mt-16 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-5xl font-mw pb-2 border-b-4 lg:mx-24 border-orange-700 text-2xl font-medium title-font mb-4 text-gray-900">
              Can you imagine a world without{' '}
              <span className="text-orange-500">hunger?</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              There are people in this world so hungry that god cannot appear to
              them except in the form of bread. Let us provide them with
              OneMoreMeal and make sure one less person goes to sleep with an
              empty stomach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Text;
