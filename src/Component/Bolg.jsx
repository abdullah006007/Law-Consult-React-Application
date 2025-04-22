import React from 'react';

const Bolg = ({ a }) => {
    const { answer, question } = a

    return (
        <div className=''> 
            <div className='py-3'>
                <div className='bg-gray-200 p-5 rounded-2xl'>
                    <h1 className='text-xl font-medium py-1'> {question} </h1>
                    <div className='border-b border-dashed border-gray-400 '></div>
                    <small>Answer</small>
                    <p className='pb-1'> {answer} </p>
                    <div className='border-b border-dashed border-gray-400 '></div>
                </div>

            </div>

        </div>
    );
};

export default Bolg;