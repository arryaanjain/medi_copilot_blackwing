// src/layouts/RootLayout.tsx
import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "@/globals.css" // Or "../styles/globals.css" based on your folder structure

// Inter font: Ensure you've linked Google Fonts in index.html
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Helmet>
        <title>Medi-Copilot - Personal Medicine Inventory Manager</title>
        <meta
          name="description"
          content="Efficiently manage your medications with OCR-based data extraction and AI-powered insights"
        />
        <html lang="en" />
      </Helmet>

      <div className="font-inter gradient-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default RootLayout
