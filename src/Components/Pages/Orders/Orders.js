import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const getOrder = async () => {
      const email = user?.email;
      // console.log(email);
      const url = `http://localhost:5000/order?email=${email}`;
      try{
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      }catch(error){
        console.log(error.message)
        if(error.response.status === 401 || error.response.status === 403){
          signOut(auth);
          navigate('/login');

        }
      }
    };
    getOrder();
  }, [user.email]);
  return (
    <div>
      <h1>You Order: {orders.length}</h1>
    </div>
  );
};

export default Orders;
