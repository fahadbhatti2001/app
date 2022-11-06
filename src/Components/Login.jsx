import React from 'react';
import { Link } from "react-router-dom";
import login from "@/Assets/images/VectorOne.svg"

export const Login = () => {
    return (
        <div className="grid grid-cols-2 place-content-center h-[80vh] px-20">
            <div className="col-span-1 flex flex-col justify-center items-center">
                <div className="w-1/2">
                    <h1 className="font-PoppinsSemiBold text-4xl text-zinc-800 pb-2">
                        Login
                    </h1>
                    <p className="font-PoppinsRegular text-xs text-zinc-800 pb-2">
                        Enter your credentials to access your account
                    </p>
                    <form action="" className="flex flex-col pt-4">
                        <label htmlFor="email" className="font-PoppinsRegular text-sm text-zinc-800 pb-2 pl-1">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="font-PoppinsRegular text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-3"/>
                        <label htmlFor="password" className="font-PoppinsRegular text-sm text-zinc-800 pb-2 pl-1">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className="font-PoppinsRegular text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-3"/>
                        <div className="flex justify-between py-2">
                            <div className="flex items-center ml-1">
                                <input type="checkbox" id="remember"/>
                                <label htmlFor="remember" className="font-PoppinsRegular pl-2 text-xs text-zinc-800">Keep me Login</label>
                            </div>
                            <div className="mr-1">
                                <Link to="/" className="font-PoppinsRegular text-xs text-primary-3">
                                    Forget Password
                                </Link>
                            </div>
                        </div>
                        <input type="submit" value="Login" className="font-PoppinsRegular text-base p-2 bg-primary-3 text-white rounded shadow-sm mt-2"/>
                    </form>
                </div>
            </div>
            <div className="col-span-1">
                <img src={login}/>
            </div>
        </div>
    );
};