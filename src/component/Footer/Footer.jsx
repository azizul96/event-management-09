import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-gray-300 mt-10">
            <footer className="footer justify-between p-10  text-neutral-content container mx-auto">
                <aside>
                    <img className="w-14 " src="/logo.png" alt="" />
                    <p className="text-gray-800 text-lg">Corporate Meet.<br/>Providing reliable service since 2020</p>
                </aside> 
                <nav>
                    <header className="footer-title text-black text-2xl">Social</header> 
                    <div className="grid grid-flow-col gap-4">
                    <a className="text-black text-3xl" href="https://twitter.com/home"><FaTwitter></FaTwitter></a> 
                    <a className="text-black text-3xl" href="https://www.youtube.com/"><FaYoutube></FaYoutube></a> 
                    <a className="text-black text-3xl" href="https://www.facebook.com/"><FaFacebookF></FaFacebookF></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;