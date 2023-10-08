import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';


const ProffessionalBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src="https://i.ibb.co/rQY0qkN/women4.png" className="max-w-sm max-h-[550px] rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold text-[#21225F]">
                        Become an instructor</h1>
                    <p className="py-6 text-[#B7B8C1]">Explore all of our courses and pick your suitable ones to enroll and start <br /> learning with us!</p>
                    <button className="btn bg-[#21225F] text-white hover:bg-[#08A9E6]">Start Teaching Today</button>

                    <div className='flex pt-8'>
                        <h1 className='pr-3'>Follow Us On:</h1>
                        <BsFacebook className='mt-1 mr-2'></BsFacebook>
                        <AiOutlineTwitter className='mt-1 mr-2'></AiOutlineTwitter>
                        <BsInstagram className='mt-1 mr-2'></BsInstagram>
                        <AiFillLinkedin className='mt-1 mr-2'></AiFillLinkedin>


                    </div>
               
               
                </div>
            </div>
        </div>
    );
};

export default ProffessionalBanner;