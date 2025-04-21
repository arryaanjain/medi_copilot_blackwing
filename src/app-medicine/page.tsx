import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Plus, Upload } from "lucide-react"
import { Link }  from "react-router-dom"
import React from "react"

export default function AddMedicinePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Add Non-Prescribed Medicine</h1>
          <p className="text-gray-600">
            Add over-the-counter medications, balms, supplements, and other non-prescription items
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Medicine Details</CardTitle>
            <CardDescription>
              Enter the details of your non-prescribed medicine or use the OCR feature to scan the label
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Medicine Name*
                  </label>
                  <Input id="name" placeholder="e.g., Paracetamol, Ibuprofen" required />
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
                      <SelectItem value="balm">Balm</SelectItem>
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

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea id="description" placeholder="Add any additional details about this medicine" rows={3} />
              </div>

              <div>
                <label htmlFor="usage" className="block text-sm font-medium mb-1">
                  Usage Instructions
                </label>
                <Textarea id="usage" placeholder="How and when to use this medicine" rows={2} />
              </div>

              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 mb-2">Upload an image of the medicine or its packaging</p>
                <Button variant="outline" size="sm" className="mx-auto">
                  Choose File
                </Button>
                <p className="mt-2 text-xs text-gray-500">
                  Or{" "}
                  <Link to ="/ocr" className="text-blue-600 hover:underline">
                    use OCR
                  </Link>{" "}
                  to scan the label
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">
                  <Plus className="mr-2 h-4 w-4" /> Add Medicine
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

