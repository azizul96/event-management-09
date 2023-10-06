import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";


const Home = () => {
    const services = useLoaderData()
    console.log(services);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                {
                    
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;