import { Link } from "react-router-dom"
import { Pill, Mail, Phone, MapPin } from "lucide-react"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Pill className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">Medi-Copilot</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your personal medicine inventory manager powered by OCR and AI technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to ="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to ="/add-medicine" className="text-gray-400 hover:text-white transition-colors">
                  Add Medicine
                </Link>
              </li>
              <li>
                <Link to ="/add-treatment" className="text-gray-400 hover:text-white transition-colors">
                  Add Treatment
                </Link>
              </li>
              <li>
                <Link to ="/ocr" className="text-gray-400 hover:text-white transition-colors">
                  OCR
                </Link>
              </li>
              <li>
                <Link to ="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to ="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to ="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to ="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:contact@medi-copilot.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@medi-copilot.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-gray-400">123 Health Avenue, Medical District, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Medi-Copilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

