import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar";
const Home=lazy(()=>import("./components/Home")) 
const Index=lazy(()=>import("./pages/index/Index"))
const Card=lazy(()=>import( "./components/Card"))



function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="index" element={<Index />} />
        <Route path="card" element={<Card />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
