import Login from "./components/login";
import BestPlayer from "./components/bestPlayer";
import { BrowserRouter, Routes, Route } from "react-router";
import BestPlayers from "./components/bestPlayers";
import DeleteRiddle from "./components/deleteRidlle";
import UpdateRiddle from "./components/updateRidlle";
import   SwohRiddle from "./components/showAllriddles"
function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/SwohRiddle" element={<SwohRiddle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BestPlayer" element={<BestPlayer />} />
        <Route path="/BestPlayers" element={<BestPlayers />} />
        <Route path="/DeleteRiddle" element={<DeleteRiddle />} />
        <Route path="/UpdateRiddle" element={<UpdateRiddle />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
