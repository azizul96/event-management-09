import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import Service from "../Service/Service";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Sponsors from "../../component/Sponsors/Sponsors";


const Home = () => {
    const services = useLoaderData()
    
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-10 mb-28 container mx-auto">
                <Sponsors></Sponsors>
            </div>
            
            <div className="container mx-auto px-3  mb-28">
                <h1 className="font-bold text-3xl text-center mb-10">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto container mt-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
                </div>
            </div>
            <div className="my-20">
                <WhyChooseUs></WhyChooseUs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;