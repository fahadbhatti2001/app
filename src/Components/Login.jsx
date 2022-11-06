import React from 'react';
import login from "@/Assets/images/VectorOne.svg"

export const Login = () => {
    return (
        <div className="grid grid-cols-2 place-content-center h-[80vh] px-20">
            <div className="col-span-1">
                <img src={login}/>
            </div>
            <div className="col-span-1 bg-slate-300 flex flex-col justify-center items-center
            ">
                <div className="w-1/2">
                    <h1 className="font-PoppinsBold text-4xl text-black pb-2">
                        Login
                    </h1>
                    <p className="font-PoppinsRegular text-base text-black pb-2">
                        Fill out your details
                    </p>
                    <form action="" className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                    </form>
                </div>
            </div>
        </div>
    );
};