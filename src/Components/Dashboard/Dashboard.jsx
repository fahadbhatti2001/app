import React, { useEffect, useState } from 'react';
import { UseUserAuth, Header } from '@/Components';
import { Link } from 'react-router-dom';


export const Dashboard = () => {

    const { logOut, user } = UseUserAuth();

    return (
        <>
            <Header position="static"/>

             <div className="">
                <Link to="/register"> Register </Link>
             </div>

        </>
    );
};