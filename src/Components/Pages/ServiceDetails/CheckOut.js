import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import useServiceDetails from '../../useServiceDetails/useServiceDetails';

const CheckOut = () => {
    const { serviceID } = useParams()
    const [service] = useServiceDetails(serviceID)
    const [user] = useAuthState(auth)
    const handleFormSubmit = e =>{
        e.preventDefault();
        const order = {
            service: service.name,
            serviceID : serviceID,
            address : e.target.address.value,
            phone : e.target.phone.value,
            email: user.email

        }
        axios.post('http://localhost:5000/order',order)
        .then(res=>{
           const {data} = res;
           if(data.insertedId){
               alert('Your order is booked');
               e.target.reset();
           }
        })
    }
    console.log(user);
    // console.log(service)
    return (
        <div>
            <h1 className='text-center text-2xl'>Thanks for ordering : {service?.name}</h1>
           <div className='flex justify-center items-center mt-10'>
           <form onSubmit={handleFormSubmit}>
                <input className=' w-full border px-2 py-1 mb-2' type="text" name='name' value={user?.displayName} required disabled/>
                <br />
                <input autoComplete='off' className=' w-full border px-2 py-1 mb-2' type="email" name='email' value={user?.email} disabled  required/>
                <br />
                <input autoComplete='off' className=' w-full border px-2 py-1 mb-2' type="text" name='phone' placeholder='phone' required/>
                <br />
                <input autoComplete='off' className=' w-full border px-2 py-1 mb-2' type="text" name='service' value={service?.name} disabled required/>
                <br />
                <input autoComplete='off' className=' w-full border px-2 py-1 mb-2' type="text" name='address' placeholder='Address' required/>
                <br />
               <button type='submit' className='px-2 py-2 border bg-green-500 text-white'>Place Order</button>
                <br />
            </form>
           </div>
        </div>
    );
};

export default CheckOut;