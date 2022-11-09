import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Dashboard, Login, Header, Footer } from "@/Components";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/FirebaseConfig";

export const App = () => {
  return(
    <div className="App">
      <HashRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
};
