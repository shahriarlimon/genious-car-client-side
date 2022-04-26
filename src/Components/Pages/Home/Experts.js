import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import SingleExpert from './SingleExpert';
const experts = [
    {
        name:'Will Smith', id:1, img: expert1
    },
    {
        name:'Warrent Buffet', id:2, img: expert2
    },
    {
        name:'John Smith', id:3, img: expert3
    },
    {
        name:'Donald Trump', id:4, img: expert4
    },
    {
        name:'BaracK Obama', id:5, img: expert5
    },
    {
        name:'Virat Kholi', id:6, img: expert6
    }
];

const Experts = () => {
    return (
    <div id='experts' className='mt-5'>
        <h1 className='text-center text-2xl '>Our Team</h1>
        <div  className='grid md:grid-cols-3 grid-cols-1 gap-5'>
           {
                experts.map(expert=><SingleExpert expert = {expert} key={expert.id}/>)
           }
       </div>
    </div>
    );
};

export default Experts;