import React, { useState } from "react";
import { LoginButton, UseUserAuth, ProfileButton } from "@/Components";


export const Header = () => {

    let {user} = UseUserAuth()

    return (
        <div className="flex justify-between items-center h-[10vh] w-full px-20 bg-primary-3">
            <h1 className="font-PoppinsItalic text-2xl">markit</h1>
            
            {
                user 
                ? 
                <ProfileButton/>
                : 
                <LoginButton/>
            }
            
        </div>
    );
};