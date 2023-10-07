import React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { BiDollar } from 'react-icons/bi';


const CourseInfo = ({ course }) => {

    const { id, img, title, description, published_date, price } = course;



    return (
        <div className="relative mx-auto flex w-full mt-10 max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 ">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={img}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    startups
                </h6>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {description}
                </p>

                <div className='flex justify-between pb-3'>
                    <div className='flex gap-2 pb-2'>
                        <IoIosTimer className='mt-1'></IoIosTimer>
                        <p className='font-semibold'>Date: {published_date}</p>
                    </div>

                    <div className='flex gap-2 pb-2'>
                        <BiDollar className='mt-1'></BiDollar>
                        <p className='font-semibold'>Price: {price}</p>
                    </div>
                </div>
                <a className="inline-block" href="#">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-lg font-semibold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Purches
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default CourseInfo;