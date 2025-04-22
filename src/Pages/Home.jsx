import React, { Suspense } from 'react';
import Hero from '../Component/Hero';
import Body from '../Component/Body';
import { useLoaderData } from 'react-router';
import Count from '../Component/Count';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Suspense fallback= {<span className="loading loading-infinity loading-lg"></span>}>
            <Body data= {data}></Body>
            </Suspense>
            <Count></Count>
            
        </div>
    );
};

export default Home;