

const Banner = () => {

    return (
        <div className=" bg-emerald-200">
            <div className="hero h-[60vh]" style={{backgroundImage: 'url(/2.jpeg)'}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Your Event, <br /> Our Passion</h1>
                <p className="mb-5 font-semibold">Welcome To Corporate Meet</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;