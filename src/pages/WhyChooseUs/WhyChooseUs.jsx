/* eslint-disable react/no-unescaped-entities */

import { FaAnchor, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className='container mx-auto px-3'>
            <div>
                <h1 className="text-3xl font-bold text-center mt-10 mb-3">WHY CHOOSE US FOR YOUR EVENT?</h1>
                <p className="text-center mb-10">Event That Reflect Values Of Your Company</p>
            </div>
            <div className='md:flex justify-center items-center gap-10'>
                <div className='flex justify-center gap-5 p-5 flex-1'>
                    <div className='bg-gray-600 w-10 h-10 rounded-full flex justify-center items-center'>
                        <p  className='text-white text-center text-xl p-5'><FaAnchor></FaAnchor></p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-3'>ALL KIND OF LOGISTICS AND <br /> RESOURCES SUPPORT</h1>
                        <p>Our team takes care of all logistical aspects, including transportation, setup, and teardown. We manage operations so you can focus on engaging with your audience.</p>
                    </div>
                </div>
                <div className='flex justify-center gap-5 p-5 flex-1'>
                    <div className='bg-gray-600 w-10 h-10 rounded-full flex justify-center items-center'>
                        <p  className='text-white text-center text-xl p-5'><FaUsers></FaUsers></p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold mb-3'>EXPERIENCED EVENT PLANNER AND <br /> MANAGER</h1>
                        <p>When it's about making your Event successful, it's all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;