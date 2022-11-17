import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Home, Login, Register, Header, Footer } from "@/Components";

export const App = () => {
  return(
    <div className="App">
      <HashRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
};
