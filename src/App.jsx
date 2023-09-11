import React from "react"
import Register from "./Pages/Register"
import { Route, Routes } from "react-router-dom"
import Log from "./Pages/Log"
function App() {

  return (
   <>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Log/>}></Route>
    </Routes>
   </>
  )
}

export default App
