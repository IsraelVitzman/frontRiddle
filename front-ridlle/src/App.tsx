import Login from "./components/login";
import BestPlayer from "./components/bestPlayer";
import BestPlayers from "./components/bestPlayers";
import DeleteRiddle from "./components/deleteRidlle";
import UpdateRiddle from "./components/updateRidlle";
import SwohRiddle from "./components/showAllriddles";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>שלום</h1>
      
      <nav>
        <ul>
          <li><Link to="/SwohRiddle">Show All Riddles</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/BestPlayer">Best Player</Link></li>
          <li><Link to="/BestPlayers">Best Players</Link></li>
          <li><Link to="/DeleteRiddle">Delete Riddle</Link></li>
          <li><Link to="/UpdateRiddle">Update Riddle</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/SwohRiddle" element={<SwohRiddle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BestPlayer" element={<BestPlayer />} />
        <Route path="/BestPlayers" element={<BestPlayers />} />
        <Route path="/DeleteRiddle" element={<DeleteRiddle />} />
        <Route path="/UpdateRiddle" element={<UpdateRiddle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
