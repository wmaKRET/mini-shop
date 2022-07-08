import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route exact path="/" element={<MainPage />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
