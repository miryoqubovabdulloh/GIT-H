import { Route, Routes } from "react-router-dom";
import { lazy } from "react"
import Navbar from "./components/Navbar";


const Registor = lazy(() => import("./components/Registor"));
const Home = lazy(() => import("./components/Home"));
const Index = lazy(() => import("./pages/index/Index"));
const Card = lazy(() => import("./components/Card"));



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="index" element={<Index />} />
          <Route path="card" element={<Card />} />
          <Route path="registor" element={<Registor />} />
        </Routes>    
    </div>
  )
}

export default App
