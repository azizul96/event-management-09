import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";



const ServiceDetails = () => {
    const [service, setService] = useState([])
    const {id} = useParams()
    const services = useLoaderData()
    

    useEffect(()=>{
        const findService = services.find(item => item.id == id);
        setService(findService)
    },[id, services])


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <DetailsCard service={service}></DetailsCard>
            </div>
        </div>
    );
};

export default ServiceDetails;