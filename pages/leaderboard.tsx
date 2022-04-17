import React from 'react';

const Leaderboard = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Leaderboard
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Thanks to these generous donators and volunteers to help us work
              for this noble cause.
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-center title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Full Name
                  </th>
                  <th className="px-4 text-center py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Age
                  </th>
                  <th className="px-4 text-center py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th className="px-4 text-center py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Meals Provided / Funds Donated
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-center">
                    Satish Ramgopal (Donator)
                  </td>
                  <td className="px-4 py-3 text-center">32</td>
                  <td className="px-4 py-3 text-center">satish@gmail.com</td>
                  <td className="px-4 py-3 text-center text-lg text-gray-900">
                    107$
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center">
                    Chetna Singh (Donator)
                  </td>
                  <td className="px-4 py-3 text-center">26</td>
                  <td className="px-4 py-3 text-center">chetna@gmail.com</td>
                  <td className="px-4 py-3 text-center text-lg text-gray-900">
                    91$
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center">
                    Light Yagami (Volunteer)
                  </td>
                  <td className="px-4 py-3 text-center">18</td>
                  <td className="px-4 py-3 text-center">yagami@light.com</td>
                  <td className="px-4 py-3 text-center text-lg text-gray-900">
                    76
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center">
                    Alok Sharma (Volunteer)
                  </td>
                  <td className="px-4 py-3 text-center">17</td>
                  <td className="px-4 py-3 text-center">
                    aloksharma@gmail.com
                  </td>
                  <td className="px-4 py-3 text-center text-lg text-gray-900">
                    69
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-center">
                    Akhil Padmanabhan (Volunteer)
                  </td>
                  <td className="px-4 py-3 text-center">19</td>
                  <td className="px-4 py-3 text-center">akhilp@gmail.com</td>
                  <td className="px-4 py-3 text-center text-lg text-gray-900">
                    52
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
