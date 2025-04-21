"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Pill } from "lucide-react"
import React from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to ="/" className="flex items-center gap-2">
            <Pill className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">Medi-Copilot</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to ="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to ="/add-medicine" className="text-gray-700 hover:text-blue-600 font-medium">
              Add Medicine
            </Link>
            <Link to ="/add-treatment" className="text-gray-700 hover:text-blue-600 font-medium">
              Add Treatment
            </Link>
            <Link to ="/ocr" className="text-gray-700 hover:text-blue-600 font-medium">
              OCR
            </Link>
            <Link to ="/#about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="outline">
              <Link to ="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to ="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to ="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to ="/add-medicine"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Medicine
              </Link>
              <Link
                to ="/add-treatment"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Treatment
              </Link>
              <Link
                to ="/ocr"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                OCR
              </Link>
              <Link
                to ="/#about"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button asChild variant="outline">
                  <Link to ="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link to ="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

