import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <div><Toaster/></div>
        </div>
    );
};

export default Layout;