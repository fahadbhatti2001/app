import React from 'react';
import login from "@/Assets/images/VectorOne.svg"

export const Login = () => {
    return (
        <div className="grid grid-cols-2 place-content-center h-[80vh] bg-black py-6 px-20">
            <div className="">
                <div className="bg-slate-400">
                    <h1 className="font-PoppinsBold text-2xl">
                        Welcome Back
                    </h1>
                </div>
                <div className="pl-10 bg-slate-400">
                    <img src={login} className="" />
                </div>
            </div>
        </div>
    );
};