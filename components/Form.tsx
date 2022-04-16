import React from "react";
import { TimeInput } from "@mantine/dates";

const Form = () => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="shop-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Shop Name
                    </label>
                    <input
                      type="text"
                      name="shop-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="shop-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Shop Address
                    </label>
                    <input
                      type="text"
                      name="shop-address"
                      id="shop-address"
                      autoComplete="shop-address"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <TimeInput
                      name="time"
                      // label="time"
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      format="12"
                      defaultValue={new Date()}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="note"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Note For Us
                    </label>
                    <textarea
                        id="note"
                        name="note"
                        rows={3}
                       className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="Note For Us"
                        defaultValue={''}
                      /> 
                  </div>
                  
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Notify Us
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
