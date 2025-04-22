import React from 'react';
import { useLoaderData } from 'react-router';
import Bolg from '../Component/Bolg';

const Blogs = () => {

    const data = useLoaderData();
    


    return (
        <div className='py-5'>

            <div className='text-center'>
            <h1 className='text-4xl py-4 text-center font-semibold'>Blogs</h1>
            <small className='text-center mx-auto'>Lets explore some basic Concept</small>
            </div>

            <div className='mb-16'>
                {
                    data.map(a=><Bolg a={a}></Bolg>)
                }

            </div>


            
            
        </div>
    );
};

export default Blogs;