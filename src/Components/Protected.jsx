import React from 'react';
import { Navigate } from "react-router-dom"
import { 
    UseUserAuth, 
    Dashboard, 
    Login, 
    Registration
} from '@/Components';

export const ProtectedDashboard = () => {
    
    let { user } = UseUserAuth()
    if(!user){
       return  <Navigate to="/login"/>
    }

    return <Dashboard/>
};

export const ProtectedRegistration = () => {
    
    let { user } = UseUserAuth()
    if(!user){
       return  <Navigate to="/login"/>
    }

    return <Registration/>
};


export const ProtectedLogin = () => {
    
    let { user } = UseUserAuth()
    if(user){
       return  <Navigate to="/dashboard"/>
    }

    return <Login/>
};