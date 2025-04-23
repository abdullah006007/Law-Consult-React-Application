import React from 'react';

import heroImg from "../assets/banner-img-1.png"

const Hero = () => {
    return (
        <div className='py-3'>
            <div
                className="hero max-w-screen md:min-h-[550px]"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-full">
                        
                        <p className="mb-5 md:mb-12 md:text-4xl font-semibold">
                        It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally
                        </p>

                        <small className='text-gray-500 mb-24 -'>Our platform connects you with verified, experienced lawyer across various specialties — all at your convenience. Whether it's a <br />
                         urgent consultation, book appointments in minutes and receive quality service trust.</small>
                       
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero