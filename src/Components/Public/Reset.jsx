import React, { useState } from 'react';
import { UseUserAuth, Header, Footer } from '@/Components';
import { useNavigate } from "react-router-dom";
import loginImage from "@/Assets/images/VectorOne.svg"

export const Reset = () => {

    var url_string = location.href
    var url = new URL(url_string);
    var oobCode = url.searchParams.get("oobCode");

    console.log(oobCode)

    const [resetPass , setResetPass] = useState("")
    const { resetPassword } = UseUserAuth()

    const navigate = useNavigate()

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            await resetPassword(resetPass)
            navigate('/login')
        } catch (error) {
            console.log("Error")
        }
    }

    return (
        <>
    
        <div className="grid grid-cols-2 place-content-center h-[90vh] lg:px-20 md:px-12 px-6">
            <div className="lg:col-span-1 col-span-2 flex flex-col justify-center items-center">
                <div className="lg:w-3/4 w-full">
                    <h1 className="font-PoppinsSemiBold text-4xl text-zinc-800 pb-2 lg:text-left text-center">
                        Reset Password
                    </h1>
                    <p className="font-PoppinsRegular text-xs text-zinc-800 pb-2 lg:text-left text-center">
                        Enter your new password
                    </p>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="password" className="font-PoppinsRegular text-sm text-zinc-800 pb-2 pl-1">Password</label>
                        <input onChange={(e) => {setResetPass(e.target.value)}} type="password" id="password" placeholder="Enter your password" className="font-PoppinsRegular text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-0"/>
                        <button type="button" onClick={HandleSubmit} className="font-PoppinsRegular text-base p-2 bg-primary-0 text-white rounded shadow-sm mt-2">
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:flex hidden justify-center items-center">
                <img src={loginImage}/>
            </div>
        </div>

        <Footer/>

    </>
    );
};