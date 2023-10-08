import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether the animation should only happen once
        });

        AOS.refresh();
    }, [])





    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Qpr9JKG/about-bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">We share knowledge with the world</h1>
                        <p className="mb-5 text-[#dadce5]">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>

                    </div>
                </div>
            </div>

            {/* learn to code component copy */}
            <div>
                <div className='mt-10'>
                    <h1 data-aos="zoom-in" className='text-4xl pt-10 text-center font-semibold'>Changing learning for the better</h1>
                    <p className='pt-5 text-[#A6A7B2] text-lg text-center'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
                </div>

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row space-x-2">
                        <img data-aos="flip-left" src="https://i.ibb.co/Wv4zM7Q/about2.jpg" className="max-w-sm md:max-w-lg rounded-lg" />
                        <div>
                            <h1 className="text-5xl font-semibold">Learn in Your Own Pace</h1>

                            <p className='py-6 text-[#808292]'>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                            <button className="btn border-[#08A9E6] bg-white">Read More</button>
                        </div>
                    </div>
                </div>


                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse space-x-2">
                        <img data-aos="flip-left" src="https://i.ibb.co/RNCDGp1/about1.jpg" className="max-w-sm md:max-w-lg rounded-lg" />
                        <div>
                            <h1 className="text-5xl font-semibold">Learn to code like a professional.</h1>
                            <p className='py-6 text-[#808292]'>That's great to hear that you're a professional programmer! Programming is a valuable skill in today's technology-driven world, and it opens up a wide range of career opportunities</p>
                            <button className="btn border-[#08A9E6] bg-white">Read More</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default About;