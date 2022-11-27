import React, { useState } from 'react';
import Profile from "@/Assets/images/profile.png"
import Logout from "@/Assets/images/LogOut.svg"
import { UseUserAuth } from '@/Components'

export const ProfileButton = () => {

    let { user, logOut } = UseUserAuth()

    let [ panel, setPanel ] = useState(false)

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <div className="relative flex items-center">
            <button onClick={() => setPanel(!panel)} className="mx-4" type="button">
                <img src={Profile} className="object-cover w-10 h-10 rounded-full bg-black" />
            </button>
            {
                panel ?   
                <div className="z-10 xl:w-[24vw] lg:w-[28vw] md:w-[32vw] sm:w-[40vw] w-[80vw] rounded-lg inline-block bg-white shadow absolute right-0 top-12">
                    <div className="flex items-center justify-between gap-4 p-4 border-b border-b-primary-5">
                    <div className="flex items-center gap-4">
                        <img src={Profile} className="object-cover w-12 h-12 rounded-full" />
                        <div className="text-left">
                        <h1 className="font-PoppinsMedium text-primary-4 text-base">
                            Admin
                        </h1>
                        <p className="font-PoppinsRegular text-primary-4 text-xs">
                            {user && user.email}
                        </p>
                        </div>
                    </div>
                    <button onClick={handleLogout} type="button">
                        <img src={Logout} className="w-5 h-5" />
                    </button>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
};
