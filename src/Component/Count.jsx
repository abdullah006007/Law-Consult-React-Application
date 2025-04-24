import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import successDog from '../assets/success-doctor.png';
import starImg from '../assets/success-review.png';
import Stuff from '../assets/success-staffs.png';
import hammer from '../assets/success-patients.png';

const StatBox = ({ img, alt, end, label }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className='p-5 space-y-2 border border-gray-300 rounded-2xl bg-gray-100 lg:w-[230px]'>
            <img className='w-10' src={img} alt={alt} />
            <p className='text-3xl font-semibold text-[#0EA106]'>
                {inView ? <CountUp start={0} end={end} duration={3} /> : 0}+
            </p>
            <p className='text-gray-500'>{label}</p>
        </div>
    );
};

const Count = () => {
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
                    <StatBox img={successDog} alt="Lawyers" end={199} label="Total Lawyers" />
                    <StatBox img={starImg} alt="Reviews" end={467} label="Total Reviews" />
                    <StatBox img={hammer} alt="Cases" end={1990} label="Cases Initiated" />
                    <StatBox img={Stuff} alt="Staff" end={300} label="Total Staffs" />
                </div>
            </div>
        </div>
    );
};

export default Count;