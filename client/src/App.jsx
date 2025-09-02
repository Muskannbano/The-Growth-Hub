import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import {Logout} from './pages/Logout'
import Login from './pages/Login'
import {Navbar} from './components/Navbar'
import { Error } from './pages/Error'
import Footer from './components/Footer/Footer'

const App = () => {
  
  return <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  </>
}

export default App
