import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Plus, Upload, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import React from "react"

export default function AddTreatmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Add Prescribed Treatment</h1>
          <p className="text-gray-600">Add doctor-prescribed medications and treatment plans</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Prescription Details</CardTitle>
            <CardDescription>
              Enter the details of your prescribed medicine or use the OCR feature to scan the prescription
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Medicine Name*
                  </label>
                  <Input id="name" placeholder="e.g., Amoxicillin, Lisinopril" required />
                </div>
                <div className="w-full md:w-1/3">
                  <label htmlFor="type" className="block text-sm font-medium mb-1">
                    Type*
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="capsule">Capsule</SelectItem>
                      <SelectItem value="syrup">Syrup</SelectItem>
                      <SelectItem value="injection">Injection</SelectItem>
                      <SelectItem value="drops">Drops</SelectItem>
                      <SelectItem value="inhaler">Inhaler</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                    Quantity*
                  </label>
                  <div className="flex gap-2">
                    <Input id="quantity" type="number" min="1" placeholder="e.g., 30" required />
                    <Select>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tablets">Tablets</SelectItem>
                        <SelectItem value="capsules">Capsules</SelectItem>
                        <SelectItem value="ml">ml</SelectItem>
                        <SelectItem value="g">g</SelectItem>
                        <SelectItem value="pieces">Pieces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                    Expiry Date*
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="doctor" className="block text-sm font-medium mb-1">
                    Prescribing Doctor
                  </label>
                  <div className="relative">
                    <Input id="doctor" placeholder="Doctor's name" />
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="prescription-date" className="block text-sm font-medium mb-1">
                    Prescription Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <label htmlFor="dosage" className="block text-sm font-medium mb-1">
                  Dosage Instructions*
                </label>
                <Textarea id="dosage" placeholder="e.g., Take one tablet twice daily after meals" rows={2} required />
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium mb-1">
                  Treatment Duration
                </label>
                <div className="flex items-center gap-2">
                  <Input id="duration" type="number" min="1" placeholder="e.g., 7" />
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="reminder" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="reminder"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Set Reminders
                  </label>
                  <p className="text-sm text-gray-500">Get notifications for dosage times</p>
                </div>
              </div>

              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 mb-2">Upload an image of the prescription or medicine</p>
                <Button variant="outline" size="sm" className="mx-auto">
                  Choose File
                </Button>
                <p className="mt-2 text-xs text-gray-500">
                  Or{" "}
                  <Link to ="/ocr" className="text-blue-600 hover:underline">
                    use OCR
                  </Link>{" "}
                  to scan the prescription
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">
                  <Plus className="mr-2 h-4 w-4" /> Add Prescription
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

