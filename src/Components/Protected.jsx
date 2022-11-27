import React from 'react';
import { Navigate } from "react-router-dom"
import { UseUserAuth, Dashboard, Login } from '@/Components';

export const ProtectedDashboard = ({childern}) => {
    
    let { user } = UseUserAuth()
    if(!user){
       return  <Navigate to="/login"/>
    }

    return <Dashboard/>
};

export const ProtectedLogin = ({childern}) => {
    
    let { user } = UseUserAuth()
    if(user){
       return  <Navigate to="/dashboard"/>
    }

    return <Login/>
};