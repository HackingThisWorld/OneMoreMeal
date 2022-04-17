import React from "react";

const Volunteer = ({ data }) => {
  const [volunteer, setVolunteer] = React.useState([]);
  async function fetchData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL!!}/data/requests`
    );
    const data = await response.json();
    console.log(data);
    setVolunteer(data);
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  const putRequest = async (id: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL!!}/data/requests`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    setVolunteer(volunteer.filter((v) => v.id !== id));
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className="border-b-2 mt-10 mx-10 py-2 border-orange-700 text-5xl font-mw">
          Pending Requests
        </h1>
        <div className="container px-5 py-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 -m-4">
            {volunteer.map((item, index) => {
              let myval = new Date(item.pickup_time);
              let mydate = myval.toLocaleString().toString();
              //   console.log(item.pickup_time);
              mydate = mydate.split(",")[1];
              //   console.log(item.pickup_time);
              return (
                <div key={item.id}>
                  <div className="p-4 shadow-xl hover:shadow-2xl">
                    <div className="items-start h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col">
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        Name: {item.name}
                      </h1>
                      <div className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        Shop Name: {item.shop_name}
                      </div>
                      <div className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        Phone Number: {item.phone_number}
                      </div>
                      <div className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        Address: {item.address}
                      </div>
                      <p className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        PickUp Time: {mydate}
                      </p>
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        Note: {item.note}
                      </h1>
                      <div className="text-center mt-2 leading-none flex justify-start absolute bottom-0 left-0 w-full py-4">
                        <button
                          onClick={() => putRequest(item.id)}
                          className="flex items-center ml-8 mb-5 justify-start px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
