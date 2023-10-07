
const DetailsCard = ({service}) => {
    const {image, title, price, detail_description} = service
    return (
        <div className="container mx-auto">
            <div className="card  bg-base-100 shadow-xl rounded-lg">
                <figure className="  ">
                    <img src={image} alt="image" className="h-96 w-full rounded-t-lg" />
                </figure>
                <div className="card-body items-start text-left h-52">
                    <h2 className="card-title">{title}</h2>
                    <p>{detail_description}</p>
                    
                </div>
                <hr />
                    <div className="flex flex-col justify-center items-center px-5 mb-10">
                        <h3 className="my-5 text-xl font-bold">${price}</h3>
                        <button className="btn btn-neutral font-bold">Book Now</button>
                    </div>
            </div>
        </div>
    );
};

export default DetailsCard;