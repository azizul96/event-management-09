
import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {id, image, title, description, price} = service

    return (
        <div >
            <div className="card  bg-base-100 shadow-xl rounded-lg">
                <figure className="  ">
                    <img src={image} alt="image" className="h-60 w-full rounded-t-lg" />
                </figure>
                <div className="card-body items-start text-left h-48 bg bg-gradient-to-b from-orange-100 ...">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p>{description}</p>
                    
                </div>
                <hr />
                    <div className="flex justify-between items-center px-5">
                        <h3 className="my-5 text-xl font-bold">${price}</h3>
                        <Link to={`/service/${id}`}>
                            <button className="btn btn-sm btn-neutral font-bold">View Details</button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default Service;