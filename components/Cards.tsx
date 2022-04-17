import React from 'react';

const cardDetails = [
  {
    id: 1,
    title: 'Lessen Food Wastage',
    description:
      'According to the World Food Programme, one-third of all food produced — over 1.3 billion tons of it — is never consumed. We aim to solve the underlying cause of hunger i.e properly utilize the food we produce.',
    image:
      'https://cdn.discordapp.com/attachments/941636283208458250/964884265005367387/unknown.png',
    category: 'category',
  },
  {
    id: 2,
    title: 'Take a bite out of hunger.',
    description:
      'We aim to utilize the leftovers from food businesses and judicially use to for the needy. We aim to feed the hungry be it stray animals or the underpreviledged people and try to reduce the food waste to almost zero.',
    image:
      'http://greatsocietyproblems.weebly.com/uploads/1/0/6/8/106884623/1743242-1416890452427_orig.png',
    category: 'category',
  },
  {
    id: 3,
    title: 'Two Birds One Stone',
    description:
      'What we are doing at OneMoreMeal is not just properly managing leftover food from food businesses but we also collect fund and utilize it to not only help the NGOs but parallely promoting the idea by various planned methods.',
    image:
      'https://cdn.discordapp.com/attachments/941636283208458250/964828689873379348/unknown.png',
    category: 'category',
  },
];

const Cards = () => {
  return (
    <>
      <section className="text-gray-600  mt-16 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-5xl font-mw pb-2 border-b-4 border-gray-600 text-2xl font-medium title-font mb-4 text-gray-900">
              Our Aim With <span className="text-orange-600">OneMoreMeal</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              Ending hunger isn’t about supply. The world produces enough food
              to feed everyone on the planet. The problem is access and
              availability, both of which are disrupted by things like extreme
              weather, food waste, one’s gender and – worst of all – conflict.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 my-12 md:px-16 body-font">
        <div className="container px-5 mx-auto">
          {/* <div className="flex flex-wrap items-center justify-center -m-4"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
            {cardDetails.map((card) => (
              <div className="p-4 " key={card.id}>
                <div className="h-full border-2 hover:shadow-xl shadow-md border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={card.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="first-letter:text-2xl first-letter:text-orange-600 tracking-normal title-font text-xl font-medium text-gray-900 mb-3">
                      {card.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{card.description}</p>
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

export default Cards;
