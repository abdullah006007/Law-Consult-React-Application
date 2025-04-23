import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const LawyerCard = ({person}) => {

    const { id, image, name, specialty, experience, licenseNumber , availableDays
    } = person  ;

    const [availableDay, setAvailableDay] = useState(false)
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayName = days[today.getDay()];
    
    
        useEffect(() => {
            if (availableDays?.includes(dayName)) {
                setAvailableDay(true);
            }
        }, [availableDays, dayName]);


   
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm ">
                <figure>
                    <img className='w-36 h-36  p-4 rounded-3xl '
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body px-1 md:px-3 ">
                    <div className='flex gap-1 md:gap-3'>
                    <small className={availableDay ? 'text-[#09982F] sm:px-5 px-2 rounded-4xl bg-[#09982F1A]' : 'text-red-500 bg-[#9809091a] sm:px-5 px-2 rounded-4xl'}>
                                {availableDay ? 'Available Today' : 'Not Available Today'}
                            </small>
                        <small><button className='text-[#176AE5] bg-[#176AE51A] px-3 rounded-4xl '> {experience} </button></small>
                    </div>
                    <p className='font-semibold text-xl'> {name} </p>
                    <p> {specialty} </p>
                    <p> ® {licenseNumber
                    } </p>
                    <div className="card-actions">
                        <Link to={`/lawyer-details/${id}`}><button className="text-[#176AE5] border px-12 rounded-4xl cursor-pointer hover:bg-[#176AE5] hover:text-white">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LawyerCard;