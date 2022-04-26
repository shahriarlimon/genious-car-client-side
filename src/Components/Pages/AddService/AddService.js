import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{ 
     const url = `http://localhost:5000/service`;
     fetch(url,{
         method:'POST',
         headers: {
            "content-type": "application/json"
         },
         body:JSON.stringify(data)
     })
     .then(res=>res.json())
     .then(result=>{
         console.log(result);
     })
    
    };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/2 mx-auto mt-10"
    >
      <input placeholder="Name" className="border mb-2 px-2 py-1" {...register("name", { required: true, maxLength: 20 })} />
      <textarea placeholder="Description" className="border mb-2 px-2 py-1" {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      <input placeholder="Url"  className="border mb-2 px-2 py-1" type="text" {...register("img")} />
      <input placeholder="Price"  className="border mb-2 px-2 py-1" type="number" {...register("price")} />
      <button className="text-white bg-blue-500 hover:bg-blue-700 w-1/2" type="submit">Add </button>
    </form>
  );
};

export default AddService;
 