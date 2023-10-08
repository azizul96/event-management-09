import Marquee from "react-fast-marquee";

const Sponsors = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-3xl mb-10">Our Partners</h2>
            <Marquee>
            <div className="flex justify-center items-center gap-10">
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/TYcNkDt/drink2.png" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/P67JDSt/drink1.jpg" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/80jS9Lf/transport.png" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/7NGB2gp/light3.png" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/jZyK16F/light2.jpg" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/N20T8sS/light1.png" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/C6jygnT/media2.jpg" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/KWFhFMc/media.png" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/Z6GQCFy/food3.png" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/4sfSxHd/food2.jpg" alt="" />
                <img className="w-28 h-24 rounded-full"  src="https://i.ibb.co/kHW1vRS/food1.png" alt="" />
                <img className="w-28 h-24 rounded-full mr-10"  src="https://i.ibb.co/28tXgjQ/vanue.webp" alt="" />
            </div>
            </Marquee>
        </div>
    );
};

export default Sponsors;