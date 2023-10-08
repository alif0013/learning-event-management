import React from 'react';
import ProffessionalBanner from './ProffessionalBanner';
import TeacherCard from '../../Components/TeacherCard/TeacherCard';

const Professionals = () => {
    return (
        <div>
            <ProffessionalBanner></ProffessionalBanner>
            <div>
                <h1 className='text-5xl py-20 font-semibold text-center'>Meet professionals</h1>
            </div>

            
                <TeacherCard></TeacherCard>
           
        </div>
    );
};

export default Professionals;
