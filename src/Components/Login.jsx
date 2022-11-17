import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/FirebaseConfig";
import loginImage from "@/Assets/images/VectorOne.svg"

export const Login = () => {
    
    const [loginEmail , setloginEmail] = useState("")
    const [loginPassword , setloginPassword] = useState("")
  
    const login = async () => {
  
      try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(user)
      } 
      catch (error) {
        console.log("Error")
      }
  
    }

    return (
        <div className="grid grid-cols-2 place-content-center h-[90vh] lg:px-20 md:px-12 px-6">
            <div className="lg:col-span-1 col-span-2 flex flex-col justify-center items-center">
                <div className="lg:w-3/4 w-full">
                    <h1 className="font-PoppinsSemiBold text-4xl text-zinc-800 pb-2 lg:text-left text-center">
                        Login
                    </h1>
                    <p className="font-PoppinsRegular text-xs text-zinc-800 pb-2 lg:text-left text-center">
                        Enter your credentials to access your account
                    </p>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="email" className="font-PoppinsRegular text-sm text-zinc-800 pb-2 pl-1">Email</label>
                        <input onChange={(e) => {setloginEmail(e.target.value)}} type="email" id="email" placeholder="Enter your email" className="font-PoppinsRegular text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-0"/>
                        <label htmlFor="password" className="font-PoppinsRegular text-sm text-zinc-800 pb-2 pl-1">Password</label>
                        <input onChange={(e) => {setloginPassword(e.target.value)}} type="password" id="password" placeholder="Enter your password" className="font-PoppinsRegular text-base p-2 border border-gray-300 rounded shadow-sm mb-4 placeholder:text-xs placeholder:text-zinc-400 focus:outline-primary-0"/>
                        <div className="flex justify-between py-2">
                            <div className="flex items-center ml-1">
                                <input type="checkbox" id="remember"/>
                                <label htmlFor="remember" className="font-PoppinsRegular pl-2 text-xs text-zinc-800">Keep me Login</label>
                            </div>
                            <div className="mr-1">
                                <Link to="/" className="font-PoppinsRegular text-xs text-primary-0">
                                    Forget Password
                                </Link>
                            </div>
                        </div>
                        <button onClick={login} type="button" className="font-PoppinsRegular text-base p-2 bg-primary-0 text-white rounded shadow-sm mt-2">Login</button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:flex hidden justify-center items-center">
                <img src={loginImage}/>
            </div>
        </div>
    );
};