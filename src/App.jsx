import React from "react";
import { Routes, Route } from "react-router-dom";
import { 
  Home, 
  UserAuthContextProvider, 
  ProtectedDashboard, 
  ProtectedLogin,
  ProtectedRegistration,
} from "@/Components";

export const App = () => {
  return(
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<ProtectedLogin/>}/>
          <Route path="/dashboard" element={<ProtectedDashboard/>}/>
          <Route path="/register" element={<ProtectedRegistration/>}/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
};
