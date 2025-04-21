import React from 'react';
import Hero from '../Component/Hero';
import Body from '../Component/Body';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Body data= {data}></Body>
            
        </div>
    );
};

export default Home;