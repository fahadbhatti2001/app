import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="flex justify-between items-center py-4 px-20 bg-zinc-400">
            <div className="Logo ">
                <h1 className="text-2xl ">
                    Logo
                </h1>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="">
                        <Link to='/'>Services</Link>
                    </li>
                    <li className="">
                        <Link to='/'>About</Link>
                    </li>
                    <li className="">
                        <Link to='/'>Contact</Link>
                    </li>
                    <li className="">
                        <Link to='/'>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};