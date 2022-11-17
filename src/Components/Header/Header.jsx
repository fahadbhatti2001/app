import React from "react";
import { HeaderLinks, LoginButton } from "@/Components";

export const Header = () => {

    return (
        <div className="flex justify-between items-center h-[10vh] w-full fixed px-20 bg-primary-3">
            <h1 className="font-PoppinsItalic text-2xl">markit</h1>
            <HeaderLinks/>
            <LoginButton/>
        </div>
    );
};