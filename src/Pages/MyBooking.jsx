import React, { useEffect, useState } from 'react';
import LawyerCard from '../Component/LawyerCard';
import { getInfo, removeLawyer } from '../Utils';
import BookingDeatils from '../Component/BookingDeatils';
import RChart from '../Component/RChart';
import { Link } from 'react-router';

const MyBooking = () => {
    const [displayData, setDisplayData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { 
            const savedLawyer = getInfo();
            setDisplayData(savedLawyer);
            setLoading(false); 
        }, 500); 
    }, []);

    const handleCancel = (id) => {
        removeLawyer(id);
        setDisplayData(getInfo());
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
            </div>
        );
    }

    return (
        <div>
            {displayData.length === 0 ? (
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-semibold py-2">You have not Booked any appointment yet.</h2>
                    <p className="text-gray-500 py-2">Please Book appointment for meeting with a lawyer to get started.</p>
                    <Link to="/" >
                        <button className='bg-[#0EA106] btn text-white cursor-pointer py-1 px-5 rounded-4xl'>
                            Book an Appointment
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    <RChart displayData={displayData} />
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-center'>My Today Appointments</h1>
                        <small className='text-gray-500 text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</small>
                    </div>
                    <div>
                        {
                            displayData.map(person => (
                                <BookingDeatils
                                    key={person.id}
                                    person={person}
                                    handleCancel={handleCancel}
                                />
                            ))
                        }
                    </div>
                </>
            )}
        </div>
    );
};

export default MyBooking;
