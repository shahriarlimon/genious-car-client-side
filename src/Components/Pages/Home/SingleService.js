import React from 'react';
import {  useNavigate } from 'react-router-dom';

const SingleService = ({service}) => {
    const {name,img,description,price,_id} = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='border px-3 py-3 rounded shadow-lg'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h1>Price: {price}</h1>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetails(_id)} className='bg-blue-500 px-3 py-2 text-white font-semibold rounded hover:bg-blue-700'>Book Now</button>
        </div>
    );
};

export default SingleService;