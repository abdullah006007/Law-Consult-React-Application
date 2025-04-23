import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaInfoCircle } from "react-icons/fa";
import { addToLocal } from '../Utils';
import toast from 'react-hot-toast';

const LawyerDetails = () => {



    const data = useLoaderData();
    const { id } = useParams()
    const singlePerson = data.find(p => p.id === parseInt(id))
    const {image, name, specialty, experience, details, licenseNumber, availableDays, fee

    } = singlePerson || {}



    const [availableDay, setAvailableDay] = useState(false)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayName = days[today.getDay()];


    // if (availableDays.includes(arrDay)) {
    //     setAvailableDay(true);
    // }
    // console.log(availableDay);

    useEffect(() => {
        if (availableDays?.includes(dayName)) {
            setAvailableDay(true);
        }
    }, [availableDays, dayName]);


    const handleAppointment=() =>{
        addToLocal(singlePerson)
    }


    const successBooking = () =>{
        toast.success("Appointment Booked Successfully!!")
    }

    const notAvailableToday = () =>{
        toast.error("Not Available Today! Please Check Availability")
    }



    return (


        <div>
            <div className='text-center bg-gray-200 rounded-xl my-8 '>
                <div className=' mx-auto max-w-[1000px] p-16'>
                    <p className='text-3xl font-bold py-3'>Lawyer’s Profile Details</p>
                    <small> {details} </small>
                </div>
            </div>


            {/* cart started */}


            <div className=" border border-gray-200 rounded-2xl mb-9 ">
                <div className="flex flex-col lg:flex-row p-5 items-center gap-5">
                    <img
                        src={image}
                        className="w-64 h-64   rounded-lg shadow-2xl"
                    />
                    <div>
                        <small className='text-[#176AE5] bg-[#176AE51A] px-5 py-0.5 rounded-4xl'> {experience} </small>
                        <h1 className="text-2xl font-bold"> {name} </h1>

                        <div className=' flex gap-16 items-center'>
                            <p className='text-gray-500'> {specialty} </p>
                            <div className='flex items-center gap-1'><span className='text-xl'>®</span> <p>{licenseNumber} </p>  </div>

                        </div>

                        <p className='py-1'><span className='text-gray-500 font-semibold'>Availability:</span> {availableDays.map((day, index) => (
                            <span key={index} className="ml-5 text-[#FFA000] bg-[#FFA0001A] px-4 py-0.5 rounded-2xl">{day}</span>

                        ))} </p>


                        <p className='py-1'><span className='text-gray-500'>Consultation Fee:</span> <span className='text-[#0EA106]'>Taka {fee}</span> </p>


                       
                    </div>
                </div>




            </div>

            {/* second cart */}

            <div className='p-8 border border-gray-200 rounded-2xl '>

                <p className='text-center py-1 font-bold'>Book an Appointment</p>
                <div className="border-t border-dashed border-gray-300 my-4"></div>



                <div className='flex justify-between items-center'>
                    <div>
                        <p>Availability</p>
                    </div>
                    <div >

                        <p className={availableDay ? 'text-[#09982F] bg-[#09982F1A] px-3 rounded-4xl ' : 'text-red-500 bg-[#9809091a] px-3 rounded-4xl'}>
                            {availableDay ? 'Lawyer Available Today' : 'Not Available Today'}
                        </p>


                    </div>



                </div>

                <div className="border-t border border-gray-200 my-4"></div>

                <p className={availableDay
                    ? 'text-[#FFA000] bg-[#FFA0001A] text-center py-2 px-5 rounded-4xl flex items-center justify-center gap-2'
                    : 'text-red-500 text-center py-2 bg-[#FFA0001A] px-5 rounded-4xl flex items-center justify-center gap-2 '}>

                    <FaInfoCircle />
                    {availableDay
                        ? 'Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.'
                        : 'Due to high patient volume, we are not accepting appointments for today. We appreciate your understanding and cooperation.'
                    }
                </p>

                <div className='py-8'>
                    {
                        availableDay? <Link to="/my-booking">
                            <button onClick={() => { handleAppointment(); successBooking(); }} className="btn btn-block bg-[#0EA106] text-white rounded-4xl">Book Appointment Now</button>
                        </Link>: <button onClick={notAvailableToday} className="btn btn-block bg-[#a10606] text-white rounded-4xl"> Not Available Today </button>
                    }
                    
                {/* <button className="btn btn-block bg-[#0EA106] text-white rounded-4xl">Book Appointment Now</button> */}
                </div>

            </div>


        </div>
    );
};

export default LawyerDetails;