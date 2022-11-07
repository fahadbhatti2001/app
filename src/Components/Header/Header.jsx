import React from "react";
import { HeaderLinks, LoginButton } from "@/Components";

export const Header = () => {

    return (
        <div className="flex justify-between items-center h-[10vh] px-20">
            <h1 className="font-PoppinsRegular text-2xl">markit</h1>
            <HeaderLinks/>
            <LoginButton/>
        </div>
    );
};