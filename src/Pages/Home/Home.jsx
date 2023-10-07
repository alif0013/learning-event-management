import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsCodeSlash, BsFillImageFill, BsFillBagFill, BsFillSuitHeartFill, BsFillBarChartFill, BsFillPieChartFill, BsFillClipboardPlusFill, BsDatabaseCheck } from 'react-icons/bs';
import CourseCard from './CourseCard';



const Home = () => {

    // loading data
    const courses = useLoaderData()
   

    return (
        <div>
            {/* banner section */}
            <div className="hero min-h-screen bg-[#F5F5F5]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Fx2BzV2/banner-img5.png" className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold leading-normal">The Worlds Leading Distance Learning Provider</h1>
                        <p className="py-6 mb-4 md:text-lg text-[#808292]">Flexible easy to access learning opportunities can bring a significant change in how individuals <br /> prefer to learn! The eDash can offer you to enjoy the beauty of eLearning!</p>
                        <Link to='/register' className="px-7 md:px-8 py-3 rounded bg-[#08A9E6] text-white lg:text-lg font-semibold hover:bg-[#EC272E]">Join For Free</Link>
                    </div>
                </div>
            </div>

            {/* services categories */}
            <div>
                <h1 className='text-center text-5xl mt-16 mb-6 font-semibold'>Services</h1>

                <div className=' md:flex justify-between mt-16'>
                    <div className=''>
                        <h1 className='text-3xl text-center font-semibold md:text-4xl md:text-start lg:text-start'>Top categories</h1>
                        <p className='py-6  text-center mb-4 md:text-lg  md:text-start text-[#808292]'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
                    </div>
                    <div>
                        <Link to='/professionals' className='btn  text-center px-10 py-3 ml-24  bg-white md:bg-white md:px-16 md:justify-center  border-[#08A9E6] hover:bg-[#08A9E6] hover:text-white'>View All Professionals</Link>
                    </div>
                </div>
            </div>

            {/* services category */}
            <div className='my-10'>
                <div className='grid grid-cols-2 px-3 md:grid-cols-4 gap-8 hover:cursor-pointer'>

                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsCodeSlash className='mt-2 text-lg font-semibold'></BsCodeSlash>
                        <h2 className='text-xl md:text-2xl font-semibold'>Development</h2>
                    </div>
                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsFillBarChartFill className='mt-2 text-lg font-semibold'></BsFillBarChartFill>
                        <h2 className='text-xl md:text-2xl font-semibold'>Marketing</h2>
                    </div>
                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsFillPieChartFill className='mt-2 text-lg font-semibold'></BsFillPieChartFill>
                        <h2 className='text-xl md:text-2xl font-semibold'>Art & Design</h2>
                    </div>
                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsFillClipboardPlusFill className='mt-2 text-lg font-semibold'></BsFillClipboardPlusFill>
                        <h2 className='text-xl md:text-2xl font-semibold'>Health</h2>
                    </div>

                </div>

                <div className='grid grid-cols-2 px-3 md:grid-cols-4 gap-8 mt-10 hover:cursor-pointer'>

                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsFillBagFill className='mt-2 text-lg font-semibold'></BsFillBagFill>
                        <h2 className='text-xl md:text-2xl font-semibold'>Business</h2>
                    </div>
                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsDatabaseCheck className='mt-2 text-lg font-semibold'></BsDatabaseCheck>
                        <h2 className='text-xl md:text-2xl font-semibold'>Data Science</h2>
                    </div>
                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsFillSuitHeartFill className='mt-2 text-lg font-semibold'></BsFillSuitHeartFill>
                        <h2 className='text-xl md:text-2xl font-semibold'>Life Style</h2>
                    </div>
                    <div className='flex gap-2 bg-[#F5F5F5] py-4 rounded-sm justify-center hover:bg-[#08A9E6] hover:text-white'>
                        <BsFillImageFill className='mt-2 text-lg font-semibold'></BsFillImageFill>
                        <h2 className='text-xl md:text-2xl font-semibold'>photography</h2>
                    </div>

                </div>

            </div>

            {/* learn to code */}
            {/* <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">Learn to code like a professional.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            {/* Explore top courses */}
            <div>
                <div className='mb-16'>
                    <h1 className='text-5xl pt-10 text-center font-semibold'>Explore top courses</h1>
                    <p className='pt-5 text-[#A6A7B2] text-lg text-center'>Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
                </div>

                <div className='grid pl-5 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        courses.map(course => <CourseCard course={course} key={course.id}></CourseCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;