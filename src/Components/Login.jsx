import React from 'react';
import login from "@/Assets/images/VectorOne.svg"

export const Login = () => {
    return (
        <div className="grid grid-cols-2 place-content-center h-[80vh] px-20">
            <div className="col-span-1">
                <img src={login}/>
            </div>
            <div className="col-span-1 bg-slate-300 px-12 flex flex-col justify-center">
                <h1 className="font-PoppinsBold text-4xl text-black">
                    Login
                </h1>
                <h1 className="font-PoppinsBold text-4xl text-black">
                    Login
                </h1>
            </div>
        </div>
    );
};