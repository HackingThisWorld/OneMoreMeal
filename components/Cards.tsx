import React from "react";

const cardDetails = [
  {
    id: 1,
    title: "The Catalyst",
    description:
      "The Catalyst is a new way to connect with the world of the future. It is a platform for people to connect with the future and to share their ideas and experiences with the world.",
    image: "https://dummyimage.com/720x400",
    category: "category",
  },
  {
    id: 2,
    title: "The Catalyst 2",
    description:
      "The Catalyst is a new way to connect with the world of the future. It is a platform for people to connect with the future and to share their ideas and experiences with the world.",
    image: "https://dummyimage.com/721x401",
    category: "category",
  },
  {
    id: 3,
    title: "The Catalyst 3",
    description:
      "The Catalyst is a new way to connect with the world of the future. It is a platform for people to connect with the future and to share their ideas and experiences with the world.",
    image: "https://dummyimage.com/722x402",
    category: "category",
  },
];

const Cards = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap items-center justify-center -m-4">
            {cardDetails.map((card) => (
              <div className="p-4 md:w-1/4" key={card.id}>
                <div className="h-full border-2 shadow-xl border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={card.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {card.category.toUpperCase()}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
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
