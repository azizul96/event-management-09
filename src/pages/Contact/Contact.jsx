/* eslint-disable react/no-unescaped-entities */

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../../component/Navbar/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
                <div className="container mx-auto px-3" >
                    <h1 className="text-4xl font-bold text-center mb-5 mt-20">We'd Love To Hear From You</h1>
                    <div className="mt-10 md:flex gap-10">
                        <div className="md:w-2/3 mt-10">
                                <form  className=" mx-auto px-5 py-10 shadow-2xl rounded-lg space-y-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Full name</span>
                                        </label>
                                        <input type="text" placeholder="Enter your full name" className="input input-bordered bg-gray-200" name='name' />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Email</span>
                                        </label>
                                        <input type="text" placeholder="Enter your email address" className="input input-bordered bg-gray-200" name='email' />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Your message</span>
                                            
                                        </label>
                                        <textarea className="textarea textarea-bordered h-32 bg-gray-200" placeholder="Message"></textarea>
                                        
                                    </div>
                                    <div className="form-control mt-6 p-0">
                                        <button type='submit' className="btn btn-neutral">Send Message</button>
                                    </div>
                                </form>
                            

                            
                        </div>
                        <div className="md:w-1/3 mt-20">
                            <div className=''>
                                <h2 className='pl-4 mb-2 font-semibold'>Find Us On</h2>
                                <div className='p-4 '>
                                    <a className="flex items-center gap-2 border rounded-t-md w-full p-4" href='https://www.facebook.com/'> <FaFacebook className='text-2xl '></FaFacebook> Facebook</a>

                                    <a className="flex items-center gap-2 border-x  w-full p-4" href='https://www.twitter.com/'> <FaTwitter className='text-2xl '></FaTwitter> Twitter</a>

                                    <a className="flex items-center gap-2 border rounded-b-md w-full p-4" href='https://www.instagram.com/'> <FaInstagram className='text-2xl '></FaInstagram> Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            
        </div>
    );
};

export default Contact;