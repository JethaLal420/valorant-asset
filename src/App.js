
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Agents from './pages/agent/agents'
import Navbar from './pages/navbar'
import Home from "./pages/home";
import Weapons from './pages/weapon/weapons'

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/agents" element={<Agents />} />
          <Route path="/home" element={<Home />} />
          <Route path='/weapons' element={<Weapons />} />
        </Routes>
      </BrowserRouter>
    </>

    // <>
    // <Home />
    // </>
  )
}

export default App;
