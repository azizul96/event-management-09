/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../component/Navbar/Navbar";

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto mt-5">
            <div className="relative flex  flex-col rounded-xl   ">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none flex justify-center">
                    <img
                    src="/blog1.png"
                    alt="blog-image"
                    />
                </div>
                <div className="p-6 mb-5">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
                    Top Corporate Event Management Tips
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased mb-10">
                    Corporate event management is about making the most of every event by bringing people together in memorable ways on behalf of a corporation. Corporate event planners take care of every little (and big!) detail from start to finish, to ensure the event delivers the best return on investment for their company.

                    As a result, a career in corporate event management demands that planners be skilled at developing relationships, conducting venue research, negotiating contracts, managing a budget, and event marketing, and typically pays $63,108 per year.

                    Today, we’ll explore how the best corporate planners bring their events to life, revealing some of the best corporate event management tips for successful events.
                    </p>
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
                    Explore the best corporate event management tips
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased mb-10">
                    Corporate event management can challenge the best of us, even on good days, because of the many stakeholders, the constant changes, and all the variables from catering to event sponsorship. Here are a few tips the best corporate planners use to make every event a triumph that delivers ROI.
                    </p>
                    <h4 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
                    Event budget
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased mb-10">The amount of available budget can impact every aspect of corporate event planning, from the choice of venue and speakers to the levels of catering, entertainment, technology, and staffing.

                    Decide if your budget has outgoings only, or will you be able to supplement it with income from exhibitors, sponsors or other forms of external revenue?

                    Has this event happened in the past? If so, use the previous budget to establish a baseline but ensure that inflation and evolving needs are taking into consideration.

                    Figures from past budgets are useful in providing a clearer picture of how much certain suppliers will charge. Use these to ensure you are not being over-charged when you reach out to suppliers for initial quotes.

                    Every event budget, however, needs built-in flexibility. Unanticipated expenditure is common and supplier costs are often provided as estimates, rather than fixed prices, so it’s vital that an overall budget is managed accordingly, and a contingency fund is in place.

                    Once you've sourced supplier costings, make a comprehensive list of all the budget line items in the event lifecycle, including venue hire, AV, food, and beverage, accommodation and travel, speaker fees, staffing costs, marketing and service fees.
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                    <img
                        alt="Alif Alamin"
                        src="https://i.ibb.co/r31zchY/IMG-20220807-135733-996.jpg"
                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                        data-tooltip-target="author-1"
                    />
                    <div
                        data-tooltip="Alif Alamin"
                        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                    >
                        Alif Alamin
                    </div>
                    
                    </div>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    October 08
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;