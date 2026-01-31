import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./layout/HomeLayout"
import Home from "./pages/Home"
import Proyectos from "./pages/Proyectos"
import Contactame from "./pages/Contactame"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="proyectos" element={<Proyectos/>}/>
            <Route path="contactame" element={<Contactame/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
