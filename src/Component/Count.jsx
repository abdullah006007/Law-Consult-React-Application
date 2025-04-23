import React, { useRef } from 'react';
import { useCountUp } from 'react-countup';

import successDog from '../assets/success-doctor.png';
import starImg from '../assets/success-review.png';
import Stuff from '../assets/success-staffs.png';
import hammer from '../assets/success-patients.png';

const Count = () => {
    const lawyerRef = useRef(null);
    const reviewRef = useRef(null);
    const casesRef = useRef(null);
    const staffRef = useRef(null);


    useCountUp({
        ref: lawyerRef,
        start: 0,
        end: 199,
        duration: 5,
    });

    useCountUp({
        ref: reviewRef,
        start: 0,
        end: 467,
        duration: 5,
    });

    useCountUp({
        ref: casesRef,
        start: 0,
        end: 1990,
        duration: 10,
    });

    useCountUp({
        ref: staffRef,
        start: 0,
        end: 300,
        duration: 5,
    });

    return (
        <div className='pb-8 md:pb-24'>
            <div className='text-center max-w-screen'>
                <h1 className='font-semibold text-2xl py-5'>We Provide Best Law Services</h1>
                <small className='text-gray-500 pb-5'>
                    Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. 
                </small>
            </div>



            <div className='mx-auto flex justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 py-8 w-11/12 mx-auto gap-4'>
                 


                    <div className='p-5 space-y-2 border border-gray-300 rounded-2xl bg-gray-100 lg:w-[230px]'>
                        <img className='w-10' src={successDog} alt="Lawyers" />
                        <p className='text-3xl font-semibold text-[#0EA106]'>
                            <span ref={lawyerRef} />+
                        </p>
                        <p className='text-gray-500'>Total Lawyers</p>
                    </div>



                   
                    <div className='p-5 space-y-2 border border-gray-300 rounded-2xl bg-gray-100 lg:w-[230px]'>
                        <img className='w-10' src={starImg} alt="Reviews" />
                        <p className='text-3xl font-semibold text-[#0EA106]'>
                            <span ref={reviewRef} />+
                        </p>
                        <p className='text-gray-500'>Total Reviews</p>
                    </div>

  

                    <div className='p-5 space-y-2 border border-gray-300 rounded-2xl bg-gray-100 lg:w-[230px]'>
                        <img className='w-10' src={hammer} alt="Cases" />
                        <p className='text-3xl font-semibold text-[#0EA106]'>
                            <span ref={casesRef} />+
                        </p>
                        <p className='text-gray-500'>Cases Initiated</p>
                    </div>

    


                    <div className='p-5 space-y-2 border border-gray-300 rounded-2xl bg-gray-100 lg:w-[230px]'>
                        <img className='w-10' src={Stuff} alt="Staff" />
                        <p className='text-3xl font-semibold text-[#0EA106]'>
                            <span ref={staffRef} />+
                        </p>
                        <p className='text-gray-500'>Total Staffs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;