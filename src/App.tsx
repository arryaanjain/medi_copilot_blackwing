// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import Home from "@/page" // Assuming this is your default landing page
import AddTreatment from "@/add-treatment/page"
import AppMedicine from "@/app-medicine/page"
import Login from "@/login/page"
import Signup from "@/signup/page"
import OCR from "@/ocr/page"

import "./globals.css"
import React from "react"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <>
    <Router>
      <div className="gradient-background">
        <Navbar />
        <main className="min-h-screen">
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-treatment" element={<AddTreatment />} />
              <Route path="/add-medicine" element={<AppMedicine />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/ocr" element={<OCR />} />
              {/* Add 404 route if needed */}
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
