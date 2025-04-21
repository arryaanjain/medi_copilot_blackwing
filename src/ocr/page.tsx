import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScanLine, Upload, ArrowRight, Check, AlertCircle } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

export default function OcrPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">OCR Medicine Scanner</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scan your medicine labels and prescriptions to automatically extract information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>
                Our OCR technology makes adding medicines to your inventory quick and easy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Take a Clear Photo</h3>
                    <p className="text-gray-600 text-sm">
                      Capture a clear image of your medicine label or prescription
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Upload the Image</h3>
                    <p className="text-gray-600 text-sm">Upload the photo to our OCR scanner</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Automatic Data Extraction</h3>
                    <p className="text-gray-600 text-sm">
                      Our OCR technology extracts medicine name, dosage, expiry date, and other details
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Review and Save</h3>
                    <p className="text-gray-600 text-sm">
                      Verify the extracted information and save it to your inventory
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Image</CardTitle>
              <CardDescription>Upload a clear image of your medicine label or prescription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                <ScanLine className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">Drag and drop an image here, or click to browse</p>
                <Button className="mx-auto">
                  <Upload className="mr-2 h-4 w-4" /> Choose File
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Check size={16} />
                  <span>Supports JPG, PNG, and PDF formats</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">For best results:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Ensure good lighting</li>
                      <li>Keep the image in focus</li>
                      <li>Capture the entire label</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Sample OCR Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Original Medicine Label"
                className="w-full h-auto rounded mb-3"
              />
              <p className="text-center font-medium">Original Label</p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-blue-600" />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-gray-100 p-4 rounded h-[200px] mb-3 flex flex-col justify-center">
                <p className="font-medium">Extracted Data:</p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>
                    <span className="font-medium">Name:</span> Paracetamol 500mg
                  </li>
                  <li>
                    <span className="font-medium">Type:</span> Tablet
                  </li>
                  <li>
                    <span className="font-medium">Quantity:</span> 20 tablets
                  </li>
                  <li>
                    <span className="font-medium">Expiry:</span> 12/2025
                  </li>
                  <li>
                    <span className="font-medium">Dosage:</span> 1-2 tablets every 4-6 hours
                  </li>
                </ul>
              </div>
              <p className="text-center font-medium">Extracted Information</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to ="/add-medicine">
                Try OCR Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-2">How accurate is the OCR technology?</h3>
              <p className="text-gray-700">
                Our OCR technology has a high accuracy rate, but we recommend reviewing the extracted information before
                saving it to your inventory. Factors like image quality and lighting can affect accuracy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">What information can be extracted?</h3>
              <p className="text-gray-700">
                The OCR can extract medicine names, dosage information, expiry dates, batch numbers, and usage
                instructions depending on what's visible in the image.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Is my data secure?</h3>
              <p className="text-gray-700">
                Yes, all uploaded images and extracted data are securely processed and stored. We do not share your
                medical information with third parties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I edit the extracted information?</h3>
              <p className="text-gray-700">
                Yes, after the OCR extracts the information, you can review and edit any details before saving it to
                your inventory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

