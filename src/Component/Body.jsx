import React from 'react';
import LawyerCard from './LawyerCard';

const Body = ({ data }) => {
    return (
        <div className='py-20'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Our Best Lawyers</h1>
                <small className='text-gray-500 mb-24'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />
                    routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</small>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    data.map(person => <LawyerCard key={person.id} person={person} ></LawyerCard>)
                }
            </div>







        </div>
    );
};

export default Body;