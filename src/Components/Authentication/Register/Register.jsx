import { Slide, Zoom } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";

const Register = () => {

    // show password
    const [show, setShow] = useState(false);
    const { createUser, setUser } = useAuth();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('register ');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.image.file;
        const password = form.password.value;
        const user = { name, email, password, photo };
        if (password.length < 6) {
            return toast.error('your password should at least 6 character long');
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Your password should contain a Capital letter')
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Your password should contain a lower letter')
        }
        console.log(user);
        // createUser(email, password)
        //     .then((result) => {
        //         console.log(result.user);
        //         if (result.user) {
        //             setUser(result?.user);
        //             return toast.success('User Created Successfully')
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         return toast.error('Something Wrong reload the page')
        //     })
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen bg-[url(https://i.imgur.com/d2ml9aJ.jpeg)] bg-cover">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center text-slate-700 lg:text-left max-w-xl">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card w-full bg-slate-400/70 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            {/* img */}
                            <div>
                                <label htmlFor='image' className='block text-gray-700 dark:text-gray-200'>
                                    Select Image:
                                </label>
                                <input
                                    className="block w-full px-4 py-2 mt-2 text-violet-700/70 bg-white border border-gray-200 rounded-md dark:bg-indigo-200/30 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring"
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                // {...register("photo", { required: true })}
                                />
                                {/* {errors.photoURL && <span className="text-red-600">Photo is required</span>} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="divider text-black">Or</div>
                        <div className="form-control my-5">
                            <button className="btn bg-green-400 hover:bg-green-800 hover:text-white mx-8 text-xl">
                                <FaGoogle />
                                Goggle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;