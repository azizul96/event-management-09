import Navbar from "../../component/Navbar/Navbar";

const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto px-3 mt-5">
                <h1 className="font-bold text-2xl text-gray-600 text-center mb-5">Event Vanue <span className="font-bold text-3xl text-gray-800">Gallery</span></h1>
                <hr />
                <div className=" my-10 flex flex-col md:flex-row justify-center items-center gap-2">
                    <div className=" grid gap-2 flex-1">
                        <img className="w-full h-52 p-2 " src="https://i.ibb.co/R4jQHVn/CS.jpg" alt="" />
                        <img className="w-full h-52 p-2 " src="https://i.ibb.co/nDrrbwn/launch.webp" alt="" />
                        <img className="w-full h-52 p-2 " src="https://i.ibb.co/DwFN8LL/Team-Building.jpg" alt="" />
                    </div>
                    <div className=" grid gap-2 flex-1">
                        <img className="w-full h-56 p-2 " src="https://i.ibb.co/2t5yRrS/Tradeshow.jpg" alt="" />
                        <img className="w-full h-56 p-2 " src="https://i.ibb.co/rmhbGNq/Exi.jpg" alt="" />
                        <img className="w-full h-56 p-2 " src="https://i.ibb.co/nkSTSF6/1.webp" alt="" />
                    </div>
                    <div className=" grid gap-2 flex-1">
                        <img className="w-full h-52 p-2 " src="https://i.ibb.co/F4xGzFj/meeting.jpg" alt="" />
                        <img className="w-full h-52 p-2 " src="https://i.ibb.co/QCx1pNt/AC.jpg" alt="" />
                        <img className="w-full h-52 p-2 " src="https://i.ibb.co/J5dKGVx/AC2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;