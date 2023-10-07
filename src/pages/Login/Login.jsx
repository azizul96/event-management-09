import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import Navbar from "../../component/Navbar/Navbar";


const Login = () => {
    const {emailLogin} = useContext(AuthContext)
    const navigate = useNavigate(null)

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        emailLogin(email,password)
        .then((result) =>{
            console.log(result.user);
            toast.success('Login successfully');
            navigate("/")
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Make sure your email and password is correct.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Your password" className="input input-bordered" name='password' />
                                
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/registration" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            {/* <SocialLogin /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;