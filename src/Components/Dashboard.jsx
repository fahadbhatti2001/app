import React from 'react';
import { UseUserAuth, Header } from '@/Components';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {

    const { logOut, user } = UseUserAuth();

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <>

            <Header/>

            <h1 className="">
            {user && user.email}
            </h1>
            <button onClick={handleLogout}>
                Dashboard
            </button>
        </>
    );
};