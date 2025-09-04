import Login from "./components/login";
import BestPlayer from "./components/bestPlayer";
import BestPlayers from "./components/bestPlayers";
import DeleteRiddle from "./components/deleteRidlle";
import UpdateRiddle from "./components/updateRidlle";
import SwohRiddle from "./components/showAllriddles";
import CreateRiddle from "./components/createRidlle";
import Play from "./components/play";

import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import { useState } from "react";


function App() {
  const navigate = useNavigate();
  const [role ,setRole] =  useState("")
  
  return (
    <>
    <Login set={setRole}></Login>
      <nav className="container-flex">
        <ul>
          <li><button onClick={() => navigate("/login")}>Login</button></li>
          <li><button onClick={() => navigate("/BestPlayer")}>Best Player</button></li>
          <li><button onClick={() => navigate("/BestPlayers")}>Best Players</button></li>
          {role==='admin'&&<li><button onClick={() => navigate("/DeleteRiddle")}>Delete Riddle</button></li>}
          {role==='admin'&&<li><button onClick={() => navigate("/UpdateRiddle")}>Update Riddle</button></li>}
          {role==='admin'&&<li><button onClick={() => navigate("/CreateRiddle")}>Create Riddle</button></li>}
          <li><button onClick={() => navigate("/SwohRiddle")}>Show All Riddles</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/CreateRiddle" element={<CreateRiddle />} />
        <Route path="/SwohRiddle" element={<SwohRiddle />} />
        <Route path="/login" element={<Login />}/>
        <Route path="Play" element={<Play />} />
        <Route path="/BestPlayer" element={<BestPlayer />} />
        <Route path="/BestPlayers" element={<BestPlayers />} />
        <Route path="/DeleteRiddle" element={<DeleteRiddle />} />
        <Route path="/UpdateRiddle" element={<UpdateRiddle />} />
      </Routes>
    </>
  );
}

export default App