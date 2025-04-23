import React, { useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';

const Body = ({ data }) => {
    const [showAll, setShowAll] = useState(false);
    const [displayData, setDisplayData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            if (showAll) {
                setDisplayData(data);
            } else {
                setDisplayData(data.slice(0, 6));
            }
            setIsLoading(false);
        }, 500); 

        return () => clearTimeout(timeout);
    }, [data, showAll]);

    return (
        <div className='py-20'>
            <div className='text-center max-w-screen'>
                <h1 className='font-bold text-3xl'>Our Best Lawyers</h1>
                <small className='text-gray-500 mb-24'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />
                    routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </small>
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center py-5 ">
                   <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-16 pb-7 max-w-screen'>
                    {
                        displayData.map(person => (
                            <React.Suspense
                                key={person.id}
                                fallback={
                                    <div className="flex justify-center items-center py-5 ">
                                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                                    </div>
                                }
                            >
                                <LawyerCard person={person} />
                            </React.Suspense>
                        ))
                    }
                </div>
            )}




            <div className='flex max-w-screen justify-center mt-5'>
                <button
                    onClick={() => {
                        setShowAll(!showAll);
                        if (showAll) ;
                    }}
                    className='btn px-4 py-1 rounded-4xl text-white bg-[#0EA106] text-center'
                >
                    {showAll ? 'Show Less' : 'Show All Lawyer'}
                </button>
            </div>
        </div>
    );
};

export default Body;
