import React from "react"
import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import Cart from "./pages/Cart"
import "./scss/app.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route exact path="/" element={<MainPage />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
    </>
  )
}

export default App
