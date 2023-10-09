import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Service from "../Service/Service";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Sponsors from "../../component/Sponsors/Sponsors";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Home = () => {
    const services = useLoaderData()


    useEffect(()=>{
        Aos.init()
        Aos.refresh();
    },[])
    
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="3000">
                <Banner></Banner>
            </div>
            <div className="mt-10 mb-28 container mx-auto">
                <Sponsors></Sponsors>
            </div>
            
            <div className="container mx-auto px-3  mb-28" 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000">
                <h1 className="font-bold text-3xl text-center mb-10">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto container mt-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
                </div>
            </div>
            <div className="my-20" data-aos ="fade-up" data-aos-easing="linear"
            data-aos-duration="3000">
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="3000">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;