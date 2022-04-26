import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceID } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceID]);
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl">Welcome to service Details: {service.name} </h1>
      <Link to="/checkout">
        <button className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded text-xl text-white mt-5">
          Proceed Checkout
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
