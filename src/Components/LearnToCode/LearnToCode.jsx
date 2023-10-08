import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const LearnToCode = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether the animation should only happen once
        });

        AOS.refresh();
    }, [])


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row space-x-2">
                    <img  data-aos="flip-left" src="https://i.ibb.co/RS8Ccxk/big-data-storage-abstract-concept-vector-826551-3596.jpg" className="max-w-sm md:max-w-lg rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-semibold">Become a Data Scientist With Us</h1>
                        
                        <p className='py-6 text-[#808292]'>A professional data scientist is an individual who specializes in collecting, analyzing, and interpreting large sets of data to extract valuable insights and make data-driven decisions. Data scientists use a combination of skills in mathematics, statistics, programming, and domain knowledge to solve complex problems and provide meaningful recommendations to organizations.</p>
                         <button className="btn border-[#08A9E6] bg-white">Read More</button>
                    </div>
                </div>
            </div>


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse space-x-2">
                    <img  data-aos="flip-right" src="https://i.ibb.co/vJYwLGQ/seo-optimization-analyzing-data-investment-business-18660-1599.jpg" className="max-w-sm md:max-w-lg rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-semibold">Learn to code like a professional.</h1>
                        <p className='py-6 text-[#808292]'>That's great to hear that you're a professional programmer! Programming is a valuable skill in today's technology-driven world, and it opens up a wide range of career opportunities</p>
                        <button className="btn border-[#08A9E6] bg-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LearnToCode;