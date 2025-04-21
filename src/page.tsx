import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Pill, Stethoscope, ScanLine, Clock, Shield, User } from "lucide-react"
import React from "react"
import mediCopilotImg from "@/assets/medi-copilot-app.png" // Adjust the path as necessary

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Personal Medicine Inventory Manager</h1>
              <p className="text-xl mb-6">
                Efficiently manage your medications with OCR-based data extraction and AI-powered insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to ="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to ="/ocr">Learn About OCR</Link>
                </Button>
              </div>
            </div>
          
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Optionally remove this animated circle background if distracting */}
                {/* <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 animate-pulse"></div> */}
                
                <img
                  src={mediCopilotImg}
                  alt="Medi-Copilot App"
                  className="relative z-10 rounded-lg shadow-lg object-cover w-full h-full"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                    e.currentTarget.onerror = null
                  }}
                />
                
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow z-20">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
                <div className="absolute -top-4 -left-4 bg-white p-2 rounded-lg shadow z-20">
                  <ScanLine className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Management Made Simple</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Pill className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medicine Tracking</h3>
              <p className="text-gray-600">
                Keep track of all your medications in one place. Never miss a dose or expiration date again.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ScanLine className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">OCR Technology</h3>
              <p className="text-gray-600">
                Scan medicine labels to automatically extract and log details without manual entry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Get comprehensive information on usage, side effects, and precautions for your medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Medi-Copilot Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Scan Medicine</h3>
              <p className="text-gray-600">Use OCR to scan and extract information from medicine labels</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Organize Inventory</h3>
              <p className="text-gray-600">Categorize as prescribed or non-prescribed medications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Reminders</h3>
              <p className="text-gray-600">Receive alerts for expiring medicines and dosage schedules</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Insights</h3>
              <p className="text-gray-600">View AI-generated information about your medications</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to ="/add-medicine" className="flex items-center gap-2">
                Start Adding Medicines <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-blue-50" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Medi-Copilot</h2>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              Medi-Copilot is a personal medicine inventory manager designed to address common challenges in medication
              tracking and usage. Our mission is to help users efficiently manage their medicines by leveraging
              cutting-edge technology.
            </p>
            <p className="text-gray-700 mb-4">
              Using OCR-based data extraction and explainable AI for necessity prediction, Medi-Copilot provides a
              comprehensive solution for medication management. Our app helps minimize medicine wastage, prevents
              misuse, and enhances accessibility.
            </p>
            <p className="text-gray-700 mb-4">
              Built with React Native, Flask/FastAPI, and a MongoDB backend, Medi-Copilot integrates LLM APIs (Gemini)
              for medicine insights. Our machine learning model ranks essential medicines for travel or emergencies
              based on user history and medical importance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <div className="flex items-center gap-2">
                <Clock className="text-blue-600" size={20} />
                <span>Launched in 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-blue-600" size={20} />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Future Scope of Medi-Copilot</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Expanding Beyond Medicine Management 🚀
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <User className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Healing</h3>
              <p className="text-gray-700 mb-3">
                Users with similar health conditions can connect, share experiences, and support each other.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    AI-driven chat forums for discussing medicine effectiveness, side effects, and lifestyle tips.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Records Integration</h3>
              <p className="text-gray-700 mb-3">
                Syncing with Electronic Health Records (EHR) to provide tailored medicine suggestions based on medical
                history.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>AI-driven insights on medication impact, allergies, and alternative treatment options.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice & AI Chatbot</h3>
              <p className="text-gray-700 mb-3">
                Users can interact via voice commands to log medicines, check schedules, or ask about dosage and side
                effects.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>AI chatbot can analyze symptoms and suggest medicine adjustments (in sync with doctors).</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Predictive Healthcare</h3>
              <p className="text-gray-700 mb-3">
                AI predicts future medicine needs based on usage patterns and health trends.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Personalized health monitoring alerts for preventive care and timely refills.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Health Management</h3>
              <p className="text-gray-700 mb-3">
                Head of the family can track unregistered members' medicine usage, ensuring elderly or dependent
                individuals take medications on time.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    Emergency alerts for missed doses, prescription refills, or potential medication conflicts.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-md text-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">What's Next?</h3>
              <p className="text-white/90 mb-3">
                We're constantly innovating and expanding our platform to provide the best healthcare management
                experience.
              </p>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to ="/signup">Join Our Beta Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to manage your medications smarter?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are efficiently tracking their medicines with Medi-Copilot
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link to ="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>

      
    </div>
  )
}

