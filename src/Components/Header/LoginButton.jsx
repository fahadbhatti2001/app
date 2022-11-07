import React from 'react';
import { Link } from 'react-router-dom';

export const LoginButton = () => {
    return (
        <Link to="/login" className="font-PoppinsMedium text-base bg-white py-2 px-12 rounded-full shadow-md transition-all hover:bg-primary-3 hover:text-white">
            Login
        </Link>
    );
};