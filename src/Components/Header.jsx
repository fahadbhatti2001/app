import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="flex justify-between items-center h-[10vh] px-20">
            <div className="">
                <h1 className="font-PoppinsRegular text-2xl">markit</h1>
            </div>
            <div>
                <ul className="flex gap-12">
                    <li className="font-PoppinsRegular text-base transition-all hover:text-primary-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-PoppinsRegular text-base transition-all hover:text-primary-3">
                        <Link to="/">Services</Link>
                    </li>
                    <li className="font-PoppinsRegular text-base transition-all hover:text-primary-3">
                        <Link to="/">About</Link>
                    </li>
                    <li className="font-PoppinsRegular text-base transition-all hover:text-primary-3">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="">
                    <Link to="/login" className="font-PoppinsMedium text-base bg-white py-2 px-12 rounded-full shadow-md transition-all hover:bg-primary-3 hover:text-white">
                        Login
                    </Link>
            </div>
        </div>
    );
};