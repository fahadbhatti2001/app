import React from "react";
import { Link } from "react-router-dom";
import { HeaderLinks } from "./HeaderLinks";

export const Header = () => {

    const linksData = [
        {
            name: "Home", urlLinks: "/"
        },
        {
            name: "Services", urlLinks: "/services"
        },
        {
            name: "About", urlLinks: "/about"
        },
        {
            name: "Contact", urlLinks: "/contact"
        },
    ]

    return (
        <div className="flex justify-between items-center h-[10vh] px-20">
            <div className="">
                <h1 className="font-PoppinsRegular text-2xl">markit</h1>
            </div>
            <div>
                <ul className="flex gap-12">
                    {
                        linksData.map((a, index) =>
                            <HeaderLinks key={index} name={linksData[index].name} url={linksData[index].urlLinks}/>
                        )
                    }
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