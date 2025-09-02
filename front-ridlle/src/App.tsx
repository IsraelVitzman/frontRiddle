import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
