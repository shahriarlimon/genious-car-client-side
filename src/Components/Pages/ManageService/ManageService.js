import React from 'react';
import useService from '../../useService/useService';

const ManageService = () => {
    const [services, setServices] = useService();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = services.filter (service=>service._id !== id);
                setServices(remaining)
            })
        }
    }
    return (
        <div>
            <h1 className='text-2xl text-center mb-5'>Manage your services</h1>
            <div>
                {
                    services.map(service=><h1 className='text-center' key={service._id}>{service.name}
                    <button onClick={()=>handleDelete(service._id)} className='ml-2'>X</button>
                    </h1>)
                }
            </div>
            
        </div>
    );
};

export default ManageService;