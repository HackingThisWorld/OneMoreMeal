import React from "react";
import VolunteerForm from "../components/Volunteer";

const data = [
  {
    id: 2,
    name: "Adfaf",
    shop_name: "Adfaf",
    phone_number: "694991310",
    address: "Pune",
    pickup_time: "2022-04-16T21:34:00.933Z",
    note: "werwer",
    completed: false,
    createdAt: "2022-04-17T08:13:40.516Z",
    updatedAt: "2022-04-17T08:13:40.516Z",
  },
  {
    id: 1,
    name: "Adfaf",
    shop_name: "Adfaf",
    phone_number: "694991310",
    address: "Pune",
    pickup_time: "2022-04-16T21:34:00.933Z",
    note: "werwer",
    completed: false,
    createdAt: "2022-04-17T08:12:39.755Z",
    updatedAt: "2022-04-17T08:12:39.754Z",
  },
  {
    id: 3,
    name: "vdfg",
    shop_name: "vdfg",
    phone_number: "123454",
    address: "Pune",
    pickup_time: "2022-04-16T22:35:00.776Z",
    note: "ertdfg",
    completed: false,
    createdAt: "2022-04-17T08:36:45.602Z",
    updatedAt: "2022-04-17T08:36:45.602Z",
  },
];

const Volunteer = () => {
  return (
    <div>
      <VolunteerForm data={data} />
    </div>
  );
};

export default Volunteer;
