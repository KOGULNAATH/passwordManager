import React from "react";
import Navbar from "./nagivation/Navbar";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Todolist from "./components/Todolist";
const App = () => {
  return(
    <div>
      <Router>
        <div>
          <Navbar />
        </div>
        <div style={{ padding: '50px' }}>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/Work" element={<Work />}/>
          <Route path="/todolist" element={<Todolist />}/>
        </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App;