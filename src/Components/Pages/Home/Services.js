import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='services' className='mt-5'>
            <h1 className='text-2xl text-center my-3'>Our Services</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 py-5'>
           {
                services.map(service=><SingleService key={service._id} service={service}/>)
            }
           </div>
        </div>
    );
};

export default Services;