import React from 'react';

const SingleExpert = ({expert}) => {
    const {img,name} = expert;
    return (
     <div className='border'>
         <img src={img} alt="" />
         <h1 className='text-2xl'>{name}</h1>
     </div>
    

    );
};

export default SingleExpert; 