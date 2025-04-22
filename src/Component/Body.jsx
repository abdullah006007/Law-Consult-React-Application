import React, { Suspense, useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';

const Body = ({ data }) => {

    const [showAll, setShowAll] = useState(false)
    const [displayData, setDisplayData] = useState([])



    useEffect(()=>{
        if(showAll){
            setDisplayData(data)
        }
        else{
            setDisplayData(data.slice(0, 6))
        }
    },[data, showAll])



    return (
        <div className='py-20'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Our Best Lawyers</h1>
                <small className='text-gray-500 mb-24'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />
                    routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</small>


            </div>

           
           <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    displayData.map(person => <LawyerCard key={person.id} person={person} ></LawyerCard>)
                }
            </div>




            {/* button */}


            <div className='flex justify-center mt-5'>
            <button onClick={()=>{setShowAll(!showAll)
            if(showAll) window.scrollTo(0, 650)}


            } className='btn px-4 py-1 rounded-4xl text-white bg-[#0EA106] text-center'>

                
                {showAll?'Show Less':'Show All Lawyer'} 
                
                
                </button>
            </div>
          

        </div>
    );
};

export default Body;