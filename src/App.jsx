import React from "react";
import { Header } from "@/Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "@/Components";

export const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
