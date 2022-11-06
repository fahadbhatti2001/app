import React from "react";
import { Header } from "@/Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "@/Components";
import { Footer } from "./Components/Footer";

export const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
};
