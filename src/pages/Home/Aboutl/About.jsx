import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mb-24">
                <div className="hero-content flex-col lg:flex-row relative">
                    <div className='w-1/2 relative'>
                        <img src={person} className="max-w-sm rounded-lg shadow-2xl " />
                        <img src={parts} className="w-1/2 shadow-2xl absolute left-44 top-32 rounded-xl border-8 border-white" />
                    </div>
                    <div className='w-1/2 space-y-5'>
                        <h2 className='text-[#FF3811] text-lg font-semibold'>About Us</h2>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        </p>
                        <button className="btn btn-[#FF3811] bg-[#FF3811]">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;