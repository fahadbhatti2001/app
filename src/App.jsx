import React from "react";
import { Header } from "@/Components";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Dashboard, Login } from "@/Components";
import { Footer } from "./Components/Footer";

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
