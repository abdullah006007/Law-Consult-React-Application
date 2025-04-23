import React from 'react';

const BookingDeatils = ({person, handleCancel}) => {

    const {id, fee, 
        name,specialty

        
    }=person


   

    return (
        <div className='py-3'>
            <div className='border border-gray-300 p-5 rounded-2xl'>
            

            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-semibold'> {name} </p>
                    <small className='text-gray-500'> {specialty} </small>
                </div>

                <p className='text-gray-500'> Appointment fee: {fee
                } Taka</p>

            </div>
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            <button onClick={()=>handleCancel(id)}  className="rounded-4xl border border-[#FF0000] text-[#FF0000] cursor-pointer hover:bg-[#FF0000] hover:text-white py-1 btn-block">Cancel Appointment</button>

        </div>
            
        </div>
    );
};

export default BookingDeatils;